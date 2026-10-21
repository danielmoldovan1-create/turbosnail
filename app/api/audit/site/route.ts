import { lookup } from "node:dns";
import http from "node:http";
import https from "node:https";
import type { LookupFunction } from "node:net";
import zlib from "node:zlib";
import {
  USER_AGENT,
  auditEnabled,
  checksFor,
  homepageOf,
  isPublicIp,
  normalizeSiteUrl,
  parseAuditRequest,
  sameOrigin,
  urlAllowed,
} from "../../../test-vizibilitate/audit/checks";

export const runtime = "nodejs";
export const maxDuration = 20;

const TIMEOUT_MS = 10_000;
const MAX_BYTES = 2 * 1024 * 1024;
const MAX_REDIRECTS = 5;

type Reason = "dns" | "blocked" | "timeout" | "fetch";

class AuditError extends Error {
  reason: Reason;
  constructor(reason: Reason) {
    super(reason);
    this.reason = reason;
  }
}

// Rezolvă domeniul o singură dată și refuză orice adresă care nu e publică. Conexiunea se face
// exact pe IP-ul verificat, așa că un DNS schimbat între verificare și conectare nu ajunge în rețeaua internă.
const safeLookup: LookupFunction = (hostname, options, callback) => {
  lookup(hostname, { all: true, family: options.family }, (err, addresses) => {
    if (err) return callback(err, "", 0);
    if (!addresses.length || !addresses.every((a) => isPublicIp(a.address))) {
      return callback(Object.assign(new Error("Adresa nu e publică"), { code: "EBLOCKED" }), "", 0);
    }
    if (options.all) return callback(null, addresses);
    callback(null, addresses[0].address, addresses[0].family);
  });
};

type Hop = { status: number; location?: string; body: Buffer; contentType: string };

/** O singură cerere GET: fără redirecturi, cel mult 2 MB de HTML, până la termenul comun. */
function get(url: URL, deadline: number): Promise<Hop> {
  return new Promise((resolve, reject) => {
    const remaining = deadline - Date.now();
    if (remaining <= 0) return reject(new AuditError("timeout"));
    let settled = false;
    const fail = (e: unknown) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      reject(e);
    };
    const client = url.protocol === "https:" ? https : http;
    const req = client.request(
      url,
      {
        method: "GET",
        agent: false,
        lookup: safeLookup,
        headers: {
          "User-Agent": USER_AGENT,
          Accept: "text/html,application/xhtml+xml;q=0.9,*/*;q=0.5",
          "Accept-Encoding": "gzip, br",
          "Accept-Language": "ro-RO,ro;q=0.9,en;q=0.5",
        },
      },
      (res) => {
        const status = res.statusCode ?? 0;
        const contentType = String(res.headers["content-type"] ?? "");
        res.on("error", fail);
        if (status >= 300 && status < 400 && res.headers.location) {
          settled = true;
          clearTimeout(timer);
          resolve({ status, location: res.headers.location, body: Buffer.alloc(0), contentType });
          req.destroy();
          return;
        }
        const encoding = String(res.headers["content-encoding"] ?? "").toLowerCase();
        const stream =
          encoding === "gzip" || encoding === "x-gzip"
            ? res.pipe(zlib.createGunzip())
            : encoding === "br"
              ? res.pipe(zlib.createBrotliDecompress())
              : encoding === "deflate"
                ? res.pipe(zlib.createInflate())
                : res;
        const chunks: Buffer[] = [];
        let size = 0;
        const done = () => {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          resolve({ status, body: Buffer.concat(chunks), contentType });
          req.destroy();
        };
        stream.on("data", (chunk: Buffer) => {
          if (settled) return;
          const room = MAX_BYTES - size;
          chunks.push(chunk.length > room ? chunk.subarray(0, room) : chunk);
          size += Math.min(chunk.length, room);
          // După 2 MB ne oprim și analizăm ce am primit: titlul, meta și antetul sunt la început
          if (size >= MAX_BYTES) done();
        });
        stream.on("end", done);
        stream.on("error", fail);
      },
    );
    const timer = setTimeout(() => req.destroy(new AuditError("timeout")), remaining);
    req.on("error", fail);
    req.end();
  });
}

