import type { Metadata } from "next";
import Link from "next/link";

const EN_URL = "https://turbosnail.ro/en/ai-consulting-romania";
const RO_URL = "https://turbosnail.ro/servicii/consultanta-ai";
const JONES_WALKER = "https://www.joneswalker.com/en/insights/blogs/ai-law-blog/yes-august-2-still-matters-the-eu-approved-a-high-risk-ai-delay-but-most-trans.html";
const EMAIL = "hello@turbosnail.ro";

export const metadata: Metadata = {
  title: "AI Consulting in Romania | TurboSnail",
  description: "AI consulting in Romania for companies that want fewer manual hours: a process audit, a prioritised plan and working automations, in English or Romanian.",
  alternates: {
    canonical: EN_URL,
    languages: {
      en: EN_URL,
      "ro-RO": RO_URL,
      "x-default": RO_URL,
    },
  },
  openGraph: {
    title: "AI Consulting in Romania | TurboSnail",
    description: "AI consulting in Romania for companies that want fewer manual hours: a process audit, a prioritised plan and working automations, in English or Romanian.",
    url: EN_URL,
    siteName: "TurboSnail",
    locale: "en_GB",
    alternateLocale: ["ro_RO"],
    type: "website",
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI consulting in Romania",
  serviceType: "AI consulting",
  description: "Process audit, prioritised plan and implementation of AI automations and conversational AI for companies in Romania.",
  url: EN_URL,
  provider: {
    "@type": "Organization",
    name: "TurboSnail",
    url: "https://turbosnail.ro",
    email: EMAIL,
  },
  areaServed: { "@type": "Country", name: "Romania" },
  inLanguage: "en",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work with companies outside Romania?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work remotely and in English. Local knowledge helps most when a process touches Romanian systems, such as the e-Factura e-invoicing platform, or Romanian-speaking customers.",
      },
    },
    {
      "@type": "Question",
      name: "What does an AI consulting engagement deliver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A list of your repetitive processes with the hours each one takes today, a prioritised plan, and at least one working automation whose effect you can measure.",
      },
    },
    {
      "@type": "Question",
      name: "Do we have to replace the software we already use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We connect the tools you already have, such as your CRM, accounting software, email and spreadsheets. Replacing a system only makes sense when it has no way to exchange data.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle personal data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every flow is designed under the GDPR: it processes only the data it needs, each tool in the chain is documented, and a person stays responsible for the result.",
      },
    },
  ],
};

