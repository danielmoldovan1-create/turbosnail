import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Automatizări AI pentru Afaceri | TurboSnail",
  description: "Articole practice despre automatizări AI, inteligență artificială și digitalizare pentru antreprenori din România. Fără jargon, cu rezultate reale.",
  openGraph: {
    title: "Blog - Automatizări AI pentru Afaceri | TurboSnail",
    description: "Articole practice despre automatizări AI, inteligență artificială și digitalizare pentru antreprenori din România.",
    url: "https://turbosnail.ro/blog",
    siteName: "TurboSnail",
    locale: "ro_RO",
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