function decodeBody(body: Buffer, contentType: string): string {
  const fromHeader = /charset\s*=\s*["']?([\w-]+)/i.exec(contentType)?.[1];
  const fromMeta = /<meta[^>]+charset\s*=\s*["']?([\w-]+)/i.exec(body.subarray(0, 4096).toString("latin1"))?.[1];
  for (const label of [fromHeader, fromMeta]) {
    if (!label) continue;
    try {
      return new TextDecoder(label).decode(body);
    } catch {
      // etichetă necunoscută: încercăm următoarea, apoi UTF-8
    }
  }
  return new TextDecoder("utf-8").decode(body);
}

/** Pagina principală, cu cel mult 5 redirecturi; fiecare adresă nouă trece prin aceleași verificări. */
async function fetchPage(start: URL, deadline: number) {
  let url = start;
  for (let redirects = 0; ; redirects++) {
    if (!urlAllowed(url)) throw new AuditError("blocked");
    const hop = await get(url, deadline);
    if (hop.location === undefined) {
      return { finalUrl: url, status: hop.status, html: decodeBody(hop.body, hop.contentType) };
    }
    if (redirects >= MAX_REDIRECTS) throw new AuditError("fetch");
    try {
      url = new URL(hop.location, url);
    } catch {
      throw new AuditError("fetch");
    }
  }
}

function codeOf(e: unknown): string {
  return typeof e === "object" && e !== null && "code" in e ? String((e as { code: unknown }).code) : "";
}

function reasonOf(e: unknown): Reason {
  if (e instanceof AuditError) return e.reason;
  const code = codeOf(e);
  if (code === "ENOTFOUND" || code === "ENODATA") return "dns";
  if (code === "EBLOCKED") return "blocked";
  if (code === "ETIMEDOUT") return "timeout";
  return "fetch";
}

// Conexiune refuzată sau certificat invalid pe https: site-ul poate merge totuși pe http
function worthHttpRetry(e: unknown): boolean {
  const code = codeOf(e);
  return /^(ECONNREFUSED|ECONNRESET|EPROTO|EHOSTUNREACH)$/.test(code) || /CERT|SSL|TLS/.test(code);
}

const STATUS: Record<Reason, number> = { dns: 422, blocked: 400, timeout: 504, fetch: 502 };

export async function POST(request: Request) {
  if (!auditEnabled(process.env)) return new Response(null, { status: 404 });
  if (!sameOrigin(request.headers.get("origin"), request.headers.get("host"))) {
    return Response.json({ ok: false, reason: "origin" }, { status: 403 });
  }
  const site = normalizeSiteUrl(parseAuditRequest(await request.text()) ?? "");
  if (!site) return Response.json({ ok: false, reason: "invalid" }, { status: 400 });

  const start = new URL(homepageOf(site));
  const deadline = Date.now() + TIMEOUT_MS;
  try {
    let page: Awaited<ReturnType<typeof fetchPage>>;
    try {
      page = await fetchPage(start, deadline);
    } catch (e) {
      if (start.protocol !== "https:" || !worthHttpRetry(e)) throw e;
      page = await fetchPage(new URL(`http://${start.hostname}/`), deadline);
    }
    return Response.json({
      ok: true,
      finalUrl: page.finalUrl.href,
      status: page.status,
      checks: checksFor(page.html, page.finalUrl.href, page.status),
    });
  } catch (e) {
    const reason = reasonOf(e);
    return Response.json({ ok: false, reason }, { status: STATUS[reason] });
  }
}

// Ruta răspunde doar la POST de pe pagina auditului
export function GET() {
  return new Response(null, { status: 404 });
}
