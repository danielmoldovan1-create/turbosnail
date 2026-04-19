import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Automatizări AI pentru Afaceri | TurboSnail",
  description: "Articole practice despre automatizări AI, inteligență artificială și digitalizare pentru antreprenori din România. Fără jargon, cu rezultate reale.",
  openGraph: {
    title: "Blog - Automatizări AI pentru Afaceri | TurboSnail",
    description: "Articole practice despre automatizări AI, inteligență artificială și digitalizare pentru antreprenori din România.",
    url: "https://turbosnail.ro/blog",
    siteName: "TurboSnail",
    locale: "ro_RO",
    type: "website",
  },
};

const ARTICLES = [
  {
    slug: "automatizare-procese-afaceri-romania",
    title: "Automatizare Procese Afaceri Romania: Ghid Practic pentru Firme în 2026",
    date: "19 aprilie 2026",
    excerpt: "Cum identifici procesele repetitive din firma ta, ce instrumente funcționează cu adevărat și cât timp economisești concret prin automatizare. Fără teorie, fără promisiuni.",
    tag: "Automatizare",
  },
  {
    slug: "automatizari-ai-pentru-afaceri-romania",
    title: "Automatizări AI pentru Afaceri — Ghid Complet România 2026",
    date: "15 aprilie 2026",
    excerpt: "Aflați cum automatizările AI pot recupera 10+ ore pe săptămână în firma ta. Ghid practic cu exemple reale, costuri și pași de implementare pentru afaceri din România.",
    tag: "AI",
  },
  {
    slug: "ce-este-inteligenta-artificiala",
    title: "Ce este Inteligența Artificială și Cum Transformă Afacerile în 2026",
    date: "10 aprilie 2026",
    excerpt: "Ghid complet despre inteligența artificială pentru antreprenori din România. Cum funcționează AI-ul, ce poate face pentru afacerea ta și cum începi implementarea.",
    tag: "Ghid",
  },
];

export default function BlogIndex() {
  return (
    <main style={{ fontFamily: "'Instrument Sans', sans-serif", background: "#0a0c14", color: "#eae8e3", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Instrument+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hd { font-family: 'Outfit', sans-serif; }
        .ac { background: linear-gradient(135deg, #ff8c33, #ff6a00, #ff5500); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .tag { display: inline-block; padding: 5px 14px; border-radius: 100px; font-family: 'Outfit', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; background: rgba(255,106,0,0.08); color: #ff6a00; border: 1px solid rgba(255,106,0,0.18); }
        .card { background: linear-gradient(160deg, #0f1119 0%, #0c0e15 100%); border: 1px solid #1a1d2a; border-radius: 20px; padding: 32px 28px; transition: all 0.4s cubic-bezier(0.22,1,0.36,1); text-decoration: none; display: block; }
        .card:hover { border-color: rgba(255,106,0,0.3); transform: translateY(-4px); box-shadow: 0 24px 60px rgba(255,106,0,0.1); }
        .card-title { font-family: 'Outfit', sans-serif; font-size: 22px; font-weight: 800; color: #eae8e3; margin: 14px 0 12px; line-height: 1.25; letter-spacing: -0.4px; }
        .card-excerpt { font-size: 15px; line-height: 1.7; color: #888899; }
        .card-date { font-size: 12px; color: #555566; margin-top: 20px; font-family: 'Outfit', sans-serif; }
        .read-more { display: inline-block; margin-top: 20px; font-size: 13px; color: #ff6a00; font-family: 'Outfit', sans-serif; font-weight: 600; }
        .dv { height: 1px; background: linear-gradient(90deg, transparent, rgba(255,106,0,0.15), transparent); max-width: 600px; margin: 0 auto; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,12,20,0.88)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(26,29,42,0.7)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <img src="/Turbosnail logo.PNG" alt="TurboSnail" style={{ height: 48, width: "auto" }} />
          </a>
          <a href="/#contact" style={{ background: "linear-gradient(135deg, #ff6a00, #ff5500)", color: "#fff", border: "none", padding: "11px 24px", borderRadius: 12, fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
            Audit Gratuit →
          </a>
        </div>
      </nav>

      {/* HEADER */}
      <section style={{ paddingTop: 120, paddingBottom: 64, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, left: "50%", transform: "translateX(-50%)", width: 700, height: 400, background: "radial-gradient(ellipse, rgba(255,106,0,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px", textAlign: "center", position: "relative", zIndex: 2 }}>
          <span className="tag">Resurse gratuite</span>
          <h1 className="hd" style={{ fontSize: 44, fontWeight: 900, marginTop: 20, marginBottom: 16, letterSpacing: "-1.5px", lineHeight: 1.1 }}>
            Blog — <span className="ac">Automatizări AI</span><br />pentru Afaceri
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "#888899", maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
            Articole practice despre automatizare, AI și digitalizare pentru antreprenori din Romania. Fara jargon, cu exemple concrete.
          </p>
        </div>
      </section>

      <div className="dv" />

      {/* ARTICLES */}
      <section style={{ paddingTop: 64, paddingBottom: 100 }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 20px", display: "flex", flexDirection: "column", gap: 24 }}>
          {ARTICLES.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="card">
              <span className="tag">{article.tag}</span>
              <div className="card-title">{article.title}</div>
              <div className="card-excerpt">{article.excerpt}</div>
              <div className="card-date">{article.date}</div>
              <span className="read-more">Citeste articolul →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingBottom: 100, textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ background: "linear-gradient(160deg, #0f1119, #0c0e15)", border: "1px solid #1a1d2a", borderRadius: 20, padding: "44px 36px" }}>
            <p className="hd" style={{ fontSize: 12, fontWeight: 700, color: "#ff6a00", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Gata sa automatizezi?</p>
            <h2 className="hd" style={{ fontSize: 28, fontWeight: 800, marginBottom: 14, letterSpacing: "-0.5px", lineHeight: 1.2, color: "#eae8e3" }}>
              Vorbeste cu echipa TurboSnail
            </h2>
            <p style={{ fontSize: 15, color: "#888899", lineHeight: 1.65, marginBottom: 28 }}>
              Audit gratuit, 30 de minute. Iti aratam ce procese din firma ta pot fi automatizate si cu ce impact real.
            </p>
            <a href="/#contact" style={{ display: "inline-block", background: "linear-gradient(135deg, #ff6a00, #ff5500)", color: "#fff", padding: "15px 30px", borderRadius: 12, fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              Vreau auditul gratuit →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #1a1d2a", padding: "40px 20px 30px", textAlign: "center" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", fontSize: 12, color: "#555566" }}>
          <span>© 2026 TurboSnail. Toate drepturile rezervate.</span>
          <span style={{ margin: "0 16px" }}>·</span>
          <a href="/" style={{ color: "#555566", textDecoration: "none" }}>Acasa</a>
          <span style={{ margin: "0 16px" }}>·</span>
          <a href="/blog" style={{ color: "#555566", textDecoration: "none" }}>Blog</a>
        </div>
      </footer>
    </main>
  );
}
