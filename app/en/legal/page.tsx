import type { Metadata } from "next";
import Link from "next/link";

const EN_URL = "https://turbosnail.ro/en/legal";
const EMAIL = "hello@turbosnail.ro";
const TITLE = "Legal notice and privacy | TurboSnail";
const DESCRIPTION = "Who operates this website, what personal data we process when you contact us or visit the site, who we share it with, how long we keep it and your GDPR rights.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: EN_URL,
  },
  robots: {
    index: false,
    follow: true,
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
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function EnglishLegal() {
  return (
    <main lang="en" style={{ fontFamily: "'Instrument Sans', sans-serif", background: "#0a0c14", color: "#eae8e3", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Instrument+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hd { font-family: 'Outfit', sans-serif; }
        .mx { max-width: 760px; margin: 0 auto; padding: 0 20px; }
        .legal h2 { font-family: 'Outfit', sans-serif; font-size: 22px; font-weight: 800; margin: 40px 0 14px; color: #eae8e3; letter-spacing: -0.3px; }
        .legal h3 { font-family: 'Outfit', sans-serif; font-size: 17px; font-weight: 700; margin: 24px 0 10px; color: #eae8e3; }
        .legal p { font-size: 16px; line-height: 1.75; color: #a8a6a1; margin-bottom: 16px; }
        .legal ul { margin: 0 0 16px 22px; }
        .legal li { font-size: 15px; line-height: 1.7; color: #a8a6a1; margin-bottom: 6px; }
        .legal a { color: #ff6a00; text-decoration: none; border-bottom: 1px solid rgba(255,106,0,0.3); }
        .legal strong { color: #eae8e3; font-weight: 600; }
        .updated { font-size: 13px; color: #666677; margin-bottom: 24px; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,12,20,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(26,29,42,0.7)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <Link href="/en" style={{ textDecoration: "none" }}>
            <img src="/turbosnail-logo.png" alt="TurboSnail" style={{ height: 46, width: "auto" }} />
          </Link>
          <Link href="/en" style={{ fontSize: 14, color: "#888899", textDecoration: "none" }}>Home</Link>
        </div>
      </nav>

      <article className="legal mx" style={{ paddingTop: 120, paddingBottom: 96 }}>
        <h1 className="hd" style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.15, letterSpacing: -0.8, marginBottom: 12 }}>Legal notice and privacy</h1>
        <p className="updated">Last updated: 9 November 2026</p>
        <p>
          This page explains who operates this website, what personal data we process, why, who we share it with, how long we keep it and what rights you have under the EU General Data Protection Regulation (GDPR).
        </p>

        <h2>1. Who we are</h2>
        <p>
          This website is operated by TurboSnail, Timișoara, Romania. For any question or request about your data, email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>

        <h2>2. What data we process and why</h2>
        <h3>Emails you send us</h3>
        <p>
          When you write to us, we receive your name, your email address and whatever you include in the message.
        </p>
        <ul>
          <li>Purpose: to reply and to prepare the proposal you ask for.</li>
          <li>Legal basis: steps taken at your request before entering into a contract (Article 6(1)(b) GDPR).</li>
        </ul>
        <p>
          The Romanian-language pages of this site also have a contact form and a visibility test. The <Link href="/politica-de-confidentialitate" hrefLang="ro">Romanian version of this policy</Link> describes how we process the data sent through them.
        </p>

        <h3>Technical data</h3>
        <p>
          When you visit the site, your browser automatically sends technical data such as your IP address, browser type and the page requested. Our hosting provider uses it to deliver the pages and to protect the site.
        </p>
        <ul>
          <li>Legal basis: our legitimate interest in a working, secure website (Article 6(1)(f) GDPR).</li>
        </ul>

        <h3>Visit statistics</h3>
        <p>
          We use Vercel Web Analytics to see how many visits each page gets. For each visit it records the page, the referring site, the approximate country, region and city, the device type, the operating system and the browser. It does not use cookies and does not identify you: visitors are told apart by a code calculated from the browser request, which is discarded after 24 hours, and we only see totals.
        </p>
        <ul>
          <li>Legal basis: our legitimate interest in understanding which pages are useful (Article 6(1)(f) GDPR).</li>
        </ul>

        <h2>3. Who we share data with</h2>
        <p>We do not sell your data. We share it only with providers that run parts of the site for us and process the data on our behalf:</p>
        <ul>
          <li><strong>Vercel Inc.</strong> hosts the site and provides the visit statistics (<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel privacy policy</a>).</li>
          <li><strong>Google</strong>: the site&apos;s fonts load from Google Fonts, so your browser sends your IP address to Google (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google privacy policy</a>).</li>
          <li><strong>Web3Forms</strong> delivers the forms on the Romanian-language pages to our inbox.</li>
          <li>The provider of our email inbox.</li>
        </ul>
        <p>We disclose data to public authorities only when the law requires it.</p>

        <h2>4. Transfers outside the European Economic Area</h2>
        <p>
          Some of these providers may process data outside the European Economic Area, for example in the United States. Such transfers rely only on the mechanisms set out in the GDPR: an adequacy decision of the European Commission, such as the EU-U.S. Data Privacy Framework, or the standard contractual clauses approved by the Commission.
        </p>

        <h2>5. How long we keep data</h2>
        <ul>
          <li>Emails you send us: up to 2 years after our last contact, unless you become a client.</li>
          <li>If you become a client, contract and invoice data are kept for as long as tax and accounting law requires.</li>
        </ul>

        <h2>6. Your rights</h2>
        <p>Under the GDPR you have the right to:</p>
        <ul>
          <li>know what data we hold about you and receive a copy;</li>
          <li>have inaccurate or incomplete data corrected;</li>
          <li>have your data erased;</li>
          <li>restrict the processing;</li>
          <li>receive your data in a structured format or have it sent to another company (portability);</li>
          <li>object to processing based on our legitimate interest;</li>
          <li>withdraw your consent at any time, without affecting processing carried out before the withdrawal.</li>
        </ul>
        <p>
          To exercise any of these rights, email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We reply within one month.
        </p>
        <p>
          If you are not satisfied with our answer, you can complain to the data protection authority where you live or work. Our lead authority is the Romanian National Supervisory Authority for Personal Data Processing (ANSPDCP), <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">www.dataprotection.ro</a>.
        </p>

        <h2>7. Cookies and browser storage</h2>
        <p>
          The site does not use analytics or advertising cookies, and the visit statistics work without cookies.
        </p>
        <p>
          Your browser keeps in sessionStorage the page you arrived on, the referring site and the page you visited before. This information reaches us only if you submit a form, and it is deleted when you close the tab.
        </p>

        <h2>8. Security</h2>
        <p>
          The site uses an encrypted connection (HTTPS). Messages we receive are accessible only to the people at TurboSnail who reply to them.
        </p>

        <h2>9. Changes to this page</h2>
        <p>
          When we change this page, we update the date at the top.
        </p>
      </article>
    </main>
  );
}
