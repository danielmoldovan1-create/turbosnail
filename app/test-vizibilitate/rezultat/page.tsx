import type { Metadata } from "next";
import VisibilityResult from "./result";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rezultatul testului de vizibilitate | TurboSnail",
  description: "Rezultatul testului de vizibilitate online TurboSnail.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RezultatTestVizibilitate() {
  return (
    <main style={{ fontFamily: "'Instrument Sans', sans-serif", background: "#0a0c14", color: "#eae8e3", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Instrument+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hd { font-family: 'Outfit', sans-serif; }
        .mx { max-width: 760px; margin: 0 auto; padding: 0 20px; }
        .box { padding-top: 120px; padding-bottom: 96px; }
        .tag { display: inline-block; padding: 6px 16px; border-radius: 100px; font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; background: rgba(255,106,0,0.1); border: 1px solid rgba(255,106,0,0.25); color: #ff6a00; margin-bottom: 18px; }
        .score { display: flex; align-items: baseline; gap: 6px; margin-top: 8px; }
        .score-num { font-size: 72px; font-weight: 900; line-height: 1; background: linear-gradient(135deg, #ff8c33, #ff6a00, #ff5500); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .score-max { font-size: 20px; color: #888899; }
        .bar { height: 8px; background: #1a1d2a; border-radius: 8px; overflow: hidden; margin: 16px 0 24px; }
        .bar-fill { height: 100%; background: linear-gradient(90deg, #ff8c33, #ff6a00); }
        .title { font-size: 34px; font-weight: 900; letter-spacing: -0.8px; margin-bottom: 12px; }
        .lead { font-size: 18px; line-height: 1.65; color: #a8a6a1; }
        .sub { font-size: 22px; font-weight: 800; margin: 36px 0 14px; }
        .recs { padding-left: 22px; list-style: decimal; }
        .recs li { font-size: 16px; line-height: 1.7; color: #a8a6a1; margin-bottom: 12px; }
        .muted { font-size: 15px; color: #888899; line-height: 1.6; }
        .fine { font-size: 12px; color: #555566; line-height: 1.5; margin-top: 24px; }
        .cta { margin-top: 36px; padding: 28px 24px; border-radius: 20px; border: 1px solid rgba(255,106,0,0.25); background: linear-gradient(180deg, rgba(255,106,0,0.06), rgba(255,106,0,0.02)); }
        .btn-p { display: inline-flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #ff6a00, #ff5500); color: #fff; border: none; padding: 15px 28px; border-radius: 12px; font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 15px; text-decoration: none; }
        .again { display: inline-block; margin-top: 20px; font-size: 13px; color: #888899; }
      `}</style>

      {/* NAV */}
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

      <VisibilityResult />
    </main>
  );
}
