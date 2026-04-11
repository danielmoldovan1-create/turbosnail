"use client";
import { useState, useEffect, useRef } from "react";

function useVisible() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible] as const;
}

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [ref, visible] = useVisible();
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(22px)", transition: `all 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s` }}>
      {children}
    </div>
  );
}

function AbstractBg1() {
  return (
    <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.35 }}>
      <defs>
        <radialGradient id="rg1" cx="70%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#ff6a00" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0a0c14" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="rg2" cx="20%" cy="80%" r="50%">
          <stop offset="0%" stopColor="#ff8c33" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0a0c14" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="500" fill="url(#rg1)" />
      <rect width="800" height="500" fill="url(#rg2)" />
      <circle cx="650" cy="120" r="180" fill="none" stroke="#ff6a00" strokeWidth="0.5" strokeOpacity="0.2" />
      <circle cx="650" cy="120" r="260" fill="none" stroke="#ff6a00" strokeWidth="0.3" strokeOpacity="0.1" />
      <circle cx="650" cy="120" r="340" fill="none" stroke="#ff6a00" strokeWidth="0.2" strokeOpacity="0.07" />
      <line x1="0" y1="500" x2="800" y2="0" stroke="#ff6a00" strokeWidth="0.3" strokeOpacity="0.08" />
    </svg>
  );
}

function AbstractGrid() {
  return (
    <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.4 }}>
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ff6a00" strokeWidth="0.4" strokeOpacity="0.3" />
        </pattern>
        <radialGradient id="fade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopOpacity="1" />
          <stop offset="100%" stopOpacity="0" />
        </radialGradient>
        <mask id="gridmask">
          <rect width="600" height="400" fill="url(#fade)" />
        </mask>
      </defs>
      <rect width="600" height="400" fill="url(#grid)" mask="url(#gridmask)" />
    </svg>
  );
}

function AbstractOrbs() {
  return (
    <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5 }}>
      <defs>
        <radialGradient id="orb1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff6a00" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#ff6a00" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="orb2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff8c33" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ff8c33" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="420" cy="80" rx="140" ry="140" fill="url(#orb1)" />
      <ellipse cx="80" cy="220" rx="100" ry="100" fill="url(#orb2)" />
      <circle cx="420" cy="80" r="80" fill="none" stroke="#ff6a00" strokeWidth="0.6" strokeOpacity="0.2" />
      <circle cx="420" cy="80" r="120" fill="none" stroke="#ff6a00" strokeWidth="0.4" strokeOpacity="0.1" />
    </svg>
  );
}

const SERVICES = [
  { tag: "AUTOMATIZĂRI", name: "Automatizări AI", desc: "Identificăm procesele repetitive din businessul tău și le automatizăm. Date mutate automat, emailuri trimise la momentul potrivit, rapoarte generate fără intervenție umană. Rezultatul: ore recuperate în fiecare săptămână.", cta: "Vezi cum funcționează", icon: "⬡" },
  { tag: "CONSULTANȚĂ", name: "Consultanță AI", desc: "Nu știi de unde să începi cu AI? Facem un audit al businessului tău și îți spunem exact ce merită automatizat, în ce ordine și cu ce costuri reale. Fără jargon, fără promisiuni exagerate.", cta: "Programează un audit gratuit", icon: "◈" },
  { tag: "OUTBOUND", name: "Cold Email & Outbound", desc: "Construim infrastructura de cold email, scriem secvențele, sourcem leadurile și livrăm meetinguri în calendarul tău. Tu te prezinți la call și închizi. De restul ne ocupăm noi.", cta: "Vreau mai multe meetinguri", icon: "◇" },
  { tag: "PAID ADS", name: "Paid Ads cu AI", desc: "Campanii Google și Meta optimizate cu AI. Targeting precis, costuri reduse, rezultate măsurabile. Fără buget irosit pe audiențe greșite.", cta: "Optimizează campaniile mele", icon: "△" },
  { tag: "SEO", name: "SEO bazat pe AI", desc: "Conținut optimizat, audit tehnic și strategie de keywords bazată pe date reale din Search Console și Semrush. Rankăm pentru căutările care aduc clienți, nu trafic inutil.", cta: "Vreau să fiu găsit pe Google", icon: "◎" },
  { tag: "ANALYTICS", name: "Raportare & Analytics", desc: "Toate datele tale într-un singur dashboard. Vânzări, trafic, campanii, performanță. Vizibil în timp real, fără să deschizi 5 tool-uri diferite.", cta: "Vreau un dashboard unificat", icon: "▦" },
];

