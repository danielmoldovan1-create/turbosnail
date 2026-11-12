import type { Metadata } from "next";
import Link from "next/link";
import AuthorBox, { AUTHOR_LD } from "../../components/AuthorBox";

const GOOGLE_AI = "https://developers.google.com/search/docs/appearance/ai-features";
const GOOGLE_BLOG = "https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search";
const OPENAI_BOTS = "https://platform.openai.com/docs/bots";
const TITLE = "Vizibilitate AI: cum apare firma ta în ChatGPT | TurboSnail";
const DESCRIPTION = "Vizibilitate AI pe înțeles: de unde își iau ChatGPT, Gemini și Copilot informațiile, ce faci ca firma ta să apară în răspunsuri și cum verifici singur.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://turbosnail.ro/blog/vizibilitate-ai",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://turbosnail.ro/blog/vizibilitate-ai",
    type: "article",
    locale: "ro_RO",
    siteName: "TurboSnail",
  },
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vizibilitate AI: cum apare firma ta în răspunsurile ChatGPT, Gemini și Copilot",
  description: DESCRIPTION,
  url: "https://turbosnail.ro/blog/vizibilitate-ai",
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  author: AUTHOR_LD,
  publisher: {
    "@type": "Organization",
    name: "TurboSnail",
    url: "https://turbosnail.ro",
    logo: { "@type": "ImageObject", url: "https://turbosnail.ro/turbosnail-logo.png" },
  },
  inLanguage: "ro-RO",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://turbosnail.ro/blog/vizibilitate-ai",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ce înseamnă vizibilitate AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cât de des și cât de corect apare firma ta când cineva întreabă un asistent AI, ca ChatGPT, Gemini sau Copilot, despre serviciul tău, plus în rezumatele generate cu AI din Google.",
      },
    },
    {
      "@type": "Question",
      name: "Am nevoie de un fișier special pentru AI pe site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pentru Google, nu. Documentația Google spune că nu ai nevoie de fișiere noi pentru AI și nici de date structurate speciale ca să apari în AI Overviews sau AI Mode. Contează aceleași lucruri ca la SEO-ul obișnuit.",
      },
    },
    {
      "@type": "Question",
      name: "Cât durează până apare firma în răspunsurile AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nu există un termen sigur. O pagină trebuie întâi găsită și indexată, iar Google spune că indexarea și afișarea nu sunt garantate nici când pagina respectă toate cerințele. Verifică lunar, cu aceleași întrebări.",
      },
    },
    {
      "@type": "Question",
      name: "De ce primesc răspunsuri diferite la aceeași întrebare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Asistenții generează răspunsul de fiecare dată. Google spune că AI Overviews și AI Mode pot folosi modele și tehnici diferite, așa că răspunsurile și linkurile variază. De aceea pui aceleași întrebări de mai multe ori înainte să tragi o concluzie.",
      },
    },
    {
      "@type": "Question",
      name: "Ar trebui să blochez roboții AI pe site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dacă vrei să apari în răspunsuri, nu bloca roboții de căutare. OpenAI spune că site-urile care blochează OAI-SearchBot nu apar în răspunsurile căutării din ChatGPT. Poți refuza separat folosirea conținutului pentru antrenarea modelelor (GPTBot), fără să ieși din căutare.",
      },
    },
  ],
};

