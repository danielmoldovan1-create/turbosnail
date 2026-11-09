import type { Metadata } from "next";
import Link from "next/link";
import EnglishContactForm from "./contact-form";

const EN_URL = "https://turbosnail.ro/en";
const EMAIL = "hello@turbosnail.ro";
const TITLE = "AI Automation Agency for SMEs | TurboSnail";
const DESCRIPTION = "An AI automation agency for small and mid-sized businesses: we take over enquiries, documents, reports and CRM updates with flows built on the tools you already use.";

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

const FAQ = [
  {
    q: "What does an AI automation agency do?",
    a: "It finds the repetitive work in your company and builds automated flows that do it, using AI where a step needs reading or writing text. The aim is fewer manual hours, not another system to manage.",
  },
  {
    q: "Do we have to replace the software we already use?",
    a: "No. We connect the tools you already have, such as your CRM, accounting software, email and spreadsheets. Replacing a system only makes sense when it has no way to exchange data.",
  },
  {
    q: "Which tools do you build with?",
    a: "Mostly Make, n8n, Zapier and Microsoft Power Automate, plus the AI model that fits each task. We choose based on the systems you use and on where your data has to stay.",
  },
  {
    q: "How do you handle personal data?",
    a: "Every flow is designed under the GDPR: it processes only the data it needs, each tool in the chain is documented, and a person stays responsible for the result.",
  },
  {
    q: "How do we start?",
    a: "Tell us about one process that takes your team too many hours, through the form on this page or by email. We reply within two business days with a few questions or a time for a call.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const btn = { background: "linear-gradient(135deg, #ff8c33, #ff6a00)", color: "#fff", borderRadius: 10, fontFamily: "'Outfit', sans-serif", fontWeight: 700, textDecoration: "none", display: "inline-block" };

export default function EnglishHome() {
  return (
    <main lang="en" style={{ fontFamily: "'Instrument Sans', sans-serif", background: "#0a0c14", color: "#eae8e3", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Instrument+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hd { font-family: 'Outfit', sans-serif; }
        .mx { max-width: 760px; margin: 0 auto; padding: 0 20px; }
        .prose h2 { font-family: 'Outfit', sans-serif; font-size: 26px; font-weight: 800; margin: 48px 0 16px; color: #eae8e3; letter-spacing: -0.5px; }
        .prose p { font-size: 17px; line-height: 1.75; color: #a8a6a1; margin-bottom: 20px; }
        .prose strong { color: #eae8e3; font-weight: 600; }
        .prose a { color: #ff6a00; text-decoration: none; border-bottom: 1px solid rgba(255,106,0,0.3); }
        .prose a:hover { border-bottom-color: #ff6a00; }
        .prose ol { margin: 0 0 20px 0; padding: 0; list-style: none; counter-reset: item; }
        .prose ol li { font-size: 16px; line-height: 1.7; color: #a8a6a1; padding: 10px 0 10px 40px; border-bottom: 1px solid #12141f; position: relative; counter-increment: item; }
        .prose ol li::before { content: counter(item); position: absolute; left: 0; width: 26px; height: 26px; border-radius: 50%; background: rgba(255,106,0,0.1); border: 1px solid rgba(255,106,0,0.25); font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 700; color: #ff6a00; top: 12px; text-align: center; line-height: 24px; }
        .prose ol li:last-child { border-bottom: none; }
        .prose ul { margin: 0 0 20px 0; padding: 0; list-style: none; }
        .prose ul li { font-size: 16px; line-height: 1.7; color: #a8a6a1; padding: 10px 0 10px 20px; border-bottom: 1px solid #12141f; position: relative; }
        .prose ul li::before { content: "→"; position: absolute; left: 0; color: #ff6a00; font-size: 14px; top: 12px; }
        .prose ul li:last-child { border-bottom: none; }
        .faq-item { border-bottom: 1px solid #1a1d2a; padding: 22px 0; }
        .faq-item:last-child { border-bottom: none; }
        .faq-q { font-family: 'Outfit', sans-serif; font-size: 17px; font-weight: 700; color: #eae8e3; margin-bottom: 10px; }
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
            <a href="#contact" style={{ ...btn, padding: "10px 22px", fontSize: 13 }}>Contact →</a>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <section style={{ paddingTop: 120, paddingBottom: 56 }}>
        <div className="mx">
          <div style={{ display: "inline-block", background: "rgba(255,106,0,0.1)", border: "1px solid rgba(255,106,0,0.25)", borderRadius: 100, padding: "6px 16px", fontSize: 11, fontWeight: 700, color: "#ff6a00", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 24, fontFamily: "'Outfit', sans-serif" }}>
            AI automation agency
          </div>
          <h1 className="hd" style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.1, letterSpacing: -1, marginBottom: 24 }}>
            AI automation agency for small and mid-sized businesses
          </h1>
          <p style={{ fontSize: 18, color: "#a8a6a1", lineHeight: 1.65, maxWidth: 640, marginBottom: 36 }}>
            TurboSnail finds the repetitive work that fills your team&apos;s week and builds automations that take it over: answering enquiries, processing documents, preparing reports and keeping your CRM up to date. Everything connects to the tools you already use, and a person stays in charge of the decisions that matter.
          </p>
          <a href="#contact" style={{ ...btn, padding: "15px 32px", fontSize: 15 }}>Tell us about one process →</a>
          <p style={{ marginTop: 18, fontSize: 14, color: "#888899", lineHeight: 1.6 }}>
            Not sure where to start?{" "}
            <Link href="/en/visibility-test" style={{ color: "#ff6a00", textDecoration: "none", borderBottom: "1px solid rgba(255,106,0,0.3)" }}>
              Take the 2-minute visibility test →
            </Link>
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <article className="prose mx" style={{ paddingBottom: 40 }}>
        <h2>What an AI automation agency does</h2>
        <p>
          An AI automation agency designs and builds software flows that do routine work for you. Classic automation follows fixed rules: when a form arrives, create a contact and send a confirmation. AI adds language models, the technology behind assistants such as ChatGPT and Claude, so a flow can also read an email, pull the figures out of an invoice or draft a reply for someone to approve.
        </p>
        <p>
          We start from the process, not from the technology. If a plain rule solves the problem, we use a plain rule, because it is cheaper to run and easier to check.
        </p>

        <h2>What we automate</h2>
        <ul>
          <li><strong>Enquiries and follow-up.</strong> Every form or email becomes a contact in your CRM, gets a first reply and a reminder if nobody answers.</li>
          <li><strong>Documents and invoices.</strong> Data from invoices, orders and contracts lands in your accounting or ERP system, and a person checks the exceptions.</li>
          <li><strong>Reports.</strong> Figures from analytics, ads, your CRM and spreadsheets come together in one report that arrives on schedule.</li>
          <li><strong>Customer questions.</strong> A chatbot that answers from your own documents and hands over to a person when it is unsure.</li>
          <li><strong>Data between systems.</strong> The same customer stays identical in your CRM, invoicing tool and spreadsheets.</li>
        </ul>
        <p>
          Each of these is a project of its own. Our <Link href="/en/ai-automation-services">AI automation services</Link> page explains what is included and how we hand a flow over to your team.
        </p>

        <h2>How a project runs</h2>
        <ol>
          <li>A call about one process: who does it, how often, and what goes wrong today.</li>
          <li>A map of the flow: every step, every system and every decision a person has to keep.</li>
          <li>The build, in tools such as Make, n8n, Zapier or Power Automate, connected to your systems.</li>
          <li>Testing with real cases, including the awkward ones.</li>
          <li>A supervised launch, followed by documentation and training for your team.</li>
        </ol>

        <h2>How we work</h2>
        <ul>
          <li><strong>One process at a time.</strong> You see the result before deciding on the next one.</li>
          <li><strong>No lock-in.</strong> The flows, the accounts they run in and the documentation stay yours.</li>
          <li><strong>Data protection by design.</strong> Each flow processes only the data it needs, and every tool in the chain is documented.</li>
          <li><strong>People stay in control.</strong> Decisions about money, contracts or hiring stay with a person.</li>
        </ul>

        <h2>Who it is for</h2>
        <p>
          Service firms, online shops, clinics, accounting practices, property agencies and any team where the same admin task is done by hand every day. If a task follows the same steps several times a week, it is a good candidate for automation.
        </p>

        <h2>Frequently asked questions</h2>
      </article>

      <section style={{ padding: "0 20px 60px", maxWidth: 760, margin: "0 auto" }}>
        {FAQ.map((f) => (
          <div key={f.q} className="faq-item">
            <div className="faq-q">{f.q}</div>
            <div className="faq-a">{f.a}</div>
          </div>
        ))}
      </section>

      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,106,0,0.12), transparent)", maxWidth: 760, margin: "0 auto" }} />

      {/* CONTACT */}
      <section id="contact" style={{ padding: "60px 20px 96px", textAlign: "center", maxWidth: 620, margin: "0 auto", scrollMarginTop: 80 }}>
        <h2 className="hd" style={{ fontSize: 28, fontWeight: 900, letterSpacing: -0.6, marginBottom: 14 }}>Which process takes the most hours in your company?</h2>
        <p style={{ fontSize: 16, color: "#a8a6a1", marginBottom: 32, lineHeight: 1.65 }}>
          Tell us in a few lines, or email us at <a href={`mailto:${EMAIL}`} style={{ color: "#ff6a00", textDecoration: "none" }}>{EMAIL}</a>.
        </p>
        <EnglishContactForm />
      </section>
    </main>
  );
}
