import type { Metadata } from "next";
import Link from "next/link";
import VisibilityQuizEn from "./quiz";

const EN_URL = "https://turbosnail.ro/en/visibility-test";
const TITLE = "Online Visibility Test: Google and AI | TurboSnail";
const DESCRIPTION = "Find out in 2 minutes how visible your business is in Google and in AI assistants' answers: 10 questions, an indicative score and concrete recommendations.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: EN_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: EN_URL,
    siteName: "TurboSnail",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const btn = { background: "linear-gradient(135deg, #ff8c33, #ff6a00)", color: "#fff", borderRadius: 10, fontFamily: "'Outfit', sans-serif", fontWeight: 700, textDecoration: "none", display: "inline-block" };

export default function VisibilityTestEn() {
  return (
    <main lang="en" style={{ fontFamily: "'Instrument Sans', sans-serif", background: "#0a0c14", color: "#eae8e3", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Instrument+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hd { font-family: 'Outfit', sans-serif; }
        .mx { max-width: 760px; margin: 0 auto; padding: 0 20px; }
        .muted { font-size: 15px; color: #888899; line-height: 1.6; }
        .tag { display: inline-block; padding: 6px 16px; border-radius: 100px; font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; background: rgba(255,106,0,0.1); border: 1px solid rgba(255,106,0,0.25); color: #ff6a00; margin-bottom: 18px; }
        .btn-p { display: inline-flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #ff6a00, #ff5500); color: #fff; border: none; padding: 16px 30px; border-radius: 12px; font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 15px; cursor: pointer; }
        .btn-p:disabled { opacity: 0.45; cursor: not-allowed; }
        .quiz-wrap { padding-bottom: 72px; }
        .progress { height: 6px; background: #1a1d2a; border-radius: 6px; overflow: hidden; margin-bottom: 10px; }
        .progress-bar { height: 100%; background: linear-gradient(90deg, #ff8c33, #ff6a00); transition: width 0.3s ease; }
        .q-card { background: #0f1119; border: 1px solid #1a1d2a; border-radius: 16px; padding: 22px 20px; margin-bottom: 14px; }
        .q-text { font-size: 16px; line-height: 1.6; color: #eae8e3; margin-bottom: 14px; }
        .q-num { font-family: 'Outfit', sans-serif; font-weight: 800; color: #ff6a00; margin-right: 4px; }
        .opts { display: flex; flex-wrap: wrap; gap: 8px; }
        .opt { flex: 1 1 calc(50% - 8px); min-width: 120px; padding: 11px 14px; border-radius: 10px; border: 1px solid #252535; background: #0a0c14; color: #a8a6a1; font-size: 14px; font-family: 'Instrument Sans', sans-serif; cursor: pointer; }
        .opt.sel { border-color: #ff6a00; background: rgba(255,106,0,0.1); color: #eae8e3; font-weight: 600; }
        .gate { background: #0f1119; border: 1px solid rgba(255,106,0,0.25); border-radius: 20px; padding: 32px 24px; }
        .gate-title { font-size: 28px; font-weight: 900; letter-spacing: -0.6px; margin-bottom: 10px; }
        .fields { display: flex; flex-direction: column; gap: 14px; margin: 24px 0 8px; }
        .lbl { display: flex; flex-direction: column; gap: 6px; font-size: 13px; color: #888899; }
        .field { padding: 14px 16px; border-radius: 10px; border: 1px solid #252535; background: #0a0c14; color: #eae8e3; font-size: 15px; font-family: 'Instrument Sans', sans-serif; }
        .field:focus { outline: none; border-color: #ff6a00; }
        .hp { position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; }
        .check { display: flex; gap: 10px; align-items: flex-start; font-size: 14px; line-height: 1.55; color: #a8a6a1; cursor: pointer; }
        .check input { margin-top: 4px; accent-color: #ff6a00; width: 16px; height: 16px; flex-shrink: 0; }
        .err { color: #ff6b6b; font-size: 14px; margin: 8px 0; }
        .fine { font-size: 12px; color: #555566; line-height: 1.5; margin-top: 14px; }
        .link-btn { background: none; border: none; color: #888899; font-size: 13px; margin-top: 16px; cursor: pointer; }
        .info h2 { font-family: 'Outfit', sans-serif; font-size: 24px; font-weight: 800; margin: 40px 0 14px; color: #eae8e3; letter-spacing: -0.4px; }
        .info p { font-size: 16px; line-height: 1.75; color: #a8a6a1; margin-bottom: 16px; }
        .info ul { margin: 0 0 16px 0; padding: 0; list-style: none; }
        .info ul li { font-size: 15px; line-height: 1.7; color: #a8a6a1; padding: 8px 0 8px 20px; border-bottom: 1px solid #12141f; position: relative; }
        .info ul li::before { content: "→"; position: absolute; left: 0; color: #ff6a00; font-size: 13px; top: 10px; }
        .faq-item { border-bottom: 1px solid #1a1d2a; padding: 18px 0; }
        .faq-q { font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: 700; color: #eae8e3; margin-bottom: 8px; }
        .faq-a { font-size: 15px; line-height: 1.7; color: #a8a6a1; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,12,20,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(26,29,42,0.7)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <Link href="/en" style={{ textDecoration: "none" }}>
            <img src="/turbosnail-logo.png" alt="TurboSnail" style={{ height: 46, width: "auto" }} />
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <Link href="/en/ai-automation-services" style={{ fontSize: 14, color: "#888899", textDecoration: "none" }}>Services</Link>
            <Link href="/en#contact" style={{ ...btn, padding: "10px 22px", fontSize: 13 }}>Contact →</Link>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <section style={{ paddingTop: 120, paddingBottom: 36 }}>
        <div className="mx">
          <span className="tag">Free test · 2 minutes</span>
          <h1 className="hd" style={{ fontSize: 38, fontWeight: 900, lineHeight: 1.12, letterSpacing: -1, marginBottom: 18 }}>
            How visible is your business in Google and in AI answers?
          </h1>
          <p style={{ fontSize: 18, color: "#a8a6a1", lineHeight: 1.65 }}>
            Answer 10 questions about your business&apos;s online presence. You get a visibility score and the most important recommendations for your situation. It is an indicative self-assessment, not a technical audit.
          </p>
        </div>
      </section>

      <VisibilityQuizEn />

      {/* INFO */}
      <section className="mx info" style={{ paddingBottom: 96 }}>
        <h2>What the test checks</h2>
        <ul>
          <li>Whether customers can find your business easily in Google, including on the map</li>
          <li>Whether your website is built so that Google understands what you offer</li>
          <li>Whether there are trust signals: reviews, links, consistent contact details</li>
          <li>Whether AI assistants have somewhere to learn about your business</li>
        </ul>
        <h2>Why AI answers matter too</h2>
        <p>
          Besides Google, people also ask AI assistants such as ChatGPT, Gemini or Copilot. Assistants build their answers from the information they find online, so a business with a clear website, a complete Google profile and mentions in other sources has a better chance of being recommended.
        </p>
        <h2>Frequently asked questions</h2>
        <div className="faq-item">
          <div className="faq-q">How long does the test take?</div>
          <div className="faq-a">About 2 minutes. There are 10 questions with Yes, Partly, No or Not sure as answers.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Why do I need to leave my contact details?</div>
          <div className="faq-a">To see your result and so we can contact you about it, if you want. You only get tips by email if you tick that option separately.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Does the score replace an audit?</div>
          <div className="faq-a">No. The score is based only on your answers and shows the direction. An audit checks your website, your Google profile and your Search Console data directly.</div>
        </div>
      </section>
    </main>
  );
}
