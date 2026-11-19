import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

const TITLE = "Listă de așteptare: auditul de automatizare | TurboSnail";
const DESCRIPTION = "Înscrie-te pe lista de așteptare pentru auditul inițial de 30 de minute: preluăm un număr limitat de firme pe lună și îți scriem în cel mult 2 zile lucrătoare.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://turbosnail.ro/programare",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://turbosnail.ro/programare",
    type: "website",
    locale: "ro_RO",
    siteName: "TurboSnail",
  },
};

const STEPS = [
  { t: "Un proces concret", d: "Cum circulă azi cererile, facturile, emailurile sau rapoartele, pas cu pas." },
  { t: "Unde se pierde timpul", d: "Datele copiate de mână, așteptările dintre oameni și verificările care se repetă." },
  { t: "Ce poate rula singur", d: "Ce preia o automatizare, ce face AI-ul și ce rămâne, în continuare, la oameni." },
  { t: "Primul pas", d: "Un singur flux de pornire și ce trebuie pregătit pentru el." },
];

export default function Programare() {
  return (
    <main style={{ fontFamily: "'Instrument Sans', sans-serif", background: "#0a0c14", color: "#eae8e3", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Instrument+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hd { font-family: 'Outfit', sans-serif; }
        .mx { max-width: 1040px; margin: 0 auto; padding: 0 20px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; grid-template-areas: "intro form" "steps form"; column-gap: 48px; row-gap: 8px; align-items: start; }
        .a-intro { grid-area: intro; } .a-form { grid-area: form; } .a-steps { grid-area: steps; padding-top: 24px; }
        .step { border-bottom: 1px solid #12141f; padding: 16px 0 16px 40px; position: relative; }
        .step:last-child { border-bottom: none; }
        .num { position: absolute; left: 0; top: 18px; width: 26px; height: 26px; border-radius: 50%; background: rgba(255,106,0,0.1); border: 1px solid rgba(255,106,0,0.25); font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 700; color: #ff6a00; text-align: center; line-height: 26px; }
        @media (max-width: 860px) { .grid { grid-template-columns: 1fr; grid-template-areas: "intro" "form" "steps"; row-gap: 32px; } .a-steps { padding-top: 0; } }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,12,20,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(26,29,42,0.7)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <img src="/turbosnail-logo.png" alt="TurboSnail" style={{ height: 46, width: "auto" }} />
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <Link href="/servicii" style={{ fontSize: 14, color: "#888899", textDecoration: "none" }}>Servicii</Link>
            <Link href="/blog" style={{ fontSize: 14, color: "#888899", textDecoration: "none" }}>Blog</Link>
          </div>
        </div>
      </nav>

      <section style={{ paddingTop: 120, paddingBottom: 96 }}>
        <div className="mx grid">
          <div className="a-intro">
            <div style={{ display: "inline-block", background: "rgba(255,106,0,0.1)", border: "1px solid rgba(255,106,0,0.25)", borderRadius: 100, padding: "6px 16px", fontSize: 11, fontWeight: 700, color: "#ff6a00", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 24, fontFamily: "'Outfit', sans-serif" }}>
              Listă de așteptare · Audit de 30 de minute
            </div>
            <h1 className="hd" style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.12, letterSpacing: -1, marginBottom: 20 }}>
              Înscrie-te pe lista de așteptare pentru auditul inițial
            </h1>
            <p style={{ fontSize: 18, color: "#a8a6a1", lineHeight: 1.65 }}>
              Preluăm un număr limitat de firme în fiecare lună, ca fiecare proiect să primească atenție reală. Lasă-ne datele și îți scriem în cel mult 2 zile lucrătoare dacă putem prelua firma ta luna aceasta, pentru auditul gratuit de 30 de minute.
            </p>
          </div>

          <div className="a-steps">
            <h2 className="hd" style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Ce discutăm la audit</h2>
            <div>
              {STEPS.map((s, i) => (
                <div key={s.t} className="step">
                  <span className="num">{i + 1}</span>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{s.t}</div>
                  <div style={{ fontSize: 15, color: "#a8a6a1", lineHeight: 1.6 }}>{s.d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="a-form" style={{ background: "#0d0f18", border: "1px solid #1a1d2a", borderRadius: 20, padding: "28px 24px" }}>
            <h2 className="hd" style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Înscrie-te pe listă</h2>
            <p style={{ fontSize: 15, color: "#a8a6a1", lineHeight: 1.6, marginBottom: 20 }}>
              La audit ne arăți un proces, iar noi îți spunem ce poate rula singur și de unde începi.
            </p>
            <ContactForm formular="Listă de așteptare" />
          </div>
        </div>
      </section>
    </main>
  );
}