export default function AiConsultingRomania() {
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
        .prose ol li::before { content: counter(item); position: absolute; left: 0; width: 26px; height: 26px; border-radius: 50%; background: rgba(255,106,0,0.1); border: 1px solid rgba(255,106,0,0.25); font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 700; color: #ff6a00; top: 12px; text-align: center; line-height: 26px; }
        .prose ol li:last-child { border-bottom: none; }
        .prose ul { margin: 0 0 20px 24px; }
        .prose ul li { font-size: 16px; line-height: 1.7; color: #a8a6a1; margin-bottom: 8px; }
        .faq-item { border-bottom: 1px solid #1a1d2a; padding: 22px 0; }
        .faq-item:last-child { border-bottom: none; }
        .faq-q { font-family: 'Outfit', sans-serif; font-size: 17px; font-weight: 700; color: #eae8e3; margin-bottom: 10px; }
        .faq-a { font-size: 15px; line-height: 1.7; color: #a8a6a1; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,12,20,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(26,29,42,0.7)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <img src="/turbosnail-logo.png" alt="TurboSnail" style={{ height: 46, width: "auto" }} />
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <Link href="/servicii/consultanta-ai" hrefLang="ro" lang="ro" style={{ fontSize: 14, color: "#888899", textDecoration: "none" }}>Română</Link>
            <a href={`mailto:${EMAIL}`} style={{ background: "linear-gradient(135deg, #ff8c33, #ff6a00)", color: "#fff", borderRadius: 10, fontFamily: "'Outfit', sans-serif", fontWeight: 700, padding: "10px 22px", fontSize: 13, textDecoration: "none" }}>
              Contact →
            </a>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <section style={{ paddingTop: 120, paddingBottom: 56 }}>
        <div className="mx">
          <div style={{ display: "inline-block", background: "rgba(255,106,0,0.1)", border: "1px solid rgba(255,106,0,0.25)", borderRadius: 100, padding: "6px 16px", fontSize: 11, fontWeight: 700, color: "#ff6a00", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 24, fontFamily: "'Outfit', sans-serif" }}>
            AI CONSULTING · ROMANIA
          </div>
          <h1 className="hd" style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.1, letterSpacing: -1, marginBottom: 24 }}>
            AI consulting in Romania: fewer manual hours, not more slides
          </h1>
          <p style={{ fontSize: 18, color: "#a8a6a1", lineHeight: 1.65, maxWidth: 640 }}>
            TurboSnail is an <strong style={{ color: "#eae8e3" }}>AI consulting</strong> practice based in Timișoara, <strong style={{ color: "#eae8e3" }}>Romania</strong>. We find the repetitive work in your company that AI can take over, build the automations and measure the hours they save. We work remotely, in English or Romanian.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <article className="prose mx" style={{ paddingBottom: 40 }}>

        <h2>What AI consulting means in practice</h2>
        <p>
          In a business, artificial intelligence means software that can read and write text, pull information out of documents and make routine decisions from rules and examples. It does not mean robots replacing your team. It means the email that sorts itself, the invoice that enters your accounting system without anyone typing it, and the weekly report that is ready before the Monday meeting.
        </p>
        <p>
          AI consulting answers one question: where in your company is this worth using, and where is it not? A good AI consultant starts with your processes, not with a tool. The work is to find the tasks your team repeats every week, estimate what they cost in hours and pick the ones where an automation pays off first.
        </p>

        <h2>What our AI consultancy covers</h2>
        <ol>
          <li><strong>Process audit</strong>: a structured interview of 60 to 90 minutes that maps the repetitive work in each area of the company and estimates the hours it takes.</li>
          <li><strong>A prioritised plan</strong>: which processes to automate first, what stays manual and how you will know it worked.</li>
          <li><strong>Implementation</strong>: automations for documents and invoices, including Romania&apos;s e-Factura e-invoicing system, reports, email and CRM updates, built on the tools you already use.</li>
          <li><strong>Measurement</strong>: hours saved and errors removed, compared with how the process ran before.</li>
        </ol>
        <p>
          The same approach is described in Romanian on our <Link href="/servicii/consultanta-ai" hrefLang="ro">AI consultancy page</Link> for companies in Romania.
        </p>

        <h2>Conversational AI: chatbots and assistants</h2>
        <p>
          Many requests for AI consultants in Romania are about conversational AI: a website chatbot that answers customers, or an internal assistant that finds information in company documents. We build both in Romanian and English, connected to your own data, with a clear handover to a person when the question needs one.
        </p>
        <p>
          Since 2 August 2026, the EU AI Act requires that people are told when they are interacting with an AI system, unless it is already obvious to them, as the <a href={JONES_WALKER} target="_blank" rel="noopener noreferrer">Jones Walker analysis of the AI Act transparency rules</a> explains. We build that notice into the first message of every chatbot we deliver.
        </p>

        <h2>Who an AI consultancy in Romania is a good fit for</h2>
        <ul>
          <li>Small and mid-sized companies in Romania that want to grow without adding administrative work.</li>
          <li>International teams with operations in Romania that need someone familiar with local systems and Romanian-speaking customers.</li>
          <li>Companies that already pay for AI tools but cannot say what those tools save.</li>
        </ul>

        <h2>How a project runs</h2>
        <ol>
          <li><strong>Audit</strong>: we map the processes and the hours they take.</li>
          <li><strong>Plan</strong>: you get the priorities and the expected effect of each automation.</li>
          <li><strong>Build</strong>: one process first, tested with your real data before it replaces the manual work.</li>
          <li><strong>Measure and extend</strong>: once the first automation runs reliably, we move to the next one.</li>
        </ol>

        <h2>Who you will work with</h2>
        <p>
          Daniel Moldovan is an AI automation specialist and the founder of TurboSnail, based in Timișoara. He has worked in e-commerce and SaaS on SEO, marketing strategy and conversion rate optimisation, and holds an Anthropic certification. Anthropic is the company behind Claude.
        </p>

        <h2>Frequently asked questions</h2>
      </article>

      <section style={{ padding: "0 20px 60px", maxWidth: 760, margin: "0 auto" }}>
        {faqLd.mainEntity.map((item, i) => (
          <div key={i} className="faq-item">
            <div className="faq-q">{item.name}</div>
            <div className="faq-a">{item.acceptedAnswer.text}</div>
          </div>
        ))}
      </section>

      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,106,0,0.12), transparent)", maxWidth: 760, margin: "0 auto" }} />

      {/* CTA */}
      <section style={{ padding: "60px 20px 96px", textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
        <h2 className="hd" style={{ fontSize: 28, fontWeight: 900, letterSpacing: -0.6, marginBottom: 14 }}>Which process takes the most hours in your company?</h2>
        <p style={{ fontSize: 16, color: "#a8a6a1", marginBottom: 32, lineHeight: 1.65 }}>
          Write to us in English at {EMAIL}. We reply within two business days.
        </p>
        <a href={`mailto:${EMAIL}`} style={{ background: "linear-gradient(135deg, #ff8c33, #ff6a00)", color: "#fff", borderRadius: 10, fontFamily: "'Outfit', sans-serif", fontWeight: 700, padding: "15px 32px", fontSize: 15, textDecoration: "none", display: "inline-block" }}>
          Email us →
        </a>
      </section>
    </main>
  );
}
