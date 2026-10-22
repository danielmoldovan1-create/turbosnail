import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agenți AI în firmă: 5 reguli de siguranță | TurboSnail",
  description: "Agenți AI în firmă fără surprize: aprobare umană la acțiunile riscante, limite de volum și buget, jurnal, test pe date de probă și oprire de urgență.",
  alternates: {
    canonical: "https://turbosnail.ro/blog/agenti-ai-reguli-siguranta",
  },
  openGraph: {
    title: "Agenți AI în firmă: 5 reguli de siguranță | TurboSnail",
    description: "Agenți AI în firmă fără surprize: aprobare umană la acțiunile riscante, limite de volum și buget, jurnal, test pe date de probă și oprire de urgență.",
    url: "https://turbosnail.ro/blog/agenti-ai-reguli-siguranta",
    type: "article",
    locale: "ro_RO",
    siteName: "TurboSnail",
  },
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Agenți AI în firmă: reguli ca să nu-ți scape de sub control",
  description: "Agenți AI în firmă fără surprize: aprobare umană la acțiunile riscante, limite de volum și buget, jurnal, test pe date de probă și oprire de urgență.",
  url: "https://turbosnail.ro/blog/agenti-ai-reguli-siguranta",
  datePublished: "2026-10-22",
  dateModified: "2026-10-22",
  publisher: {
    "@type": "Organization",
    name: "TurboSnail",
    url: "https://turbosnail.ro",
    logo: { "@type": "ImageObject", url: "https://turbosnail.ro/turbosnail-logo.png" },
  },
  inLanguage: "ro-RO",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://turbosnail.ro/blog/agenti-ai-reguli-siguranta",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Cine răspunde dacă un agent AI greșește?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Firma și omul care i-a dat accesul. Agentul nu poate fi tras la răspundere, așa că fiecare agent are un responsabil numit, care îi stabilește limitele, îi verifică jurnalul și știe cum să-l oprească.",
      },
    },
    {
      "@type": "Question",
      name: "Pot lăsa un agent AI să trimită singur emailuri clienților?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, dar treptat. La început agentul scrie ciorne, pe care le aprobă un om. Trimiterea automată vine după ce ai verificat destule ciorne, cu un plafon zilnic de mesaje și cu aprobare umană păstrată pentru mesajele sensibile, cum sunt reclamațiile sau rambursările.",
      },
    },
    {
      "@type": "Question",
      name: "Am nevoie de un departament IT ca să folosesc agenți AI în siguranță?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nu. Cele cinci reguli se pot aplica din setările instrumentelor obișnuite: cont separat pentru agent, permisiuni minime, plafoane, jurnal și oprire de urgență. Ai nevoie, în schimb, de un om din firmă care răspunde de agent.",
      },
    },
    {
      "@type": "Question",
      name: "Ce fac dacă agentul începe să facă greșeli?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Îl oprești întâi, apoi te uiți în jurnal ce a făcut și pe ce date. Corectezi cauza, repari ce a ajuns la clienți și repornești agentul cu mai puțină autonomie, cu aprobare umană la fiecare acțiune, până își recâștigă încrederea.",
      },
    },
  ],
};

