import type { Metadata } from "next";
import "./globals.css";
import { DOMAINS } from "./domenii/data";
import VisitTracker from "./components/VisitTracker";
import SiteFooter from "./components/SiteFooter";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "TurboSnail | Automatizări AI pentru Afaceri din România",
    template: "%s",
  },
  description: "Agenție de automatizări AI din Timișoara. Recuperezi ore în fiecare săptămână prin automatizarea proceselor repetitive. Audit gratuit, fără obligații.",
  metadataBase: new URL("https://turbosnail.ro"),
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

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://turbosnail.ro/#organization",
      name: "TurboSnail",
      url: "https://turbosnail.ro",
      logo: { "@type": "ImageObject", url: "https://turbosnail.ro/turbosnail-logo.png" },
      description: "Agenție de automatizări AI și consultanță pentru afaceri din România.",
      sameAs: ["https://www.linkedin.com/company/turbo-snail/"],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://turbosnail.ro/#localbusiness",
      name: "TurboSnail",
      description: "Agenție de automatizări AI și consultanță pentru afaceri din România.",
      url: "https://turbosnail.ro",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Timișoara",
        addressRegion: "Timiș",
        addressCountry: "RO",
      },
      geo: { "@type": "GeoCoordinates", latitude: 45.7489, longitude: 21.2087 },
      areaServed: { "@type": "Country", name: "România" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd).replace(/</g, "\\u003c") }}
        />
        <VisitTracker />
        {children}
        <SiteFooter domains={DOMAINS.map((d) => ({ slug: d.slug, name: d.name }))} />
        <Analytics />
      </body>
    </html>
  );
}
