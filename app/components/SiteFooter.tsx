"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKEDIN = "https://www.linkedin.com/company/turbo-snail/";

const colTitle = { fontSize: 11, fontWeight: 700, color: "#ff6a00", letterSpacing: 2, textTransform: "uppercase" as const, marginBottom: 16, fontFamily: "'Outfit', sans-serif" };
const navCol = { display: "flex", flexDirection: "column" as const, gap: 10 };
const navLink = { fontSize: 13, color: "#888899", textDecoration: "none" };

// Footerul site-ului, în română sau, pe paginile /en, în engleză (Google cere o singură limbă pe pagină).
// Tot aici se pune limba documentului, pentru că layout-ul rădăcină are lang="ro" pentru tot site-ul.
export default function SiteFooter({ domains }: { domains: { slug: string; name: string }[] }) {
  const pathname = usePathname() || "/";
  const isEn = pathname === "/en" || pathname.startsWith("/en/");

  useEffect(() => {
    document.documentElement.lang = isEn ? "en" : "ro";
  }, [isEn]);

  return (
    <footer style={{ background: "#070910", borderTop: "1px solid #12141f", padding: "56px 20px 32px", fontFamily: "'Instrument Sans', sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "40px 32px", marginBottom: 48 }}>
          <div>
            <Link href={isEn ? "/en" : "/"} style={{ textDecoration: "none", display: "inline-block", marginBottom: 16 }}>
              <img src="/turbosnail-logo.png" alt="TurboSnail" style={{ height: 40, width: "auto" }} />
            </Link>
            <p style={{ fontSize: 13, color: "#555566", lineHeight: 1.6, maxWidth: 200 }}>
              {isEn ? "AI automation for small and mid-sized businesses." : "Agenție de automatizări AI din Timișoara."}
            </p>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: 12, fontSize: 13, color: "#888899", textDecoration: "none" }}>LinkedIn</a>
          </div>
          {isEn ? (
            <>
              <div>
                <p style={colTitle}>Services</p>
                <nav style={navCol}>
                  <Link href="/en/ai-automation-services" style={navLink}>AI automation services</Link>
                </nav>
              </div>
              <div>
                <p style={colTitle}>Company</p>
                <nav style={navCol}>
                  <Link href="/en#contact" style={navLink}>Contact</Link>
                  <Link href="/en/visibility-test" style={navLink}>Visibility test</Link>
                  <Link href="/en/legal" style={navLink}>Legal notice and privacy</Link>
                </nav>
              </div>
            </>
          ) : (
            <>
              <div>
                <p style={colTitle}>Servicii</p>
                <nav style={navCol}>
                  <Link href="/servicii/automatizari-ai" style={navLink}>Automatizări AI</Link>
                  <Link href="/servicii/consultanta-ai" style={navLink}>Consultanță AI</Link>
                  <Link href="/servicii/cold-email-outbound" style={navLink}>Cold Email & Outbound</Link>
                  <Link href="/servicii/paid-ads-ai" style={navLink}>Paid Ads cu AI</Link>
                  <Link href="/servicii/seo-ai" style={navLink}>SEO bazat pe AI</Link>
                  <Link href="/servicii/raportare-analytics" style={navLink}>Raportare & Analytics</Link>
                </nav>
              </div>
              <div>
                <p style={colTitle}>Domenii</p>
                <nav style={navCol}>
                  {domains.map((d) => (
                    <a key={d.slug} href={`/domenii/${d.slug}`} style={navLink}>{d.name}</a>
                  ))}
                  <Link href="/domenii" style={navLink}>Toate domeniile</Link>
                </nav>
              </div>
              <div>
                <p style={colTitle}>Resurse</p>
                <nav style={navCol}>
                  <a href="/blog" style={navLink}>Blog</a>
                  <a href="/test-vizibilitate" style={navLink}>Test de vizibilitate</a>
                  <Link href="/#contact" style={navLink}>Lista de așteptare</Link>
                  <a href="/politica-de-confidentialitate" style={navLink}>Politica de confidențialitate</a>
                </nav>
              </div>
            </>
          )}
        </div>
        <div style={{ borderTop: "1px solid #12141f", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "#444455" }}>{isEn ? "© 2026 TurboSnail. All rights reserved." : "© 2026 TurboSnail. Toate drepturile rezervate."}</p>
          {!isEn && <p style={{ fontSize: 12, color: "#444455" }}>Timișoara, România</p>}
        </div>
      </div>
    </footer>
  );
}
