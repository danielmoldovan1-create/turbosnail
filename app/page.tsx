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

const SERVICES = [
  {
    tag: "AUTOMATIZĂRI",
    name: "Automatizări AI",
    desc: "Identificăm procesele repetitive din businessul tău și le automatizăm. Date mutate automat, emailuri trimise la momentul potrivit, rapoarte generate fără intervenție umană. Rezultatul: ore recuperate în fiecare săptămână.",
    cta: "Vezi cum funcționează",
    gradient: "linear-gradient(135deg, #1a1d2a 0%, #0f1119 100%)",
    accent: "#ff6a00",
    icon: "⬡",
  },
  {
    tag: "CONSULTANȚĂ",
    name: "Consultanță AI",
    desc: "Nu știi de unde să începi cu AI? Facem un audit al businessului tău și îți spunem exact ce merită automatizat, în ce ordine și cu ce costuri reale. Fără jargon, fără promisiuni exagerate.",
    cta: "Programează un audit gratuit",
    gradient: "linear-gradient(135deg, #1a1d2a 0%, #0f1119 100%)",
    accent: "#ff8c33",
    icon: "◈",
  },
  {
    tag: "OUTBOUND",
    name: "Cold Email & Outbound",
    desc: "Construim infrastructura de cold email, scriem secvențele, sourcem leadurile și livrăm meetinguri în calendarul tău. Tu te prezinți la call și închizi. De restul ne ocupăm noi.",
    cta: "Vreau mai multe meetinguri",
    gradient: "linear-gradient(135deg, #1a1d2a 0%, #0f1119 100%)",
    accent: "#ff6a00",
    icon: "◇",
  },
  {
    tag: "PAID ADS",
    name: "Paid Ads cu AI",
    desc: "Campanii Google și Meta optimizate cu AI. Targeting precis, costuri reduse, rezultate măsurabile. Fără buget irosit pe audiențe greșite.",
    cta: "Optimizează campaniile mele",
    gradient: "linear-gradient(135deg, #1a1d2a 0%, #0f1119 100%)",
    accent: "#ff8c33",
    icon: "△",
  },
  {
    tag: "SEO",
    name: "SEO bazat pe AI",
    desc: "Conținut optimizat, audit tehnic și strategie de keywords bazată pe date reale din Search Console și Semrush. Rankăm pentru căutările care aduc clienți, nu trafic inutil.",
    cta: "Vreau să fiu găsit pe Google",
    gradient: "linear-gradient(135deg, #1a1d2a 0%, #0f1119 100%)",
    accent: "#ff6a00",
    icon: "◎",
  },
  {
    tag: "ANALYTICS",
    name: "Raportare & Analytics",
    desc: "Toate datele tale într-un singur dashboard. Vânzări, trafic, campanii, performanță. Vizibil în timp real, fără să deschizi 5 tool-uri diferite.",
    cta: "Vreau un dashboard unificat",
    gradient: "linear-gradient(135deg, #1a1d2a 0%, #0f1119 100%)",
    accent: "#ff8c33",
    icon: "▦",
  },
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

  return (
    <main style={{ fontFamily: "'Instrument Sans', sans-serif", background: "#0a0c14", color: "#eae8e3", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Instrument+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: #ff6a00; color: #0a0c14; }
        .hd { font-family: 'Outfit', sans-serif; }
        .ac { background: linear-gradient(135deg, #ff8c33, #ff6a00, #ff5500); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .mx { max-width: 1180px; margin: 0 auto; padding-left: 20px; padding-right: 20px; }
        .btn-p { display: inline-flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #ff6a00, #ff5500); color: #fff; border: none; padding: 16px 30px; border-radius: 12px; font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 15px; cursor: pointer; transition: all 0.3s; gap: 8px; box-shadow: 0 8px 24px rgba(255,106,0,0.2); }
        .btn-p:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(255,106,0,0.35); }
        .btn-s { display: inline-flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.04); color: #ff6a00; border: 1px solid rgba(255,106,0,0.3); padding: 15px 30px; border-radius: 12px; font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 14px; cursor: pointer; transition: all 0.3s; }
        .btn-s:hover { border-color: #ff6a00; background: rgba(255,106,0,0.06); }
        .tag { display: inline-block; padding: 5px 14px; border-radius: 100px; font-family: 'Outfit', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; background: rgba(255,106,0,0.08); color: #ff6a00; border: 1px solid rgba(255,106,0,0.18); }
        .card { background: linear-gradient(180deg, #0f1119 0%, #0c0e15 100%); border: 1px solid #1a1d2a; border-radius: 20px; padding: 28px 26px; transition: all 0.4s cubic-bezier(0.22,1,0.36,1); }
        .card:hover { border-color: rgba(255,106,0,0.3); transform: translateY(-4px); box-shadow: 0 20px 50px rgba(255,106,0,0.08); }
        .field { background: #0f1119; border: 1px solid #1a1d2a; color: #eae8e3; padding: 15px 18px; border-radius: 12px; font-family: 'Instrument Sans', sans-serif; font-size: 15px; outline: none; width: 100%; transition: border 0.3s; }
        .field:focus { border-color: rgba(255,106,0,0.5); }
        .field::placeholder { color: #555566; }
        .faq-row { border-bottom: 1px solid #1a1d2a; padding: 22px 0; cursor: pointer; }
        .faq-row:last-child { border-bottom: none; }
        .sk { position: fixed; bottom: 0; left: 0; right: 0; z-index: 90; background: rgba(10,12,20,0.92); backdrop-filter: blur(16px); border-top: 1px solid #1a1d2a; padding: 12px 20px; }
        .dv { height: 1px; background: linear-gradient(90deg, transparent, rgba(255,106,0,0.15), transparent); max-width: 600px; margin: 0 auto; }
        .svc-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 22px; background: rgba(255,106,0,0.08); border: 1px solid rgba(255,106,0,0.15); margin-bottom: 18px; }
        @media (min-width: 768px) {
          .sk { display: none; }
          .g3 { grid-template-columns: 1fr 1fr 1fr !important; }
          .g4 { grid-template-columns: 1fr 1fr 1fr 1fr !important; }
          .g2 { grid-template-columns: 1fr 1fr !important; }
          .hero-t { font-size: 58px !important; line-height: 1.05 !important; }
          .hero-lay { flex-direction: row !important; align-items: center; gap: 56px !important; }
          .hero-l { flex: 1.2; }
          .hero-r { flex: 0.8; }
          .nav-lnk { display: flex !important; gap: 26px; }
        }
        @media (min-width: 1024px) { .hero-t { font-size: 66px !important; } }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,12,20,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(26,29,42,0.6)" }}>
        <div className="mx" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <div style={{ cursor: "pointer" }} onClick={() => go("top")}>
              <img src="/Turbosnail logo.PNG" alt="TurboSnail" style={{ height: 38, width: "auto" }} />
            </div>
            <div className="nav-lnk" style={{ display: "none" }}>
              {["servicii","proces","despre","faq"].map((id, i) => (
                <span key={i} style={{ fontSize: 14, color: "#888899", cursor: "pointer", transition: "color 0.2s" }}
                  onClick={() => go(id)}
                  onMouseEnter={e => (e.currentTarget.style.color = "#eae8e3")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#888899")}>
                  {["Servicii","Cum funcționează","Despre","Întrebări"][i]}
                </span>
              ))}
            </div>
          </div>
          <button className="btn-p" style={{ padding: "11px 22px", fontSize: 13 }} onClick={() => go("contact")}>Audit Gratuit →</button>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" style={{ paddingTop: 110, paddingBottom: 70, position: "relative", overflow: "hidden" }}>
        {/* Background glows */}
        <div style={{ position: "absolute", top: -200, right: -200, width: 600, height: 600, background: "radial-gradient(circle, rgba(255,106,0,0.12) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -300, left: -200, width: 700, height: 700, background: "radial-gradient(circle, rgba(255,106,0,0.06) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div className="mx" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-lay" style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            <div className="hero-l">
              <Fade>
                <span className="tag" style={{ marginBottom: 22, display: "inline-block" }}>Implementare AI · Timișoara, România</span>
              </Fade>
              <Fade delay={0.05}>
                <h1 className="hero-t hd" style={{ fontSize: 38, fontWeight: 900, lineHeight: 1.1, marginBottom: 22, letterSpacing: "-1.5px" }}>
                  Automatizări AI<br />pentru afaceri<br />din România —{" "}
                  <span className="ac">Fără tehnologie<br />de fițe.</span>
                </h1>
              </Fade>
              <Fade delay={0.1}>
                <p style={{ fontSize: 18, lineHeight: 1.6, color: "#a8a6a1", maxWidth: 540, marginBottom: 32 }}>
                  Recuperezi 10+ ore pe săptămână prin automatizarea sarcinilor repetitive. Copy-paste între foi de calcul, emailuri de follow-up, rapoarte manuale — toate rezolvate în background.
                </p>
              </Fade>
              <Fade delay={0.15}>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button className="btn-p" onClick={() => go("contact")}>Vreau o consultanță gratuită →</button>
                  <button className="btn-s" onClick={() => go("servicii")}>Vezi serviciile</button>
                </div>
              </Fade>
            </div>
            <Fade delay={0.2}>
              <div className="hero-r card" style={{ padding: "32px 28px" }}>
                <p className="hd" style={{ fontSize: 12, fontWeight: 700, color: "#ff6a00", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 22 }}>De ce TurboSnail</p>
                {[
                  { n: "10+", l: "ore recuperate săptămânal" },
                  { n: "24/7", l: "automatizări rulează singure" },
                  { n: "-40%", l: "cost per lead cu AI Ads" },
                  { n: "5 zile", l: "de la brief la sistem live" },
                ].map((m, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: i < 3 ? 18 : 0, paddingBottom: i < 3 ? 18 : 0, borderBottom: i < 3 ? "1px solid #1a1d2a" : "none" }}>
                    <span className="hd ac" style={{ fontSize: 28, fontWeight: 900, minWidth: 70 }}>{m.n}</span>
                    <span style={{ fontSize: 14, color: "#a8a6a1" }}>{m.l}</span>
                  </div>
                ))}
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
      <section style={{ paddingTop: 100, paddingBottom: 60 }}>
        <div className="mx" style={{ maxWidth: 760, textAlign: "center" }}>
          <Fade>
            <p className="hd" style={{ fontSize: 24, lineHeight: 1.55, color: "#eae8e3", fontWeight: 500, letterSpacing: "-0.3px" }}>
              Majoritatea businessurilor vin la noi cerând chatboți sau sisteme AI complexe. Când ne uităm la cum funcționează cu adevărat, descoperim{" "}
              <span className="ac" style={{ fontWeight: 700 }}>același lucru de fiecare dată</span>
              : ore pierdute zilnic pe sarcini repetitive pe care un workflow simplu le-ar rezolva în secunde.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#888899", marginTop: 24, maxWidth: 580, marginLeft: "auto", marginRight: "auto" }}>
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
            </div>
          </Fade>
          <div className="g3" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 20 }}>
            {SERVICES.map((s, i) => (
              <Fade key={i} delay={(i % 3) * 0.08}>
                <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <div className="svc-icon">{s.icon}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <span className="tag">{s.tag}</span>
                  </div>
                  <h3 className="hd" style={{ fontSize: 20, fontWeight: 800, marginBottom: 10, letterSpacing: "-0.4px" }}>{s.name}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "#888899", marginBottom: 18, flex: 1 }}>{s.desc}</p>
                  <span style={{ fontSize: 13, color: "#ff6a00", fontFamily: "'Outfit',sans-serif", fontWeight: 600, cursor: "pointer" }} onClick={() => go("contact")}>
                    → {s.cta}
                  </span>
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
      <section style={{ paddingTop: 90, paddingBottom: 90 }}>
        <div className="mx" style={{ maxWidth: 820 }}>
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
                <div style={{ marginBottom: i < COMPARISONS.length - 1 ? 20 : 0, paddingBottom: i < COMPARISONS.length - 1 ? 20 : 0, borderBottom: i < COMPARISONS.length - 1 ? "1px solid #1a1d2a" : "none" }}>
                  <div style={{ display: "flex", gap: 10, marginBottom: 6 }}>
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
                <div className="card" style={{ padding: "32px 26px 28px", height: "100%" }}>
                  <div className="hd ac" style={{ fontSize: 44, fontWeight: 900, marginBottom: 14, letterSpacing: "-1px", lineHeight: 1 }}>{s.n}</div>
                  <h3 className="hd" style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, letterSpacing: "-0.3px" }}>{s.t}</h3>
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
      <section id="despre" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div className="mx" style={{ maxWidth: 820, textAlign: "center" }}>
          <Fade>
            <span className="tag">De ce TurboSnail</span>
            <h2 className="hd" style={{ fontSize: 38, fontWeight: 800, marginTop: 18, marginBottom: 24, letterSpacing: "-1px", lineHeight: 1.15 }}>
              Nu vindem tehnologie.{" "}
              <span className="ac">Vindem timp recuperat.</span>
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: "#a8a6a1", marginBottom: 16 }}>
              Fiecare proiect începe cu o întrebare simplă: ce faci manual azi care s-ar putea face singur mâine?
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#888899" }}>
              Răspunsul la întrebarea asta valorează mai mult decât orice chatbot.
            </p>
          </Fade>
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
                  <h4 className="hd" style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.4 }}>{f.q}</h4>
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
      <section id="contact" style={{ paddingTop: 90, paddingBottom: 90 }}>
        <div className="mx" style={{ maxWidth: 620, textAlign: "center" }}>
          <Fade>
            <span className="tag">Începe acum</span>
            <h2 className="hd" style={{ fontSize: 40, fontWeight: 900, marginTop: 18, marginBottom: 14, letterSpacing: "-1px", lineHeight: 1.1 }}>
              Gata să <span className="ac">automatizezi?</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#a8a6a1", marginBottom: 36, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
              Completează formularul și te contactăm în 24 de ore pentru un audit gratuit.
            </p>
          </Fade>
          <Fade delay={0.1}>
            {!sent ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input className="field" placeholder="Numele tău *" value={name} onChange={e => setName(e.target.value)} />
                <input className="field" type="email" placeholder="Email *" value={email} onChange={e => setEmail(e.target.value)} />
                <input className="field" type="tel" placeholder="Telefon" value={phone} onChange={e => setPhone(e.target.value)} />
                <textarea className="field" placeholder="Descrie businessul tău în 2 rânduri" rows={3} value={msg} onChange={e => setMsg(e.target.value)} style={{ resize: "vertical", fontFamily: "'Instrument Sans',sans-serif" }} />
                <button className="btn-p" style={{ marginTop: 6, fontSize: 16, padding: "18px 30px", width: "100%" }} onClick={() => { if (email && name) setSent(true); }}>
                  Vreau auditul gratuit →
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
            <div style={{ marginBottom: 14 }}>
              <img src="/Turbosnail logo.PNG" alt="TurboSnail" style={{ height: 36, width: "auto" }} />
            </div>
            <p style={{ fontSize: 13, color: "#666677", lineHeight: 1.6 }}>
              Automatizări AI pentru afaceri din România. Recuperezi timp, nu pierzi bani pe tehnologie inutilă. Bazați în Timișoara, livrăm în toată țara.
            </p>
          </div>
          <div style={{ display: "flex", gap: 56 }}>
            <div>
              <p className="hd" style={{ fontSize: 11, fontWeight: 700, color: "#666677", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 14 }}>Servicii</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: "#888899" }}>
                {SERVICES.map((s, i) => (
                  <span key={i} style={{ cursor: "pointer" }} onClick={() => go("servicii")}>{s.name}</span>
                ))}
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

      {/* STICKY MOBILE CTA */}
      <div className="sk">
        <button className="btn-p" style={{ width: "100%" }} onClick={() => go("contact")}>Vreau audit gratuit →</button>
      </div>
      <div style={{ height: 72 }} />
    </main>
  );
}

