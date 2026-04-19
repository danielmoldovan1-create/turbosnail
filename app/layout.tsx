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
      <body>{children}</body>
    </html>
  );
}
