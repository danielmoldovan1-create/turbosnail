import type { Metadata } from "next";
import Link from "next/link";

// Pagina de după formularul în engleză. O vizită aici înseamnă o cerere trimisă,
// deci în Vercel Analytics numărul de vizite pe /en/thank-you e numărul de conversii în engleză.
export const metadata: Metadata = {
  title: "We have your request | TurboSnail",
  description: "Confirmation of your request to TurboSnail.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYou() {
  return (
    <main style={{ fontFamily: "'Instrument Sans', sans-serif", background: "#0a0c14", color: "#eae8e3", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Instrument+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hd { font-family: 'Outfit', sans-serif; }
        .mx { max-width: 680px; margin: 0 auto; padding: 0 20px; }
        .li { font-size: 16px; line-height: 1.7; color: #a8a6a1; margin-bottom: 10px; }
        .lnk { color: #ff6a00; text-decoration: none; border-bottom: 1px solid rgba(255,106,0,0.3); }
      `}</style>

      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,12,20,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(26,29,42,0.7)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <Link href="/en" style={{ textDecoration: "none" }}>
            <img src="/turbosnail-logo.png" alt="TurboSnail" style={{ height: 46, width: "auto" }} />
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <Link href="/en/ai-automation-services" style={{ fontSize: 14, color: "#888899", textDecoration: "none" }}>Services</Link>
          </div>
        </div>
      </nav>

      <section style={{ paddingTop: 140, paddingBottom: 110 }}>
        <div className="mx">
          <div style={{ display: "inline-block", background: "rgba(255,106,0,0.1)", border: "1px solid rgba(255,106,0,0.25)", borderRadius: 100, padding: "6px 16px", fontSize: 11, fontWeight: 700, color: "#ff6a00", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 24, fontFamily: "'Outfit', sans-serif" }}>
            Request sent
          </div>
          <h1 className="hd" style={{ fontSize: 38, fontWeight: 900, lineHeight: 1.15, letterSpacing: -1, marginBottom: 18 }}>
            We have your request
          </h1>
          <p style={{ fontSize: 18, color: "#a8a6a1", lineHeight: 1.65, marginBottom: 36 }}>
            We will reply within two business days.
          </p>

          <h2 className="hd" style={{ fontSize: 20, fontWeight: 800, marginBottom: 14 }}>To make the first call useful</h2>
          <ul style={{ margin: "0 0 36px 22px" }}>
            <li className="li">Pick the process that takes your team the most time every week.</li>
            <li className="li">Note the tools you use: invoicing, CRM, email, spreadsheets.</li>
            <li className="li">Keep a real example at hand: a quote request, an invoice or the Monday report.</li>
          </ul>

          <p style={{ fontSize: 16, color: "#a8a6a1", lineHeight: 1.7 }}>
            In the meantime, you can check in 2 minutes how visible your company is in Google and in AI assistants with the <Link className="lnk" href="/en/visibility-test">visibility test</Link>, or read about our <Link className="lnk" href="/en/ai-automation-services">AI automation services</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
