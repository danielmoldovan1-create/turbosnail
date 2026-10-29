import type { Metadata } from "next";
import Link from "next/link";
import AuthorBox, { AUTHOR_LD } from "../../components/AuthorBox";

const EUR_LEX_GDPR = "https://eur-lex.europa.eu/legal-content/RO/TXT/?uri=CELEX:32016R0679";
const EDPB = "https://www.edpb.europa.eu/news/news/2024/edpb-opinion-ai-models-gdpr-principles-support-responsible-ai_en";
const WORK_TREND_INDEX = "https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part";
const ANSPDCP = "https://www.dataprotection.ro/";

export const metadata: Metadata = {
  title: "GDPR și AI: ce ai voie cu datele clienților | TurboSnail",
  description: "GDPR și AI în firmă: ce date poți pune într-un instrument AI, pe ce bază legală, ce contract îți trebuie cu furnizorul și când ai nevoie de avocat.",
  alternates: {
    canonical: "https://turbosnail.ro/blog/gdpr-ai-firma",
  },
  openGraph: {
    title: "GDPR și AI: ce ai voie cu datele clienților | TurboSnail",
    description: "GDPR și AI în firmă: ce date poți pune într-un instrument AI, pe ce bază legală, ce contract îți trebuie cu furnizorul și când ai nevoie de avocat.",
    url: "https://turbosnail.ro/blog/gdpr-ai-firma",
    type: "article",
    locale: "ro_RO",
    siteName: "TurboSnail",
  },
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "GDPR și AI în firmă: ce ai voie să faci cu datele clienților",
  description: "GDPR și AI în firmă: ce date poți pune într-un instrument AI, pe ce bază legală, ce contract îți trebuie cu furnizorul și când ai nevoie de avocat.",
  url: "https://turbosnail.ro/blog/gdpr-ai-firma",
  datePublished: "2026-10-29",
  dateModified: "2026-10-29",
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
    "@id": "https://turbosnail.ro/blog/gdpr-ai-firma",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Am voie să pun datele clienților în ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depinde de cont și de date. Cu un cont de firmă, cu contract de prelucrare a datelor, cu antrenarea pe datele tale oprită și cu o bază legală, se poate. Într-un cont personal gratuit, evită orice date personale. Datele sensibile, cum sunt cele despre sănătate, nu au ce căuta acolo fără o analiză juridică.",
      },
    },
    {
      "@type": "Question",
      name: "Am nevoie de consimțământul clienților ca să folosesc AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nu neapărat. Consimțământul e doar una dintre cele șase baze legale din GDPR. Pentru multe fluxuri merg executarea contractului sau interesul legitim. Clientul trebuie însă informat, de regulă prin politica de confidențialitate.",
      },
    },
    {
      "@type": "Question",
      name: "Trebuie să numesc un DPO dacă folosesc AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nu doar pentru că folosești AI. Responsabilul cu protecția datelor e obligatoriu pentru autoritățile publice și pentru firmele care monitorizează sistematic, pe scară largă, persoane sau prelucrează pe scară largă date sensibile. Dacă nu ești sigur, întreabă un avocat specializat.",
      },
    },
    {
      "@type": "Question",
      name: "Ce amendă riscă o firmă?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pentru încălcarea principiilor de bază, a drepturilor persoanelor sau a regulilor de transfer, până la 20 de milioane de euro sau 4% din cifra de afaceri mondială anuală, oricare valoare e mai mare. Sunt plafoane: amenda reală ține de natura, gravitatea și durata încălcării.",
      },
    },
  ],
};