export default function AgentiAiReguliSiguranta() {
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
        .prose h3 { font-family: 'Outfit', sans-serif; font-size: 20px; font-weight: 800; margin: 32px 0 12px; color: #eae8e3; letter-spacing: -0.3px; }
        .prose p { font-size: 17px; line-height: 1.75; color: #a8a6a1; margin-bottom: 20px; }
        .prose strong { color: #eae8e3; font-weight: 600; }
        .prose a { color: #ff6a00; text-decoration: none; border-bottom: 1px solid rgba(255,106,0,0.3); }
        .prose a:hover { border-bottom-color: #ff6a00; }
        .prose ul { margin: 0 0 20px 0; padding: 0; list-style: none; }
        .prose ul li { font-size: 16px; line-height: 1.7; color: #a8a6a1; padding: 10px 0 10px 20px; border-bottom: 1px solid #12141f; position: relative; }
        .prose ul li::before { content: "→"; position: absolute; left: 0; color: #ff6a00; font-size: 14px; top: 12px; }
        .prose ul li:last-child { border-bottom: none; }
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
            AGENȚI AI · SIGURANȚĂ
          </div>
          <h1 className="hd" style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.12, letterSpacing: -1, marginBottom: 24 }}>
            Agenți AI în firmă: reguli ca să nu-ți scape de sub control
          </h1>
          <p style={{ fontSize: 18, color: "#a8a6a1", lineHeight: 1.65, maxWidth: 620 }}>
            <strong style={{ color: "#eae8e3" }}>Agenți AI în firmă</strong> înseamnă programe care nu doar răspund la întrebări, ci fac lucruri în numele tău: trimit emailuri, actualizează comenzi, programează clienți, completează documente. Exact asta îi face utili și tot asta îi face riscanți: un agent fără limite poate repeta aceeași greșeală de multe ori până să observe cineva. Ghidul acesta strânge cinci reguli simple, luate din felul în care firmele mari își controlează agenții, și le adaptează pentru o firmă mică, unde nu există un departament de securitate.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <article className="prose mx" style={{ paddingBottom: 60 }}>

        <h2>Ce face un agent AI și de ce are nevoie de reguli</h2>
        <p>
          Inteligența artificială, în forma folosită azi în firme, este software care înțelege text, îl poate rezuma și poate scrie răspunsuri. Un chatbot folosește această capacitate ca să răspundă atunci când îi scrie cineva. Un agent AI merge un pas mai departe: primește un obiectiv, de exemplu „trimite oferte clienților care au cerut una ieri”, și face singur mai mulți pași ca să-l atingă, folosind aplicațiile la care i-ai dat acces. Diferențele sunt explicate pe larg în ghidul despre <Link href="/blog/ce-este-un-agent-ai">ce este un agent AI</Link>.
        </p>
        <p>
          Pentru siguranță, diferența contează. Un chatbot care greșește dă un răspuns prost. Un agent care greșește face o acțiune proastă: trimite emailul greșit, modifică o comandă, aprobă un retur. De aceea, înainte de prima zi de lucru, un agent are nevoie de aceleași lucruri ca un angajat nou: o sarcină clară, acces limitat și cineva care răspunde de el.
        </p>

        <h2>Cine răspunde când agentul greșește</h2>
        <p>
          Unele firme mari au început să-și trateze agenții ca pe niște colegi: le dau nume, fișe de post, chiar locuri în organigramă. Un studiu publicat în Harvard Business Review pe 1.261 de manageri, descris de <a href="https://www.computerworld.com/article/4213117/govern-ai-agents-like-workers-just-dont-pretend-theyre-human.html" target="_blank" rel="noopener noreferrer">Computerworld</a>, arată unde duce metafora împinsă prea departe. Când AI-ul era prezentat ca angajat, nu ca unealtă, managerii care lucrau deja cu agenți își asumau mai puțin responsabilitatea pentru rezultate, atribuiau mai multă responsabilitate AI-ului, escaladau mai multe probleme și prindeau mai puține erori.
        </p>
        <blockquote>
          <p style={{ fontStyle: "italic", fontSize: 17, color: "#c8c6c1", marginBottom: 12 }}>
            „Agenților li se poate da permisiunea de a accesa date, dar responsabilitatea pentru ce fac cu acel acces rămâne la persoana care le-a dat accesul, nu la agent.”
          </p>
          <p style={{ fontSize: 14, color: "#666677" }}>
            <strong style={{ color: "#888899" }}>Amy Loomis</strong>, vicepreședinte de grup, IDC, în <a href="https://www.computerworld.com/article/4213117/govern-ai-agents-like-workers-just-dont-pretend-theyre-human.html" target="_blank" rel="noopener noreferrer">Computerworld</a>
          </p>
        </blockquote>
        <p>
          Pentru o firmă mică, concluzia e simplă: agentul nu are nevoie de un nume de coleg, ci de un responsabil. Cineva din firmă trebuie să știe ce face agentul, la ce are acces și cum îl oprește.
        </p>

        <h2>5 reguli de siguranță pentru agenți AI în firmă</h2>
        <p>
          Un <a href="https://www.pymnts.com/news/artificial-intelligence/2026/ai-agents-give-main-street-businesses-big-business-muscle/" target="_blank" rel="noopener noreferrer">articol PYMNTS</a> rezumă recomandarea Harvard Business Review pentru firmele care folosesc agenți: fiecare agent are nevoie de o identitate proprie, de autoritate limitată, de surse de informații de încredere, de control clar asupra a ce poate executa și de un jurnal care face deciziile explicabile. Regulile de mai jos traduc asta pentru o firmă fără departament IT.
        </p>

        <h3>1. Aprobare umană înainte de acțiunile riscante</h3>
        <p>
          Împarte acțiunile agentului în două liste. Pe prima stau cele care se pot repara ușor: o ciornă de email, o etichetă în CRM, un rezumat. Pe a doua, cele care costă dacă sunt greșite: un mesaj către toți clienții, o rambursare, o modificare de comandă, ștergerea unor date. Pentru a doua listă, agentul pregătește acțiunea, iar un om o aprobă. Exemplul din Harvard Business Review, preluat de PYMNTS, e un agent de relații cu clienții care n-ar trebui să poată da rambursări peste un anumit prag fără un om, exact cum nici un angajat n-ar putea.
        </p>
        <p>
          Raja Iqbal, fondatorul firmei Ejento AI și coautor al articolului din Harvard Business Review, recomandă autonomia în trepte: la început omul aprobă fiecare acțiune, apoi agentul primește singur acțiunile cu risc mic, iar mai multă libertate vine doar după rezultate verificate. O greșeală serioasă îl trimite înapoi o treaptă.
        </p>

        <h3>2. Limite de volum și de buget</h3>
        <p>
          Un om obosit greșește un email. Un agent configurat prost le greșește pe toate. De aceea fiecare agent are plafoane scrise: câte mesaje trimite pe zi, câte înregistrări modifică într-o rulare, cât poate cheltui pe servicii plătite. Când atinge plafonul, se oprește și te anunță, nu continuă. Aceeași idee apare în rezumatul PYMNTS: un singur rol, o limită fermă de cheltuieli și o cale de escaladare către un om pentru tot ce iese din aceste limite.
        </p>

        <h3>3. Jurnal al acțiunilor</h3>
        <p>
          Fiecare acțiune a agentului lasă o urmă: ce a făcut, când, pe ce date și la cererea cui. Fără jurnal, o greșeală descoperită peste o săptămână nu mai poate fi reconstituită. Iqbal separă cele două roluri astfel: identitatea tehnică a agentului arată ce a acționat, iar omul responsabil arată cine răspunde. Practic, agentul primește un cont al lui, nu folosește parola cuiva din echipă, iar jurnalul se citește o dată pe săptămână.
        </p>

        <h3>4. Test pe date de probă</h3>
        <p>
          Înainte să atingă clienți reali, agentul lucrează pe date de probă sau în paralel cu un om. La Quadient, o firmă de tehnologie pentru automatizare, un agent pentru facturile de plată a urmărit întâi cum lucrau oamenii și a învățat din corecturile lor. Abia după ce a fost testat pe situații tot mai complicate a început să facă recomandări, iar decizia finală a rămas la oameni. Într-o firmă mică, echivalentul e o săptămână în care agentul doar propune, iar cineva compară propunerile cu ce ar fi făcut el.
        </p>

        <h3>5. Oprire de urgență</h3>
        <p>
          Orice agent are un buton de oprire pe care îl cunoaște cel puțin încă un om din firmă, nu doar cel care l-a configurat: o comutare în aplicație, retragerea accesului sau oprirea fluxului. Articolul din Computerworld recomandă permisiuni strânse, acces care poate fi urmărit și o oprire de urgență care taie imediat accesul agentului. La DXC Technology, agenții care lucrează pentru toată firma trec printr-un sistem care arată ce fac și îi poate opri la nevoie. Testează oprirea înainte să ai nevoie de ea.
        </p>

        <h2>Cum pornești cu agenți AI în firmă, pas cu pas</h2>
        <ol>
          <li><strong>Alege un singur proces</strong>: repetitiv și cu risc mic, de exemplu ciornele de răspuns la emailurile clienților sau rezumatul cererilor din formular.</li>
          <li><strong>Scrie pe o pagină regulile</strong>: ce poate face agentul, ce nu poate face și când cheamă un om.</li>
          <li><strong>Dă-i acces ca unui stagiar</strong>: Nina Tatsiy, director IT global la Quadient, compară agenții cu stagiarii: un stagiar nu primește toate parolele în prima dimineață, și nici agentul nu trebuie să le primească.</li>
          <li><strong>Pornește cu aprobare umană la fiecare acțiune</strong> și citește jurnalul în fiecare săptămână.</li>
          <li><strong>Crește autonomia treptat</strong>, doar acolo unde rezultatele o justifică.</li>
        </ol>
        <p>
          Pentru un exemplu concret din vânzări, vezi ghidul despre <Link href="/blog/agent-ai-pentru-vanzari-romania">agent AI pentru vânzări</Link>. O privire de ansamblu asupra proceselor care pot fi preluate de sisteme găsești pe pagina noastră de <a href="https://turbosnail.ro">automatizări AI</a>.
        </p>

        <h2>Greșeli frecvente când lansezi un agent</h2>
        <ul>
          <li><strong>Încrederea oarbă.</strong> „Supraîncrederea e o problemă”, spune Nina Tatsiy, mai ales pentru că AI-ul își prezintă concluziile cu multă siguranță.</li>
          <li><strong>Agentul cu nume, dar fără limite.</strong> Iqbal avertizează că metafora angajatului e periculoasă când e doar decor: numele și personalitatea, fără supraveghere, plafoane și răspundere, aduc probleme în loc de control.</li>
          <li><strong>Acces cu parola unui om.</strong> Dacă agentul folosește contul cuiva din echipă, jurnalul nu mai arată cine a făcut ce.</li>
          <li><strong>Lansarea ca orice aplicație.</strong> Russell Jukes, director digital și IT la DXC Technology, povestește că prima lui lansare de AI după modelul unui software obișnuit nu a folosit-o nimeni. Agenții au nevoie de reguli și de oameni care îi urmăresc, nu doar de un link de acces.</li>
        </ul>

        <div className="divider" />

        <h2>Întrebări frecvente despre agenți AI în firmă</h2>
      </article>

      <section style={{ padding: "0 20px 60px", maxWidth: 760, margin: "0 auto" }}>
        {faqLd.mainEntity.map((item, i) => (
          <div key={i} className="faq-item">
            <div className="faq-q">{item.name}</div>
            <div className="faq-a">{item.acceptedAnswer.text}</div>
          </div>
        ))}
      </section>

      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,106,0,0.12), transparent)", maxWidth: 760, margin: "0 auto" }} />

      {/* CTA */}
      <section style={{ padding: "60px 20px 96px", textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
        <h2 className="hd" style={{ fontSize: 28, fontWeight: 900, letterSpacing: -0.6, marginBottom: 14 }}>Vrei un prim agent AI cu limitele puse de la început?</h2>
        <p style={{ fontSize: 16, color: "#a8a6a1", marginBottom: 32, lineHeight: 1.65 }}>
          Înscrie-te pe lista de așteptare și alegem împreună procesul potrivit, cu aprobări, plafoane, jurnal și oprire de urgență stabilite înainte de prima zi.
        </p>
        <Link href="/#contact" style={{ background: "linear-gradient(135deg, #ff8c33, #ff6a00)", color: "#fff", borderRadius: 10, fontFamily: "'Outfit', sans-serif", fontWeight: 700, padding: "15px 32px", fontSize: 15, textDecoration: "none", display: "inline-block" }}>
          Înscrie-te pe lista de așteptare →
        </Link>
      </section>
    </main>
  );
}
