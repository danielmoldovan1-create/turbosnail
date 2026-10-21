"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { CHECKS, LCP_GOOD_SECONDS, NICHES, SPEED, homepageOf, normalizeSiteUrl, siteScore, type CheckValues } from "./checks";

type SiteResult = { ok: true; finalUrl: string; checks: CheckValues } | { ok: false; reason: string };
type SpeedResult = { ok: true; performance: number; lcp: number | null } | { ok: false; reason: string };
type Lead = { site: string; business: string; city: string; niche: string; firstName: string; email: string; marketing: boolean };

const WEB3FORMS_KEY = "f2d92ef1-727d-47b9-bbe2-f30548f4c010";

async function post<T>(path: string, url: string, signal: AbortSignal): Promise<T> {
  const res = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
    signal,
  });
  return (await res.json()) as T;
}

function fmt(n: number) {
  return n.toLocaleString("ro-RO", { maximumFractionDigits: 1 });
}

function hostOf(url: string) {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

async function sendLead(lead: Lead, site: SiteResult, speed: SpeedResult, score: number | null) {
  const scoreText = score === null ? "fără scor" : `${score}/100`;
  const checks = site.ok ? site.checks : null;
  const lines = [
    `Site: ${site.ok ? site.finalUrl : lead.site}`,
    `Scor Site și conversie: ${scoreText}`,
    speed.ok
      ? `${SPEED.label}: ${speed.performance}/100${speed.lcp !== null ? `, LCP ${fmt(speed.lcp)} s` : ""}`
      : `${SPEED.label}: n-am putut măsura`,
    ...CHECKS.map((c) => `${c.label}: ${checks?.[c.id] === true ? "DA" : checks?.[c.id] === false ? "NU" : "n-am putut verifica"}`),
  ];
  if (!site.ok) lines.push(`Eroare la descărcarea site-ului: ${site.reason}`);
  try {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `[Audit site] ${lead.business || hostOf(lead.site)}: ${scoreText}`,
        from_name: "Audit site turbosnail.ro",
        formular: "Audit site",
        name: lead.firstName || "-",
        ...(lead.email ? { email: lead.email } : {}),
        afacere: lead.business || "-",
        site: lead.site,
        oras: lead.city || "-",
        nisa: lead.niche || "-",
        scor: scoreText,
        acord_marketing: lead.marketing ? "DA: poate primi emailuri de marketing" : "NU: doar contact legat de rezultat",
        rezultate: lines.join("\n"),
      }),
    });
  } catch {
    // Rezultatul e deja pe ecran; un lead netrimis nu strică pagina
  }
}

function CheckCard({ label, why, fix, value }: { label: string; why: string; fix: string; value: boolean | null | undefined }) {
  // undefined: încă se verifică; null: n-am putut verifica acum
  const status =
    value === true ? ["ok", "Bifat"] : value === false ? ["no", "Lipsește"] : value === null ? ["unk", "N-am putut verifica acum"] : ["unk", "Se verifică..."];
  return (
    <div className="card">
      {value === undefined ? (
        <span className="spinner" aria-hidden="true" style={{ margin: 5 }} />
      ) : (
        <span className={`badge ${status[0]}`} aria-hidden="true">{value === true ? "✓" : value === false ? "✕" : "?"}</span>
      )}
      <div className="card-body">
        <p className="card-title">{label}</p>
        <p className={`card-status ${status[0]}`}>{status[1]}</p>
        <p className="card-text">{why}</p>
        {value === false && (
          <p className="card-fix">
            <strong>Reparația de 15 minute:</strong> {fix}
          </p>
        )}
      </div>
    </div>
  );
}

function SpeedCard({ result }: { result: SpeedResult | null }) {
  if (result === null) {
    return (
      <div className="card">
        <span className="spinner" aria-hidden="true" style={{ margin: 5 }} />
        <div className="card-body">
          <p className="card-title">{SPEED.label}</p>
          <p className="card-status unk">Se măsoară...</p>
          <p className="card-text">Măsurăm viteza cu Google PageSpeed Insights. Poate dura până la un minut.</p>
        </div>
      </div>
    );
  }
  if (!result.ok) return <CheckCard label={SPEED.label} why={SPEED.why} fix={SPEED.fix} value={null} />;
  const good = result.lcp === null ? null : result.lcp <= LCP_GOOD_SECONDS;
  return (
    <div className="card">
      <span className={`badge ${good === true ? "ok" : good === false ? "no" : "unk"}`} aria-hidden="true">
        {good === true ? "✓" : good === false ? "✕" : "?"}
      </span>
      <div className="card-body">
        <p className="card-title">{SPEED.label}</p>
        <p className={`card-status ${good === true ? "ok" : good === false ? "no" : "unk"}`}>
          {good === true ? "Se încarcă repede" : good === false ? "Se încarcă greu" : "Măsurată"}
        </p>
        <p className="card-text">
          Scor Google PageSpeed pe mobil: {result.performance}/100.
          {result.lcp !== null && (
            <>
              {" "}Conținutul principal apare în {fmt(result.lcp)} secunde, iar Google recomandă cel mult {fmt(LCP_GOOD_SECONDS)} secunde (sursa:{" "}
              <a href="https://web.dev/articles/lcp" target="_blank" rel="noopener">web.dev</a>).
            </>
          )}
        </p>
        <p className="card-text">{SPEED.why}</p>
        {good === false && (
          <p className="card-fix">
            <strong>Reparația de 15 minute:</strong> {SPEED.fix}
          </p>
        )}
      </div>
    </div>
  );
}

