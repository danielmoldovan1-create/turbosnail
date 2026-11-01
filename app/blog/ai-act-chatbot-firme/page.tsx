import type { Metadata } from "next";
import Link from "next/link";
import AuthorBox, { AUTHOR_LD } from "../../components/AuthorBox";

const EUR_LEX = "https://eur-lex.europa.eu/legal-content/RO/TXT/?uri=CELEX:32024R1689";
const GIBSON_DUNN = "https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/";
const JONES_WALKER = "https://www.joneswalker.com/en/insights/blogs/ai-law-blog/yes-august-2-still-matters-the-eu-approved-a-high-risk-ai-delay-but-most-trans.html";

export const metadata: Metadata = {
  title: "AI Act și chatbotul firmei: ce trebuie să faci | TurboSnail",
  description: "AI Act și chatbotul firmei: de la 2 august 2026, oamenii trebuie să afle că vorbesc cu un AI. Cine răspunde, ce s-a amânat și ce faci concret.",
  alternates: {
    canonical: "https://turbosnail.ro/blog/ai-act-chatbot-firme",
  },
  openGraph: {
    title: "AI Act și chatbotul firmei: ce trebuie să faci | TurboSnail",
    description: "AI Act și chatbotul firmei: de la 2 august 2026, oamenii trebuie să afle că vorbesc cu un AI. Cine răspunde, ce s-a amânat și ce faci concret.",
    url: "https://turbosnail.ro/blog/ai-act-chatbot-firme",
    type: "article",
    locale: "ro_RO",
    siteName: "TurboSnail",
  },
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Act: ce trebuie să facă firma ta dacă are chatbot",
  description: "AI Act și chatbotul firmei: de la 2 august 2026, oamenii trebuie să afle că vorbesc cu un AI. Cine răspunde, ce s-a amânat și ce faci concret.",
  url: "https://turbosnail.ro/blog/ai-act-chatbot-firme",
  datePublished: "2026-10-27",
  dateModified: "2026-10-27",
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
    "@id": "https://turbosnail.ro/blog/ai-act-chatbot-firme",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "AI Act se aplică și firmelor mici?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da. Regulamentul nu scutește firmele mici de obligația de informare la chatboți. Diferența apare la amenzi: pentru IMM-uri și firmele nou-înființate se aplică plafonul mai mic dintre suma fixă și procentul din cifra de afaceri.",
      },
    },
    {
      "@type": "Question",
      name: "Trebuie să anunț că e un AI dacă e evident?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Regulamentul face o excepție când e evident pentru o persoană rezonabil de bine informată, atentă și avizată. Excepția e îngustă, iar un mesaj de o frază e mai simplu decât o justificare ulterioară. Recomandarea noastră: anunță mereu.",
      },
    },
    {
      "@type": "Question",
      name: "Chatbotul meu e cumpărat de la altă firmă. Mai am obligații?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Furnizorul trebuie să-l proiecteze astfel încât să anunțe că e un AI, iar tu nu ascunzi și nu dezactivezi acel mesaj. Ai, în plus, obligațiile din GDPR pentru datele din conversații. Dacă ai comandat un chatbot făcut special pentru tine și îl folosești sub numele firmei, poți fi considerat chiar tu furnizor, așa că lămurește rolurile în contract.",
      },
    },
    {
      "@type": "Question",
      name: "De când se aplică regulile pentru chatboți?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Obligațiile de transparență din articolul 50 se aplică de la 2 august 2026, potrivit articolului 113 din regulament. Pachetul Digital Omnibus a amânat alte obligații, nu pe aceasta.",
      },
    },
  ],
};

