import type { Metadata } from "next";
import Link from "next/link";
import AuthorBox, { AUTHOR_LD } from "../../components/AuthorBox";

const HBR = "https://hbr.org/2002/02/avoid-the-four-perils-of-crm";
const STATE_OF_SALES = "https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/reports/sales/salesforce-state-of-sales-report-2026.pdf";

export const metadata: Metadata = {
  title: "Ce înseamnă CRM și ce poți automatiza în el | TurboSnail",
  description: "Ce înseamnă CRM, pe scurt: locul în care ții clienții, ofertele și pașii următori. Plus ce poți automatiza în CRM ca să nu mai introduci date de mână.",
  alternates: {
    canonical: "https://turbosnail.ro/blog/ce-inseamna-crm",
  },
  openGraph: {
    title: "Ce înseamnă CRM și ce poți automatiza în el | TurboSnail",
    description: "Ce înseamnă CRM, pe scurt: locul în care ții clienții, ofertele și pașii următori. Plus ce poți automatiza în CRM ca să nu mai introduci date de mână.",
    url: "https://turbosnail.ro/blog/ce-inseamna-crm",
    type: "article",
    locale: "ro_RO",
    siteName: "TurboSnail",
  },
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ce înseamnă CRM și ce poți automatiza în el",
  description: "Ce înseamnă CRM, pe scurt: locul în care ții clienții, ofertele și pașii următori. Plus ce poți automatiza în CRM ca să nu mai introduci date de mână.",
  url: "https://turbosnail.ro/blog/ce-inseamna-crm",
  datePublished: "2026-11-03",
  dateModified: "2026-11-03",
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
    "@id": "https://turbosnail.ro/blog/ce-inseamna-crm",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ce înseamnă CRM, pe scurt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CRM vine din engleză, de la Customer Relationship Management, adică gestionarea relațiilor cu clienții. În practică, e programul în care ții la un loc clienții, istoricul discuțiilor și ofertele deschise, ca toată echipa să vadă aceleași informații.",
      },
    },
    {
      "@type": "Question",
      name: "Am nevoie de CRM dacă am doar câțiva clienți?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nu neapărat. Cât timp lucrezi singur, cu puțini clienți, un tabel bine ținut ajunge. Un CRM devine util când mai mulți oameni lucrează cu aceiași clienți, când se pierd follow-up-uri sau când vrei să afli de ce se pierd ofertele.",
      },
    },
    {
      "@type": "Question",
      name: "Care e diferența dintre CRM și ERP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CRM-ul se ocupă de relația cu clientul și de vânzare, până la ofertă și contract. ERP-ul se ocupă de ce urmează în interiorul firmei: stocuri, producție, facturare, contabilitate. Multe firme le leagă, ca o ofertă câștigată să ajungă direct în facturare.",
      },
    },
    {
      "@type": "Question",
      name: "Ce poți automatiza într-un CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Introducerea cererilor din formulare și emailuri, completarea și curățarea datelor, follow-up-urile, împărțirea cererilor către oamenii potriviți și rapoartele. Cu inteligență artificială, CRM-ul poate primi și rezumate ale emailurilor sau ale apelurilor.",
      },
    },
    {
      "@type": "Question",
      name: "Pot pune datele din CRM într-un instrument AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, dacă ai o bază legală, un contract cu furnizorul instrumentului AI și trimiți doar datele de care e nevoie. Fără aceste trei lucruri, ține datele personale ale clienților departe de AI.",
      },
    },
  ],
};

