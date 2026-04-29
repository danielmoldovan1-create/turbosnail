import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cum Automatizezi Rapoartele Săptămânale și Lunare ale Firmei (cu Exemple Reale) | TurboSnail",
  description: "Automatizare rapoarte săptămânale și lunare: cum elimini 3-6 ore de muncă manuală pe săptămână, ce instrumente folosești și exemple reale din firme românești.",
  openGraph: {
    title: "Cum Automatizezi Rapoartele Săptămânale și Lunare ale Firmei (cu Exemple Reale) | TurboSnail",
    description: "Automatizare rapoarte săptămânale și lunare: cum elimini 3-6 ore de muncă manuală pe săptămână, ce instrumente folosești și exemple reale din firme românești.",
    url: "https://turbosnail.ro/blog/automatizare-rapoarte-saptamanale-lunare",
    siteName: "TurboSnail",
    locale: "ro_RO",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cum Automatizezi Rapoartele Săptămânale și Lunare ale Firmei (cu Exemple Reale)",
  "description": "Automatizare rapoarte săptămânale și lunare: cum elimini ore de muncă manuală, ce instrumente folosești și exemple reale din firme românești.",
  "url": "https://turbosnail.ro/blog/automatizare-rapoarte-saptamanale-lunare",
  "datePublished": "2026-04-29",
  "dateModified": "2026-04-29",
  "publisher": {
    "@type": "Organization",
    "name": "TurboSnail",
    "url": "https://turbosnail.ro",
    "logo": {
      "@type": "ImageObject",
      "url": "https://turbosnail.ro/turbosnail-logo.png"
    }
  },
  "inLanguage": "ro-RO",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://turbosnail.ro/blog/automatizare-rapoarte-saptamanale-lunare"
  }
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Pot automatiza rapoartele dacă datele mele sunt în Excel, nu în sisteme cloud?",
      acceptedAnswer: { "@type": "Answer", text: "Da, dar cu un pas suplimentar. Excel-ul trebuie să fie accesibil dintr-un loc comun (OneDrive, SharePoint sau un folder sincronizat) pentru ca automatizarea să poată citi fișierul. Alternativ, mutarea datelor în Google Sheets simplifică semnificativ integrările." }
    },
    {
      "@type": "Question",
      name: "Ce se întâmplă dacă datele sursă lipsesc sau sunt incomplete când rulează automatizarea?",
      acceptedAnswer: { "@type": "Answer", text: "Orice flux serios trebuie să aibă o regulă pentru date lipsă: fie raportul nu se trimite și se generează o alertă, fie se trimite cu secțiunile incomplete marcate vizibil. Definești comportamentul dorit în faza de configurare." }
    },
    {
      "@type": "Question",
      name: "Automatizarea rapoartelor necesită acces la datele sensibile ale firmei?",
      acceptedAnswer: { "@type": "Answer", text: "Da, și de aceea securitatea contează. Folosești token-uri de autentificare cu permisiuni minime necesare, nu credențiale de administrator. Datele ar trebui procesate și stocate în sisteme GDPR-compliant." }
    },
    {
      "@type": "Question",
      name: "Cât durează să automatizezi primul raport periodic al firmei mele?",
      acceptedAnswer: { "@type": "Answer", text: "Un raport simplu, cu 1-3 surse de date bine structurate, poate fi automatizat în 1-2 zile de lucru. Un raport complex poate dura 1-2 săptămâni. Pornește cu cel mai simplu raport, nu cu cel mai important." }
    },
    {
      "@type": "Question",
      name: "AI poate scrie interpretarea raportului sau doar colectează date?",
      acceptedAnswer: { "@type": "Answer", text: "Poate face amândouă. AI-ul poate identifica variații față de perioadele anterioare și le poate descrie în text, dar nu poate înlocui judecata unui manager care cunoaște contextul de business. Interpretarea AI este utilă ca punct de plecare, nu ca decizie finală." }
    }
  ]
};

