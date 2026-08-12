import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultanță AI pentru Companii din România: Ghid Complet 2026 | TurboSnail",
  description: "Consultanță AI pentru companii din România: audit complet, plan concret și implementare fără jargon. Aflăm exact ce merită automatizat în firma ta și estimăm ROI-ul real.",
  alternates: {
    canonical: "https://turbosnail.ro/servicii/consultanta-ai",
  },
  openGraph: {
    title: "Consultanță AI pentru Companii din România | TurboSnail",
    description: "Consultanță AI pentru companii din România: audit complet, plan concret și implementare fără jargon.",
    url: "https://turbosnail.ro/servicii/consultanta-ai",
    siteName: "TurboSnail",
    locale: "ro_RO",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Consultanță AI pentru Companii",
  description: "Audit complet al proceselor, roadmap clar și implementare fără jargon pentru companii din România.",
  url: "https://turbosnail.ro/servicii/consultanta-ai",
  provider: {
    "@type": "Organization",
    name: "TurboSnail",
    url: "https://turbosnail.ro",
  },
  areaServed: { "@type": "Country", name: "România" },
  inLanguage: "ro-RO",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ce se întâmplă concret la un audit de consultanță AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Discutăm în detaliu fiecare zonă operațională a businessului tău printr-un interviu structurat de 60-90 de minute. Identificăm procesele repetitive, estimăm costul lor real în ore și bani și stabilim prioritățile de automatizare. La final primești un document scris cu recomandări concrete și estimări de ROI, nu prezentări vagi despre potențialul AI.",
      },
    },
    {
      "@type": "Question",
      name: "Am nevoie de sisteme speciale sau date pregătite înainte de audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nu. Auditul analizează businessul de la zero, indiferent de nivelul de digitalizare actual. Dacă ai deja instrumente (CRM, ERP, tool-uri de email marketing), le includem în analiză. Dacă nu ai nimic, recomandăm ce se potrivește cel mai bine nevoilor și bugetului tău.",
      },
    },
    {
      "@type": "Question",
      name: "Cât de repede pot vedea rezultate după consultanță?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dacă implementezi recomandările, primele automatizări simple (notificări automate, sincronizare date, emailuri de follow-up) se pot pune în funcțiune în 1-2 săptămâni după audit. Economiile de timp sunt vizibile imediat din prima săptămână de funcționare.",
      },
    },
    {
      "@type": "Question",
      name: "Trebuie să implementați voi după consultanță?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nu. Auditul poate rămâne un document de strategie pe care îl implementezi singur sau cu echipa ta. Sau putem prelua implementarea noi. Alegerea îți aparține, nu există obligații după audit.",
      },
    },
    {
      "@type": "Question",
      name: "Este consultanța AI potrivită și pentru firme mici, nu doar corporații?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da. Firmele mici și medii beneficiază cel mai mult de pe urma consultanței AI, pentru că fiecare oră economisită contează mai mult și bugetele sunt mai limitate. Recomandăm soluții accesibile, fără sisteme care creează dependență față de un furnizor.",
      },
    },
  ],
};

