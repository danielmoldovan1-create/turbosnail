import type { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  title: "Automatizări AI pentru Afaceri din România | TurboSnail",
  description: "Agenție de automatizări AI din Timișoara. Recuperezi ore în fiecare săptămână prin automatizarea proceselor repetitive. Audit gratuit, fără obligații.",
  alternates: {
    canonical: "https://turbosnail.ro",
  },
  openGraph: {
    title: "Automatizări AI pentru Afaceri din România | TurboSnail",
    description: "Agenție de automatizări AI din Timișoara. Recuperezi ore în fiecare săptămână prin automatizarea proceselor repetitive.",
    url: "https://turbosnail.ro",
    siteName: "TurboSnail",
    locale: "ro_RO",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://turbosnail.ro/#website",
  "url": "https://turbosnail.ro",
  "name": "TurboSnail",
  "description": "Agenție de automatizări AI și consultanță pentru afaceri din România.",
  "inLanguage": "ro-RO"
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <HomeClient />
    </>
  );
}