export default function CeInseamnaCrm() {
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
            CRM · Vânzări
          </div>
          <span style={{ marginLeft: 12, fontSize: 13, color: "#555566" }}>3 noiembrie 2026</span>
          <h1 className="hd" style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.12, letterSpacing: -1, marginBottom: 24 }}>
            Ce înseamnă CRM și ce poți automatiza în el
          </h1>
          <p style={{ fontSize: 18, color: "#a8a6a1", lineHeight: 1.65, maxWidth: 620 }}>
            <strong style={{ color: "#eae8e3" }}>Ce înseamnă CRM</strong>, pe scurt: un program în care ții la un loc toți clienții, toate ofertele și pașii următori. Numele vine din engleză, Customer Relationship Management, adică gestionarea relațiilor cu clienții. Pentru o firmă mică, diferența se vede repede: nu mai cauți oferta într-un email de acum trei săptămâni și nu mai depinzi de memoria unui singur vânzător. Mai jos găsești ce face un CRM, de ce eșuează multe proiecte de acest fel și ce poți automatiza în el ca să nu mai introduci date de mână.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <article className="prose mx" style={{ paddingBottom: 60 }}>

        <h2>Ce înseamnă CRM, pe scurt</h2>
        <p>
          Un CRM are trei părți, indiferent cum se numește programul:
        </p>
        <ul>
          <li><strong>Baza de contacte</strong>: fiecare client sau potențial client, cu firma, persoana de contact, emailul și telefonul, într-un singur loc, nu în agendele a trei oameni.</li>
          <li><strong>Istoricul</strong>: ce i-ai trimis, ce ți-a răspuns, când ați vorbit ultima dată. Oricine din echipă poate prelua discuția de unde a rămas.</li>
          <li><strong>Pipeline-ul</strong>: lista ofertelor deschise, fiecare într-o etapă (cerere nouă, ofertă trimisă, negociere, câștigată sau pierdută). Dintr-o privire vezi câte oferte ai pe masă și care stau pe loc.</li>
        </ul>
        <p>
          Un tabel Excel poate ține primele două părți cât timp ai câțiva clienți. Problemele apar când lucrează mai mulți oameni în același tabel, când cineva trebuie să-ți amintească de un follow-up sau când vrei să înțelegi de ce se pierd ofertele. Acolo un CRM face diferența.
        </p>

        <h2>Ce înseamnă CRM pentru o firmă mică: semne că ai nevoie de unul</h2>
        <p>
          Nu orice firmă are nevoie de un CRM din prima zi. Semnele că a venit momentul sunt destul de clare:
        </p>
        <ul>
          <li>o ofertă a rămas fără răspuns pentru că nimeni nu și-a amintit să revină;</li>
          <li>cererile din formularul de pe site sau de pe email se pierd printre mesajele de zi cu zi;</li>
          <li>când pleacă un om din vânzări, pleacă și istoricul discuțiilor lui cu clienții;</li>
          <li>nu poți spune în două minute câte oferte sunt deschise și în ce etapă e fiecare;</li>
          <li>rapoartele de vânzări se fac de mână, din mai multe tabele.</li>
        </ul>
        <p>
          Dacă recunoști două sau mai multe, un CRM simplu te ajută mai mult decât încă un tabel.
        </p>

        <h2>De ce eșuează multe proiecte CRM</h2>
        <p>
          CRM-ul are o reputație proastă în multe firme, și nu fără motiv. Un articol din 2002 din <a href={HBR} target="_blank" rel="noopener noreferrer">Harvard Business Review</a>, semnat de trei consultanți Bain & Company, pornește de la cazul Monster.com: firma a investit într-un CRM făcut la comandă și și-a legat toate sistemele informatice, ca să-și facă echipa de vânzări mai eficientă. Sistemul a ieșit atât de lent încât agenții de vânzări nu puteau descărca datele clienților pe laptop. Până la urmă, Monster.com a trebuit să refacă tot sistemul și a pierdut bani și încrederea clienților și a angajaților.
        </p>
        <p>
          Lecția pentru o firmă mică: un CRM trebuie să fie ușor de folosit de oamenii care lucrează zilnic în el. Dacă îi încurcă, îl ocolesc, oricât de bun ar părea pe hârtie.
        </p>
        <p>
          Al doilea motiv e munca în plus. Un CRM e la fel de bun ca datele din el, iar datele le introduce de obicei un om de vânzări care ar prefera să vândă. Raportul <a href={STATE_OF_SALES} target="_blank" rel="noopener noreferrer">State of Sales</a> al Salesforce, producător de CRM (ediția a 7-a, 4.050 de profesioniști în vânzări din 22 de țări, chestionați în august și septembrie 2025), arată că agenții de vânzări își petrec doar 40% din timp vânzând. Restul de 60% merge pe muncă ce nu e vânzare propriu-zisă, cum sunt introducerea datelor și prospectarea.
        </p>
        <p>
          Concluzia practică: un CRM în care oamenii trebuie să scrie totul de mână rămâne gol în câteva luni. Iar introducerea datelor e exact partea care se poate automatiza.
        </p>

        <h2>Ce poți automatiza într-un CRM</h2>
        <p>
          Automatizarea înseamnă că un program face singur un pas repetitiv pe care altfel îl face un om: copiază datele dintr-un formular în CRM sau trimite un email la o dată stabilită. Inteligența artificială adaugă partea care cere înțelegerea textului: citește un email scris liber de un client și scoate din el numele firmei, ce produs îl interesează și când vrea să fie contactat. Împreună, preiau munca de birou din jurul vânzării.
        </p>
        <ol>
          <li><strong>Cereri introduse automat.</strong> Cererile din formularul de pe site, din emailuri sau din campanii intră direct în CRM, cu sursa notată. Nimeni nu mai copiază date dintr-un loc în altul.</li>
          <li><strong>Date completate și curățate.</strong> Duplicatele se unesc, iar câmpurile lipsă se completează din emailurile primite. Cum arată astfel de fluxuri între aplicații am explicat în ghidul despre <Link href="/blog/automatizare-date">automatizare date</Link>.</li>
          <li><strong>Follow-up la timp.</strong> Dacă o ofertă nu primește răspuns în câteva zile, CRM-ul creează o sarcină sau trimite un email pregătit dinainte. Pentru partea de emailuri, vezi ghidul despre <Link href="/blog/cum-sa-automatizezi-emailurile-firmei">automatizarea emailurilor</Link>.</li>
          <li><strong>Împărțirea cererilor.</strong> Fiecare cerere nouă ajunge la omul potrivit, după zonă, produs sau cine e liber, fără ca managerul să le împartă de mână.</li>
          <li><strong>Rezumate și rapoarte.</strong> După un apel, AI-ul scrie un rezumat în fișa clientului. La final de săptămână, raportul cu ofertele deschise se trimite singur.</li>
        </ol>
        <p>
          Pasul următor e un agent AI care nu doar completează date, ci face o parte din muncă: califică cererile, propune răspunsuri și pregătește ofertele, iar un om aprobă. Detaliile sunt în ghidul despre <Link href="/blog/agent-ai-pentru-vanzari-romania">agent AI pentru vânzări</Link>.
        </p>
        <blockquote>
          <p style={{ fontStyle: "italic", fontSize: 17, color: "#c8c6c1", marginBottom: 12 }}>
            „La Salesforce, folosim agenți ca să lucrăm toate lead-urile neatinse. Înainte, lăsam aceste lead-uri să cadă pe jos, ca rumegușul. Acum, agenții le adună și caută aurul printre ele.”
          </p>
          <p style={{ fontSize: 14, color: "#666677" }}>
            <strong style={{ color: "#888899" }}>Adam Alfano</strong>, vicepreședinte executiv pentru vânzări la Salesforce, în prefața raportului <a href={STATE_OF_SALES} target="_blank" rel="noopener noreferrer">State of Sales, ediția a 7-a</a>
          </p>
        </blockquote>
        <p>
          Salesforce lucrează la altă scară. La o firmă cu doi-trei vânzători, principiul e același, doar mai mic: nicio cerere nu mai rămâne fără răspuns pentru că s-a pierdut într-un inbox.
        </p>

        <h2>Ce înseamnă CRM automatizat: de unde începi</h2>
        <ol>
          <li><strong>Scrie procesul de vânzare pe hârtie.</strong> Etapele reale prin care trece un client, de la prima cerere la factură. Un CRM copiază procesul, nu îl inventează.</li>
          <li><strong>Alege puține câmpuri.</strong> Doar ce folosești efectiv: nume, firmă, contact, sursă, etapă, următorul pas. Fiecare câmp în plus e încă un lucru de completat.</li>
          <li><strong>Leagă sursele principale.</strong> Formularul de pe site și adresa de email pe care vin cererile. De aici vine cea mai mare parte a muncii de introducere a datelor.</li>
          <li><strong>Automatizează un singur follow-up.</strong> De exemplu, o sarcină automată pentru fiecare ofertă fără răspuns după trei zile. Abia apoi treci la următorul flux.</li>
          <li><strong>Verifică după o lună.</strong> Câte cereri au intrat, câte au primit răspuns la timp, câte au ajuns oferte. Dacă cifrele nu se văd ușor, CRM-ul nu e încă folosit cum trebuie.</li>
        </ol>
        <p>
          Un CRM conține datele personale ale clienților, deci intră sub GDPR din prima zi. Dacă îl legi de un instrument AI, verifică întâi ce date ajung acolo și pe ce bază legală, cum am arătat în ghidul despre <Link href="/blog/gdpr-ai-firma">GDPR și AI</Link>.
        </p>
        <p>
          Când construim <a href="https://turbosnail.ro">automatizări AI</a> pentru vânzări, CRM-ul e primul loc la care ne uităm: acolo se văd cel mai repede orele pierdute cu introducerea datelor.
        </p>

        <div className="divider" />

        <h2>Întrebări frecvente despre CRM</h2>
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
        <h2 className="hd" style={{ fontSize: 28, fontWeight: 900, letterSpacing: -0.6, marginBottom: 14 }}>Vrei să știi ce poți automatiza în vânzările tale?</h2>
        <p style={{ fontSize: 16, color: "#a8a6a1", marginBottom: 32, lineHeight: 1.65 }}>
          Înscrie-te pe lista de așteptare și urmărim împreună drumul unei cereri, de la formular la ofertă: ce se poate face singur și ce rămâne la om.
        </p>
        <Link href="/#contact" style={{ background: "linear-gradient(135deg, #ff8c33, #ff6a00)", color: "#fff", borderRadius: 10, fontFamily: "'Outfit', sans-serif", fontWeight: 700, padding: "15px 32px", fontSize: 15, textDecoration: "none", display: "inline-block" }}>
          Înscrie-te pe lista de așteptare →
        </Link>
      </section>
    </main>
  );
}