export default function AutomatizareRapoarte() {
  return (
    <main style={{ fontFamily: "'Instrument Sans', sans-serif", background: "#0a0c14", color: "#eae8e3", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Instrument+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hd { font-family: 'Outfit', sans-serif; }
        .ac { background: linear-gradient(135deg, #ff8c33, #ff6a00, #ff5500); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .prose h2 { font-family: 'Outfit', sans-serif; font-size: 26px; font-weight: 800; margin: 48px 0 16px; color: #eae8e3; letter-spacing: -0.5px; }
        .prose h3 { font-family: 'Outfit', sans-serif; font-size: 19px; font-weight: 700; margin: 32px 0 12px; color: #eae8e3; }
        .prose p { font-size: 17px; line-height: 1.75; color: #a8a6a1; margin-bottom: 20px; }
        .prose ul { margin: 0 0 20px 24px; }
        .prose ol { margin: 0 0 20px 24px; }
        .prose li { font-size: 16px; line-height: 1.7; color: #a8a6a1; margin-bottom: 8px; }
        .prose strong { color: #eae8e3; font-weight: 600; }
        .prose a { color: #ff6a00; text-decoration: none; border-bottom: 1px solid rgba(255,106,0,0.3); }
        .prose a:hover { border-bottom-color: #ff6a00; }
        .prose blockquote { border-left: 3px solid #ff6a00; padding: 16px 20px; margin: 28px 0; background: rgba(255,106,0,0.05); border-radius: 0 8px 8px 0; }
        .prose blockquote p { color: #eae8e3; font-style: italic; margin: 0 0 8px; }
        .prose blockquote cite { font-size: 13px; color: #ff6a00; font-style: normal; font-weight: 600; }
        .tag { display: inline-block; padding: 5px 14px; border-radius: 100px; font-family: 'Outfit', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; background: rgba(255,106,0,0.08); color: #ff6a00; border: 1px solid rgba(255,106,0,0.18); }
        .faq-item { border-bottom: 1px solid #1a1d2a; padding: 22px 0; }
        .faq-item:last-child { border-bottom: none; }
        .faq-q { font-family: 'Outfit', sans-serif; font-size: 17px; font-weight: 700; color: #eae8e3; margin-bottom: 10px; }
        .faq-a { font-size: 15px; line-height: 1.7; color: #888899; }
        .example-box { background: rgba(20,22,35,0.8); border: 1px solid #1a1d2a; border-radius: 14px; padding: 24px 28px; margin: 28px 0; }
        .example-box .label { font-family: 'Outfit', sans-serif; font-size: 10px; font-weight: 700; color: #ff6a00; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; }
        .example-box .title { font-family: 'Outfit', sans-serif; font-size: 17px; font-weight: 700; color: #eae8e3; margin-bottom: 10px; }
        .example-box p { font-size: 15px; line-height: 1.7; color: #888899; margin: 0 0 10px; }
        .example-box .result { font-size: 14px; color: #ff6a00; font-weight: 600; border-top: 1px solid #1a1d2a; padding-top: 12px; margin-top: 4px; }
        .step-list { counter-reset: steps; list-style: none; margin: 0 0 20px; padding: 0; }
        .step-list li { counter-increment: steps; display: flex; gap: 16px; margin-bottom: 20px; align-items: flex-start; font-size: 16px; line-height: 1.7; color: #a8a6a1; }
        .step-list li::before { content: counter(steps); font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 800; color: #ff6a00; background: rgba(255,106,0,0.1); border: 1px solid rgba(255,106,0,0.2); border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,12,20,0.88)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(26,29,42,0.7)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <img src="/turbosnail-logo.png" alt="TurboSnail" style={{ height: 48, width: "auto" }} />
          </a>
          <a href="/#contact" style={{ background: "linear-gradient(135deg, #ff6a00, #ff5500)", color: "#fff", border: "none", padding: "11px 24px", borderRadius: 12, fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
            Audit Gratuit →
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: 120, paddingBottom: 56, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -100, width: 500, height: 500, background: "radial-gradient(ellipse, rgba(255,106,0,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 2 }}>
          <div style={{ marginBottom: 24, display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <span className="tag">Raportare</span>
            <span style={{ fontSize: 13, color: "#555566" }}>29 aprilie 2026</span>
            <span style={{ fontSize: 13, color: "#555566" }}>· 8 min citit</span>
          </div>
          <h1 className="hd" style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.12, marginBottom: 24, letterSpacing: "-1.5px", color: "#eae8e3" }}>
            Cum automatizezi rapoartele săptămânale și lunare ale firmei (cu exemple reale)
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: "#a8a6a1", marginBottom: 0 }}>
            Rapoartele periodice sunt una dintre cele mai frecvente surse de muncă manuală în firme: colectezi date din mai multe locuri, le aduni într-un tabel, faci câteva calcule și trimiți pe email. Se repetă săptămânal sau lunar, urmează mereu aceiași pași și este una din primele automatizări pe care merită să o faci.
          </p>
        </div>
      </section>

      {/* BODY */}
      <article style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px 80px" }} className="prose">

        <h2>De ce automatizarea rapoartelor este primul candidat logic</h2>
        <p>
          Automatizarea rapoartelor înseamnă că un sistem software colectează datele necesare din sursele tale (Google Analytics, platforme de vânzări, foi de calcul, CRM, sisteme contabile), le procesează conform unui template predefinit și trimite raportul final pe email sau îl depune într-un folder partajat, la o oră și dată stabilite, fără intervenție umană.
        </p>
        <p>
          Prin <a href="https://turbosnail.ro/servicii/raportare-analytics">raportare și analytics</a> automatizată, firmele din România elimină nu doar timpul de execuție, ci și erorile de copy-paste, întârzierile cauzate de absența celui care face raportul și inconsistențele dintre versiuni diferite ale aceluiași document.
        </p>
        <p>
          Există trei tipuri de rapoarte pe care firmele le automatizează frecvent: rapoartele operaționale (vânzări, stocuri, producție), rapoartele de marketing (trafic, conversii, campanii) și rapoartele financiare interne (cash flow săptămânal, situație clienți, facturi neîncasate). Fiecare dintre ele urmează un pattern similar și se poate automatiza cu instrumente accesibile.
        </p>

        <blockquote>
          <p>
            "Companiile care automatizează raportarea internă reduc timpul alocat activităților administrative cu 30-40% și câștigă în calitatea deciziilor, pentru că informația ajunge la manageri mai rapid și fără erori umane."
          </p>
          <cite>Gartner, "Future of Finance: Automation and Analytics", raport publicat 2024</cite>
        </blockquote>

        <h2>Exemple reale de automatizare rapoarte în firme din România</h2>
        <p>
          Mai jos sunt cinci situații concrete, tipice pentru firmele mici și mijlocii din România, cu detalii despre cum funcționează automatizarea în practică.
        </p>

        <div className="example-box">
          <div className="label">Exemplul 01 · E-commerce</div>
          <div className="title">Raport săptămânal de performanță vânzări</div>
          <p>Un magazin online cu 200-500 de comenzi săptămânale pierdea în fiecare luni dimineață 3-4 ore adunând date din Shopify, Google Analytics și Meta Ads într-un fișier Excel. Raportul merge săptămânal la 3 parteneri de afaceri.</p>
          <p>Soluția: un flux Make care rulează automat în fiecare luni la ora 7:00, preia datele din cele trei surse prin API, le completează într-un Google Sheets pre-formatat și trimite un email cu raportul atașat ca PDF. Un script AI adaugă un paragraf de interpretare: ce a crescut față de săptămâna anterioară, ce a scăzut și ce necesită atenție.</p>
          <div className="result">Economie: 12-16 ore lunar, zero erori de copiere, date disponibile înainte ca echipa să înceapă ziua</div>
        </div>

        <div className="example-box">
          <div className="label">Exemplul 02 · Agenție de marketing</div>
          <div className="title">Rapoarte lunare pentru clienți</div>
          <p>O agenție cu 15 clienți activi producea lunar câte un raport per client: trafic organic, performanță campanii plătite, social media. Un angajat dedica 2-3 ore per client, adică 30-45 de ore lunar doar pentru raportare.</p>
          <p>Soluția: template-uri Google Slides conectate la Google Analytics și platformele de ads prin Looker Studio. Datele se actualizează automat lunar. Angajatul verifică în 15 minute, adaugă interpretarea strategică și trimite. Munca mecanică a dispărut aproape complet.</p>
          <div className="result">Economie: 25-35 ore lunar, capacitate crescută fără angajare suplimentară</div>
        </div>

        <div className="example-box">
          <div className="label">Exemplul 03 · Firmă de construcții</div>
          <div className="title">Raport săptămânal de avans lucrări și costuri</div>
          <p>Managerul de proiect completa manual un raport de avans pentru fiecare șantier activ: ore lucrate, materiale consumate, stadiu față de plan. Datele veneau din foi de pontaj trimise pe WhatsApp, facturi și un sistem intern de urmărire a comenzilor.</p>
          <p>Soluția: un formular standardizat completat de șeful de șantier direct pe telefon în fiecare vineri. Datele intră automat într-o bază de date centralizată, declanșează generarea raportului consolidat și îl trimit pe email managementului la ora 18:00. Raportul include comparație cu săptămâna anterioară și alertă automată dacă un indicator depășește pragul stabilit.</p>
          <div className="result">Economie: 4-5 ore săptămânal per manager de proiect, vizibilitate în timp real</div>
        </div>

        <div className="example-box">
          <div className="label">Exemplul 04 · Clinică medicală privată</div>
          <div className="title">Raport lunar de activitate și cash flow</div>
          <p>Administratorul clinicii compila lunar: număr de consultații per medic, venituri per serviciu, facturi neîncasate, stoc consumabile. Informațiile veneau din softul de programări, Excel-ul contabilității și evidența furnizorilor.</p>
          <p>Soluția: integrare n8n care preia date din softul de programări și foile de calcul contabile, generează automat un raport consolidat în Google Sheets și trimite un email cu sumarul executiv pe primul luni al lunii. Facturile cu întârziere de plată declanșează automat un reminder separat.</p>
          <div className="result">Economie: 6-8 ore lunar, rata de încasare îmbunătățită prin reminder-uri automate</div>
        </div>

        <div className="example-box">
          <div className="label">Exemplul 05 · Distribuitor FMCG</div>
          <div className="title">Raport zilnic de livrări și stocuri</div>
          <p>Directorul de operațiuni primea în fiecare zi un raport manual: comenzi procesate, livrări finalizate, comenzi întârziate, stocuri sub prag. Raportul era asamblat de un angajat din trei sisteme diferite și ajungea pe email în jurul orei 10:00, uneori mai târziu.</p>
          <p>Soluția: flux automatizat care preia datele din sistemul WMS și ERP la 6:30 dimineața, generează raportul și îl trimite pe email la 7:00, cu alertele critice (stocuri sub prag minim, livrări cu întârziere mai mare de 24h) marcate vizual. Directorul are informația înainte să ajungă la birou.</p>
          <div className="result">Economie: 1-1.5 ore zilnic, decizie mai rapidă, fără așteptare după raport</div>
        </div>

        <h2>Cum automatizezi rapoartele: pașii practici</h2>
        <p>
          Indiferent de tipul raportului, procesul de automatizare urmează aceeași logică:
        </p>
        <ol className="step-list">
          <li><strong>Identifici sursele de date</strong> și verifici că sunt accesibile prin API sau export automat. Google Analytics, platformele de ads, Shopify, WooCommerce, cele mai populare CRM-uri au API-uri documentate. Excel și Google Sheets pot fi conectate direct.</li>
          <li><strong>Creezi template-ul raportului</strong> cu toate secțiunile, formulele și formatarea dorită. Template-ul devine fix; numai datele se schimbă la fiecare rulare.</li>
          <li><strong>Construiești fluxul de automatizare</strong> cu un instrument vizual (Make, n8n, Zapier) care conectează sursele la template și declanșează procesul la intervalul stabilit.</li>
          <li><strong>Adaugi interpretarea AI (opțional)</strong>: dacă raportul include și context narativ, un model AI poate genera automat 2-3 observații bazate pe variațiile față de perioada anterioară, fără să inventeze date.</li>
          <li><strong>Testezi cu date reale</strong> timp de 2-3 cicluri înainte de a elimina procesul manual. Verifici că datele sunt corecte, că formatul este cel așteptat de destinatari și că alertele funcționează.</li>
          <li><strong>Monitorizezi primele 4-6 săptămâni</strong>. Anomalii în date, conexiuni API care expiră, modificări de structură în sursele de date: toate sunt mai ușor de prins devreme decât după luni de rulare.</li>
        </ol>

        <h2>Ce instrumente funcționează pentru automatizarea rapoartelor</h2>
        <p>
          Instrumentele folosite în practică depind de unde sunt datele și cât de complex este raportul:
        </p>
        <ul>
          <li><strong>Looker Studio (Google)</strong> pentru rapoarte vizuale din surse Google (Analytics, Search Console, Google Ads, Sheets). Gratuit, cu actualizare automată a datelor.</li>
          <li><strong>Make sau n8n</strong> pentru fluxuri care colectează date din surse multiple, le procesează și le trimit prin email sau le salvează în locații definite.</li>
          <li><strong>Google Sheets cu Apps Script</strong> pentru rapoarte moderate ca complexitate, fără instrumente externe. Scriptul rulează automat la un interval stabilit.</li>
          <li><strong>Power BI sau Tableau</strong> pentru firme cu volume mari de date și nevoi complexe de vizualizare. Acestea cer mai multă configurare și uneori un specialist dedicat.</li>
        </ul>
        <p>
          Pentru 80% din rapoartele periodice ale firmelor mici și mijlocii din România, combinația Make + Google Sheets + email este suficientă și poate fi implementată fără cunoștințe de programare. Citește mai multe despre ce instrumente de automatizare există și cum se compară pe <a href="https://zapier.com/blog/best-workflow-automation-software/" target="_blank" rel="noopener noreferrer">Zapier Blog, ghid comparativ instrumente de automatizare</a>.
        </p>

        <h2>Greșelile frecvente când automatizezi raportarea</h2>
        <p>
          Prima greșeală: automatizezi un raport prost. Dacă raportul manual era deja confuz, plin de date irelevante sau ignorat de destinatari, automatizarea lui nu rezolvă nimic. Înainte de a automatiza, revizuiește raportul: ce date folosesc efectiv destinatarii pentru decizii? Elimină restul.
        </p>
        <p>
          A doua greșeală: ignori gestionarea erorilor. Sursele de date se schimbă: un API se actualizează, o coloană din Google Sheets este redenumită, un token de autentificare expiră. Fără alerte pentru eșecuri, vei primi rapoarte goale sau incorecte și nu vei ști.
        </p>
        <p>
          A treia greșeală: nu documentezi fluxul. Peste 3 luni, când apare o problemă sau vrei să modifici ceva, vei fi bucuros că ai notat ce face fiecare pas, de unde vin datele și cum se calculează fiecare indicator.
        </p>

        {/* FAQ */}
        <h2>Întrebări frecvente despre automatizarea rapoartelor</h2>
        <div style={{ marginTop: 8 }}>
          <div className="faq-item">
            <div className="faq-q">Pot automatiza rapoartele dacă datele mele sunt în Excel, nu în sisteme cloud?</div>
            <div className="faq-a">Da, dar cu un pas suplimentar. Excel-ul trebuie să fie accesibil dintr-un loc comun (OneDrive, SharePoint sau un folder sincronizat) pentru ca automatizarea să poată citi fișierul. Alternativ, mutarea datelor în Google Sheets simplifică semnificativ integrările.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Ce se întâmplă dacă datele sursă lipsesc sau sunt incomplete când rulează automatizarea?</div>
            <div className="faq-a">Orice flux serios trebuie să aibă o regulă pentru date lipsă: fie raportul nu se trimite și se generează o alertă, fie se trimite cu secțiunile incomplete marcate vizibil. Definești comportamentul dorit în faza de configurare, nu după ce apar problemele.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Automatizarea rapoartelor necesită acces la datele sensibile ale firmei?</div>
            <div className="faq-a">Da, și de aceea securitatea contează. Folosești token-uri de autentificare cu permisiuni minime necesare, nu credențiale de administrator. Datele ar trebui procesate și stocate în sisteme GDPR-compliant, mai ales dacă rapoartele conțin date personale ale clienților sau angajaților.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Cât durează să automatizezi primul raport periodic al firmei mele?</div>
            <div className="faq-a">Un raport simplu, cu 1-3 surse de date bine structurate, poate fi automatizat în 1-2 zile de lucru. Un raport complex, cu multiple surse, calcule și format elaborat, poate dura 1-2 săptămâni. Cheia este să pornești cu cel mai simplu raport, nu cu cel mai important.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">AI poate scrie interpretarea raportului sau doar colectează date?</div>
            <div className="faq-a">Poate face amândouă, cu o limitare importantă: AI-ul poate identifica variații față de perioadele anterioare și le poate descrie în text, dar nu poate înlocui judecata unui manager care cunoaște contextul de business. Interpretarea AI este utilă ca punct de plecare, nu ca decizie finală.</div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 64, padding: "44px 36px", background: "linear-gradient(160deg, #0f1119, #0c0e15)", border: "1px solid rgba(255,106,0,0.2)", borderRadius: 20, textAlign: "center" }}>
          <p className="hd" style={{ fontSize: 12, fontWeight: 700, color: "#ff6a00", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Pasul următor</p>
          <h3 className="hd" style={{ fontSize: 26, fontWeight: 800, marginBottom: 14, letterSpacing: "-0.5px", lineHeight: 1.2, color: "#eae8e3" }}>
            Automatizează primul raport al firmei tale
          </h3>
          <p style={{ fontSize: 15, color: "#888899", lineHeight: 1.65, marginBottom: 28, maxWidth: 440, marginLeft: "auto", marginRight: "auto" }}>
            Spune-ne ce raport consomă cel mai mult timp la tine și discutăm concret ce automatizăm, cu ce instrumente și în cât timp.
          </p>
          <a href="https://turbosnail.ro/#contact" style={{ display: "inline-block", background: "linear-gradient(135deg, #ff6a00, #ff5500)", color: "#fff", padding: "15px 32px", borderRadius: 12, fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
            Contactează-ne →
          </a>
        </div>

      </article>
    </main>
  );
}