const STEPS = [
  { n: "01", t: "Audit gratuit", d: "30 de minute în care analizăm businessul tău și identificăm ce se poate automatiza." },
  { n: "02", t: "Plan clar", d: "Îți prezentăm ce construim, cât durează și ce rezultate așteptăm." },
  { n: "03", t: "Implementare", d: "Construim și testăm totul, tu nu trebuie să faci nimic tehnic." },
  { n: "04", t: "Rezultate măsurabile", d: "Urmărim împreună impactul real în ore și bani." },
];

const FAQS = [
  { q: "Cât costă un audit?", a: "Auditul inițial e complet gratuit. 30 de minute în care analizăm businessul tău și îți arătăm ce poate fi automatizat. Fără obligații, fără presiune." },
  { q: "Cât durează implementarea?", a: "Depinde de complexitate. Automatizările simple sunt gata în 5-7 zile. Sistemele mai complexe în 2-3 săptămâni. Îți spunem exact la audit." },
  { q: "Trebuie să fiu tehnic?", a: "Nu. Noi facem partea tehnică. Tu doar ne arăți ce faci manual și noi îți arătăm cum se poate face singur." },
  { q: "Pot anula oricând?", a: "Da. Fără contracte pe termen lung. Lucrăm lunar și poți opri oricând." },
  { q: "Ce se întâmplă cu datele mele?", a: "Datele rămân ale tale. Servere UE, GDPR compliant. Nu partajăm nimic cu terți." },
];

const TOOLS = ["ChatGPT", "Claude AI", "Make", "n8n", "Google Ads", "Meta Ads", "Search Console"];

