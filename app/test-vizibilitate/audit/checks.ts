// Verificările auditului de site și scorul zonei „Site și conversie”.
// Fără importuri din Node: modulul e folosit și în browser (texte, scor), și în rutele API.

export const USER_AGENT = "TurboSnailAudit/1.0 (+https://turbosnail.ro)";

export const NICHES = ["Clinică dentară", "Service auto", "Piese auto", "Salon sau estetică", "Altă afacere locală"];

export type CheckId = "https" | "viewport" | "tel" | "phone" | "schema" | "meta" | "cta";

// true = bifat, false = lipsește, null = n-am putut verifica acum
export type CheckValues = Record<CheckId, boolean | null>;

export const CHECKS: { id: CheckId; label: string; why: string; fix: string }[] = [
  {
    id: "https",
    label: "Site securizat (HTTPS)",
    why: "Fără HTTPS, browserul scrie „Nesigur” lângă adresă, iar datele trimise prin formulare nu sunt protejate.",
    fix: "Activează certificatul SSL gratuit din panoul firmei de găzduire și pune redirecționare automată de la http la https.",
  },
  {
    id: "viewport",
    label: "Afișare corectă pe telefon",
    why: "Fără eticheta viewport, pe telefon pagina apare micșorată și textul e greu de citit.",
    fix: 'Adaugă în secțiunea <head> a paginii: <meta name="viewport" content="width=device-width, initial-scale=1">.',
  },
  {
    id: "tel",
    label: "Număr pe care apeși ca să suni",
    why: "Pe telefon, clientul te sună cu o singură atingere, fără să copieze numărul.",
    fix: 'Fă din numărul de telefon un link de forma <a href="tel:+40XXXXXXXXX">, cu numărul tău în locul lui X.',
  },
  {
    id: "phone",
    label: "Număr de telefon scris pe pagină",
    why: "Cine caută un serviciu local vrea să vadă imediat un număr la care să sune.",
    fix: "Scrie numărul de telefon ca text în partea de sus și în subsolul paginii, nu doar într-o imagine.",
  },
  {
    id: "schema",
    label: "Date structurate pentru Google",
    why: "Datele structurate (JSON-LD) îi spun lui Google ce fel de afacere ești, unde ești și cum te contactează.",
    fix: "Adaugă un bloc JSON-LD de tip LocalBusiness sau cu tipul exact al afacerii (de exemplu Dentist sau AutoRepair), cu numele, adresa, telefonul și programul.",
  },
  {
    id: "meta",
    label: "Titlu și descriere pentru Google",
    why: "Titlul și descrierea sunt de obicei primul lucru pe care oamenii îl citesc despre tine în Google.",
    fix: "Scrie un titlu cu serviciul și orașul și o descriere de una sau două fraze despre ce oferi.",
  },
  {
    id: "cta",
    label: "Buton de programare sau contact",
    why: "Dacă vizitatorul nu vede repede cum face o programare, se întoarce în Google și alege altă firmă.",
    fix: "Pune sus pe pagină un buton vizibil, de exemplu „Programează-te” sau „Sună acum”.",
  },
];

export const SPEED = {
  label: "Viteza pe mobil",
  why: "Pe telefon, o pagină care se încarcă greu pierde vizitatori înainte să vadă ce oferi.",
  fix: "Comprimă imaginile mari de pe prima pagină și scoate scripturile sau pluginurile pe care nu le mai folosești.",
};

// Pragul recomandat de Google pentru LCP, verificat pe sursă: https://web.dev/articles/lcp
export const LCP_GOOD_SECONDS = 2.5;

const SPEED_WEIGHT = 0.4;
const CHECKS_WEIGHT = 0.6;

/**
 * Scorul zonei „Site și conversie”, 0-100: viteza (scorul PageSpeed pe mobil) are 40%,
 * cele 7 verificări au împreună 60%, în părți egale. Ce n-am putut verifica nu intră în calcul,
 * iar ponderile rămase se rescalează. Întoarce null când n-avem nimic de calculat.
 */
export function siteScore(checks: Partial<CheckValues> | null, speed: number | null): number | null {
  let points = 0;
  let weight = 0;
  if (speed !== null) {
    points += SPEED_WEIGHT * (Math.min(Math.max(speed, 0), 100) / 100);
    weight += SPEED_WEIGHT;
  }
  const each = CHECKS_WEIGHT / CHECKS.length;
  for (const c of CHECKS) {
    const v = checks?.[c.id];
    if (typeof v !== "boolean") continue;
    if (v) points += each;
    weight += each;
  }
  return weight > 0 ? Math.round((points / weight) * 100) : null;
}

/** Auditul merge pe preview și în dezvoltare; în producție doar cu AUDIT_ENABLED=true. */
export function auditEnabled(env: Record<string, string | undefined>): boolean {
  return env.VERCEL_ENV === "preview" || env.VERCEL_ENV === "development" || env.AUDIT_ENABLED === "true";
}

