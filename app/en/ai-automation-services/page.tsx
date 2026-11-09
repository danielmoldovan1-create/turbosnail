import type { Metadata } from "next";
import Link from "next/link";
import EnglishContactForm from "../contact-form";

const EN_URL = "https://turbosnail.ro/en/ai-automation-services";
const EMAIL = "hello@turbosnail.ro";
const TITLE = "AI Automation Services for Businesses | TurboSnail";
const DESCRIPTION = "AI automation services: we review one process, design the flow, build it in Make, n8n, Zapier or Power Automate, test it with real cases and hand it over documented.";

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
    q: "Which processes are worth automating first?",
    a: "The ones that follow the same steps every time and happen often: data entry, follow-ups, recurring reports, confirmations and document processing. Rare or highly variable tasks usually are not worth it.",
  },
  {
    q: "Do we need an IT department?",
    a: "No. We build the flows, document them and train your team. The tools we use have visual editors, so a non-technical person can follow what each flow does.",
  },
  {
    q: "Who owns the automations?",
    a: "You do. The flows run in accounts that belong to your company, and the documentation stays with your team.",
  },
  {
    q: "How do you handle personal data?",
    a: "Every flow is designed under the GDPR: it processes only the data it needs, each tool in the chain is documented, and a person stays responsible for the result.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI automation services",
  serviceType: "AI automation",
  description: DESCRIPTION,
  url: EN_URL,
  provider: { "@type": "Organization", name: "TurboSnail", email: EMAIL },
  inLanguage: "en",
};

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

export default function AiAutomationServices() {
  return (
    <main lang="en" style={{ fontFamily: "'Instrument Sans', sans-serif", background: "#0a0c14", color: "#eae8e3", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
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
            <Link href="/en" style={{ fontSize: 14, color: "#888899", textDecoration: "none" }}>Home</Link>
            <a href="#contact" style={{ ...btn, padding: "10px 22px", fontSize: 13 }}>Contact →</a>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <section style={{ paddingTop: 120, paddingBottom: 56 }}>
        <div className="mx">
          <div style={{ display: "inline-block", background: "rgba(255,106,0,0.1)", border: "1px solid rgba(255,106,0,0.25)", borderRadius: 100, padding: "6px 16px", fontSize: 11, fontWeight: 700, color: "#ff6a00", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 24, fontFamily: "'Outfit', sans-serif" }}>
            Services
          </div>
          <h1 className="hd" style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.1, letterSpacing: -1, marginBottom: 24 }}>
            AI automation services for businesses
          </h1>
          <p style={{ fontSize: 18, color: "#a8a6a1", lineHeight: 1.65, maxWidth: 640, marginBottom: 36 }}>
            Our AI automation services take one repetitive process from your team and turn it into a flow that runs on its own: the same steps, at the right moment, with a person checking whatever needs judgement.
          </p>
          <a href="#contact" style={{ ...btn, padding: "15px 32px", fontSize: 15 }}>Tell us about one process →</a>
        </div>
      </section>

      {/* CONTENT */}
      <article className="prose mx" style={{ paddingBottom: 40 }}>
        <h2>What AI automation means</h2>
        <p>
          Automation is software that repeats a task the same way every time it is triggered, for example creating a CRM contact whenever a form is submitted. AI automation adds a language model to the steps that need reading or writing: sorting incoming emails, extracting data from a PDF, summarising a call or drafting an answer that a person approves.
        </p>

        <h2>What our AI automation services include</h2>
        <ol>
          <li><strong>Process review.</strong> We look at how the task is done today and which part of it takes the most time.</li>
          <li><strong>Flow mapping.</strong> We document every step, every system involved and every point where a person must decide.</li>
          <li><strong>Build.</strong> We set up the flow in Make, n8n, Zapier or Power Automate, connected to your systems.</li>
          <li><strong>Testing.</strong> We run real scenarios, including the exceptions, before anything goes live.</li>
          <li><strong>Supervised launch.</strong> We watch the first days of operation and adjust what needs adjusting.</li>
          <li><strong>Training and documentation.</strong> Your team gets a clear explanation of how the flow works and what to do when something changes.</li>
        </ol>

        <h2>Problems our AI automation services solve</h2>
        <ul>
          <li><strong>A CRM filled in by hand from emails.</strong> Each new enquiry creates the contact, classifies it and notifies the person responsible.</li>
          <li><strong>Reports assembled from several sources.</strong> The figures are collected automatically and the report is generated and sent on schedule.</li>
          <li><strong>Forgotten follow-ups.</strong> When a quote gets no answer after a set number of days, a personalised reminder goes out.</li>
          <li><strong>Conflicting data between systems.</strong> Customer records stay in sync across your CRM, invoicing tool and spreadsheets.</li>
          <li><strong>Documents typed in manually.</strong> Data from invoices, orders and forms is extracted and entered, and a person reviews the exceptions.</li>
        </ul>

        <h2>Tools we work with</h2>
        <p>
          We build flows in Make, n8n, Zapier and Microsoft Power Automate, and connect them to your CRM, accounting software, email, spreadsheets and cloud storage. Where a step needs reading or writing text, we add the AI model that fits the task. n8n can also run on your own server when your data has to stay inside your infrastructure.
        </p>

        <h2>What we will not automate</h2>
        <p>
          Decisions with legal or financial consequences for a person, such as hiring, credit or contract terms, stay with people. We will also tell you when a process is too rare or too variable to be worth automating, because a flow that breaks every week costs more time than it saves.
        </p>
        <p>
          New to the idea? Start with our overview of what an <Link href="/en">AI automation agency</Link> does and how a first project runs.
        </p>

        <h2>Questions about our AI automation services</h2>
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
        <h2 className="hd" style={{ fontSize: 28, fontWeight: 900, letterSpacing: -0.6, marginBottom: 14 }}>Which process would you hand over first?</h2>
        <p style={{ fontSize: 16, color: "#a8a6a1", marginBottom: 32, lineHeight: 1.65 }}>
          Tell us in a few lines, or email us at <a href={`mailto:${EMAIL}`} style={{ color: "#ff6a00", textDecoration: "none" }}>{EMAIL}</a>.
        </p>
        <EnglishContactForm />
      </section>
    </main>
  );
}