export default function ConsultantaAIPage() {
  return (
    <main style={{ fontFamily: "'Instrument Sans', sans-serif", background: "#0a0c14", color: "#eae8e3", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Instrument+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hd { font-family: 'Outfit', sans-serif; }
        .mx { max-width: 760px; margin: 0 auto; padding: 0 20px; }
        .prose p { font-size: 17px; line-height: 1.75; color: #a8a6a1; margin-bottom: 20px; }
        .prose strong { color: #eae8e3; font-weight: 600; }
        .prose a { color: #ff6a00; text-decoration: none; border-bottom: 1px solid rgba(255,106,0,0.3); }
        .prose a:hover { border-bottom-color: #ff6a00; }
        .prose blockquote { border-left: 3px solid #ff6a00; padding: 16px 20px; margin: 28px 0; background: rgba(255,106,0,0.05); border-radius: 0 8px 8px 0; }
        .faq-item { border-bottom: 1px solid #1a1d2a; padding: 22px 0; }
        .faq-item:last-child { border-bottom: none; }
        .faq-q { font-family: 'Outfit', sans-serif; font-size: 17px; font-weight: 700; color: #eae8e3; margin-bottom: 10px; }
        .faq-a { font-size: 15px; line-height: 1.7; color: #a8a6a1; }
        .card-item { background: #0f1119; border: 1px solid #1a1d2a; border-radius: 12px; padding: 20px 24px; margin-bottom: 12px; }
        .card-item-title { font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 700; color: #eae8e3; margin-bottom: 6px; }
        .card-item-detail { font-size: 14px; line-height: 1.65; color: #888899; }
        .step-num { flex-shrink: 0; width: 32px; height: 32px; border-radius: 50%; background: rgba(255,106,0,0.1); border: 1px solid rgba(255,106,0,0.25); display: flex; align-items: center; justify-content: center; font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 700; color: #ff6a00; margin-top: 2px; }
        .divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(255,106,0,0.12), transparent); max-width: 760px; margin: 0 auto; }
        .sign-num { font-family: 'Outfit', sans-serif; font-size: 28px; font-weight: 900; color: rgba(255,106,0,0.4); margin-bottom: 8px; line-height: 1; }
        .compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media (max-width: 600px) { .compare-grid { grid-template-columns: 1fr; } }
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
            CONSULTANȚĂ AI
          </div>
          <h1 className="hd" style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, letterSpacing: -1, marginBottom: 24 }}>
            Consultanță AI pentru companii din România
          </h1>
          <p style={{ fontSize: 19, color: "#a8a6a1", lineHeight: 1.65, maxWidth: 620, marginBottom: 36 }}>
            Consultanța AI este procesul prin care analizăm operațiunile businessului tău, identificăm unde inteligența artificială poate reduce munca manuală repetitivă și construim un plan concret de implementare cu rezultate măsurabile. Nu prezentări despre viitorul tehnologiei. Procese concrete, economii reale, fără jargon.
          </p>
          <a href="/#contact" style={{ background: "linear-gradient(135deg, #ff8c33, #ff6a00)", color: "#fff", borderRadius: 10, fontFamily: "'Outfit', sans-serif", fontWeight: 700, padding: "15px 32px", fontSize: 15, textDecoration: "none", display: "inline-block" }}>
            Solicită un audit gratuit →
          </a>
        </div>
      </section>

      <div className="divider" />

      {/* CE ESTE CONSULTANTA AI */}
      <section style={{ paddingTop: 56, paddingBottom: 48 }}>
        <div className="mx">
          <h2 className="hd" style={{ fontSize: 28, fontWeight: 800, marginBottom: 20, letterSpacing: -0.5 }}>Ce este consultanța AI și când ai nevoie de ea</h2>
          <article className="prose">
            <p>
              Inteligența artificială, în context de business, nu înseamnă roboți care înlocuiesc echipe întregi sau sisteme sofisticate accesibile doar corporațiilor. Înseamnă programe capabile să execute sarcini care până acum necesitau judecată umană: să clasifice și să răspundă emailuri, să extragă informații din documente, să genereze rapoarte pe baza datelor din sisteme diferite sau să detecteze tipare în seturi mari de date. Consultanța AI este răspunsul la o întrebare simplă dar costisitoare dacă rămâne fără răspuns: unde anume din businessul meu are sens să introduc aceste instrumente?
            </p>
            <p>
              Un consultant AI serios nu îți vinde software și nu îți propune proiecte cu durate de 6-12 luni fără livrabile intermediare. Analizează procesele tale, cuantifică costul lor real în ore și bani pe săptămână, identifică unde există soluții mature și accesibile pentru dimensiunea ta de business și îți oferă un roadmap prioritizat. Consultanța AI pentru companii din București sau din orice alt oraș din România urmează același principiu: rezultate concrete, nu promisiuni vagi.
            </p>
            <p>
              Ai nevoie de consultanță inteligență artificială pentru firma ta în câteva situații clare: echipa petrece mai mult de 5 ore pe săptămână pe sarcini identice repetate; ai investit în abonamente la tool-uri AI fără să știi dacă aduc valoare reală; businessul crește dar angajezi tot mai mult pentru a ține ritmul cu administrația; sau vrei să prezinți un plan concret de eficientizare conducerii și ai nevoie de estimări de ROI cu date reale, nu intuiție. Dacă te regăsești în oricare din aceste situații, citește mai departe.
            </p>
          </article>
        </div>
      </section>

      <div className="divider" />

      {/* 5 SEMNE */}
      <section style={{ paddingTop: 56, paddingBottom: 48 }}>
        <div className="mx">
          <h2 className="hd" style={{ fontSize: 28, fontWeight: 800, marginBottom: 8, letterSpacing: -0.5 }}>5 semne că firma ta are nevoie de consultanță AI</h2>
          <p style={{ fontSize: 16, color: "#888899", marginBottom: 32, lineHeight: 1.6 }}>Nu orice business are nevoie de AI acum. Dar aceste cinci semnale indică clar că merită să analizezi.</p>

          {[
            {
              n: "01",
              title: "Angajații fac același lucru manual de zeci de ori pe zi",
              detail: "Introducerea datelor în mai multe sisteme, trimiterea aceluiași tip de email, completarea acelorași câmpuri în formulare diferite. Dacă un om din echipa ta poate descrie sarcina în 3 pași și o repetă de zeci de ori pe săptămână, există o automatizare care o poate prelua complet."
            },
            {
              n: "02",
              title: "Plătești pentru tool-uri AI pe care nu le folosești eficient",
              detail: "Ai abonamente la ChatGPT, Notion AI sau alte platforme, le folosești ocazional și nu știi dacă aduc valoare reală. Un audit de consultanță AI identifică ce subscripții generează ROI real, ce poate fi eliminat și unde lipsește un tool care ar face diferența."
            },
            {
              n: "03",
              title: "Businessul crește, dar operațiunile nu țin pasul fără să angajezi",
              detail: "Fiecare client nou adaugă ore de muncă administrativă: onboarding manual, emailuri de comunicare, actualizarea unor documente. Dacă creșterea businessului se traduce automat în mai multă muncă de birou, automatizările AI pot rupe această corelație."
            },
            {
              n: "04",
              title: "Rapoartele și datele vin cu întârziere sau sunt adesea incorecte",
              detail: "Raportul săptămânal este gata abia joi pentru că cineva trebuie să colecteze datele din 4 sisteme diferite și să le agregeze manual. Sau apar erori pentru că datele au fost copiate greșit. Acestea sunt simptome clasice ale unui proces care poate fi automatizat complet."
            },
            {
              n: "05",
              title: "Vrei să scalezi dar nu știi ce să automatizezi primul",
              detail: "Ai convingerea că AI poate ajuta firma ta, dar nu știi de unde să începi și nu vrei să investești în ceva fără să știi că funcționează. Exact pentru asta există consultanța AI: să îți ofere claritate și prioritizare înainte de orice investiție."
            },
          ].map((sign, i) => (
            <div key={i} className="card-item" style={{ marginBottom: 12 }}>
              <div className="sign-num">{sign.n}</div>
              <div className="card-item-title">{sign.title}</div>
              <div className="card-item-detail">{sign.detail}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* CONSULTANT BUN VS SLAB */}
      <section style={{ paddingTop: 56, paddingBottom: 48 }}>
        <div className="mx">
          <h2 className="hd" style={{ fontSize: 28, fontWeight: 800, marginBottom: 8, letterSpacing: -0.5 }}>Ce face un consultant AI bun față de unul slab</h2>
          <p style={{ fontSize: 16, color: "#888899", marginBottom: 32, lineHeight: 1.6 }}>Piața de consultanță AI este plină de promisiuni. Iată cum deosebești un angajament serios de unul care îți pierde timpul și banii.</p>

          <div className="compare-grid">
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#cc3333", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 16, fontFamily: "'Outfit', sans-serif" }}>Consultant slab</div>
              {[
                "Îți propune soluții înainte să îți înțeleagă procesele",
                "Vorbește despre tehnologie, nu despre problemele tale",
                "Livrează prezentări vagi fără estimări concrete de ROI",
                "Creează dependență față de platforma sau infrastructura lui",
                "Nu poate explica ce a implementat concret la alți clienți",
                "Durata proiectului: vaguă sau imposibil de respectat",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                  <span style={{ color: "#cc3333", fontSize: 14, flexShrink: 0, marginTop: 2 }}>✗</span>
                  <span style={{ fontSize: 14, color: "#666677", lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#ff6a00", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 16, fontFamily: "'Outfit', sans-serif" }}>Consultant bun</div>
              {[
                "Pornește cu o analiză a proceselor tale actuale",
                "Traduce AI în timp economisit și bani economisiți pe cazuri concrete",
                "Livrează un document cu recomandări, priorități și estimări de ROI",
                "Predă totul documentat, ești independent după implementare",
                "Poate descrie exact ce a implementat și ce rezultate a produs",
                "Termene clare, livrabile intermediare, responsabilitate asumată",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                  <span style={{ color: "#ff6a00", fontSize: 14, flexShrink: 0, marginTop: 2 }}>✓</span>
                  <span style={{ fontSize: 14, color: "#a8a6a1", lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PROCESUL IN 4 ETAPE */}
      <section style={{ paddingTop: 56, paddingBottom: 48 }}>
        <div className="mx">
          <h2 className="hd" style={{ fontSize: 28, fontWeight: 800, marginBottom: 8, letterSpacing: -0.5 }}>Procesul nostru de consultanță AI în 4 etape</h2>
          <p style={{ fontSize: 16, color: "#888899", marginBottom: 32, lineHeight: 1.6 }}>Fiecare angajament de consultanță AI pentru companii urmează un proces structurat și transparent, cu livrabile clare la fiecare pas.</p>

          {[
            {
              n: 1,
              title: "Interviu inițial (60-90 minute)",
              detail: "Discutăm în detaliu fiecare zonă operațională a businessului tău: vânzări, marketing, operațiuni, financiar, customer support. Identificăm procesele care consumă cel mai mult timp și le mapăm exact. Nu există un set fix de întrebări, conversația se adaptează la realitatea firmei tale."
            },
            {
              n: 2,
              title: "Audit și analiză oportunități",
              detail: "Pe baza interviului, cuantificăm costul real al fiecărui proces în ore pe săptămână și bani pe an. Construim o matrice de priorități: ce aduce cel mai rapid ROI, ce este fezabil tehnic cu bugetul tău și ce poate fi amânat. Evaluăm și tool-urile existente pe care le folosești deja."
            },
            {
              n: 3,
              title: "Raport cu recomandări concrete",
              detail: "Primești un document scris cu recomandările noastre: ce procese să automatizezi, în ce ordine, cu ce instrumente și cu ce estimare de economii. Nu o prezentare de slide-uri despre potențialul AI, ci un plan de acțiune cu pași clari și costuri realiste de implementare."
            },
            {
              n: 4,
              title: "Sesiune de Q&A și pași următori",
              detail: "Discutăm raportul împreună, clarificăm orice întrebare și stabilim ce urmează: implementezi singur, cu echipa ta, sau preluăm noi implementarea. Nu există nicio presiune. Auditul este complet util și fără obligații ulterioare."
            },
          ].map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 16, marginBottom: 20 }}>
              <div className="step-num">{step.n}</div>
              <div className="card-item" style={{ flex: 1, marginBottom: 0 }}>
                <div className="card-item-title">{step.title}</div>
                <div className="card-item-detail">{step.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* CUM ARATA IN PRACTICA */}
      <section style={{ paddingTop: 56, paddingBottom: 48 }}>
        <div className="mx">
          <h2 className="hd" style={{ fontSize: 28, fontWeight: 800, marginBottom: 20, letterSpacing: -0.5 }}>Cum arată o consultanță AI în practică</h2>
          <article className="prose">
            <p>
              Să luăm un exemplu ilustrativ. O firmă de contabilitate cu 8 angajați primește lunar dosare de la clienți prin email, le procesează manual, trimite solicitări suplimentare prin emailuri separate și generează rapoarte lunare în Excel pe care le trimite individual fiecărui client. Fiecare dintre acești pași consumă ore și generează erori umane frecvente.
            </p>
            <p>
              Un audit de consultanță AI pentru companii de această dimensiune ar identifica în mod tipic trei procese automatizabile cu impact mare și implementare rapidă: un sistem de colectare automată a documentelor (client încarcă documente, sistemul le clasifică și trimite o confirmare), generarea automată a rapoartelor lunare (datele se agregă singure din sistemul de contabilitate și raportul se trimite automat la data stabilită) și un flux de urmărire a termenelor (remindere automate pentru clienți care nu au trimis documentele la timp). Estimarea realistă pentru o astfel de firmă: 15-20 de ore economisiți săptămânal, fără să fie nevoie de angajări suplimentare pe măsură ce portofoliul de clienți crește.
            </p>
            <p>
              Aceasta nu este o situație excepțională. Este tiparul pe care îl întâlnim constant, indiferent de industrie. Consultanța AI pentru firmele din România nu necesită transformări digitale majore sau bugete de corporație. Necesită claritate despre unde se pierde timpul și voința de a schimba câteva procese. Dacă vrei să înțelegi ce ar însemna concret pentru firma ta, citește și <a href="/blog/consultanta-ai-ce-include-cum-alegi">ghidul nostru despre ce include consultanța AI</a> și cum alegi consultantul potrivit.
            </p>
            <p>
              Automatizările AI implementate după un audit serios se integrează în sistemele pe care le folosești deja. Nu cumperi software nou și nu schimbi tot fluxul de lucru al firmei. Adaugi straturi de automatizare peste ce există deja. Dacă vrei să înțelegi ce tipuri de automatizări sunt disponibile pentru firme din România, vizitează pagina noastră de <a href="https://turbosnail.ro">automatizări AI</a>. Pentru a înțelege mai bine ce este inteligența artificială și cum funcționează în realitate, citește <a href="/blog/ce-este-inteligenta-artificiala">ghidul nostru complet despre inteligența artificială</a>.
            </p>

            <blockquote>
              <p style={{ fontStyle: "italic", fontSize: 18, color: "#c8c6c1", marginBottom: 12 }}>
                "Valoarea reală a inteligenței artificiale în business nu este în automatizarea lucrurilor pe care oamenii nu le pot face. Este în automatizarea lucrurilor pe care oamenii le fac prea lent, prea costisitor sau cu prea multe greșeli."
              </p>
              <p style={{ fontSize: 14, color: "#666677" }}>
                <strong style={{ color: "#888899" }}>Thomas H. Davenport</strong>, Profesor de Tehnologie Informațională și Management, Babson College, autor al lucrărilor de referință privind AI în business
              </p>
            </blockquote>

            <p>
              Conform <a href="https://www.gartner.com/en/information-technology/insights/artificial-intelligence" target="_blank" rel="noopener noreferrer">cercetărilor Gartner privind adoptarea AI în companii</a>, firmele care pornesc de la un audit structurat al proceselor obțin rezultate semnificativ mai bune din investițiile în AI față de cele care adoptă tehnologia fără o analiză prealabilă. Consultanța AI nu este un cost suplimentar, ci o investiție care reduce risipa de resurse în proiecte greșite. Serviciile noastre de <a href="/servicii/automatizari-ai">automatizări AI</a> sunt construite exact pe baza recomandărilor din audit.
            </p>
          </article>
        </div>
      </section>

      <div className="divider" />

      {/* FAQ */}
      <section style={{ paddingTop: 56, paddingBottom: 56 }}>
        <div className="mx">
          <h2 className="hd" style={{ fontSize: 28, fontWeight: 800, marginBottom: 32, letterSpacing: -0.5 }}>Întrebări frecvente despre consultanța AI</h2>
          <div>
            {faqLd.mainEntity.map((item, i) => (
              <div key={i} className="faq-item">
                <div className="faq-q">{item.name}</div>
                <div className="faq-a">{item.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section style={{ paddingTop: 72, paddingBottom: 96, textAlign: "center" }}>
        <div className="mx">
          <h2 className="hd" style={{ fontSize: 34, fontWeight: 900, letterSpacing: -0.8, marginBottom: 16 }}>Gata să clarifici ce merită automatizat?</h2>
          <p style={{ fontSize: 17, color: "#a8a6a1", marginBottom: 36, lineHeight: 1.65 }}>
            Completează formularul de contact și te contactăm în 24 de ore pentru un audit gratuit de consultanță AI, fără obligații.
          </p>
          <a href="/#contact" style={{ background: "linear-gradient(135deg, #ff8c33, #ff6a00)", color: "#fff", borderRadius: 10, fontFamily: "'Outfit', sans-serif", fontWeight: 700, padding: "17px 40px", fontSize: 16, textDecoration: "none", display: "inline-block" }}>
            Vreau un audit gratuit →
          </a>
        </div>
      </section>
    </main>
  );
}
