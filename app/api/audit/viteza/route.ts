import {
  auditEnabled,
  homepageOf,
  normalizeSiteUrl,
  parseAuditRequest,
  sameOrigin,
} from "../../../test-vizibilitate/audit/checks";

export const runtime = "nodejs";
export const maxDuration = 60;

const PAGESPEED = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

type PageSpeed = {
  lighthouseResult?: {
    categories?: { performance?: { score?: number | null } };
    audits?: Record<string, { numericValue?: number }>;
  };
};

export async function POST(request: Request) {
  if (!auditEnabled(process.env)) return new Response(null, { status: 404 });
  if (!sameOrigin(request.headers.get("origin"), request.headers.get("host"))) {
    return Response.json({ ok: false, reason: "origin" }, { status: 403 });
  }
  const site = normalizeSiteUrl(parseAuditRequest(await request.text()) ?? "");
  if (!site) return Response.json({ ok: false, reason: "invalid" }, { status: 400 });

  // La Google pleacă doar adresa site-ului, niciodată datele omului care face auditul
  const params = new URLSearchParams({ url: homepageOf(site), strategy: "mobile", category: "performance" });
  if (process.env.PAGESPEED_API_KEY) params.set("key", process.env.PAGESPEED_API_KEY);

  try {
    const res = await fetch(`${PAGESPEED}?${params}`, { signal: AbortSignal.timeout(55_000), cache: "no-store" });
    if (!res.ok) {
      return Response.json({ ok: false, reason: res.status === 429 ? "quota" : "pagespeed" }, { status: 502 });
    }
    const data = (await res.json()) as PageSpeed;
    const score = data.lighthouseResult?.categories?.performance?.score;
    const lcpMs = data.lighthouseResult?.audits?.["largest-contentful-paint"]?.numericValue;
    if (typeof score !== "number") return Response.json({ ok: false, reason: "pagespeed" }, { status: 502 });
    return Response.json({
      ok: true,
      performance: Math.round(score * 100),
      lcp: typeof lcpMs === "number" ? Math.round(lcpMs / 100) / 10 : null,
    });
  } catch (e) {
    // AbortSignal.timeout respinge cu un DOMException numit „TimeoutError”
    const timeout = typeof e === "object" && e !== null && (e as { name?: unknown }).name === "TimeoutError";
    return Response.json({ ok: false, reason: timeout ? "timeout" : "pagespeed" }, { status: timeout ? 504 : 502 });
  }
}

// Ruta răspunde doar la POST de pe pagina auditului
export function GET() {
  return new Response(null, { status: 404 });
}
