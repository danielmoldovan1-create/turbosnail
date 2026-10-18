import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "../../components/Breadcrumb";
import { DOMAINS } from "../data";

const STEP_TITLES = ["Audit gratuit", "Plan clar", "Implementare", "Rezultate măsurabile"];

export async function generateStaticParams() {
  return DOMAINS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const domain = DOMAINS.find((d) => d.slug === slug);
  if (!domain) return {};
  return {
    title: domain.metaTitle,
    description: domain.metaDescription,
    alternates: {
      canonical: `https://turbosnail.ro/domenii/${domain.slug}`,
    },
    openGraph: {
      title: domain.metaTitle,
      description: domain.metaDescription,
      url: `https://turbosnail.ro/domenii/${domain.slug}`,
      siteName: "TurboSnail",
      locale: "ro_RO",
      type: "website",
    },
  };
}

export default async function DomainPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const domain = DOMAINS.find((d) => d.slug === slug);
  if (!domain) notFound();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: domain.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main style={{ fontFamily: "'Instrument Sans', sans-serif", background: "#0a0c14", color: "#eae8e3", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }} />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Instrument+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hd { font-family: 'Outfit', sans-serif; }
        .mx { max-width: 760px; margin: 0 auto; padding: 0 20px; }
        .tag { display: inline-block; background: rgba(255,106,0,0.1); border: 1px solid rgba(255,106,0,0.25); border-radius: 100px; padding: 6px 14px; font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 700; color: #ff6a00; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 18px; }
        .h1 { font-size: clamp(27px, 7.2vw, 42px); font-weight: 900; line-height: 1.12; letter-spacing: -0.8px; margin-bottom: 18px; }
        .answer { font-size: 17px; line-height: 1.65; color: #c8c6c1; }
        .ctas { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
        .btn-p { display: inline-flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #ff8c33, #ff6a00); color: #fff; border-radius: 10px; font-family: 'Outfit', sans-serif; font-weight: 700; padding: 14px 24px; font-size: 15px; text-decoration: none; }
        .btn-s { display: inline-flex; align-items: center; justify-content: center; color: #ff6a00; border: 1px solid rgba(255,106,0,0.35); background: rgba(255,255,255,0.03); border-radius: 10px; font-family: 'Outfit', sans-serif; font-weight: 600; padding: 13px 22px; font-size: 15px; text-decoration: none; }
        .btn-p:focus-visible, .btn-s:focus-visible, .sec a:focus-visible { outline: 2px solid #ff6a00; outline-offset: 2px; }
        .sec { padding-top: 48px; padding-bottom: 44px; }
        .sec h2 { font-family: 'Outfit', sans-serif; font-size: 25px; font-weight: 800; letter-spacing: -0.5px; line-height: 1.25; margin-bottom: 20px; }
        .sec p { font-size: 16px; line-height: 1.75; color: #a8a6a1; }
        .sec p a, .links a { color: #ff6a00; text-decoration: none; border-bottom: 1px solid rgba(255,106,0,0.3); }
        .sec .lead { margin-bottom: 20px; }
        .cards { list-style: none; display: flex; flex-direction: column; gap: 14px; }
        .card { background: #0f1119; border: 1px solid #1a1d2a; border-radius: 12px; padding: 18px 20px; }
        .card-t { font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: 700; color: #eae8e3; margin-bottom: 6px; }
        .sec .card-d { font-size: 14px; line-height: 1.65; color: #888899; }
        .flows { list-style: none; display: flex; flex-direction: column; gap: 14px; }
        .flow { background: #0f1119; border: 1px solid #1a1d2a; border-radius: 14px; padding: 20px; }
        .flow h3 { font-family: 'Outfit', sans-serif; font-size: 17px; font-weight: 700; margin-bottom: 12px; }
        .row { display: flex; gap: 10px; margin-bottom: 8px; }
        .sec .row span:last-child { font-size: 15px; line-height: 1.6; }
        .row-x { color: #cc3333; font-size: 13px; margin-top: 3px; flex-shrink: 0; }
        .row-v { color: #ff6a00; font-size: 13px; margin-top: 3px; flex-shrink: 0; }
        .sec .row.after span:last-child { color: #eae8e3; }
        .sec .tools { font-size: 13px; color: #777788; margin-top: 10px; }
        .stats { list-style: none; display: grid; grid-template-columns: 1fr; gap: 14px; }
        .stat { background: linear-gradient(160deg, #0f1119 0%, #0c0e15 100%); border: 1px solid #1a1d2a; border-radius: 14px; padding: 20px; }
        .stat-v { display: block; font-size: 30px; font-weight: 900; line-height: 1.15; margin-bottom: 8px; background: linear-gradient(135deg, #ff8c33, #ff6a00, #ff5500); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .sec .stat-l { font-size: 15px; line-height: 1.6; color: #a8a6a1; }
        .sec .stat-s { font-size: 13px; color: #777788; margin-top: 10px; }
        .steps { list-style: none; display: flex; flex-direction: column; gap: 14px; }
        .steps li { display: flex; align-items: flex-start; gap: 14px; font-size: 15px; line-height: 1.6; color: #a8a6a1; }
        .steps strong { color: #eae8e3; }
        .step-num { flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: rgba(255,106,0,0.1); border: 1px solid rgba(255,106,0,0.25); display: flex; align-items: center; justify-content: center; font-family: 'Outfit', sans-serif; font-size: 12px; font-weight: 700; color: #ff6a00; margin-top: 1px; }
        .links { list-style: none; display: flex; flex-direction: column; gap: 12px; }
        .links li { font-size: 16px; line-height: 1.7; color: #a8a6a1; padding-left: 18px; position: relative; }
        .links li::before { content: "→"; position: absolute; left: 0; color: #ff6a00; font-size: 13px; top: 3px; }
        .faq-item { border-bottom: 1px solid #1a1d2a; padding: 20px 0; }
        .faq-item:last-child { border-bottom: none; }
        .faq-q { font-family: 'Outfit', sans-serif; font-size: 17px; font-weight: 700; color: #eae8e3; margin-bottom: 8px; }
        .sec .faq-a { font-size: 15px; line-height: 1.7; }
        .final { text-align: center; padding-top: 56px; padding-bottom: 88px; }
        .final .ctas { justify-content: center; }
        .divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(255,106,0,0.12), transparent); max-width: 760px; margin: 0 auto; }
        @media (min-width: 640px) { .stats { grid-template-columns: 1fr 1fr; } }
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
              Înscrie-te →
            </a>
          </div>
        </div>
      </nav>

      <div style={{ paddingTop: 64 }}>
        <Breadcrumb items={[{ label: "Acasă", href: "/" }, { label: "Domenii", href: "/domenii" }, { label: domain.name }]} />
      </div>

      {/* HEADER */}
      <header className="mx" style={{ paddingTop: 24, paddingBottom: 44 }}>
        <span className="tag">{domain.tag}</span>
        <h1 className="hd h1">{domain.h1}</h1>
        <p className="answer">{domain.answer}</p>
        <div className="ctas">
          <a href="/#contact" className="btn-p">Înscrie-te pe lista de așteptare →</a>
          <a href="/test-vizibilitate" className="btn-s">Fă testul de vizibilitate</a>
        </div>
      </header>

      <div className="divider" />

      {/* PROBLEMS */}
      <section className="mx sec">
        <h2>Unde se pierd timp și bani azi {domain.where}</h2>
        <ul className="cards">
          {domain.problems.map((p, i) => (
            <li key={i} className="card">
              <h3 className="card-t">{p.title}</h3>
              <p className="card-d">{p.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="divider" />

      {/* FLOWS */}
      <section className="mx sec">
        <h2>{domain.flowsTitle}</h2>
        <p className="lead">{domain.flowsIntro}</p>
        <ol className="flows">
          {domain.flows.map((f, i) => (
            <li key={i} className="flow">
              <h3>{f.name}</h3>
              <p className="row">
                <span className="row-x" aria-hidden="true">✗</span>
                <span><strong>Azi:</strong> {f.before}</span>
              </p>
              <p className="row after">
                <span className="row-v" aria-hidden="true">✓</span>
                <span><strong>După:</strong> {f.after}</span>
              </p>
              <p className="tools">Instrumente: {f.tools}</p>
            </li>
          ))}
        </ol>
      </section>

      {domain.notes.map((n, i) => (
        <div key={i}>
          <div className="divider" />
          <section className="mx sec">
            <h2>{n.heading}</h2>
            <p>{n.body}</p>
            {n.sources && (
              <p className="tools">
                Surse:{" "}
                {n.sources.map((s, j) => (
                  <span key={j}>
                    {j > 0 && ", "}
                    <a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
                  </span>
                ))}
              </p>
            )}
          </section>
        </div>
      ))}

      <div className="divider" />

      {/* STATS */}
      <section className="mx sec">
        <h2>Cifre verificabile</h2>
        <ul className="stats">
          {domain.stats.map((s, i) => (
            <li key={i} className="stat">
              <span className="hd stat-v">{s.value}</span>
              <p className="stat-l">{s.label}</p>
              <p className="stat-s">
                Sursa: <a href={s.url} target="_blank" rel="noopener noreferrer">{s.source}</a>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <div className="divider" />

      {/* PROCESS */}
      <section className="mx sec">
        <h2>Cum lucrăm</h2>
        <ol className="steps">
          {domain.process.map((p, i) => (
            <li key={i}>
              <span className="step-num">{i + 1}</span>
              <span><strong>{STEP_TITLES[i]}.</strong> {p}</span>
            </li>
          ))}
        </ol>
      </section>

      <div className="divider" />

      {/* INTERNAL LINKS */}
      <section className="mx sec">
        <h2>Servicii implicate</h2>
        <ul className="links">
          {domain.links.map((l, i) => (
            <li key={i}>
              {l.pre}
              <a href={l.href}>{l.anchor}</a>
              {l.post}
            </li>
          ))}
        </ul>
      </section>

      <div className="divider" />

      {/* FAQ */}
      <section className="mx sec">
        <h2>Întrebări frecvente</h2>
        <div>
          {domain.faq.map((item, i) => (
            <div key={i} className="faq-item">
              <h3 className="faq-q">{item.q}</h3>
              <p className="faq-a">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section className="mx sec final">
        <h2>Vezi de unde pornești</h2>
        <p>
          Preluăm un număr limitat de firme în fiecare lună. Înscrie-te pe lista de așteptare pentru auditul gratuit de 30 de minute și îți scriem în cel mult 2 zile lucrătoare. Dacă vrei întâi un reper rapid, testul de vizibilitate îți dă un scor și recomandări în 2 minute.
        </p>
        <div className="ctas">
          <a href="/#contact" className="btn-p">Înscrie-te pe lista de așteptare →</a>
          <a href="/test-vizibilitate" className="btn-s">Fă testul de vizibilitate</a>
        </div>
      </section>
    </main>
  );
}
