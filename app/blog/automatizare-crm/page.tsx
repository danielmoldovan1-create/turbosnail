import type { Metadata } from "next";
import Link from "next/link";
import AuthorBox, { AUTHOR_LD } from "../../components/AuthorBox";

const STATE_OF_SALES = "https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/reports/sales/salesforce-state-of-sales-report-2026.pdf";
const TITLE = "Automatizare CRM: ce automatizezi primul și cum | TurboSnail";
const DESCRIPTION = "Automatizare CRM pe înțeles: ce reguli pui în CRM ca cererile, follow-up-urile și rapoartele să se facă singure, în ce ordine și ce rămâne la om.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://turbosnail.ro/blog/automatizare-crm",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://turbosnail.ro/blog/automatizare-crm",
    type: "article",
    locale: "ro_RO",
    siteName: "TurboSnail",
  },
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Automatizare CRM: ce automatizezi în CRM-ul firmei și de unde începi",
  description: DESCRIPTION,
  url: "https://turbosnail.ro/blog/automatizare-crm",
  datePublished: "2026-11-10",
  dateModified: "2026-11-10",
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
    "@id": "https://turbosnail.ro/blog/automatizare-crm",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ce înseamnă automatizare CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reguli care fac singure pașii repetitivi din CRM: introducerea cererilor, împărțirea lor, follow-up-urile, actualizarea etapelor și rapoartele. Omul rămâne la discuția cu clientul și la decizii.",
      },
    },
    {
      "@type": "Question",
      name: "Cu ce automatizare CRM încep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cu intrarea automată a cererilor din formularul de pe site și din email, plus verificarea duplicatelor. Fără date corecte, toate celelalte automatizări lucrează pe greșeli.",
      },
    },
    {
      "@type": "Question",
      name: "Am nevoie de un programator pentru automatizarea CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pentru regulile din interiorul CRM-ului, de obicei nu: se configurează din setări. Pentru fluxurile care leagă mai multe aplicații ajută cineva care cunoaște o platformă de automatizare și care documentează ce a construit.",
      },
    },
    {
      "@type": "Question",
      name: "Poate AI-ul să trimită singur emailuri clienților din CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tehnic, da. Recomandarea noastră e ca AI-ul să pregătească ciorna, iar omul să o trimită, cel puțin până vezi cum se descurcă pe cazuri reale, în română și cu clienții tăi.",
      },
    },
    {
      "@type": "Question",
      name: "Ce date personale folosește o automatizare CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Doar pe cele de care are nevoie pasul respectiv, de obicei numele, emailul, firma și istoricul cererii. Fiecare furnizor prin care trec datele trebuie să aibă contract de prelucrare, iar clienții trebuie să afle din politica de confidențialitate cum le folosești datele.",
      },
    },
  ],
};

