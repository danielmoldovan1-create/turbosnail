import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import AuditClient from "./audit-client";
import { auditEnabled } from "./checks";

export const metadata: Metadata = {
  title: "Audit instant pentru site | TurboSnail",
  description: "Viteza site-ului pe mobil și 7 verificări care arată dacă un client te poate suna sau programa ușor.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AuditSite() {
  // Variabilele se citesc la cerere, nu la build, ca pagina să decidă la fel ca rutele API
  await connection();
  if (!auditEnabled(process.env)) notFound();

  return (
    <main style={{ fontFamily: "'Instrument Sans', sans-serif", background: "#0a0c14", color: "#eae8e3", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Instrument+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hd { font-family: 'Outfit', sans-serif; }
        .mx { max-width: 760px; margin: 0 auto; padding: 0 20px; }
        .muted { font-size: 15px; color: #888899; line-height: 1.6; }
        .tag { display: inline-block; max-width: 100%; overflow-wrap: anywhere; padding: 6px 16px; border-radius: 100px; font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; background: rgba(255,106,0,0.1); border: 1px solid rgba(255,106,0,0.25); color: #ff6a00; margin-bottom: 18px; }
        .btn-p { display: inline-flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #ff6a00, #ff5500); color: #fff; border: none; padding: 16px 30px; border-radius: 12px; font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 15px; cursor: pointer; text-decoration: none; }
        .btn-p:disabled { opacity: 0.45; cursor: not-allowed; }
        .gate { background: #0f1119; border: 1px solid rgba(255,106,0,0.25); border-radius: 20px; padding: 32px 24px; }
        .gate-title { font-size: 28px; font-weight: 900; letter-spacing: -0.6px; margin-bottom: 10px; }
        .fields { display: flex; flex-direction: column; gap: 14px; margin: 24px 0 8px; }
        .lbl { display: flex; flex-direction: column; gap: 6px; font-size: 13px; color: #888899; }
        .field { width: 100%; padding: 14px 16px; border-radius: 10px; border: 1px solid #252535; background: #0a0c14; color: #eae8e3; font-size: 15px; font-family: 'Instrument Sans', sans-serif; }
        .field:focus { border-color: #ff6a00; }
        select.field { appearance: none; -webkit-appearance: none; padding-right: 40px; background-image: linear-gradient(45deg, transparent 50%, #888899 50%), linear-gradient(135deg, #888899 50%, transparent 50%); background-position: calc(100% - 21px) 50%, calc(100% - 16px) 50%; background-size: 5px 5px; background-repeat: no-repeat; }
        .hp { position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; }
        .check { display: flex; gap: 10px; align-items: flex-start; font-size: 14px; line-height: 1.55; color: #a8a6a1; cursor: pointer; }
        .check input { margin-top: 4px; accent-color: #ff6a00; width: 16px; height: 16px; flex-shrink: 0; }
        .err { color: #ff6b6b; font-size: 14px; margin: 8px 0; }
        .fine { font-size: 12px; color: #555566; line-height: 1.5; margin-top: 14px; }
        .fine a { color: #888899; text-decoration: underline; }
        .link-btn { background: none; border: none; color: #888899; font-size: 13px; margin-top: 18px; cursor: pointer; text-decoration: underline; font-family: 'Instrument Sans', sans-serif; }
        a:focus-visible, button:focus-visible, .field:focus-visible, .check input:focus-visible { outline: 2px solid #ff8c33; outline-offset: 2px; }
        .results { padding-bottom: 96px; scroll-margin-top: 84px; }
        .zone-title { font-size: 30px; font-weight: 900; letter-spacing: -0.6px; }
        .score { display: flex; align-items: baseline; gap: 6px; margin-top: 10px; }
        .score-num { font-size: 72px; font-weight: 900; line-height: 1; background: linear-gradient(135deg, #ff8c33, #ff6a00, #ff5500); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .score-max { font-size: 20px; color: #888899; }
        .bar { height: 8px; background: #1a1d2a; border-radius: 8px; overflow: hidden; margin: 16px 0 12px; }
        .bar-fill { height: 100%; background: linear-gradient(90deg, #ff8c33, #ff6a00); }
        .waiting { display: flex; align-items: center; gap: 10px; font-size: 14px; line-height: 1.5; color: #888899; margin: 12px 0; }
        .spinner { width: 18px; height: 18px; flex-shrink: 0; border: 2px solid #252535; border-top-color: #ff6a00; border-radius: 50%; animation: spin 0.9s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .sub { font-size: 20px; font-weight: 800; margin: 32px 0 12px; }
        .card { display: flex; gap: 14px; align-items: flex-start; background: #0f1119; border: 1px solid #1a1d2a; border-radius: 16px; padding: 18px; margin-bottom: 12px; }
        .badge { flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-family: 'Outfit', sans-serif; font-weight: 800; font-size: 14px; color: #888899; background: #12141f; border: 1px solid #252535; }
        .badge.ok { color: #4ade80; background: rgba(74,222,128,0.08); border-color: rgba(74,222,128,0.35); }
        .badge.no { color: #ff6b6b; background: rgba(255,107,107,0.08); border-color: rgba(255,107,107,0.35); }
        .card-body { min-width: 0; }
        .card-title { font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: 700; color: #eae8e3; }
        .card-status { font-size: 13px; font-weight: 600; margin-top: 2px; color: #888899; }
        .card-status.ok { color: #4ade80; }
        .card-status.no { color: #ff6b6b; }
        .card-text { font-size: 14px; line-height: 1.6; color: #a8a6a1; margin-top: 6px; overflow-wrap: anywhere; }
        .card-text a { color: #a8a6a1; text-decoration: underline; }
        .card-fix { font-size: 14px; line-height: 1.6; color: #eae8e3; margin-top: 8px; overflow-wrap: anywhere; }
        .card-fix strong { color: #ff8c33; }
        .notice { padding: 16px 18px; border-radius: 14px; border: 1px solid rgba(255,107,107,0.35); background: rgba(255,107,107,0.06); color: #eae8e3; font-size: 15px; line-height: 1.6; margin: 16px 0; overflow-wrap: anywhere; }
        .next { margin-top: 28px; padding: 18px 20px; border-radius: 16px; border: 1px dashed rgba(255,106,0,0.35); color: #eae8e3; font-size: 15px; line-height: 1.6; }
        @media (max-width: 420px) {
          .gate { padding: 26px 18px; }
          .score-num { font-size: 60px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .spinner { animation: none; }
          html { scroll-behavior: auto; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,12,20,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(26,29,42,0.7)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex" }}>
            <Image src="/turbosnail-logo.png" alt="TurboSnail" width={46} height={46} unoptimized priority />
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <Link href="/servicii" style={{ fontSize: 14, color: "#888899", textDecoration: "none" }}>Servicii</Link>
            <Link href="/blog" style={{ fontSize: 14, color: "#888899", textDecoration: "none" }}>Blog</Link>
            <Link href="/#contact" style={{ background: "linear-gradient(135deg, #ff8c33, #ff6a00)", color: "#fff", borderRadius: 10, fontFamily: "'Outfit', sans-serif", fontWeight: 700, padding: "10px 22px", fontSize: 13, textDecoration: "none" }}>
              Înscrie-te →
            </Link>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <section style={{ paddingTop: 120, paddingBottom: 32 }}>
        <div className="mx">
          <span className="tag">Audit instant · gratuit</span>
          <h1 className="hd" style={{ fontSize: "clamp(30px, 8vw, 38px)", fontWeight: 900, lineHeight: 1.12, letterSpacing: -1, marginBottom: 18 }}>
            Audit instant pentru <span style={{ whiteSpace: "nowrap" }}>site-ul</span> firmei tale
          </h1>
          <p style={{ fontSize: 18, color: "#a8a6a1", lineHeight: 1.65 }}>
            Scrie adresa site-ului. Măsurăm viteza pe mobil cu Google PageSpeed Insights și verificăm 7 lucruri care contează când un client vrea să te sune sau să facă o programare. Durează cel mult un minut.
          </p>
        </div>
      </section>

      <AuditClient />
    </main>
  );
}
