import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TurboSnail | Automatizări AI pentru Afaceri din România",
    template: "%s | TurboSnail",
  },
  description: "Agenție de automatizări AI din Timișoara. Recuperezi ore în fiecare săptămână prin automatizarea proceselor repetitive. Audit gratuit, fără obligații.",
  metadataBase: new URL("https://turbosnail.ro"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TurboSnail | Automatizări AI pentru Afaceri din România",
    description: "Agenție de automatizări AI din Timișoara. Recuperezi ore în fiecare săptămână prin automatizarea proceselor repetitive.",
    url: "https://turbosnail.ro",
    siteName: "TurboSnail",
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TurboSnail | Automatizări AI pentru Afaceri din România",
    description: "Agenție de automatizări AI din Timișoara. Audit gratuit, fără obligații.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body>
        {children}
        <footer style={{ background: "#070910", borderTop: "1px solid #12141f", padding: "56px 20px 32px", fontFamily: "'Instrument Sans', sans-serif" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "40px 32px", marginBottom: 48 }}>
              <div>
                <a href="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: 16 }}>
                  <img src="/Turbosnail logo.PNG" alt="TurboSnail" style={{ height: 40, width: "auto" }} />
                </a>
                <p style={{ fontSize: 13, color: "#555566", lineHeight: 1.6, maxWidth: 200 }}>
                  Agenție de automatizări AI din Timișoara.
                </p>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: "#ff6a00", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16, fontFamily: "'Outfit', sans-serif" }}>Servicii</p>
                <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <a href="/servicii/automatizari-ai" style={{ fontSize: 13, color: "#888899", textDecoration: "none" }}>Automatizări AI</a>
                  <a href="/servicii/consultanta-ai" style={{ fontSize: 13, color: "#888899", textDecoration: "none" }}>Consultanță AI</a>
                  <a href="/servicii/chatbot-ai-romania" style={{ fontSize: 13, color: "#888899", textDecoration: "none" }}>Chatbot AI în Română</a>
                  <a href="/servicii/cold-email-outbound" style={{ fontSize: 13, color: "#888899", textDecoration: "none" }}>Cold Email & Outbound</a>
                  <a href="/servicii/paid-ads-ai" style={{ fontSize: 13, color: "#888899", textDecoration: "none" }}>Paid Ads cu AI</a>
                  <a href="/servicii/seo-ai" style={{ fontSize: 13, color: "#888899", textDecoration: "none" }}>SEO bazat pe AI</a>
                  <a href="/servicii/raportare-analytics" style={{ fontSize: 13, color: "#888899", textDecoration: "none" }}>Raportare & Analytics</a>
                </nav>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: "#ff6a00", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16, fontFamily: "'Outfit', sans-serif" }}>Resurse</p>
                <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <a href="/blog" style={{ fontSize: 13, color: "#888899", textDecoration: "none" }}>Blog</a>
                  <a href="/#contact" style={{ fontSize: 13, color: "#888899", textDecoration: "none" }}>Audit Gratuit</a>
                </nav>
              </div>
            </div>
            <div style={{ borderTop: "1px solid #12141f", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
              <p style={{ fontSize: 12, color: "#444455" }}>© 2026 TurboSnail. Toate drepturile rezervate.</p>
              <p style={{ fontSize: 12, color: "#444455" }}>Timișoara, România</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