export default function AuditClient() {
  const [site, setSite] = useState("");
  const [business, setBusiness] = useState("");
  const [city, setCity] = useState("Timișoara");
  const [niche, setNiche] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [botcheck, setBotcheck] = useState("");
  const [error, setError] = useState("");
  const [lead, setLead] = useState<Lead | null>(null);
  const [siteRes, setSiteRes] = useState<SiteResult | null>(null);
  const [speedRes, setSpeedRes] = useState<SpeedResult | null>(null);
  const run = useRef<AbortController | null>(null);
  const sentFor = useRef<Lead | null>(null);
  const resultsRef = useRef<HTMLElement>(null);

  const done = lead !== null && siteRes !== null && speedRes !== null;
  const checks = siteRes?.ok ? siteRes.checks : null;
  const speed = speedRes?.ok ? speedRes : null;
  const score = done ? siteScore(checks, speed ? speed.performance : null) : null;
  const partial = score !== null && (!speed || CHECKS.some((c) => typeof checks?.[c.id] !== "boolean"));

  // Lead-ul pleacă o singură dată pe audit, după ce avem ambele rezultate și măcar unul a reușit
  useEffect(() => {
    if (!done || !lead || !siteRes || !speedRes || sentFor.current === lead) return;
    if (!siteRes.ok && !speedRes.ok) return;
    sentFor.current = lead;
    sendLead(lead, siteRes, speedRes, score);
  }, [done, lead, siteRes, speedRes, score]);

  function start(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const url = normalizeSiteUrl(site);
    if (!url) {
      setError("Scrie adresa site-ului, de exemplu firmata.ro.");
      return;
    }
    if (email.trim() && !/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError("Adresa de email nu pare corectă.");
      return;
    }
    if (!consent) {
      setError("Bifează acordul pentru folosirea datelor, ca să pornești auditul.");
      return;
    }
    if (botcheck) return;

    const home = homepageOf(url);
    run.current?.abort();
    const ctrl = new AbortController();
    run.current = ctrl;
    setLead({ site: home, business: business.trim(), city: city.trim(), niche, firstName: firstName.trim(), email: email.trim(), marketing });
    setSiteRes(null);
    setSpeedRes(null);

    // Două cereri în paralel: verificările site-ului vin în câteva secunde, viteza poate dura până la un minut
    post<SiteResult>("/api/audit/site", home, ctrl.signal)
      .then((r) => {
        if (ctrl.signal.aborted) return;
        setSiteRes(r);
        if (!r.ok && (r.reason === "dns" || r.reason === "blocked")) {
          // Site-ul nu există sau nu e public: nu mai are rost să așteptăm viteza
          ctrl.abort();
          setSpeedRes({ ok: false, reason: "skipped" });
        }
      })
      .catch(() => {
        if (!ctrl.signal.aborted) setSiteRes({ ok: false, reason: "fetch" });
      });
    post<SpeedResult>("/api/audit/viteza", home, ctrl.signal)
      .then((r) => {
        if (!ctrl.signal.aborted) setSpeedRes(r);
      })
      .catch(() => {
        if (!ctrl.signal.aborted) setSpeedRes({ ok: false, reason: "fetch" });
      });

    requestAnimationFrame(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      resultsRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    });
  }

  function reset() {
    run.current?.abort();
    setLead(null);
    setSiteRes(null);
    setSpeedRes(null);
  }

  if (!lead) {
    return (
      <form className="mx" style={{ paddingBottom: 72 }} onSubmit={start} noValidate>
        <div className="gate">
          <h2 className="hd gate-title">Ce site verificăm?</h2>
          <p className="muted">Doar adresa site-ului e obligatorie. Restul datelor ne ajută să-ți explicăm rezultatul pentru afacerea ta.</p>
          <div className="fields">
            <label className="lbl">
              Site-ul firmei *
              <input
                className="field"
                value={site}
                onChange={(e) => setSite(e.target.value)}
                inputMode="url"
                autoComplete="url"
                autoCapitalize="none"
                spellCheck={false}
                placeholder="firmata.ro"
                aria-required="true"
              />
            </label>
            <label className="lbl">Numele afacerii<input className="field" value={business} onChange={(e) => setBusiness(e.target.value)} autoComplete="organization" /></label>
            <label className="lbl">Orașul<input className="field" value={city} onChange={(e) => setCity(e.target.value)} autoComplete="address-level2" /></label>
            <label className="lbl">
              Domeniul
              <select className="field" value={niche} onChange={(e) => setNiche(e.target.value)}>
                <option value="">Alege domeniul</option>
                {NICHES.map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </label>
            <label className="lbl">Prenumele<input className="field" value={firstName} onChange={(e) => setFirstName(e.target.value)} autoComplete="given-name" /></label>
            <label className="lbl">Emailul<input className="field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" /></label>
            <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={botcheck} onChange={(e) => setBotcheck(e.target.value)} />
            <label className="check">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
              <span>Sunt de acord ca TurboSnail să folosească datele mele ca să îmi arate rezultatul și să mă contacteze în legătură cu el. *</span>
            </label>
            <label className="check">
              <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
              <span>Vreau să primesc pe email sfaturi despre vizibilitate online și automatizări AI. Mă pot dezabona oricând.</span>
            </label>
          </div>
          {error && <p className="err" role="alert">{error}</p>}
          <button type="submit" className="btn-p" style={{ width: "100%", marginTop: 8 }}>Pornește auditul →</button>
          <p className="fine">
            Verificăm doar pagina principală a site-ului. La Google PageSpeed Insights trimitem doar adresa site-ului. Nu vindem datele tale. Poți cere oricând ștergerea lor la hello@turbosnail.ro. Detalii în{" "}
            <a href="/politica-de-confidentialitate" target="_blank" rel="noopener">politica de confidențialitate</a>.
          </p>
        </div>
      </form>
    );
  }

  const host = hostOf(lead.site);
  const siteError = siteRes && !siteRes.ok ? siteRes.reason : null;
  const noSite = siteError === "dns" || siteError === "blocked";

  return (
    <section ref={resultsRef} className="mx results" aria-live="polite" aria-busy={!done}>
      <span className="tag">Rezultat pentru {host}</span>
      <h2 className="hd zone-title">Site și conversie</h2>

      {!done && (
        <p className="waiting">
          <span className="spinner" aria-hidden="true" />
          Scorul apare după ce terminăm toate verificările.
        </p>
      )}
      {score !== null && (
        <>
          <div className="score">
            <span className="hd score-num">{score}</span>
            <span className="score-max">/100</span>
          </div>
          <div className="bar"><div className="bar-fill" style={{ width: `${score}%` }} /></div>
          <p className="muted">
            Viteza pe mobil contează 40% din scor, iar cele 7 verificări 60%, în părți egale.
            {partial && " Scorul ține cont doar de ce am putut verifica acum."}
          </p>
        </>
      )}

      {siteError === "dns" && (
        <p className="notice" role="alert">N-am găsit niciun site la adresa {host}. Verifică dacă e scrisă corect și încearcă din nou.</p>
      )}
      {siteError === "blocked" && (
        <p className="notice" role="alert">Adresa {host} nu duce la un site public, așa că n-o putem verifica.</p>
      )}
      {siteError && !noSite && (
        <p className="notice">Site-ul nu ne-a răspuns acum, așa că n-am putut verifica ce găsește clientul pe el. Încearcă din nou peste câteva minute.</p>
      )}

      {!noSite && (
        <>
          <h3 className="hd sub">{SPEED.label}</h3>
          <SpeedCard result={speedRes} />
          <h3 className="hd sub">Ce găsește clientul pe site</h3>
          {CHECKS.map((c) => (
            <CheckCard key={c.id} label={c.label} why={c.why} fix={c.fix} value={siteRes === null ? undefined : checks ? checks[c.id] : null} />
          ))}
        </>
      )}

      <p className="next">
        <strong>Urmează în audit:</strong> locul în Google Maps și dacă te recomandă ChatGPT.
      </p>
      <p className="fine">
        Rezultatul e automat și verifică doar pagina principală a site-ului. Viteza e măsurată pe mobil de Google PageSpeed Insights și poate varia de la o măsurătoare la alta.
      </p>
      <button type="button" className="link-btn" onClick={reset}>← Verifică alt site</button>
    </section>
  );
}
