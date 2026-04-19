import type { Metadata } from "next";
import { SERVICES } from "./data";

export const metadata: Metadata = {
  title: "Servicii Automatizări AI & Marketing Digital România | TurboSnail",
  description: "Servicii de automatizări AI, consultanță, cold email, paid ads, SEO și analytics pentru firme din România. Audit gratuit, rezultate măsurabile.",
  openGraph: {
    title: "Servicii Automatizări AI & Marketing Digital România | TurboSnail",
    description: "Servicii de automatizări AI, consultanță, cold email, paid ads, SEO și analytics pentru firme din România.",
    url: "https://turbosnail.ro/servicii",
    siteName: "TurboSnail",
    locale: "ro_RO",
    type: "website",
  },
};

export default function ServicesIndex() {
  return (
    <main style={{ fontFamily: "'Instrument Sans', sans-serif", background: "#0a0c14", color: "#eae8e3", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Instrument+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hd { font-family: 'Outfit', sans-serif; }
        .mx { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
        .grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        .card { background: #0f1119; border: 1px solid #1a1d2a; border-radius: 16px; padding: 32px; text-decoration: none; color: inherit; transition: all 0.25s; display: block; }
        .card:hover { border-color: rgba(255,106,0,0.3); transform: translateY(-3px); }
        @media (min-width: 640px) { .grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .grid { grid-template-columns: 1fr 1fr 1fr; } }
      `}</style>

      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,12,20,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(26,29,42,0.7)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <img src="/Turbosnail logo.PNG" alt="TurboSnail" style={{ height: 46, width: "auto" }} />
          </a>
          <a href="/#contact" style={{ background: "linear-gradient(135deg, #ff8c33, #ff6a00)", color: "#fff", border: "none", borderRadius: 10, fontFamily: "'Outfit', sans-serif", fontWeight: 700, cursor: "pointer", padding: "10px 22px", fontSize: 13, textDecoration: "none" }}>
            Audit Gratuit →
          </a>
        </div>
      </nav>

      <section style={{ paddingTop: 120, paddingBottom: 72 }}>
        <div className="mx">
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#ff6a00", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'Outfit', sans-serif", marginBottom: 16 }}>SERVICII</p>
            <h1 className="hd" style={{ fontSize: 46, fontWeight: 900, letterSpacing: -1, marginBottom: 20 }}>
              Tot ce ai nevoie pentru a crește
            </h1>
            <p style={{ fontSize: 18, color: "#a8a6a1", maxWidth: 560, margin: "0 auto", lineHeight: 1.65 }}>
              De la automatizări AI la paid ads și SEO — construim sistemele care recuperează timp și aduc clienți noi pentru <a href="https://turbosnail.ro" style={{ color: "#ff6a00", textDecoration: "none" }}>automatizări AI</a> în firma ta.
            </p>
          </div>

          <div className="grid">
            {SERVICES.map((s) => (
              <a key={s.slug} href={`/servicii/${s.slug}`} className="card">
                <p style={{ fontSize: 11, fontWeight: 700, color: "#ff6a00", letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'Outfit', sans-serif", marginBottom: 12 }}>{s.tag}</p>
                <h2 className="hd" style={{ fontSize: 20, fontWeight: 800, marginBottom: 12, letterSpacing: -0.3 }}>{s.title}</h2>
                <p style={{ fontSize: 14, color: "#666677", lineHeight: 1.6 }}>{s.metaDescription}</p>
                <p style={{ marginTop: 20, fontSize: 13, color: "#ff6a00", fontWeight: 600 }}>Află mai mult →</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