export default function AiActChatbotFirme() {
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
            AI ACT · CHATBOT
          </div>
          <span style={{ marginLeft: 12, fontSize: 13, color: "#555566" }}>27 octombrie 2026</span>
          <h1 className="hd" style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.12, letterSpacing: -1, marginBottom: 24 }}>
            AI Act: ce trebuie să facă firma ta dacă are chatbot
          </h1>
          <p style={{ fontSize: 18, color: "#a8a6a1", lineHeight: 1.65, maxWidth: 620 }}>
            <strong style={{ color: "#eae8e3" }}>AI Act</strong>, regulamentul european despre inteligența artificială, îi cere oricărei firme cu un <strong style={{ color: "#eae8e3" }}>chatbot</strong> pe site un lucru simplu: oamenii trebuie să afle că vorbesc cu un sistem de inteligență artificială, nu cu un om. Obligația se aplică de la 2 august 2026 și nu a fost amânată, deși alte părți ale regulamentului au fost. Ghidul acesta explică ce cere legea, cine răspunde când chatbotul e făcut de altcineva și ce pași concreți faci. Nu înlocuiește consultanța juridică, dar îți arată ce să verifici.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <article className="prose mx" style={{ paddingBottom: 60 }}>

        <h2>Ce este AI Act și unde intră chatbotul tău</h2>
        <p>
          AI Act este Regulamentul (UE) 2024/1689, care se aplică direct în toate statele Uniunii, inclusiv în România. Regulamentul numește „sistem de IA” un sistem automat care, din datele pe care le primește, deduce cum să genereze rezultate precum previziuni, conținut, recomandări sau decizii. Un chatbot care înțelege întrebarea clientului și formulează singur răspunsul intră în această definiție.
        </p>
        <p>
          Regulamentul împarte sistemele după risc. Cele interzise și cele cu risc ridicat, de exemplu sistemele folosite la angajări sau la evaluarea creditelor, au reguli grele. Un chatbot obișnuit, care răspunde la întrebări despre program, servicii sau programări, intră de regulă la obligațiile de transparență din articolul 50. Textul complet al regulamentului, în limba română, e pe <a href={EUR_LEX} target="_blank" rel="noopener noreferrer">EUR-Lex</a>.
        </p>

        <h2>Ce cere AI Act de la un chatbot</h2>
        <p>
          Articolul 50 alineatul (1) spune că sistemele de IA care interacționează direct cu oamenii trebuie proiectate astfel încât persoanele respective să fie informate că interacționează cu un sistem de IA. Excepția: situația în care acest lucru e evident pentru o persoană rezonabil de bine informată, atentă și avizată, ținând seama de context.
        </p>
        <p>
          Alineatul (5) adaugă cum trebuie dată informația: clar și distinct, cel târziu la prima interacțiune, cu respectarea cerințelor de accesibilitate. În practică, asta înseamnă un mesaj vizibil chiar în fereastra de chat, înainte de primul răspuns sau odată cu el, de exemplu: „Bună! Sunt asistentul virtual al firmei, bazat pe inteligență artificială.” Un rând ascuns în termenii și condițiile site-ului nu e nici clar, nici distinct.
        </p>
        <p>
          Excepția pentru situațiile evidente există, dar e îngustă. Un chatbot cu nume de om, poză de om și ton de om nu e evident un AI. Dacă te bazezi totuși pe excepție, analiza Jones Walker recomandă să notezi faptele pe care ți-ai sprijinit concluzia și să le păstrezi.
        </p>

        <h2>Cine răspunde: furnizorul chatbotului sau firma ta</h2>
        <p>
          AI Act împarte obligațiile între două roluri. <strong>Furnizorul</strong> este cel care dezvoltă un sistem de IA, sau comandă dezvoltarea lui, și îl pune în funcțiune sub propriul nume sau propria marcă, contra cost sau gratuit. <strong>Implementatorul</strong> este cel care folosește sistemul sub autoritatea lui, în activitatea profesională.
        </p>
        <p>
          Obligația din articolul 50 alineatul (1) cade pe furnizor: el trebuie să proiecteze chatbotul astfel încât să anunțe că e un AI. Dacă ai cumpărat o soluție gata făcută, obligația e a furnizorului ei, iar tu nu ascunzi și nu dezactivezi mesajul de informare. Dacă însă ai comandat un chatbot făcut special pentru tine și îl pui pe site sub numele firmei, definiția din regulament te poate face pe tine furnizor, iar atunci obligația e a ta.
        </p>
        <p>
          Cazul cel mai des întâlnit azi e un chatbot construit peste un model AI mare, oferit de o companie specializată. Aici sunt două niveluri: compania care oferă modelul are obligațiile ei din regulament, pentru modelele de IA de uz general, iar cine construiește chatbotul peste model și îl pune în funcțiune sub numele lui răspunde de chatbot. Faptul că modelul vine de la o firmă mare nu mută obligația de informare de pe chatbotul tău.
        </p>
        <p>
          În toate cazurile, scrie în contract cine asigură mesajul de informare, cine îl actualizează și cine păstrează dovezile. Analiza Jones Walker pornește din același punct: pentru fiecare sistem stabilești dacă ești furnizor, implementator sau amândouă.
        </p>

        <h2>Ce s-a amânat în 2026 și ce nu</h2>
        <p>
          La finalul lui 2025, Comisia Europeană a propus un pachet de simplificare numit Digital Omnibus. Potrivit analizelor <a href={GIBSON_DUNN} target="_blank" rel="noopener noreferrer">Gibson Dunn</a> și <a href={JONES_WALKER} target="_blank" rel="noopener noreferrer">Jones Walker</a>, pachetul a amânat obligațiile pentru sistemele cu risc ridicat, dar a lăsat neatinsă obligația de a le spune oamenilor că vorbesc cu un AI.
        </p>
        <blockquote>
          <p style={{ fontStyle: "italic", fontSize: 17, color: "#c8c6c1", marginBottom: 12 }}>
            „Omnibusul a lăsat majoritatea obligațiilor de transparență din AI Act exact unde erau.”
          </p>
          <p style={{ fontSize: 14, color: "#666677" }}>
            <strong style={{ color: "#888899" }}>Jason M. Loring</strong>, partener, Jones Walker, în <a href={JONES_WALKER} target="_blank" rel="noopener noreferrer">analiza</a> scrisă împreună cu Michelle Ramsden și Andrew R. Lee
          </p>
        </blockquote>
        <p>
          Singura relaxare privește marcarea automată a conținutului generat de AI, cum sunt imaginile sau textele create de sisteme generative. Furnizorii acestor sisteme, deja aflați pe piață, au primit puțin timp în plus pentru ea, dar asta nu privește mesajul de informare al chatbotului tău. Comisia Europeană a lucrat în 2026 și la orientări pentru articolul 50, care vor detalia cum arată o informare corectă, așa că merită urmărite.
        </p>

        <h2>Cât de mari pot fi amenzile</h2>
        <p>
          Pentru încălcarea obligațiilor de transparență din articolul 50, regulamentul prevede amenzi de până la 15 milioane de euro sau 3% din cifra de afaceri mondială anuală, oricare valoare e mai mare. Pentru IMM-uri și firmele nou-înființate se aplică însă valoarea mai mică dintre cele două. Analiza Jones Walker subliniază că sunt plafoane, nu amenzi automate: regulamentul cere sancțiuni proporționale, care țin seama de natura, gravitatea și durata încălcării, iar regulile concrete le stabilește fiecare stat membru, în aceste limite.
        </p>

        <h2>Cum pui chatbotul în acord cu AI Act, pas cu pas</h2>
        <ol>
          <li><strong>Mesaj la prima interacțiune</strong>: vizibil în fereastra de chat, scurt și în limba conversației, de exemplu „Sunt un asistent virtual bazat pe inteligență artificială.”</li>
          <li><strong>Fără aparența unui om</strong>: nu-i da botului nume, poză și ton care să-i facă pe clienți să creadă că vorbesc cu un angajat.</li>
          <li><strong>Accesibil</strong>: mesajul e text real, nu imagine, ca să poată fi citit și de cititoarele de ecran.</li>
          <li><strong>Roluri în contract</strong>: stabilește cu cel care îți face sau îți vinde chatbotul cine răspunde de informare, de actualizări și de dovezi.</li>
          <li><strong>Dovezi</strong>: păstrează o captură de ecran cu mesajul, data la care l-ai pus și versiunea chatbotului.</li>
          <li><strong>Datele personale</strong>: conversațiile pot conține date personale, deci GDPR se aplică în paralel. Actualizează politica de confidențialitate și nu păstra conversațiile mai mult decât ai nevoie.</li>
          <li><strong>Echipa</strong>: articolul 4 din AI Act cere ca oamenii care lucrează cu sisteme de IA să le înțeleagă suficient de bine. Cine administrează chatbotul trebuie să știe ce face, ce nu face și cum îl oprește.</li>
        </ol>
        <p>
          Dacă abia îți alegi un chatbot, ghidul despre <Link href="/blog/chatbot-ai-pentru-site-romania">chatbot AI pentru site</Link> explică ce poate face unul bun. Cum arată un chatbot construit cu aceste reguli de la început vezi pe pagina despre <Link href="/servicii/chatbot-ai-romania">chatbot AI în limba română</Link>. O privire de ansamblu asupra proceselor care pot fi preluate de sisteme găsești pe pagina noastră de <a href="https://turbosnail.ro">automatizări AI</a>.
        </p>

        <div className="divider" />

        <h2>Întrebări frecvente</h2>
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
        <h2 className="hd" style={{ fontSize: 28, fontWeight: 900, letterSpacing: -0.6, marginBottom: 14 }}>Vrei un chatbot care respectă AI Act de la prima conversație?</h2>
        <p style={{ fontSize: 16, color: "#a8a6a1", marginBottom: 32, lineHeight: 1.65 }}>
          Înscrie-te pe lista de așteptare și verificăm împreună chatbotul pe care îl ai sau pe care vrei să-l construiești: mesajul de informare, rolurile din contract și dovezile.
        </p>
        <Link href="/#contact" style={{ background: "linear-gradient(135deg, #ff8c33, #ff6a00)", color: "#fff", borderRadius: 10, fontFamily: "'Outfit', sans-serif", fontWeight: 700, padding: "15px 32px", fontSize: 15, textDecoration: "none", display: "inline-block" }}>
          Înscrie-te pe lista de așteptare →
        </Link>
      </section>
    </main>
  );
}