export default function GdprAiFirma() {
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
            GDPR · AI
          </div>
          <span style={{ marginLeft: 12, fontSize: 13, color: "#555566" }}>29 octombrie 2026</span>
          <h1 className="hd" style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.12, letterSpacing: -1, marginBottom: 24 }}>
            GDPR și AI în firmă: ce ai voie să faci cu datele clienților
          </h1>
          <p style={{ fontSize: 18, color: "#a8a6a1", lineHeight: 1.65, maxWidth: 620 }}>
            <strong style={{ color: "#eae8e3" }}>GDPR și AI</strong> se întâlnesc în orice firmă în care cineva lipește emailul unui client într-un asistent AI sau leagă CRM-ul de un instrument de automatizare. Regulamentul european privind protecția datelor nu interzice inteligența artificială. Îți cere însă să știi ce date pui în ea, pe ce bază, cu ce contract și cine răspunde de rezultat. Ghidul acesta îți arată ce verifici, pas cu pas. Nu înlocuiește un avocat, dar îți spune când ai nevoie de unul.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <article className="prose mx" style={{ paddingBottom: 60 }}>

        <h2>GDPR și AI: ce date ajung de fapt într-un instrument AI</h2>
        <p>
          Un instrument AI, de tipul ChatGPT, Claude sau Gemini, este un program care primește text sau documente și generează un răspuns: un rezumat, o ciornă de email, o clasificare. Un flux de automatizare face pasul următor: ia datele dintr-o aplicație, le trece prin AI și pune rezultatul în altă aplicație, fără ca cineva să copieze ceva de mână.
        </p>
        <p>
          GDPR se aplică din momentul în care în acel text apare o persoană. Regulamentul numește „date cu caracter personal” orice informații privind o persoană fizică identificată sau identificabilă: un nume, un email, un număr de telefon, istoricul comenzilor, notițele din CRM, un CV. Un email de reclamație lipit într-un chat cu AI conține aproape mereu așa ceva. Textul complet al regulamentului, în limba română, e pe <a href={EUR_LEX_GDPR} target="_blank" rel="noopener noreferrer">EUR-Lex</a>.
        </p>
        <p>
          Riscul cel mai des întâlnit nu e un proiect mare, ci un angajat grăbit. Potrivit <a href={WORK_TREND_INDEX} target="_blank" rel="noopener noreferrer">Microsoft Work Trend Index 2024</a>, 78% dintre cei care folosesc AI la muncă își aduc propriile instrumente, iar în firmele mici și mijlocii proporția urcă la 80%. În multe firme, datele clienților ajung astfel în conturi personale de AI, fără ca cineva să fi decis asta.
        </p>

        <h2>Pe ce bază legală folosești datele clienților într-un AI</h2>
        <p>
          Orice prelucrare de date are nevoie de o bază legală din articolul 6. Pentru AI, cele mai des întâlnite sunt executarea unui contract cu clientul, de exemplu când AI-ul te ajută să răspunzi la comanda lui, și interesul legitim al firmei, de exemplu sortarea automată a emailurilor primite. Consimțământul e doar una dintre variante, nu o condiție pentru orice folosire a AI-ului.
        </p>
        <p>
          Interesul legitim nu e însă un cec în alb. Trebuie să poți arăta că scopul e real, că AI-ul e necesar pentru el și că drepturile clientului nu cântăresc mai greu. Comitetul European pentru Protecția Datelor (EDPB) a analizat exact această întrebare pentru modelele AI într-o <a href={EDPB} target="_blank" rel="noopener noreferrer">opinie din decembrie 2024</a>, care arată și când un model AI poate fi considerat anonim.
        </p>
        <p>
          Două principii din articolul 5 contează în aproape orice flux cu AI. Limitarea legată de scop: datele colectate pentru o comandă nu se folosesc mai departe într-un mod incompatibil cu acel scop. Reducerea la minimum: AI-ul primește doar datele de care are nevoie. Un rezumat de reclamație are rareori nevoie de CNP-ul clientului.
        </p>
        <p>
          Clientul trebuie să afle ce faci cu datele lui. Articolul 13 cere, printre altele, să-i spui scopurile, temeiul juridic și destinatarii datelor, iar un furnizor de AI care le prelucrează pentru tine este un astfel de destinatar. Locul firesc e politica de confidențialitate.
        </p>
        <blockquote>
          <p style={{ fontStyle: "italic", fontSize: 17, color: "#c8c6c1", marginBottom: 12 }}>
            „Trebuie să ne asigurăm că aceste inovații sunt făcute etic, în siguranță și într-un mod care aduce beneficii tuturor.”
          </p>
          <p style={{ fontSize: 14, color: "#666677" }}>
            <strong style={{ color: "#888899" }}>Anu Talus</strong>, președinta Comitetului European pentru Protecția Datelor (EDPB), în <a href={EDPB} target="_blank" rel="noopener noreferrer">comunicatul EDPB despre opinia privind modelele AI</a>
          </p>
        </blockquote>

        <h2>Contractul cu furnizorul de AI și datele trimise în afara UE</h2>
        <p>
          Când un furnizor de AI prelucrează date în numele firmei tale, el este, în limbajul GDPR, persoană împuternicită de operator. Articolul 28 cere un contract care stabilește obiectul și durata prelucrării, natura și scopul ei, tipurile de date, categoriile de persoane și obligațiile fiecăruia. De regulă, furnizorii mari oferă un astfel de acord de prelucrare a datelor în termenii pentru firme, nu în cei pentru conturi personale.
        </p>
        <p>
          Verifică în aceiași termeni dacă datele introduse sunt folosite pentru antrenarea modelelor și dacă poți opri asta. Contul gratuit și personal al unui angajat nu îți dă niciun contract și nicio garanție.
        </p>
        <p>
          Dacă furnizorul stochează sau accesează datele în afara Uniunii, se aplică și regulile de transfer din capitolul V. Transferul e permis pe baza unei decizii de adecvare a Comisiei Europene pentru țara respectivă sau a unor garanții adecvate, cum sunt clauzele contractuale standard.
        </p>

        <h2>Decizii automate, evaluarea de impact și responsabilul cu protecția datelor</h2>
        <p>
          Articolul 22 dă oricui dreptul să nu facă obiectul unei decizii bazate exclusiv pe prelucrare automată, care produce efecte juridice sau îl afectează în mod similar într-o măsură semnificativă. Un AI care respinge singur un candidat sau o cerere de credit intră aici. Regula practică: AI-ul propune, un om decide. Cum pui aprobarea umană și celelalte limite în practică am arătat în ghidul despre <Link href="/blog/agenti-ai-reguli-siguranta">agenți AI în firmă</Link>.
        </p>
        <p>
          Evaluarea impactului asupra protecției datelor e obligatorie înainte de prelucrările susceptibile să genereze un risc ridicat, mai ales evaluarea sistematică a persoanelor pe baza prelucrării automate, cu efecte importante asupra lor, sau prelucrarea pe scară largă a datelor sensibile, cum sunt cele despre sănătate. Un chatbot care răspunde la întrebări despre program nu are nevoie de ea. Un sistem care scorează clienții, probabil că da.
        </p>
        <p>
          Un responsabil cu protecția datelor (DPO) e obligatoriu pentru autoritățile publice și pentru firmele a căror activitate principală înseamnă monitorizarea sistematică, pe scară largă, a persoanelor sau prelucrarea pe scară largă a datelor sensibile. Simpla folosire a unui instrument AI nu te obligă să numești unul. Dacă nu ești sigur în ce categorie intri, acesta e momentul pentru un avocat specializat.
        </p>
        <p>
          Dacă AI-ul vorbește direct cu clienții, de exemplu printr-un chatbot pe site, pe lângă GDPR mai ai o obligație: să le spui că vorbesc cu un AI. Detaliile sunt în ghidul despre <Link href="/blog/ai-act-chatbot-firme">AI Act și chatbotul firmei</Link>.
        </p>

        <h2>Ce scriu angajații în AI: politica internă</h2>
        <p>
          Cea mai ieftină măsură este o listă scurtă de reguli pentru echipă:
        </p>
        <ul>
          <li>ce instrumente AI sunt aprobate și cu ce tip de cont: de firmă, nu personal;</li>
          <li>ce date nu intră niciodată într-un AI: datele despre sănătate, opiniile politice sau religioase și celelalte categorii speciale din articolul 9, plus CNP-uri și date bancare;</li>
          <li>cum anonimizezi înainte: înlocuiești numele cu „Clientul A” și ștergi datele de contact;</li>
          <li>cine aprobă un instrument nou și cine răspunde de el.</li>
        </ul>
        <p>
          Regulile funcționează doar dacă oamenii au o variantă aprobată. Dacă interzici AI-ul fără să oferi una, cifrele Microsoft de mai sus arată ce se întâmplă: angajații îl folosesc oricum, pe ascuns.
        </p>

        <h2>GDPR și AI în firmă: lista de verificare</h2>
        <ol>
          <li><strong>Inventar</strong>: ce instrumente AI folosește echipa și ce date intră în fiecare.</li>
          <li><strong>Bază legală</strong>: pentru fiecare flux, contract, interes legitim sau consimțământ, notată în scris.</li>
          <li><strong>Contract cu furnizorul</strong>: acord de prelucrare a datelor, cont de firmă, antrenarea pe datele tale oprită unde se poate.</li>
          <li><strong>Transferuri</strong>: decizie de adecvare sau clauze contractuale standard pentru orice date care ies din Uniune.</li>
          <li><strong>Informare</strong>: politica de confidențialitate actualizată cu furnizorii de AI.</li>
          <li><strong>Om în buclă</strong>: pentru orice decizie cu efect important asupra unei persoane.</li>
          <li><strong>Ajutor specializat</strong>: evaluare de impact dacă ai profilare sau date sensibile, plus un avocat sau un DPO când nu ești sigur.</li>
        </ol>
        <p>
          Dacă automatizezi facturi, contracte sau alte acte, vezi și secțiunea despre GDPR din ghidul despre <Link href="/blog/automatizare-documente">automatizare documente</Link>. Când construim <a href="https://turbosnail.ro">automatizări AI</a>, lista aceasta e primul pas, înainte de orice flux.
        </p>
        <p>
          Pentru încălcarea principiilor de bază, inclusiv a temeiului legal, a drepturilor persoanelor sau a regulilor de transfer, articolul 83 prevede amenzi de până la 20 de milioane de euro sau 4% din cifra de afaceri mondială anuală, oricare valoare e mai mare. Sunt plafoane, nu sume automate: autoritatea ține seama de natura, gravitatea și durata încălcării. În România, autoritatea de supraveghere este <a href={ANSPDCP} target="_blank" rel="noopener noreferrer">ANSPDCP</a>.
        </p>

        <div className="divider" />

        <h2>Întrebări frecvente despre GDPR și AI</h2>
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
        <h2 className="hd" style={{ fontSize: 28, fontWeight: 900, letterSpacing: -0.6, marginBottom: 14 }}>Vrei să știi ce date ajung azi în AI-ul din firma ta?</h2>
        <p style={{ fontSize: 16, color: "#a8a6a1", marginBottom: 32, lineHeight: 1.65 }}>
          Înscrie-te pe lista de așteptare și facem împreună inventarul: ce instrumente folosește echipa, ce date intră în ele și ce trebuie pus în ordine.
        </p>
        <Link href="/#contact" style={{ background: "linear-gradient(135deg, #ff8c33, #ff6a00)", color: "#fff", borderRadius: 10, fontFamily: "'Outfit', sans-serif", fontWeight: 700, padding: "15px 32px", fontSize: 15, textDecoration: "none", display: "inline-block" }}>
          Înscrie-te pe lista de așteptare →
        </Link>
      </section>
    </main>
  );
}
