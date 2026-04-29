import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "../data";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://turbosnail.ro/servicii/${service.slug}`,
      siteName: "TurboSnail",
      locale: "ro_RO",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.metaDescription,
    "url": `https://turbosnail.ro/servicii/${service.slug}`,
    "provider": {
      "@type": "Organization",
      "name": "TurboSnail",
      "url": "https://turbosnail.ro",
    },
    "areaServed": { "@type": "Country", "name": "România" },
    "inLanguage": "ro-RO",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main style={{ fontFamily: "'Instrument Sans', sans-serif", background: "#0a0c14", color: "#eae8e3", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
        .prose blockquote { border-left: 3px solid #ff6a00; padding: 16px 20px; margin: 28px 0; background: rgba(255,106,0,0.05); border-radius: 0 8px 8px 0; }
        .faq-item { border-bottom: 1px solid #1a1d2a; padding: 22px 0; }
        .faq-item:last-child { border-bottom: none; }
        .faq-q { font-family: 'Outfit', sans-serif; font-size: 17px; font-weight: 700; color: #eae8e3; margin-bottom: 10px; }
        .faq-a { font-size: 15px; line-height: 1.7; color: #a8a6a1; }
        .card-list { display: flex; flex-direction: column; gap: 16px; margin: 24px 0; }
        .card-item { background: #0f1119; border: 1px solid #1a1d2a; border-radius: 12px; padding: 20px 24px; }
        .card-item-title { font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 700; color: #eae8e3; margin-bottom: 6px; }
        .card-item-detail { font-size: 14px; line-height: 1.65; color: #888899; }
        .steps-list { list-style: none; display: flex; flex-direction: column; gap: 12px; margin: 24px 0; counter-reset: steps; }
        .steps-list li { display: flex; align-items: flex-start; gap: 14px; font-size: 15px; line-height: 1.6; color: #a8a6a1; }
        .step-num { flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: rgba(255,106,0,0.1); border: 1px solid rgba(255,106,0,0.25); display: flex; align-items: center; justify-content: center; font-family: 'Outfit', sans-serif; font-size: 12px; font-weight: 700; color: #ff6a00; margin-top: 1px; }
        .divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(255,106,0,0.12), transparent); max-width: 760px; margin: 0 auto; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,12,20,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(26,29,42,0.7)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <img src="/turbosnail-logo.png" alt="TurboSnail" style={{ height: 46, width: "auto" }} />
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <a href="/servicii" style={{ fontSize: 14, color: "#888899", textDecoration: "none" }}>Servicii</a>
            <a href="/blog" style={{ fontSize: 14, color: "#888899", textDecoration: "none" }}>Blog</a>
            <a href="/#contact" style={{ background: "linear-gradient(135deg, #ff8c33, #ff6a00)", color: "#fff", borderRadius: 10, fontFamily: "'Outfit', sans-serif", fontWeight: 700, padding: "10px 22px", fontSize: 13, textDecoration: "none" }}>
              Audit Gratuit →
            </a>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <section style={{ paddingTop: 120, paddingBottom: 60 }}>
        <div className="mx">
          <div style={{ display: "inline-block", background: "rgba(255,106,0,0.1)", border: "1px solid rgba(255,106,0,0.25)", borderRadius: 100, padding: "6px 16px", fontSize: 11, fontWeight: 700, color: "#ff6a00", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 24, fontFamily: "'Outfit', sans-serif" }}>
            {service.tag}
          </div>
          <h1 className="hd" style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, letterSpacing: -1, marginBottom: 24 }}>
            {service.h1}
          </h1>
          <p style={{ fontSize: 19, color: "#a8a6a1", lineHeight: 1.65, maxWidth: 620, marginBottom: 36 }}>
            {service.intro}
          </p>
          <a href="/#contact" style={{ background: "linear-gradient(135deg, #ff8c33, #ff6a00)", color: "#fff", borderRadius: 10, fontFamily: "'Outfit', sans-serif", fontWeight: 700, padding: "15px 32px", fontSize: 15, textDecoration: "none", display: "inline-block" }}>
            Solicită un audit gratuit →
          </a>
        </div>
      </section>

      <div className="divider" />

      {/* FOR WHO */}
      <section style={{ paddingTop: 56, paddingBottom: 48 }}>
        <div className="mx">
          <h2 className="hd" style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: -0.5 }}>{service.forWho.title}</h2>
          <div className="card-list">
            {service.forWho.items.map((item, i) => (
              <div key={i} className="card-item">
                <div className="card-item-title">{item.type}</div>
                <div className="card-item-detail">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PROBLEMS */}
      <section style={{ paddingTop: 56, paddingBottom: 48 }}>
        <div className="mx">
          <h2 className="hd" style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: -0.5 }}>{service.problems.title}</h2>
          <div className="card-list">
            {service.problems.items.map((item, i) => (
              <div key={i} className="card-item">
                <div className="card-item-title">{item.problem}</div>
                <div className="card-item-detail">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* INCLUDES */}
      <section style={{ paddingTop: 56, paddingBottom: 48 }}>
        <div className="mx">
          <h2 className="hd" style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: -0.5 }}>{service.includes.title}</h2>
          <ol className="steps-list">
            {service.includes.steps.map((step, i) => (
              <li key={i}>
                <span className="step-num">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="divider" />

      {/* CONTENT SECTIONS */}
      <article className="prose mx" style={{ paddingTop: 56, paddingBottom: 24 }}>
        {service.sections.map((section, i) => (
          <div key={i}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </div>
        ))}

        <blockquote>
          <p style={{ fontStyle: "italic", fontSize: 18, color: "#c8c6c1", marginBottom: 12 }}>"{service.quote.text}"</p>
          <p style={{ fontSize: 14, color: "#666677" }}>
            <strong style={{ color: "#888899" }}>{service.quote.author}</strong>, {service.quote.role}
          </p>
        </blockquote>

        <p>
          Conform <a href={service.externalLink.url} target="_blank" rel="noopener noreferrer">{service.externalLink.anchor}</a>, companiile care adoptă automatizarea și AI în procese operaționale obțin câștiguri semnificative de productivitate față de competitorii care amână decizia. Pentru mai multe detalii despre cum pot <a href="https://turbosnail.ro">automatizări AI</a> să transforme operațiunile firmei tale, vizitează pagina noastră principală.
        </p>
      </article>

      <div className="divider" />

      {/* FAQ */}
      <section style={{ paddingTop: 56, paddingBottom: 56 }}>
        <div className="mx">
          <h2 className="hd" style={{ fontSize: 28, fontWeight: 800, marginBottom: 32, letterSpacing: -0.5 }}>Întrebări frecvente</h2>
          <div>
            {service.faq.map((item, i) => (
              <div key={i} className="faq-item">
                <div className="faq-q">{item.q}</div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section style={{ paddingTop: 72, paddingBottom: 96, textAlign: "center" }}>
        <div className="mx">
          <h2 className="hd" style={{ fontSize: 34, fontWeight: 900, letterSpacing: -0.8, marginBottom: 16 }}>Gata să începi?</h2>
          <p style={{ fontSize: 17, color: "#a8a6a1", marginBottom: 36, lineHeight: 1.65 }}>
            Completează formularul de contact și te contactăm în 24 de ore pentru un audit gratuit, fără obligații.
          </p>
          <a href="/#contact" style={{ background: "linear-gradient(135deg, #ff8c33, #ff6a00)", color: "#fff", borderRadius: 10, fontFamily: "'Outfit', sans-serif", fontWeight: 700, padding: "17px 40px", fontSize: 16, textDecoration: "none", display: "inline-block" }}>
            Vreau un audit gratuit →
          </a>
        </div>
      </section>
    </main>
  );
}
