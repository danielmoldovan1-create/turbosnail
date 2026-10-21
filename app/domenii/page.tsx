import type { Metadata } from "next";
import DomainCarousel from "../components/DomainCarousel";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automatizări AI pe domenii de activitate | TurboSnail",
  description: "Automatizări AI pe domenii: clinici stomatologice, agenții imobiliare, contabilitate, producători și piese auto. Ce automatizăm concret în fiecare.",
  alternates: {
    canonical: "https://turbosnail.ro/domenii",
  },
  openGraph: {
    title: "Automatizări AI pe domenii de activitate | TurboSnail",
    description: "Automatizări AI pe domenii: clinici stomatologice, agenții imobiliare, contabilitate, producători și piese auto. Ce automatizăm concret în fiecare.",
    url: "https://turbosnail.ro/domenii",
    siteName: "TurboSnail",
    locale: "ro_RO",
    type: "website",
  },
};

export default function DomainsIndex() {
  return (
    <main style={{ fontFamily: "'Instrument Sans', sans-serif", background: "#0a0c14", color: "#eae8e3", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Instrument+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hd { font-family: 'Outfit', sans-serif; }
        .mx { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
        .intro a { color: #ff6a00; text-decoration: none; border-bottom: 1px solid rgba(255,106,0,0.3); }
        .ctas { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-top: 22px; }
        .btn-p { display: inline-flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #ff8c33, #ff6a00); color: #fff; border-radius: 10px; font-family: 'Outfit', sans-serif; font-weight: 700; padding: 14px 24px; font-size: 15px; text-decoration: none; }
        .btn-s { display: inline-flex; align-items: center; justify-content: center; color: #ff6a00; border: 1px solid rgba(255,106,0,0.35); background: rgba(255,255,255,0.03); border-radius: 10px; font-family: 'Outfit', sans-serif; font-weight: 600; padding: 13px 22px; font-size: 15px; text-decoration: none; }
        .btn-p:focus-visible, .btn-s:focus-visible, .intro a:focus-visible { outline: 2px solid #ff6a00; outline-offset: 2px; }
      `}</style>

      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,12,20,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(26,29,42,0.7)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <img src="/turbosnail-logo.png" alt="TurboSnail" style={{ height: 46, width: "auto" }} />
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <Link href="/servicii" style={{ fontSize: 14, color: "#888899", textDecoration: "none" }}>Servicii</Link>
            <a href="/blog" style={{ fontSize: 14, color: "#888899", textDecoration: "none" }}>Blog</a>
            <Link href="/#contact" style={{ background: "linear-gradient(135deg, #ff8c33, #ff6a00)", color: "#fff", borderRadius: 10, fontFamily: "'Outfit', sans-serif", fontWeight: 700, padding: "10px 22px", fontSize: 13, textDecoration: "none" }}>
              Înscrie-te →
            </Link>
          </div>
        </div>
      </nav>

      <section style={{ paddingTop: 112, paddingBottom: 88 }}>
        <div className="mx">
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 44px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#ff6a00", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'Outfit', sans-serif", marginBottom: 16 }}>DOMENII</p>
            <h1 className="hd" style={{ fontSize: "clamp(30px, 7vw, 46px)", fontWeight: 900, letterSpacing: -1, lineHeight: 1.12, marginBottom: 20 }}>
              Automatizări AI pe domenii: vezi ce se poate face în firma ta
            </h1>
            <p className="intro" style={{ fontSize: 17, color: "#a8a6a1", lineHeight: 1.65 }}>
              Doar 5,2% dintre firmele din România cu cel puțin 10 angajați folosesc AI, cel mai puțin din Uniunea Europeană (<a href="https://www.businessforum.ro/industry/20251211/romanian-companies-fall-behind-on-ai-usage-says-eurostat-2662" target="_blank" rel="noopener noreferrer">Eurostat, 2025</a>). Pentru un patron ocupat, „AI” spune puțin până nu vede un exemplu din domeniul lui. Mai jos găsești cinci domenii, fiecare cu problemele lui, fluxurile pe care le automatizăm și cifrele care contează.
            </p>
          </div>

          <DomainCarousel grid />

          <div style={{ textAlign: "center", marginTop: 56, padding: "32px 24px", borderRadius: 20, border: "1px solid rgba(255,106,0,0.25)", background: "linear-gradient(180deg, rgba(255,106,0,0.06), rgba(255,106,0,0.02))" }}>
            <h2 className="hd" style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.5, marginBottom: 10 }}>Domeniul tău nu e în listă?</h2>
            <p style={{ fontSize: 16, color: "#a8a6a1", lineHeight: 1.65, maxWidth: 560, margin: "0 auto" }}>
              Problemele se repetă în aproape orice firmă: cereri care așteaptă, date copiate de mână, clienți uitați după prima discuție. Fă testul de vizibilitate sau înscrie-te pe lista de așteptare pentru auditul gratuit de 30 de minute. Preluăm un număr limitat de firme în fiecare lună.
            </p>
            <div className="ctas">
              <Link href="/#contact" className="btn-p">Înscrie-te pe lista de așteptare →</Link>
              <a href="/test-vizibilitate" className="btn-s">Fă testul de vizibilitate</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