export default function AutomatizareCrm() {
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
            CRM · Automatizare
          </div>
          <span style={{ marginLeft: 12, fontSize: 13, color: "#555566" }}>10 noiembrie 2026</span>
          <h1 className="hd" style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.12, letterSpacing: -1, marginBottom: 24 }}>
            Automatizare CRM: ce automatizezi în CRM-ul firmei și de unde începi
          </h1>
          <p style={{ fontSize: 18, color: "#a8a6a1", lineHeight: 1.65, maxWidth: 620 }}>
            <strong style={{ color: "#eae8e3" }}>Automatizare CRM</strong> înseamnă reguli care fac singure munca de rutină din CRM: cererile intră fără să le copieze cineva, follow-up-urile pleacă la timp, iar raportul de luni se face fără Excel. Mai jos găsești ce automatizezi întâi, în ce ordine și ce trebuie să rămână la om.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <article className="prose mx" style={{ paddingBottom: 60 }}>

        <h2>Ce înseamnă automatizare CRM, pe scurt</h2>
        <p>
          Automatizarea înseamnă că un program face singur un pas repetitiv pe care altfel îl face un om. Într-un CRM, fiecare automatizare are trei părți: un <strong>declanșator</strong> (vine o cerere, trece o dată, se schimbă o etapă), o <strong>condiție</strong> (doar pentru clienții noi, doar pentru ofertele trimise) și o <strong>acțiune</strong> (se creează fișa, se trimite un email, se atribuie o sarcină).
        </p>
        <p>
          Inteligența artificială adaugă partea care cere înțelegerea textului: citește un email scris liber, scoate din el firma și ce vrea clientul sau scrie o ciornă de răspuns. Cea mai mare parte a muncii o fac însă regulile simple. Dacă nu ai încă un CRM sau vrei întâi definiția, citește ghidul despre <Link href="/blog/ce-inseamna-crm">ce înseamnă CRM</Link>.
        </p>

        <h2>De ce merită: unde se duce timpul vânzătorilor</h2>
        <p>
          Raportul <a href={STATE_OF_SALES} target="_blank" rel="noopener noreferrer">State of Sales</a> al Salesforce, ediția a 7-a, făcut pe 4.050 de profesioniști din vânzări din 22 de țări, arată că vânzătorii petrec mai mult de jumătate din timp cu muncă ce nu e vânzare, cum sunt introducerea datelor și prospectarea. Salesforce vinde CRM-uri, deci are interes să arate problema. Întrebarea rămâne bună pentru orice firmă: câte ore pe săptămână copiază oamenii tăi date dintr-un loc în altul?
        </p>
        <p>
          Același raport spune că, la echipele care folosesc deja agenți AI, primele probleme cu datele sunt erorile manuale și datele duplicate. Contează pentru automatizare: o regulă care lucrează pe date greșite face greșelile mai repede.
        </p>
        <blockquote>
          <p style={{ fontStyle: "italic", fontSize: 17, color: "#c8c6c1", marginBottom: 12 }}>
            „Vânzătorii și agenții AI au nevoie de contextul firmei și al clientului ca să câștige. Unificarea datelor e primul pas.”
          </p>
          <p style={{ fontSize: 14, color: "#666677" }}>
            <strong style={{ color: "#888899" }}>Paul Bullis</strong>, Distinguished Engineer și director tehnic (CTO) pentru Salesforce Platform la IBM, în raportul <a href={STATE_OF_SALES} target="_blank" rel="noopener noreferrer">State of Sales, ediția a 7-a</a>
          </p>
        </blockquote>

        <h2>Șapte automatizări CRM, în ordinea în care merită făcute</h2>
        <ol>
          <li><strong>Cererea nouă intră singură în CRM.</strong> Declanșatorul e formularul de pe site sau un email pe adresa de vânzări. Se creează fișa clientului, cu sursa notată. Omul nu mai copiază nimic, doar citește cererea.</li>
          <li><strong>Verificarea duplicatelor.</strong> Înainte să apară o fișă nouă, CRM-ul caută după email și după numele firmei. Dacă clientul există, cererea se adaugă la fișa lui.</li>
          <li><strong>Cererea ajunge la omul potrivit.</strong> După zonă, după produs sau pe rând. Managerul nu mai împarte cererile de mână, iar fiecare cerere are un responsabil din primul minut.</li>
          <li><strong>Confirmarea și prima sarcină.</strong> Clientul primește un mesaj că cererea a ajuns, iar vânzătorul o sarcină cu termen. Răspunsul de fond îl scrie tot omul. Pentru șabloane și ton, vezi ghidul despre <Link href="/blog/cum-sa-automatizezi-emailurile-firmei">automatizarea emailurilor</Link>.</li>
          <li><strong>Follow-up la ofertele fără răspuns.</strong> Dacă o ofertă stă câteva zile fără răspuns, CRM-ul creează o sarcină sau pregătește un email pe care vânzătorul îl citește și apoi îl trimite.</li>
          <li><strong>Etapa se schimbă singură.</strong> Când pleacă oferta, când se semnează contractul sau când se emite factura, etapa din pipeline se actualizează din acel eveniment, nu din memoria cuiva.</li>
          <li><strong>Raportul săptămânal.</strong> Luni dimineață, fiecare primește lista ofertelor deschise, a celor fără activitate și a sarcinilor întârziate.</li>
        </ol>
        <p>
          Ordinea nu e întâmplătoare. Primele trei fac datele corecte, următoarele trei folosesc acele date, iar raportul arată dacă totul merge. Pornești o singură automatizare, o lași să ruleze două săptămâni și abia apoi treci la următoarea.
        </p>

        <h2>Un exemplu: drumul unei cereri prin CRM</h2>
        <p>
          <strong>Fără automatizare.</strong> Un client completează formularul de pe site la ora 18. Emailul ajunge în căsuța generală, îl vede cineva a doua zi la prânz, îl copiază în CRM și îl trimite pe chat colegului care se ocupă de zona respectivă. Oferta pleacă după încă o zi, iar follow-up-ul depinde de cine își amintește de el.
        </p>
        <p>
          <strong>Cu automatizare.</strong> Aceeași cerere intră în CRM în câteva secunde, cu sursa notată. CRM-ul verifică dacă firma există deja, dă cererea vânzătorului din zona ei și îi creează o sarcină pentru dimineață. Clientul primește pe loc confirmarea că cererea a ajuns. Dacă oferta stă fără răspuns, vânzătorul primește la timp ciorna de follow-up. Omul face în continuare partea importantă: citește, sună și scrie oferta. Doar că nu mai pierde timp cu restul.
        </p>

        <h2>Unde ajută AI-ul în automatizarea CRM</h2>
        <ul>
          <li>citește emailurile scrise liber și completează câmpurile: firma, produsul, urgența;</li>
          <li>clasifică cererile: client nou, client existent, furnizor sau spam;</li>
          <li>scrie în fișa clientului rezumatul unui apel sau al unui fir lung de emailuri;</li>
          <li>pregătește ciorne de răspuns, pe care vânzătorul le verifică înainte să le trimită.</li>
        </ul>
        <p>
          Pasul următor e un <Link href="/blog/agent-ai-pentru-vanzari-romania">agent AI pentru vânzări</Link>, care face singur mai mulți pași la rând, cu aprobarea unui om la final. Oriunde AI-ul vede date personale, ai nevoie de o bază legală și de un contract cu furnizorul, cum am explicat în ghidul despre <Link href="/blog/gdpr-ai-firma">GDPR și AI</Link>.
        </p>

        <h2>Reguli în CRM sau o platformă separată</h2>
        <p>
          Majoritatea CRM-urilor au reguli incluse, de tipul „când se întâmplă X, fă Y”. Pentru fluxurile care rămân în interiorul CRM-ului, cum sunt alocarea, sarcinile și etapele, sunt de obicei suficiente și ușor de întreținut.
        </p>
        <p>
          Când fluxul trece prin mai multe aplicații (formularul de pe site, emailul, programul de facturare, un tabel), regulile din CRM nu mai ajung. Atunci folosești o platformă care leagă aplicațiile între ele, ca Make, n8n, Zapier sau Power Automate. Diferențele dintre ele sunt în ghidul despre <Link href="/blog/platforme-de-automatizare">platforme de automatizare</Link>.
        </p>
        <p>
          Regula practică: ce se întâmplă în CRM rămâne în CRM, iar ce trece prin mai multe aplicații merge în platformă. În ambele cazuri, fiecare automatizare are un om care știe că există și ce face.
        </p>

        <h2>Greșeli care strică un CRM automatizat</h2>
        <ul>
          <li><strong>Automatizezi un proces nescris.</strong> Regula copiază haosul, doar mai repede. Scrie întâi etapele reale, de la cerere la factură.</li>
          <li><strong>Prea multe emailuri automate.</strong> Clientul simte că vorbește cu un robot și nu mai răspunde.</li>
          <li><strong>Nimeni nu răspunde de reguli.</strong> După câteva luni nu mai știe nimeni de ce pleacă un anumit email.</li>
          <li><strong>Nu testezi pe cazuri reale.</strong> Un client cu două adrese de email, o cerere scrisă în engleză, două firme cu nume asemănătoare.</li>
          <li><strong>Câmpuri obligatorii pe care nu le completează nimeni.</strong> Automatizarea se blochează exact acolo.</li>
        </ul>

        <h2>Automatizare CRM: cum măsori dacă a meritat</h2>
        <p>
          Înainte să pornești prima regulă, notează trei lucruri pentru ultima lună: în cât timp primește o cerere primul răspuns, câte oferte au avut follow-up la timp și cât timp pe săptămână pierde echipa cu introducerea datelor, așa cum îl estimează chiar oamenii care o fac. După o lună cu automatizarea pornită, compari aceleași trei cifre. Dacă nu s-a mișcat nimic, problema e în proces, nu în program.
        </p>
        <p>
          Așa lucrăm și noi când construim <a href="https://turbosnail.ro">automatizări AI</a> pentru vânzări: o regulă, o măsurătoare, apoi următoarea regulă.
        </p>

        <div className="divider" />

        <h2>Întrebări frecvente despre automatizarea CRM</h2>
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
        <h2 className="hd" style={{ fontSize: 28, fontWeight: 900, letterSpacing: -0.6, marginBottom: 14 }}>Vrei să știi ce automatizare CRM merită făcută prima la tine?</h2>
        <p style={{ fontSize: 16, color: "#a8a6a1", marginBottom: 32, lineHeight: 1.65 }}>
          Înscrie-te pe lista de așteptare și urmărim împreună drumul unei cereri prin CRM-ul tău: unde se copiază date de mână și ce poate rula singur.
        </p>
        <Link href="/#contact" style={{ background: "linear-gradient(135deg, #ff8c33, #ff6a00)", color: "#fff", borderRadius: 10, fontFamily: "'Outfit', sans-serif", fontWeight: 700, padding: "15px 32px", fontSize: 15, textDecoration: "none", display: "inline-block" }}>
          Înscrie-te pe lista de așteptare →
        </Link>
      </section>
    </main>
  );
}