const COMPARISONS = [
  { old: "Copy-paste manual între foi de calcul", now: "Date sincronizate automat între toate tool-urile" },
  { old: "Emailuri de follow-up trimise manual", now: "Secvențe automate trimise la momentul potrivit" },
  { old: "Rapoarte construite manual în fiecare luni", now: "Dashboard live actualizat în timp real" },
  { old: "Leads lăsați fără răspuns ore întregi", now: "Răspuns automat în secunde, calificare AI" },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
async function handleSubmit() {
  if (!email || !name) return;
const res = await fetch("https://formspree.io/f/xpqovkag", {
  method: "POST",
  headers: { "Content-Type": "application/json", "Accept": "application/json" },
  body: JSON.stringify({ name, email, phone, message: msg }),
});
if (res.ok) setSent(true);
}
  return (
    <main style={{ fontFamily: "'Instrument Sans', sans-serif", background: "#0a0c14", color: "#eae8e3", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Instrument+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: #ff6a00; color: #0a0c14; }
        .hd { font-family: 'Outfit', sans-serif; }
        .ac { background: linear-gradient(135deg, #ff8c33, #ff6a00, #ff5500); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .mx { max-width: 1180px; margin: 0 auto; padding-left: 20px; padding-right: 20px; }
        .btn-p { display: inline-flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #ff6a00, #ff5500); color: #fff; border: none; padding: 16px 30px; border-radius: 12px; font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 15px; cursor: pointer; transition: all 0.3s; gap: 8px; box-shadow: 0 8px 24px rgba(255,106,0,0.25); }
        .btn-p:hover { transform: translateY(-2px); box-shadow: 0 16px 40px rgba(255,106,0,0.4); background: linear-gradient(135deg, #ff8c33, #ff6a00); }
        .btn-s { display: inline-flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.04); color: #ff6a00; border: 1px solid rgba(255,106,0,0.3); padding: 15px 30px; border-radius: 12px; font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 14px; cursor: pointer; transition: all 0.3s; backdrop-filter: blur(10px); }
        .btn-s:hover { border-color: #ff6a00; background: rgba(255,106,0,0.08); }
        .tag { display: inline-block; padding: 5px 14px; border-radius: 100px; font-family: 'Outfit', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; background: rgba(255,106,0,0.08); color: #ff6a00; border: 1px solid rgba(255,106,0,0.18); }
        .card { background: linear-gradient(160deg, #0f1119 0%, #0c0e15 100%); border: 1px solid #1a1d2a; border-radius: 20px; transition: all 0.4s cubic-bezier(0.22,1,0.36,1); }
        .card:hover { border-color: rgba(255,106,0,0.3); transform: translateY(-4px); box-shadow: 0 24px 60px rgba(255,106,0,0.1); }
        .field { background: #0f1119; border: 1px solid #1a1d2a; color: #eae8e3; padding: 15px 18px; border-radius: 12px; font-family: 'Instrument Sans', sans-serif; font-size: 15px; outline: none; width: 100%; transition: border 0.3s; }
        .field:focus { border-color: rgba(255,106,0,0.5); box-shadow: 0 0 0 3px rgba(255,106,0,0.08); }
        .field::placeholder { color: #555566; }
        .faq-row { border-bottom: 1px solid #1a1d2a; padding: 22px 0; cursor: pointer; }
        .faq-row:last-child { border-bottom: none; }
        .faq-row:hover h4 { color: #ff6a00; }
        .sk { position: fixed; bottom: 0; left: 0; right: 0; z-index: 90; background: rgba(10,12,20,0.95); backdrop-filter: blur(20px); border-top: 1px solid rgba(255,106,0,0.15); padding: 12px 20px; }
        .dv { height: 1px; background: linear-gradient(90deg, transparent, rgba(255,106,0,0.15), transparent); max-width: 600px; margin: 0 auto; }
        .nav-lnk { display: none; }
        .svc-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 24px; background: rgba(255,106,0,0.08); border: 1px solid rgba(255,106,0,0.15); margin-bottom: 18px; transition: all 0.3s; }
        .card:hover .svc-icon { background: rgba(255,106,0,0.14); border-color: rgba(255,106,0,0.3); }
        @media (min-width: 768px) {
          .sk { display: none; }
          .g3 { grid-template-columns: 1fr 1fr 1fr !important; }
          .g4 { grid-template-columns: 1fr 1fr 1fr 1fr !important; }
          .hero-t { font-size: 60px !important; line-height: 1.04 !important; }
          .hero-lay { flex-direction: row !important; align-items: center; gap: 56px !important; }
          .hero-l { flex: 1.2; }
          .hero-r { flex: 0.8; }
          .nav-lnk { display: flex !important; gap: 26px; }
          .about-lay { flex-direction: row !important; gap: 80px !important; align-items: center; }
        }
        @media (min-width: 1024px) { .hero-t { font-size: 68px !important; } }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,12,20,0.88)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(26,29,42,0.7)" }}>
        <div className="mx" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <div style={{ cursor: "pointer" }} onClick={() => go("top")}>
              <img src="/Turbosnail logo.PNG" alt="TurboSnail" style={{ height: 150, width: "auto" }} />
            </div>
            <div className="nav-lnk" style={{ display: "none" }}>
              {[["servicii","Servicii"],["proces","Cum funcționează"],["despre","Despre"],["faq","Întrebări"]].map(([id, label], i) => (
                <span key={i} style={{ fontSize: 14, color: "#888899", cursor: "pointer", transition: "color 0.2s" }}
                  onClick={() => go(id)}
                  onMouseEnter={e => (e.currentTarget.style.color = "#eae8e3")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#888899")}>
                  {label}
                </span>
              ))}
            </div>
          </div>
          <button className="btn-p" style={{ padding: "11px 24px", fontSize: 13 }} onClick={() => go("contact")}>Audit Gratuit →</button>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" style={{ paddingTop: 116, paddingBottom: 70, position: "relative", overflow: "hidden", minHeight: "90vh", display: "flex", alignItems: "center" }}>
        <AbstractBg1 />
        <div className="mx" style={{ position: "relative", zIndex: 2, width: "100%" }}>
          <div className="hero-lay" style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            <div className="hero-l">
              <Fade>
                <span className="tag" style={{ marginBottom: 24, display: "inline-block" }}>Implementare AI · Timișoara, România</span>
              </Fade>
              <Fade delay={0.05}>
                <h1 className="hero-t hd" style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.08, marginBottom: 24, letterSpacing: "-2px" }}>
                  Automatizări AI<br />
                  pentru afaceri<br />
                  din România —{" "}
                  <br />
                  <span style={{ position: "relative", display: "inline-block", paddingBottom: 6 }}>
                    <span className="ac">Fără tehnologie de fițe,</span>
                    <span style={{ position: "absolute", bottom: 0, left: 0, right: "10%", height: 3, background: "linear-gradient(90deg, #ff6a00, #ff8c33, transparent)", borderRadius: 2 }} />
                  </span>
                  <br />
                  <span className="ac">fără chatboți inutili.</span>
                </h1>
              </Fade>
              <Fade delay={0.1}>
                <p style={{ fontSize: 18, lineHeight: 1.65, color: "#a8a6a1", maxWidth: 520, marginBottom: 32 }}>
                  Clienții noștri recuperează <strong style={{ color: "#eae8e3" }}>ore întregi în fiecare săptămână</strong> prin automatizarea sarcinilor repetitive. Copy-paste între foi de calcul, emailuri de follow-up, rapoarte manuale — rezolvate în background, fără să angajezi pe nimeni.
                </p>
              </Fade>
              <Fade delay={0.15}>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button className="btn-p" onClick={() => go("contact")}>Vreau o consultanță gratuită →</button>
                  <button className="btn-s" onClick={() => go("servicii")}>Vezi serviciile</button>
                </div>
              </Fade>
              <Fade delay={0.22}>
                <div style={{ display: "flex", gap: 24, marginTop: 32, flexWrap: "wrap" }}>
                  {["Fără contract pe termen lung", "Audit 100% gratuit", "GDPR compliant"].map((t, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: "#ff6a00", fontSize: 14 }}>✓</span>
                      <span style={{ fontSize: 13, color: "#888899" }}>{t}</span>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>
            <Fade delay={0.2}>
              <div className="hero-r card" style={{ padding: "32px 28px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, background: "radial-gradient(circle, rgba(255,106,0,0.12) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
                <p className="hd" style={{ fontSize: 12, fontWeight: 700, color: "#ff6a00", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 24 }}>Rezultate tipice</p>
                {[
                  { n: "10+", l: "ore economisite săptămânal*" },
                  { n: "24/7", l: "automatizări care rulează singure" },
                  { n: "până la -40%", l: "reducere cost per lead*" },
                  { n: "7-14 zile", l: "de la brief la sistem funcțional" },
                ].map((m, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: i < 3 ? 18 : 0, paddingBottom: i < 3 ? 18 : 0, borderBottom: i < 3 ? "1px solid #1a1d2a" : "none" }}>
                    <span className="hd ac" style={{ fontSize: i === 2 ? 18 : 28, fontWeight: 900, minWidth: 80 }}>{m.n}</span>
                    <span style={{ fontSize: 13, color: "#a8a6a1" }}>{m.l}</span>
                  </div>
                ))}
                <p style={{ fontSize: 10, color: "#444455", marginTop: 16, lineHeight: 1.5 }}>* Rezultatele variază în funcție de complexitatea businessului și tipul proceselor automatizate.</p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div style={{ padding: "28px 0", background: "rgba(255,255,255,0.015)", borderTop: "1px solid #1a1d2a", borderBottom: "1px solid #1a1d2a" }}>
        <div className="mx" style={{ display: "flex", gap: 48, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
          {TOOLS.map((t, i) => (
            <span key={i} className="hd" style={{ fontSize: 13, fontWeight: 600, color: "#555566", letterSpacing: 0.5, whiteSpace: "nowrap" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section style={{ paddingTop: 100, paddingBottom: 60, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}><AbstractGrid /></div>
        <div className="mx" style={{ maxWidth: 760, textAlign: "center", position: "relative", zIndex: 2 }}>
          <Fade>
            <p className="hd" style={{ fontSize: 24, lineHeight: 1.55, color: "#eae8e3", fontWeight: 500, letterSpacing: "-0.3px" }}>
              Majoritatea businessurilor vin la noi cerând chatboți sau sisteme AI complexe. Când ne uităm la cum funcționează cu adevărat, descoperim{" "}
              <span className="ac" style={{ fontWeight: 700 }}>același lucru de fiecare dată</span>
              : ore pierdute zilnic pe sarcini repetitive pe care un workflow simplu le-ar rezolva în secunde.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#888899", marginTop: 24, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
              Nu ai nevoie de AI scump. Ai nevoie ca munca plictisitoare să se facă singură.
            </p>
          </Fade>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicii" style={{ paddingTop: 60, paddingBottom: 90 }}>
        <div className="mx">
          <Fade>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span className="tag">Servicii</span>
              <h2 className="hd" style={{ fontSize: 38, fontWeight: 800, marginTop: 18, letterSpacing: "-1px", lineHeight: 1.15 }}>
                Ce facem <span className="ac">pentru tine</span>
              </h2>
              <p style={{ fontSize: 16, color: "#888899", marginTop: 12, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
                Fiecare serviciu poate funcționa independent sau ca parte dintr-un ecosistem integrat.
              </p>
            </div>
          </Fade>
          <div className="g3" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 20 }}>
            {SERVICES.map((s, i) => (
              <Fade key={i} delay={(i % 3) * 0.08}>
                <div className="card" style={{ padding: "28px 26px", height: "100%", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, background: "radial-gradient(circle, rgba(255,106,0,0.07) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
                  <div className="svc-icon">{s.icon}</div>
                  <span className="tag" style={{ marginBottom: 14, alignSelf: "flex-start" }}>{s.tag}</span>
                  <h3 className="hd" style={{ fontSize: 20, fontWeight: 800, marginBottom: 10, letterSpacing: "-0.4px" }}>{s.name}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "#888899", marginBottom: 20, flex: 1 }}>{s.desc}</p>
                  <div style={{ paddingTop: 16, borderTop: "1px solid #1a1d2a" }}>
                    <span style={{ fontSize: 13, color: "#ff6a00", fontFamily: "'Outfit',sans-serif", fontWeight: 600, cursor: "pointer" }} onClick={() => go("contact")}>→ {s.cta}</span>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
          <Fade delay={0.2}>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <button className="btn-p" onClick={() => go("contact")}>Începe cu un audit gratuit →</button>
            </div>
          </Fade>
        </div>
      </section>

      <div className="dv" />

      {/* COMPARISON */}
      <section style={{ paddingTop: 90, paddingBottom: 90, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.6 }}><AbstractOrbs /></div>
        <div className="mx" style={{ maxWidth: 820, position: "relative", zIndex: 2 }}>
          <Fade>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="tag">Înainte vs După</span>
              <h2 className="hd" style={{ fontSize: 34, fontWeight: 800, marginTop: 18, letterSpacing: "-0.8px" }}>
                Cum arată <span className="ac">diferența</span>
              </h2>
            </div>
          </Fade>
          <div className="card" style={{ padding: "32px 28px" }}>
            {COMPARISONS.map((c, i) => (
              <Fade key={i} delay={i * 0.06}>
                <div style={{ marginBottom: i < COMPARISONS.length - 1 ? 22 : 0, paddingBottom: i < COMPARISONS.length - 1 ? 22 : 0, borderBottom: i < COMPARISONS.length - 1 ? "1px solid #1a1d2a" : "none" }}>
                  <div style={{ display: "flex", gap: 10, marginBottom: 7 }}>
                    <span style={{ color: "#cc3333", fontSize: 13, marginTop: 2, flexShrink: 0 }}>✗</span>
                    <span style={{ fontSize: 14, color: "#555566", textDecoration: "line-through" }}>{c.old}</span>
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <span style={{ color: "#ff6a00", fontSize: 13, marginTop: 2, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 14, color: "#eae8e3", fontWeight: 500 }}>{c.now}</span>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <div className="dv" />

      {/* PROCESS */}
      <section id="proces" style={{ paddingTop: 90, paddingBottom: 90 }}>
        <div className="mx">
          <Fade>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span className="tag">Proces</span>
              <h2 className="hd" style={{ fontSize: 38, fontWeight: 800, marginTop: 18, letterSpacing: "-1px" }}>
                Cum <span className="ac">funcționează</span>
              </h2>
            </div>
          </Fade>
          <div className="g4" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 20, maxWidth: 980, marginLeft: "auto", marginRight: "auto" }}>
            {STEPS.map((s, i) => (
              <Fade key={i} delay={i * 0.08}>
                <div className="card" style={{ padding: "32px 26px 28px", height: "100%", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", bottom: -20, right: -20, width: 100, height: 100, background: "radial-gradient(circle, rgba(255,106,0,0.06) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
                  <div className="hd ac" style={{ fontSize: 44, fontWeight: 900, marginBottom: 14, letterSpacing: "-1px", lineHeight: 1 }}>{s.n}</div>
                  <h3 className="hd" style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{s.t}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "#888899" }}>{s.d}</p>
                </div>
              </Fade>
            ))}
          </div>
          <Fade delay={0.3}>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <button className="btn-p" onClick={() => go("contact")}>Începe cu un audit gratuit →</button>
            </div>
          </Fade>
        </div>
      </section>

      <div className="dv" />

      {/* DESPRE */}
      <section id="despre" style={{ paddingTop: 100, paddingBottom: 100, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}><AbstractBg1 /></div>
        <div className="mx" style={{ position: "relative", zIndex: 2 }}>
          <div className="about-lay" style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            <Fade>
              <div style={{ flex: 1, maxWidth: 560 }}>
                <span className="tag">De ce TurboSnail</span>
                <h2 className="hd" style={{ fontSize: 38, fontWeight: 800, marginTop: 18, marginBottom: 20, letterSpacing: "-1px", lineHeight: 1.15 }}>
                  Nu vindem tehnologie.{" "}
                  <span className="ac">Vindem timp recuperat.</span>
                </h2>
                <p style={{ fontSize: 18, lineHeight: 1.65, color: "#a8a6a1", marginBottom: 16 }}>
                  Fiecare proiect începe cu o întrebare simplă: ce faci manual azi care s-ar putea face singur mâine?
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: "#888899", marginBottom: 32 }}>
                  Răspunsul la întrebarea asta valorează mai mult decât orice chatbot. Suntem bazați în Timișoara și lucrăm cu firme din toată România.
                </p>
                <button className="btn-p" onClick={() => go("contact")}>Hai să vorbim →</button>
              </div>
            </Fade>
            <Fade delay={0.1}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: "◈", title: "Abordare practică", desc: "Nu vindem soluții teoretice. Identificăm procesele concrete care pierd timp și le automatizăm." },
                  { icon: "◎", title: "Transparență totală", desc: "Îți spunem ce funcționează, ce nu și de ce. Fără jargon, fără promisiuni pe care nu le putem ține." },
                  { icon: "⬡", title: "Fără dependență", desc: "Construim sisteme pe care le înțelegi și le controlezi. Nu ești legat de noi pe termen lung." },
                ].map((item, i) => (
                  <div key={i} className="card" style={{ padding: "20px 22px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ fontSize: 22, color: "#ff6a00", opacity: 0.7, marginTop: 2, flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <h4 className="hd" style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{item.title}</h4>
                      <p style={{ fontSize: 13, lineHeight: 1.55, color: "#888899" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <div className="dv" />

      {/* FAQ */}
      <section id="faq" style={{ paddingTop: 90, paddingBottom: 90 }}>
        <div className="mx" style={{ maxWidth: 720 }}>
          <Fade>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <span className="tag">Întrebări frecvente</span>
              <h2 className="hd" style={{ fontSize: 34, fontWeight: 800, marginTop: 18, letterSpacing: "-0.8px" }}>
                Răspunsuri <span className="ac">directe</span>
              </h2>
            </div>
          </Fade>
          {FAQS.map((f, i) => (
            <Fade key={i} delay={i * 0.04}>
              <div className="faq-row" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                  <h4 className="hd" style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.4, transition: "color 0.2s" }}>{f.q}</h4>
                  <span style={{ color: "#ff6a00", fontSize: 24, flexShrink: 0, transition: "transform 0.3s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0)", display: "inline-block" }}>+</span>
                </div>
                <div style={{ maxHeight: openFaq === i ? 200 : 0, overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.22,1,0.36,1)" }}>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#888899", paddingTop: 14 }}>{f.a}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      <div className="dv" />

      {/* CONTACT */}
      <section id="contact" style={{ paddingTop: 90, paddingBottom: 90, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, left: "50%", transform: "translateX(-50%)", width: 600, height: 400, background: "radial-gradient(ellipse, rgba(255,106,0,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="mx" style={{ maxWidth: 620, textAlign: "center", position: "relative", zIndex: 2 }}>
          <Fade>
            <span className="tag">Începe acum</span>
            <h2 className="hd" style={{ fontSize: 40, fontWeight: 900, marginTop: 18, marginBottom: 14, letterSpacing: "-1px", lineHeight: 1.1 }}>
              Gata să <span className="ac">automatizezi?</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#a8a6a1", marginBottom: 36, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
              Completează formularul și te contactăm în 24 de ore pentru un audit gratuit, fără obligații.
            </p>
          </Fade>
          <Fade delay={0.1}>
            {!sent ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input className="field" placeholder="Numele tău *" value={name} onChange={e => setName(e.target.value)} />
                <input className="field" type="email" placeholder="Email *" value={email} onChange={e => setEmail(e.target.value)} />
                <input className="field" type="tel" placeholder="Telefon" value={phone} onChange={e => setPhone(e.target.value)} />
                <textarea className="field" placeholder="Descrie businessul tău în 2 rânduri" rows={3} value={msg} onChange={e => setMsg(e.target.value)} style={{ resize: "vertical", fontFamily: "'Instrument Sans',sans-serif" }} />
                <button className="btn-p" style={{ marginTop: 6, fontSize: 16, padding: "18px 30px", width: "100%" }} onClick={handleSubmit}>
                <button className="btn-p" style={{ marginTop: 6, fontSize: 16, padding: "18px 30px", width: "100%" }} onClick={handleSubmit}>
                  Vreau auditul gratuit →
                </button>
                </button>
                <span style={{ fontSize: 12, color: "#555566", marginTop: 4 }}>Răspundem în 24h · Fără spam · Fără obligații</span>
              </div>
            ) : (
              <div style={{ padding: 36, borderRadius: 20, border: "1px solid rgba(255,106,0,0.25)", background: "linear-gradient(180deg, rgba(255,106,0,0.06), rgba(255,106,0,0.02))" }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>🐌🔥</div>
                <h3 className="hd" style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>Mulțumim, {name}!</h3>
                <p style={{ fontSize: 15, color: "#a8a6a1" }}>Te contactăm în maximum 24h pentru auditul tău gratuit.</p>
              </div>
            )}
          </Fade>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #1a1d2a", padding: "50px 20px 30px" }}>
        <div className="mx" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 36 }}>
          <div style={{ maxWidth: 320 }}>
            <div style={{ marginBottom: 16 }}>
              <img src="/Turbosnail logo.PNG" alt="TurboSnail" style={{ height: 56, width: "auto" }} />
            </div>
            <p style={{ fontSize: 13, color: "#666677", lineHeight: 1.6 }}>
              Automatizări AI pentru afaceri din România. Recuperezi timp, nu pierzi bani pe tehnologie inutilă. Bazați în Timișoara, livrăm în toată țara.
            </p>
          </div>
          <div style={{ display: "flex", gap: 56 }}>
            <div>
              <p className="hd" style={{ fontSize: 11, fontWeight: 700, color: "#666677", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 14 }}>Servicii</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: "#888899" }}>
                {SERVICES.map((s, i) => <span key={i} style={{ cursor: "pointer" }} onClick={() => go("servicii")}>{s.name}</span>)}
              </div>
            </div>
            <div>
              <p className="hd" style={{ fontSize: 11, fontWeight: 700, color: "#666677", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 14 }}>Contact</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: "#888899" }}>
                <span>hello@turbosnail.ro</span>
                <span>LinkedIn</span>
                <span>Timișoara, România</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mx" style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid #1a1d2a", fontSize: 11, color: "#555566", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <span>© 2026 TurboSnail. Toate drepturile rezervate.</span>
          <span>PFA · Timișoara, România</span>
        </div>
      </footer>

      <div className="sk">
        <button className="btn-p" style={{ width: "100%" }} onClick={() => go("contact")}>Vreau audit gratuit →</button>
      </div>
      <div style={{ height: 72 }} />
    </main>
  );
}cgc