/** Cererile vin doar de pe pagina noastră; fără antetul Origin (curl, teste) le lăsăm să treacă. */
export function sameOrigin(origin: string | null, host: string | null): boolean {
  if (!origin) return true;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

/** Corpul cererii către rutele API: {"url": "..."}, cel mult 4 KB. */
export function parseAuditRequest(body: string): string | null {
  if (body.length > 4096) return null;
  try {
    const data: unknown = JSON.parse(body);
    const url = data && typeof data === "object" ? (data as { url?: unknown }).url : null;
    return typeof url === "string" ? url : null;
  } catch {
    return null;
  }
}

/* ---------- Adrese ---------- */

function ipv4ToInt(ip: string): number | null {
  const parts = ip.split(".");
  if (parts.length !== 4) return null;
  let n = 0;
  for (const p of parts) {
    if (!/^\d{1,3}$/.test(p) || Number(p) > 255) return null;
    n = n * 256 + Number(p);
  }
  return n;
}

// Rețele IPv4 care nu sunt internet public: locale, private, rezervate, de documentație, multicast
const PRIVATE_V4: [string, number][] = [
  ["0.0.0.0", 8],
  ["10.0.0.0", 8],
  ["100.64.0.0", 10],
  ["127.0.0.0", 8],
  ["169.254.0.0", 16],
  ["172.16.0.0", 12],
  ["192.0.0.0", 24],
  ["192.0.2.0", 24],
  ["192.88.99.0", 24],
  ["192.168.0.0", 16],
  ["198.18.0.0", 15],
  ["198.51.100.0", 24],
  ["203.0.113.0", 24],
  ["224.0.0.0", 4],
  ["240.0.0.0", 4],
];

function inV4Range(n: number, base: string, bits: number): boolean {
  const start = ipv4ToInt(base) as number;
  return n >= start && n < start + 2 ** (32 - bits);
}

/** IPv6 în 8 grupuri de 16 biți, inclusiv forma cu IPv4 la final (::ffff:1.2.3.4). */
function parseIpv6(input: string): number[] | null {
  let s = input.toLowerCase();
  if (s.startsWith("[") && s.endsWith("]")) s = s.slice(1, -1);
  if (!s.includes(":") || s.includes("%")) return null;
  let v4: number[] = [];
  const last = s.slice(s.lastIndexOf(":") + 1);
  if (last.includes(".")) {
    const n = ipv4ToInt(last);
    if (n === null) return null;
    v4 = [Math.floor(n / 65536), n % 65536];
    s = s.slice(0, s.length - last.length);
    if (!s.endsWith("::")) s = s.slice(0, -1);
  }
  const halves = s.split("::");
  if (halves.length > 2) return null;
  const head = halves[0] ? halves[0].split(":") : [];
  const tail = halves.length === 2 && halves[1] ? halves[1].split(":") : [];
  const missing = 8 - head.length - tail.length - v4.length;
  if (halves.length === 2 ? missing < 1 : missing !== 0) return null;
  const groups = [...head, ...Array<string>(halves.length === 2 ? missing : 0).fill("0"), ...tail];
  if (!groups.every((g) => /^[0-9a-f]{1,4}$/.test(g))) return null;
  return [...groups.map((g) => parseInt(g, 16)), ...v4];
}

/** true doar pentru adrese de internet public; cele locale, private și rezervate întorc false. */
export function isPublicIp(ip: string): boolean {
  const v4 = ipv4ToInt(ip);
  if (v4 !== null) return !PRIVATE_V4.some(([base, bits]) => inV4Range(v4, base, bits));
  const g = parseIpv6(ip);
  if (!g) return false;
  // ::, ::1 și adresele IPv4 scrise ca IPv6 (::ffff:a.b.c.d, ::a.b.c.d)
  if (g.slice(0, 5).every((x) => x === 0) && (g[5] === 0 || g[5] === 0xffff)) {
    if (g[5] === 0 && g[6] === 0) return false;
    return isPublicIp(`${g[6] >> 8}.${g[6] & 255}.${g[7] >> 8}.${g[7] & 255}`);
  }
  if ((g[0] & 0xe000) !== 0x2000) return false; // în afara 2000::/3: locale, ULA, multicast, NAT64
  if (g[0] === 0x2001 && (g[1] === 0 || g[1] === 0x0db8)) return false; // Teredo, documentație
  if (g[0] === 0x2002) return false; // 6to4
  return true;
}

/** Refuză localhost, domeniile interne și IP-urile care nu sunt publice, înainte de orice cerere. */
export function hostAllowed(hostname: string): boolean {
  const h = hostname.toLowerCase().replace(/\.$/, "");
  if (!h || h === "localhost" || /\.(localhost|local|internal|lan|home\.arpa)$/.test(h)) return false;
  if (h.startsWith("[") || ipv4ToInt(h) !== null) return isPublicIp(h);
  return h.includes(".");
}

/** Doar http și https, fără utilizator și parolă, doar pe porturile 80 și 443. */
export function urlAllowed(url: URL): boolean {
  if (url.protocol !== "http:" && url.protocol !== "https:") return false;
  if (url.username || url.password) return false;
  if (url.port && url.port !== "80" && url.port !== "443") return false;
  return hostAllowed(url.hostname);
}

/** Adresa scrisă de om devine URL; fără schemă se pune https://. Orice altceva decât http(s) întoarce null. */
export function normalizeSiteUrl(input: string): URL | null {
  const raw = input.trim();
  if (!raw || raw.length > 2048 || /\s/.test(raw)) return null;
  const hasScheme = /^[a-z][a-z0-9+.-]*:\/\//i.test(raw);
  // „javascript:”, „mailto:” și altele fără // sunt refuzate; „firma.ro:443” rămâne o adresă
  if (!hasScheme && /^[a-z][a-z0-9+.-]*:(?!\d+(?:[/?#]|$))/i.test(raw)) return null;
  let url: URL;
  try {
    url = new URL(hasScheme ? raw : `https://${raw}`);
  } catch {
    return null;
  }
  return urlAllowed(url) ? url : null;
}

/** Pagina principală: aceeași schemă și același domeniu, calea „/”. */
export function homepageOf(url: URL): string {
  return `${url.protocol}//${url.host}/`;
}

/* ---------- Analiza paginii ---------- */

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  acirc: "â",
  Acirc: "Â",
  icirc: "î",
  Icirc: "Î",
  abreve: "ă",
  Abreve: "Ă",
};

function decodeEntities(s: string): string {
  return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e: string) => {
    if (e[0] === "#") {
      const code = e[1] === "x" || e[1] === "X" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      return code > 0 && code < 0x110000 ? String.fromCodePoint(code) : m;
    }
    return ENTITIES[e] ?? m;
  });
}

function attributes(tag: string): Record<string, string> {
  const out: Record<string, string> = {};
  const re = /([^\s"'<>/=]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(tag))) out[m[1].toLowerCase()] = decodeEntities(m[2] ?? m[3] ?? m[4] ?? "");
  return out;
}

function visibleText(html: string): string {
  const withoutCode = html.replace(/<(script|style|template|svg)\b[\s\S]*?<\/\1\s*>/gi, " ");
  return decodeEntities(withoutCode.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ");
}

/** Litere mici, fără diacritice: „Programează-te” devine „programeaza-te”. */
function plain(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

// Mobil și fix: 07xx, 02xx, 03xx (10 cifre), sau +40 / 0040 urmat de 9 cifre, cu separatori obișnuiți.
// Fără lookbehind: modulul ajunge și în browser, iar Safari mai vechi de 16.4 nu-l suportă.
const RO_PHONE = /(?:^|[^\d+])(?:(?:\+|00)\s?40\s?(?:\(0\)\s?)?|\(?0)\(?[237](?:[\s./()-]{0,2}\d){8}(?!\d)/;

// programare, programări, programează-te, rezervă, rezervare, sună, sunați, contact, contactează-ne
const CTA_WORDS = /\b(programar[a-z]*|programeaz[a-z]*|rezerv[a-z]*|suna|sunati|contact[a-z]*)\b/;

// LocalBusiness, subtipurile lui cele mai folosite și Organization
const BUSINESS_TYPES = new Set([
  "LocalBusiness", "Organization", "Corporation", "OnlineBusiness", "OnlineStore",
  "MedicalBusiness", "MedicalClinic", "MedicalOrganization", "Dentist", "Physician", "Pharmacy", "Optician",
  "Hospital", "DiagnosticLab", "VeterinaryCare", "Physiotherapy",
  "AutomotiveBusiness", "AutoRepair", "AutoPartsStore", "AutoBodyShop", "AutoDealer", "AutoRental", "AutoWash",
  "GasStation", "MotorcycleDealer", "MotorcycleRepair", "TireShop",
  "HealthAndBeautyBusiness", "BeautySalon", "DaySpa", "HairSalon", "NailSalon", "HealthClub", "TattooParlor",
  "Store", "BikeStore", "BookStore", "ClothingStore", "ComputerStore", "ConvenienceStore", "DepartmentStore",
  "ElectronicsStore", "Florist", "FurnitureStore", "GardenStore", "GroceryStore", "HardwareStore", "HobbyShop",
  "HomeGoodsStore", "JewelryStore", "LiquorStore", "MobilePhoneStore", "MusicStore", "OfficeEquipmentStore",
  "OutletStore", "PetStore", "ShoeStore", "SportingGoodsStore", "ToyStore", "WholesaleStore",
  "ProfessionalService", "LegalService", "Attorney", "Notary", "FinancialService", "AccountingService",
  "InsuranceAgency", "RealEstateAgent", "TravelAgency", "EmploymentAgency", "ChildCare", "DryCleaningOrLaundry",
  "HomeAndConstructionBusiness", "Electrician", "GeneralContractor", "HVACBusiness", "HousePainter", "Locksmith",
  "MovingCompany", "Plumber", "RoofingContractor",
  "FoodEstablishment", "Restaurant", "CafeOrCoffeeShop", "Bakery", "BarOrPub", "FastFoodRestaurant", "IceCreamShop",
  "LodgingBusiness", "Hotel", "Motel", "Hostel", "BedAndBreakfast", "Resort",
  "SportsActivityLocation", "ExerciseGym", "SportsClub", "EntertainmentBusiness",
]);

/** Tipurile de la primul nivel și din @graph; „https://schema.org/Dentist” devine „Dentist”. */
function collectTypes(node: unknown, out: string[], depth = 0): void {
  if (depth > 8 || node === null || typeof node !== "object") return;
  if (Array.isArray(node)) {
    for (const item of node) collectTypes(item, out, depth + 1);
    return;
  }
  const obj = node as Record<string, unknown>;
  const t = obj["@type"];
  for (const v of Array.isArray(t) ? t : [t]) if (typeof v === "string") out.push(v.replace(/^.*[/:#]/, ""));
  if (obj["@graph"]) collectTypes(obj["@graph"], out, depth + 1);
}

function hasBusinessSchema(html: string): boolean {
  const types: string[] = [];
  const re = /<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    if (!/application\/ld\+json/i.test(attributes(m[1]).type ?? "")) continue;
    const json = m[2].replace(/<!\[CDATA\[|\]\]>/g, "").trim();
    try {
      collectTypes(JSON.parse(json), types);
    } catch {
      // JSON-LD invalid: Google îl ignoră, deci nici noi nu-l numărăm
    }
  }
  return types.some((t) => BUSINESS_TYPES.has(t));
}

function hasContactCta(html: string): boolean {
  const re = /<(a|button)\b([^>]*)>([\s\S]*?)<\/\1\s*>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const a = attributes(m[2]);
    const text = [visibleText(m[3]), a.href, a["aria-label"], a.title].filter(Boolean).join(" ");
    if (CTA_WORDS.test(plain(text))) return true;
  }
  for (const input of html.match(/<input\b[^>]*>/gi) ?? []) {
    const a = attributes(input);
    if (/^(submit|button)$/i.test(a.type ?? "") && CTA_WORDS.test(plain(a.value ?? ""))) return true;
  }
  return false;
}

/** Pagini de protecție anti-bot (Cloudflare, SiteGround etc.): nu e site-ul real, deci nu-l judecăm. */
export function looksBlocked(html: string): boolean {
  return /cf-browser-verification|challenge-platform|<title>\s*(just a moment|attention required)|sgcaptcha|checking your browser/i.test(
    html.slice(0, 20000),
  );
}

/** Cele 7 verificări pe HTML-ul paginii principale. */
export function analyzeHtml(html: string, finalUrl: string): CheckValues {
  const clean = html.replace(/<!--[\s\S]*?-->/g, " ");
  const metas = (clean.match(/<meta\b[^>]*>/gi) ?? []).map(attributes);
  const meta = (name: string) => metas.find((a) => (a.name ?? "").toLowerCase() === name)?.content?.trim() ?? "";
  const head = clean.split(/<\/head\s*>/i)[0];
  const title = decodeEntities(/<title\b[^>]*>([\s\S]*?)<\/title\s*>/i.exec(head)?.[1] ?? "").trim();
  const body = /<body\b[\s\S]*$/i.exec(clean)?.[0] ?? clean;
  return {
    https: finalUrl.startsWith("https://"),
    viewport: meta("viewport") !== "",
    tel: /<a\b[^>]*\bhref\s*=\s*["']?\s*tel:[^"'>]*\d/i.test(clean),
    phone: RO_PHONE.test(visibleText(body)),
    schema: hasBusinessSchema(clean),
    meta: title !== "" && meta("description") !== "",
    cta: hasContactCta(body),
  };
}

/** Rezultatul pentru răspunsul primit: dacă nu e pagina reală (eroare, anti-bot), doar HTTPS rămâne verificat. */
export function checksFor(html: string, finalUrl: string, status: number): CheckValues {
  if (status >= 200 && status < 300 && !looksBlocked(html)) return analyzeHtml(html, finalUrl);
  return { https: finalUrl.startsWith("https://"), viewport: null, tel: null, phone: null, schema: null, meta: null, cta: null };
}