export default function VizibilitateAi() {
  return (
    <main style={{ fontFamily: "'Instrument Sans', sans-serif", background: "#0a0c14", color: "#eae8e3", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
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
        .prose ol { margin: 0 0 20px 0; padding: 0; list-style: none; counter-reset: item; }
        .prose ol li { font-size: 16px; line-height: 1.7; color: #a8a6a1; padding: 10px 0 10px 40px; border-bottom: 1px solid #12141f; position: relative; counter-increment: item; }
        .prose ol li::before { content: counter(item); position: absolute; left: 0; width: 26px; height: 26px; border-radius: 50%; background: rgba(255,106,0,0.1); border: 1px solid rgba(255,106,0,0.25); font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 700; color: #ff6a00; top: 12px; text-align: center; line-height: 26px; }
        .prose ol li:last-child { border-bottom: none; }
        .prose ul { margin: 0 0 20px 24px; }
        .prose ul li { font-size: 16px; line-height: 1.7; color: #a8a6a1; margin-bottom: 8px; }
        .prose blockquote { border-left: 3px solid #ff6a00; padding: 16px 20px; margin: 28px 0; background: rgba(255,106,0,0.05); border-radius: 0 8px 8px 0; }
        .faq-item { border-bottom: 1px solid #1a1d2a; padding: 22px 0; }
        .faq-item:last-child { border-bottom: none; }
        .faq-q { font-family: 'Outfit', sans-serif; font-size: 17px; font-weight: 700; color: #eae8e3; margin-bottom: 10px; }
        .faq-a { font-size: 15px; line-height: 1.7; color: #a8a6a1; }
        .divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(255,106,0,0.12), transparent); max-width: 760px; margin: 48px auto; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,12,20,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(26,29,42,0.7)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <img src="/turbosnail-logo.png" alt="TurboSnail" style={{ height: 46, width: "auto" }} />
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <Link href="/servicii" style={{ fontSize: 14, color: "#888899", textDecoration: "none" }}>Servicii</Link>
            <a href="/blog" style={{ fontSize: 14, color: "#888899", textDecoration: "none" }}>Blog</a>
            <Link href="/#contact" style={{ background: "linear-gradient(135deg, #ff8c33, #ff6a00)", color: "#fff", borderRadius: 10, fontFamily: "'Outfit', sans-serif", fontWeight: 700, padding: "10px 22px", fontSize: 13, textDecoration: "none" }}>
              Înscrie-te →
            </Link>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <section style={{ paddingTop: 120, paddingBottom: 56 }}>
        <div className="mx">
          <div style={{ display: "inline-block", background: "rgba(255,106,0,0.1)", border: "1px solid rgba(255,106,0,0.25)", borderRadius: 100, padding: "6px 16px", fontSize: 11, fontWeight: 700, color: "#ff6a00", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 24, fontFamily: "'Outfit', sans-serif" }}>
            AI · Vizibilitate
          </div>
          <span style={{ marginLeft: 12, fontSize: 13, color: "#555566" }}>12 noiembrie 2026</span>
          <h1 className="hd" style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.12, letterSpacing: -1, marginBottom: 24 }}>
            Vizibilitate AI: cum apare firma ta în răspunsurile ChatGPT, Gemini și Copilot
          </h1>
          <p style={{ fontSize: 18, color: "#a8a6a1", lineHeight: 1.65, maxWidth: 620 }}>
            <strong style={{ color: "#eae8e3" }}>Vizibilitate AI</strong> înseamnă cât de des și cât de corect apare firma ta când un client întreabă un asistent AI despre serviciul tău, de exemplu „ce firmă de contabilitate îmi recomanzi în Timișoara?”. Vestea bună: aproape tot ce te ajută acolo te ajută și în Google.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <article className="prose mx" style={{ paddingBottom: 60 }}>

        <h2>Ce înseamnă vizibilitate AI, pe scurt</h2>
        <p>
          Un asistent AI, ca ChatGPT, Gemini (de la Google) sau Copilot (de la Microsoft), e un program construit pe un model de limbaj: a învățat din cantități mari de text și răspunde la întrebări scrise ca într-o conversație. Unele asistente caută și pe internet în momentul în care pui întrebarea, apoi construiesc răspunsul din paginile găsite și le citează ca surse.
        </p>
        <p>
          Vizibilitatea AI a firmei tale se vede în trei lucruri: dacă apari în răspuns, dacă informațiile despre tine sunt corecte și dacă pagina ta e citată ca sursă. Dacă vrei întâi o explicație de bază despre tehnologie, citește ghidul despre <Link href="/blog/ce-este-inteligenta-artificiala">ce este inteligența artificială</Link>. Iar despre cum formulezi întrebările am scris în ghidul despre cum <Link href="/blog/intreaba-inteligenta-artificiala">întrebi inteligența artificială</Link>.
        </p>

        <h2>De unde își iau asistenții AI informațiile</h2>
        <p>
          Pe scurt, din două locuri: din ce a învățat modelul la antrenare, care poate fi depășit, și din căutarea făcută chiar atunci. Pentru a doua parte, regulile sunt publice.
        </p>
        <p>
          <strong>Google.</strong> În <a href={GOOGLE_AI} target="_blank" rel="noopener noreferrer">documentația pentru proprietarii de site-uri</a>, Google scrie că, pentru a apărea ca link în AI Overviews sau în AI Mode, o pagină trebuie să fie indexată și să poată apărea în căutare cu un fragment de text. Nu există cerințe tehnice suplimentare și nici optimizări speciale. Tot acolo scrie că răspunsurile pot folosi o tehnică numită „query fan-out”: sistemul face mai multe căutări pe subteme ca să construiască răspunsul.
        </p>
        <p>
          <strong>ChatGPT.</strong> În <a href={OPENAI_BOTS} target="_blank" rel="noopener noreferrer">documentația despre roboții OpenAI</a> scrie că OAI-SearchBot e robotul folosit ca site-urile să apară în căutarea din ChatGPT. Site-urile care îl blochează nu apar în răspunsurile căutării, deși pot apărea în continuare ca linkuri de navigare.
        </p>
        <blockquote>
          <p style={{ fontStyle: "italic", fontSize: 17, color: "#c8c6c1", marginBottom: 12 }}>
            „Concentrează-te pe vizitatori și oferă-le conținut unic, care îi mulțumește. Atunci vei fi bine poziționat pe măsură ce Căutarea Google evoluează, pentru că obiectivul nostru de bază rămâne același: să-i ajutăm pe oameni să găsească conținut remarcabil și original, care aduce valoare unică.”
          </p>
          <p style={{ fontSize: 14, color: "#666677" }}>
            <strong style={{ color: "#888899" }}>John Mueller</strong>, Google Search Relations, în articolul <a href={GOOGLE_BLOG} target="_blank" rel="noopener noreferrer">despre conținutul din experiențele AI ale Căutării Google</a>, pe blogul Google Search Central
          </p>
        </blockquote>

        <h2>Ce poate face o firmă pentru vizibilitate AI</h2>
        <ol>
          <li><strong>Profil Google Business complet și la zi.</strong> Program, servicii, fotografii, categoria corectă. Google pune verificarea profilului de firmă printre lucrurile care contează și pentru funcțiile AI din căutare.</li>
          <li><strong>O pagină clară pentru fiecare serviciu.</strong> Când sistemul caută pe subteme, o pagină dedicată pentru „contabilitate pentru PFA” poate răspunde direct la una dintre ele, pe când o singură pagină cu toate serviciile răspunde vag la toate. Informația importantă trebuie să fie scrisă în text, nu doar în imagini.</li>
          <li><strong>Aceleași date de contact peste tot.</strong> Numele, adresa și telefonul identice pe site, pe Google și în directoare. Un client care găsește trei numere diferite nu știe pe care să sune.</li>
          <li><strong>Mențiuni reale în alte surse.</strong> Răspunsurile se construiesc din paginile găsite. O asociație din domeniu, un partener sau presa locală care pomenesc firma îți dau mai multe locuri în care poți fi găsit.</li>
          <li><strong>Conținut care răspunde la întrebări reale.</strong> John Mueller, de la Google, scrie că în căutarea cu AI oamenii pun întrebări mai lungi și mai precise, plus întrebări de continuare. Întrebările pe care ți le pun clienții la telefon sunt un bun punct de plecare pentru articole și pentru FAQ.</li>
          <li><strong>Nu bloca roboții de căutare.</strong> Verifică în fișierul robots.txt că nu blochezi Googlebot și OAI-SearchBot.</li>
        </ol>
        <p>
          Ce nu trebuie: Google scrie explicit că nu ai nevoie de fișiere noi pentru AI și nici de date structurate speciale ca să apari în AI Overviews sau AI Mode. Partea asta de lucru o numim <Link href="/servicii/seo-ai">SEO bazat pe AI</Link>: principiile SEO-ului clasic, aplicate și pentru răspunsurile asistenților.
        </p>

        <aside style={{ margin: "8px 0 40px", padding: "22px 22px 24px", borderRadius: 14, border: "1px solid rgba(255,106,0,0.25)", background: "rgba(255,106,0,0.05)" }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#ff6a00", marginBottom: 10 }}>
            Test de vizibilitate · 2 minute
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "#eae8e3", marginBottom: 18 }}>
            Vezi unde stai acum: 10 întrebări despre profilul Google, site, recenzii și prezența în răspunsurile AI, un scor și primele lucruri de făcut.
          </p>
          <Link href="/test-vizibilitate" style={{ display: "inline-flex", alignItems: "center", color: "#ff6a00", border: "1px solid rgba(255,106,0,0.35)", background: "rgba(255,255,255,0.03)", borderRadius: 10, fontFamily: "'Outfit', sans-serif", fontWeight: 600, padding: "12px 22px", fontSize: 15, textDecoration: "none" }}>
            Fă testul de vizibilitate →
          </Link>
        </aside>

        <h2>Cum îți verifici singur vizibilitatea AI</h2>
        <ol>
          <li><strong>Pune întrebarea unui client.</strong> În ChatGPT, Gemini și Copilot, scrie serviciul și orașul, cum ar scrie un client. Notează dacă apari, ce spune asistentul despre tine și ce surse citează.</li>
          <li><strong>Întreabă direct despre firmă.</strong> „Ce știi despre [numele firmei]?” Așa vezi dacă datele sunt corecte: adresă, servicii, program.</li>
          <li><strong>Uită-te în Google Search Console.</strong> Google spune că afișările din AI Overviews și AI Mode sunt incluse în raportul Performance, la tipul de căutare „Web”, împreună cu restul căutărilor.</li>
          <li><strong>Repetă lunar, cu aceleași întrebări.</strong> Răspunsurile variază de la o încercare la alta, așa că tendința spune mai mult decât un singur răspuns.</li>
        </ol>
        <p>
          Dacă un asistent spune ceva greșit despre firma ta, caută sursa pe care o citează. Poate fi o pagină veche sau un profil necompletat, pe care le poți corecta.
        </p>

        <h2>Un plan simplu pentru prima lună</h2>
        <ol>
          <li><strong>Săptămâna 1.</strong> Completezi profilul Google Business și aduci la aceeași formă numele, adresa și telefonul de pe site, de pe Google și din directoarele în care apari.</li>
          <li><strong>Săptămâna 2.</strong> Verifici dacă fiecare serviciu important are pagina lui, cu text clar despre ce faci, pentru cine și în ce zonă.</li>
          <li><strong>Săptămâna 3.</strong> Aduni zece întrebări pe care ți le-au pus clienții în ultima lună și le răspunzi pe site, într-o secțiune de întrebări frecvente sau în articole.</li>
          <li><strong>Săptămâna 4.</strong> Pui aceleași întrebări ca la început în ChatGPT, Gemini și Copilot și compari răspunsurile. Notezi ce s-a schimbat și ce lipsește încă.</li>
        </ol>
        <p>
          Nu te aștepta la schimbări mari într-o lună, pentru că paginile noi trebuie întâi găsite și indexate. Planul merită oricum: fiecare pas te ajută la fel de mult și în căutarea obișnuită din Google.
        </p>

        <h2>Ce nu funcționează</h2>
        <ul>
          <li><strong>Promisiunile de tip „garantat în ChatGPT”.</strong> Nici Google nu garantează indexarea și afișarea unei pagini, chiar dacă respectă toate regulile.</li>
          <li><strong>Textele scrise pentru roboți.</strong> Cuvinte-cheie repetate și pagini fără nimic nou nu ajută. Google cere conținut unic, scris pentru oameni.</li>
          <li><strong>Recenziile cumpărate sau scrise de tine.</strong> Pe lângă risc, strică exact încrederea pe care vrei să o construiești.</li>
        </ul>
        <p>
          La TurboSnail lucrăm mai ales cu <a href="https://turbosnail.ro">automatizări AI</a>, iar vizibilitatea e primul pas al oricărui client nou: înainte să-ți scrie, trebuie să te găsească.
        </p>

        <div className="divider" />

        <h2>Întrebări frecvente despre vizibilitatea AI</h2>
      </article>

      <section style={{ padding: "0 20px 60px", maxWidth: 760, margin: "0 auto" }}>
        {faqLd.mainEntity.map((item, i) => (
          <div key={i} className="faq-item">
            <div className="faq-q">{item.name}</div>
            <div className="faq-a">{item.acceptedAnswer.text}</div>
          </div>
        ))}
      </section>

      <div className="mx" style={{ paddingBottom: 56 }}>
        <AuthorBox />
      </div>

      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,106,0,0.12), transparent)", maxWidth: 760, margin: "0 auto" }} />

      {/* CTA */}
      <section style={{ padding: "60px 20px 96px", textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
        <h2 className="hd" style={{ fontSize: 28, fontWeight: 900, letterSpacing: -0.6, marginBottom: 14 }}>Vrei să știi cum apare firma ta în Google și în asistenții AI?</h2>
        <p style={{ fontSize: 16, color: "#a8a6a1", marginBottom: 32, lineHeight: 1.65 }}>
          Înscrie-te pe lista de așteptare și ne uităm împreună la ce găsește un client despre firma ta: în Google, pe hartă și în răspunsurile asistenților.
        </p>
        <Link href="/#contact" style={{ background: "linear-gradient(135deg, #ff8c33, #ff6a00)", color: "#fff", borderRadius: 10, fontFamily: "'Outfit', sans-serif", fontWeight: 700, padding: "15px 32px", fontSize: 15, textDecoration: "none", display: "inline-block" }}>
          Înscrie-te pe lista de așteptare →
        </Link>
      </section>
    </main>
  );
}
