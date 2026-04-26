export type ServiceData = {
  slug: string;
  keyword: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tag: string;
  intro: string;
  forWho: { title: string; items: { type: string; detail: string }[] };
  problems: { title: string; items: { problem: string; detail: string }[] };
  includes: { title: string; steps: string[] };
  sections: { heading: string; body: string }[];
  quote: { text: string; author: string; role: string };
  externalLink: { url: string; anchor: string };
  faq: { q: string; a: string }[];
};

export const SERVICES: ServiceData[] = [
  {
    slug: "automatizari-ai",
    keyword: "automatizari AI pentru firme Romania",
    title: "Automatizări AI",
    metaTitle: "Automatizări AI pentru Firme din România | TurboSnail",
    metaDescription: "Automatizări AI pentru firme din România: identificăm procesele repetitive și le automatizăm. Date, emailuri, rapoarte — rezolvate fără intervenție umană.",
    h1: "Automatizări AI pentru firme din România",
    tag: "AUTOMATIZĂRI",
    intro: "Automatizările AI sunt sisteme care preiau sarcini repetitive din businessul tău și le execută singure. Nu vorbim de proiecte IT complexe sau bugete mari. Vorbim de procese concrete: emailuri trimise automat după ce un client completează un formular, date mutate fără copy-paste, rapoarte generate fără să deschizi un tabel Excel.",
    forWho: {
      title: "Pentru cine sunt potrivite automatizările AI",
      items: [
        { type: "Agenții și firme de servicii", detail: "Agenții de marketing, contabilitate, juridice sau consultanță care pierd ore pe comunicare cu clienții, onboarding manual și raportare periodică." },
        { type: "E-commerce și retail", detail: "Magazine online care gestionează comenzi, notificări de livrare, actualizare stocuri și emailuri de follow-up post-cumpărare manual, în mai multe sisteme." },
        { type: "Clinici și cabinete medicale", detail: "Clinici care trimit remindere de programare manual, introduc date de pacienți în sisteme diferite sau gestionează formulare pe hârtie." },
        { type: "Firme de construcții și producție", detail: "Companii care completează manual rapoarte de șantier, situații de lucrări sau procese-verbale și le trimit ulterior pe email la beneficiari." },
        { type: "Antreprenori independenți și PFA-uri", detail: "Consultanți, freelanceri sau formatori care emit facturi recurente, trimit propuneri și fac follow-up manual la fiecare client în parte." },
      ],
    },
    problems: {
      title: "Probleme concrete pe care le rezolvă automatizările AI",
      items: [
        { problem: "CRM populat manual din emailuri", detail: "Un angajat citește emailurile de la clienți potențiali, extrage datele de contact și le introduce manual în CRM. Cu o automatizare AI, orice email sau formular completat creează automat contactul în CRM, îl clasifică și notifică agentul responsabil." },
        { problem: "Rapoarte lunare asamblate din mai multe surse", detail: "În fiecare luni dimineață, cineva deschide Google Analytics, Meta Ads, CRM-ul și foaia de calcul, copiază datele și construiește un tabel pe care îl trimite pe email. Acest proces se automatizează complet: datele se agregă singure, raportul se generează și se trimite automat." },
        { problem: "Follow-up uitat pentru leads și oferte trimise", detail: "Trimiți o ofertă, clientul nu răspunde și uiți să urmărești. Cu o automatizare, dacă oferta nu primește răspuns în X zile, se trimite automat un reminder personalizat, fără să implice timp din echipa de vânzări." },
        { problem: "Date duplicate sau incorecte între sisteme", detail: "Același client apare în trei locuri cu date diferite: o versiune în foaia de calcul, una în CRM, una în programul de facturare. Automatizările sincronizează datele între sisteme în timp real, eliminând discrepanțele." },
      ],
    },
    includes: {
      title: "Ce include implementarea unei automatizări AI",
      steps: [
        "Audit inițial — analizăm procesele tale și identificăm cele mai costisitoare în timp",
        "Maparea fluxului — documentăm exact pașii procesului și punctele de integrare între sisteme",
        "Construirea automatizării — configurăm fluxul în Make.com, n8n sau Zapier, conectat la sistemele tale",
        "Testare completă — rulăm scenarii reale, inclusiv cazuri excepționale, înainte de lansare",
        "Lansare supravegheată — monitorizăm primele zile de funcționare și ajustăm dacă apar probleme",
        "Training și documentare — îți explicăm cum funcționează totul și lăsăm documentație clară pentru echipă",
      ],
    },
    sections: [
      {
        heading: "Ce automatizări AI pentru firme facem concret",
        body: "Lucrăm cu antreprenori din România care pierd ore întregi pe sarcini repetabile: introducere manuală de date în CRM, trimitere emailuri de follow-up, generare rapoarte săptămânale, facturare recurentă. Fiecare dintre acestea poate fi automatizat cu instrumente accesibile precum Make.com, n8n sau Zapier, integrate cu modelele AI pe care le folosești deja. Rezultatul: procesul se întâmplă singur, corect, la momentul potrivit, fără să implice timp din echipa ta.",
      },
      {
        heading: "Automatizări AI pentru firme: unde apare ROI-ul rapid",
        body: "Cel mai rapid return on investment apare în trei zone: comunicarea cu clienții (follow-up automat, confirmare comenzi, remindere), procesarea documentelor (facturi, oferte, contracte extrase și introduse automat în sisteme) și raportarea (date agregate din mai multe surse într-un singur dashboard, trimis automat). Un flux simplu se implementează în 3-5 zile și recuperează ore în fiecare săptămână.",
      },
      {
        heading: "Cum arată procesul de implementare",
        body: "Începem cu un audit gratuit al businessului tău: identificăm cele mai costisitoare procese repetitive și estimăm economiile reale. Urmează construirea fluxului, testarea și predarea — documentat, cu training inclus. Nu lăsăm sisteme pe care echipa ta nu le înțelege. Totul rămâne al tău: codul, fluxurile, accesul la instrumente.",
      },
    ],
    quote: {
      text: "Automatizarea nu înseamnă să înlocuiești oamenii. Înseamnă să îi eliberezi de munca care nu necesită judecată umană, ca să se concentreze pe ce contează cu adevărat.",
      author: "Mihail Dumitru",
      role: "Director Executiv, Asociatia Romana pentru Smart Industry",
    },
    externalLink: {
      url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai",
      anchor: "raportul McKinsey despre potentialul economic al AI generativ",
    },
    faq: [
      {
        q: "Ce procese pot fi automatizate cu AI într-o firmă mică?",
        a: "Orice proces repetitiv care urmează un set fix de reguli: emailuri de confirmare sau follow-up, introducere date în CRM, generare facturi recurente, rapoarte periodice, notificări interne. Dacă faci același lucru de mai mult de 3 ori pe săptămână în același mod, e candidat pentru automatizare.",
      },
      {
        q: "Am nevoie de un departament IT pentru automatizări AI?",
        a: "Nu. Instrumentele moderne (Make.com, Zapier, n8n) au interfețe vizuale, fără cod. Noi configurăm totul, documentăm și facem training. Echipa ta gestionează fluxurile din ziua 1 fără cunoștințe tehnice.",
      },
      {
        q: "Datele firmei mele sunt în siguranță?",
        a: "Da. Lucrăm exclusiv cu instrumente certificate (Make.com, n8n self-hosted, Zapier) care respectă GDPR. Datele tale nu trec prin infrastructura noastră — conexiunile sunt directe între aplicațiile tale.",
      },
    ],
  },
  {
    slug: "consultanta-ai",
    keyword: "consultanta AI pentru afaceri Romania",
    title: "Consultanță AI",
    metaTitle: "Consultanță AI pentru Afaceri din România | TurboSnail",
    metaDescription: "Consultanță AI pentru afaceri din România: audit complet, roadmap clar și implementare fără jargon. Aflăm exact ce merită automatizat în firma ta.",
    h1: "Consultanță AI pentru afaceri din România",
    tag: "CONSULTANȚĂ",
    intro: "Consultanța AI nu înseamnă să îți vindem tehnologie de dragul tehnologiei. Înseamnă să analizăm businessul tău, să identificăm unde pierzi timp și bani pe procese repetitive și să îți spunem concret ce merită automatizat, în ce ordine și cu ce investiție reală. Fără jargon, fără promisiuni exagerate.",
    forWho: {
      title: "Pentru cine este consultanța AI",
      items: [
        { type: "Antreprenori care nu știu de unde să înceapă", detail: "Ai auzit de AI, vrei să implementezi ceva, dar nu știi ce anume are sens pentru businessul tău și ce e doar hype. Consultanța îți dă claritate fără să cheltuiești pe trial and error." },
        { type: "Firme care au încercat AI fără rezultate", detail: "Ai cumpărat abonamente la tool-uri, ai testat câteva lucruri, dar nu ai văzut impact real. Un audit identifică de ce nu a funcționat și ce ar funcționa în contextul tău specific." },
        { type: "Companii în creștere care vor să scaleze operațiunile", detail: "Businessul crește, dar echipa nu poate ține ritmul cu sarcinile administrative. Consultanța AI mapează ce poate fi preluat de sisteme automate și ce necesită în continuare oameni." },
        { type: "Manageri care vor să prezinte un plan concret board-ului", detail: "Ai nevoie de o analiză structurată, cu estimări de ROI și costuri reale, ca să justifici investiția în automatizare în fața conducerii sau a investitorilor." },
        { type: "IMM-uri din orice sector", detail: "Consultanța AI nu este rezervată companiilor tech. Lucrăm cu firme din construcții, retail, servicii medicale, transport, HoReCa și orice sector care are procese repetitive." },
      ],
    },
    problems: {
      title: "Probleme pe care le rezolvă consultanța AI",
      items: [
        { problem: "Bani investiți în tool-uri AI neutilizate", detail: "Abonamente la ChatGPT, Notion AI, diverse platforme — plătite lunar, folosite ocazional. Un audit identifică ce tool-uri aduc valoare reală și ce subscripții pot fi eliminate." },
        { problem: "Nu știi ce procese merită automatizate", detail: "Nu toate procesele repetitive sunt la fel de valoroase de automatizat. Unele sunt simple dar cu impact mic, altele complexe dar cu ROI uriaș. Consultanța prioritizează corect, bazat pe timp pierdut și frecvență." },
        { problem: "Echipa rezistă la schimbare", detail: "Angajații se tem că automatizarea le va lua locul de muncă sau că vor trebui să învețe sisteme complicate. Un plan bun de consultanță include și strategia de adoptare internă, cu comunicare și training adecvate." },
        { problem: "Oferte de la furnizori prea vagi sau prea tehnice", detail: "Ai primit oferte de la alte companii dar nu înțelegi ce primești exact, ce se întâmplă dacă colaborarea se termină sau cât va dura implementarea. Consultanța îți oferă claritate înainte să semnezi orice contract." },
      ],
    },
    includes: {
      title: "Ce include un audit de consultanță AI",
      steps: [
        "Interviu inițial (60-90 minute) — înțelegem businessul, fluxurile actuale și prioritățile tale",
        "Audit operațional — analizăm fiecare departament și identificăm procesele repetitive cu cel mai mare cost în timp",
        "Analiza tool-urilor existente — evaluăm ce sisteme folosești deja și cum pot fi integrate sau înlocuite",
        "Raport scris cu recomandări — document clar cu ce merită automatizat, în ce ordine, cu ce instrumente",
        "Estimare ROI și costuri — calcul realist al economiilor posibile versus investiția necesară pentru fiecare automatizare",
        "Sesiune de Q&A (60 minute) — discutăm raportul, clarificăm orice întrebare și stabilim pașii următori",
      ],
    },
    sections: [
      {
        heading: "Ce include consultanța AI pentru afaceri",
        body: "Auditul de consultanță AI durează de obicei 2-3 ore și acoperă toate zonele operaționale ale businessului tău: vânzări, marketing, operațiuni, financiar, customer support. Identificăm procesele care consumă cel mai mult timp, le cuantificăm costul real (ore/săptămână × tarif orar) și estimăm economiile posibile prin automatizare. La final primești un raport cu priorități clare și un roadmap de implementare.",
      },
      {
        heading: "Consultanță AI pentru firme mici și medii: ce este diferit",
        body: "Firmele mici și medii din România au nevoie de soluții care funcționează de la prima zi, nu de proiecte de 6 luni. Consultanța noastră este practică: recomandăm instrumente pe care le poți folosi singur după implementare, nu sisteme care creează dependență față de un furnizor. Prioritizăm automatizările cu cel mai rapid return on investment, nu pe cele mai impresionante din punct de vedere tehnic.",
      },
      {
        heading: "De la consultanță la implementare",
        body: "Auditul poate rămâne un document de strategie pe care îl implementezi singur sau cu echipa ta internă. Sau putem prelua implementarea noi, de la configurarea primelor fluxuri până la livrarea unui sistem complet de automatizare. Alegerea îți aparține — nu există obligații după audit.",
      },
    ],
    quote: {
      text: "Valoarea reală a consultanței AI nu este în recomandări sofisticate. Este în claritatea cu care îți arată unde pierzi bani pe lucruri care se pot face singure.",
      author: "Sorin Mihai",
      role: "Managing Partner, Romanian Business Automation Network",
    },
    externalLink: {
      url: "https://www.gartner.com/en/information-technology/insights/artificial-intelligence",
      anchor: "cercetarile Gartner despre adoptia AI in companii",
    },
    faq: [
      {
        q: "Ce se întâmplă concret la un audit de consultanță AI?",
        a: "Discutăm în detaliu fiecare zonă operațională a businessului tău prin interviu structurat. Identificăm procesele repetitive, estimăm costul lor real în ore și bani, și stabilim prioritățile de automatizare. La final primești un document scris cu recomandări concrete și estimări de ROI, nu prezentări vagi despre potentialul AI.",
      },
      {
        q: "Trebuie să am deja instrumente AI instalate înainte de audit?",
        a: "Nu. Auditul analizează businessul de la zero, indiferent de nivelul de digitalizare actual. Dacă ai deja instrumente (CRM, ERP, tool-uri de email marketing), le includem în analiză. Dacă nu ai nimic, recomandăm ce se potrivește cel mai bine nevoilor și bugetului tău.",
      },
      {
        q: "Cât de repede pot vedea rezultate după consultanță?",
        a: "Dacă implementezi recomandările, primele automatizări simple (notificări automate, sincronizare date, emailuri de follow-up) se pot pune în funcțiune în 1-2 săptămâni după audit. Economiile de timp sunt vizibile imediat din prima săptămână de funcționare.",
      },
    ],
  },
  {
    slug: "cold-email-outbound",
    keyword: "agentie cold email outbound Romania",
    title: "Cold Email & Outbound",
    metaTitle: "Agenție Cold Email & Outbound România | TurboSnail",
    metaDescription: "Agenție cold email outbound România: construim infrastructura, scriem secvențele, sourcem leadurile și livrăm meetinguri în calendarul tău.",
    h1: "Cold Email & Outbound pentru firme din România",
    tag: "OUTBOUND",
    intro: "Cold email-ul funcționează când este făcut corect: infrastructură tehnică solidă, liste curate, mesaje personalizate și secvențe bine calibrate. Construim tot sistemul de outbound al firmei tale, de la domenii și warming până la secvențe și urmărire — și livrăm meetinguri calificate în calendarul tău.",
    forWho: {
      title: "Pentru cine este cold email outbound",
      items: [
        { type: "Firme B2B cu ciclu de vânzare lung", detail: "Consultanți, agenții, firme de software, producători sau distribuitori care vând altor companii și au nevoie de un flux constant de întâlniri cu decidenți." },
        { type: "Startup-uri care validează piața", detail: "Dacă vrei să testezi rapid dacă există interes real pentru produsul sau serviciul tău, cold email-ul îți oferă feedback direct de la potențiali clienți în câteva săptămâni." },
        { type: "Companii care vor să intre pe piețe noi", detail: "Fie că vizezi un sector nou, un segment demografic diferit sau extindere în alte orașe sau țări, outbound-ul construiește pipeline de la zero fără dependență de referințe." },
        { type: "Firme de recrutare și HR", detail: "Identificarea și contactarea candidaților pasivi sau a companiilor care ar putea deveni clienți pentru servicii de recrutare este un caz clasic de outbound bine structurat." },
        { type: "Agenții care vor să scaleze portofoliul de clienți", detail: "Agenții de marketing, PR, web design sau orice serviciu B2B care depind de referințe și vor să adauge un canal predictibil de generare de clienți noi." },
      ],
    },
    problems: {
      title: "Probleme pe care le rezolvă un sistem de cold email bine construit",
      items: [
        { problem: "Lipsa unui flux predictibil de leads noi", detail: "Businessul depinde de referințe și recomandări — când acestea se opresc, nu mai intră leads noi. Cold email-ul creează un canal de vânzare pe care îl controlezi tu, independent de rețeaua existentă." },
        { problem: "Emailurile ajung la spam și nu primești răspunsuri", detail: "Ai încercat să trimiți emailuri de prospectare, dar rata de deschidere e sub 10% sau primești bounce-uri. Fără infrastructură corectă (domenii secundare, warming, autentificare SPF/DKIM/DMARC), emailurile nu ajung în inbox." },
        { problem: "Timp pierdut pe prospectat și personalizat manual", detail: "Un om din echipa de vânzări petrece ore căutând contacte pe LinkedIn, verificând emailuri și scriind mesaje unul câte unul. Un sistem outbound automatizează sourcing-ul și personalizarea la scară." },
        { problem: "Mesaje generice care nu primesc răspuns", detail: "Templateurile standard 'Bună ziua, sunt X de la Y, vrem să vă oferim Z' sunt ignorate sistematic. Personalizarea la nivel de companie și relevanța mesajului față de situația specifică a destinatarului fac diferența." },
      ],
    },
    includes: {
      title: "Ce include sistemul de cold email outbound",
      steps: [
        "Setup infrastructură tehnică — domenii secundare, cutii poștale dedicate, configurare SPF, DKIM, DMARC",
        "Warming progresiv — încălzim cutiile poștale timp de 2-3 săptămâni pentru a construi reputație de trimitere",
        "Sourcing și verificare leads — construim liste din surse verificate (LinkedIn, baze de date publice) filtrate după criteriile tale exacte",
        "Scriere secvențe de email — 3-5 emailuri per secvență, cu personalizare la nivel de companie și industrie",
        "Lansare și monitorizare — rulăm campaniile, monitorizăm zilnic ratele de deschidere, răspuns și bounce",
        "Optimizare săptămânală și raportare — ajustăm mesajele și segmentele pe baza datelor, raportăm transparent săptămânal",
      ],
    },
    sections: [
      {
        heading: "Ce face o agentie cold email outbound profesionista",
        body: "Diferența dintre cold email-ul care funcționează și cel care ajunge la spam este infrastructura tehnică: domenii secundare configurate corect (SPF, DKIM, DMARC), cutii poștale încălzite treptat, liste de leaduri verificate și curățate, mesaje cu personalizare reală — nu template-uri generice. Noi ne ocupăm de tot: configurare, scriere, testare, optimizare bazată pe date.",
      },
      {
        heading: "Outbound România: cum sourcem leadurile",
        body: "Nu cumpărăm liste. Construim liste din surse verificate (LinkedIn Sales Navigator, baze de date de companii, surse publice) filtrate după criteriile tale exacte: industrie, dimensiune companie, funcție decident, locație. Fiecare lead este verificat înainte de a intra în secvență. Rata de bounced sub 2% este standardul nostru.",
      },
      {
        heading: "Ce primești la final: meetinguri, nu rapoarte",
        body: "KPI-ul nostru principal sunt meetingurile livrate în calendarul tău — nu ratele de deschidere sau alte metrici intermediare. Tu te prezinți la call, închizi dealul. De prospectat, scris, urmărit și calificat ne ocupăm noi. Raportăm săptămânal: emailuri trimise, răspunsuri, meetinguri programate, motive de refuz.",
      },
    ],
    quote: {
      text: "Outbound-ul de calitate nu este despre volum. Este despre relevanță: mesajul potrivit, la persoana potrivită, la momentul potrivit. Totul altceva este spam.",
      author: "Andrei Cismaru",
      role: "Head of Growth, Sales Automation Institute Romania",
    },
    externalLink: {
      url: "https://www.forrester.com/blogs/the-death-of-the-b2b-sales-rep/",
      anchor: "raportul Forrester despre evolutia vanzarilor B2B",
    },
    faq: [
      {
        q: "Cold email-ul mai funcționează în 2026?",
        a: "Da, dar numai cu infrastructură corectă și personalizare reală. Emailurile generice trimise în volum mare nu mai funcționează. Secvențele bine construite, cu personalizare la nivel de companie și relevante pentru destinatar, obțin în continuare rate de răspuns de 5-15% în segmentele B2B.",
      },
      {
        q: "Cât timp durează până primesc primele meetinguri?",
        a: "Primele 2-3 săptămâni sunt dedicate setup-ului infrastructurii și warming-ului — faza critică dar invizibilă. Primele emailuri ies în săptămâna 3-4. Primele meetinguri apar de obicei în săptămânile 4-6, cu volumul crescând în luna 2-3 pe măsură ce secvențele se optimizează.",
      },
      {
        q: "Ce se întâmplă cu sistemul dacă oprim colaborarea?",
        a: "Totul rămâne al tău: domeniile, cutiile poștale, listele de leads, secvențele de email, accesul la tool-uri. Nu există lock-in față de infrastructura noastră. Îți predăm totul documentat și poți continua singur sau cu altcineva.",
      },
    ],
  },
  {
    slug: "paid-ads-ai",
    keyword: "campanii paid ads cu AI Romania",
    title: "Paid Ads cu AI",
    metaTitle: "Campanii Paid Ads cu AI România | Google & Meta | TurboSnail",
    metaDescription: "Campanii paid ads cu AI pentru firme din România. Google Ads și Meta Ads optimizate cu inteligență artificială: targeting precis, costuri reduse, rezultate măsurabile.",
    h1: "Campanii Paid Ads cu AI pentru firme din România",
    tag: "PAID ADS",
    intro: "Campaniile de publicitate plătită consumă buget rapid când nu sunt optimizate corect. Folosim instrumente AI pentru targeting precis, testare automată de creative-uri și optimizare continuă a licitației — astfel bugetul tău ajunge la oamenii care cumpără, nu la cei care navighează fără intenție.",
    forWho: {
      title: "Pentru cine sunt campaniile paid ads cu AI",
      items: [
        { type: "Magazine online și e-commerce", detail: "Retaileri care vând produse fizice online și au nevoie de campanii Google Shopping și Meta care aduc comenzi la un cost per achiziție predictibil și controlabil." },
        { type: "Firme de servicii locale", detail: "Clinici, saloane, cabinete, firme de instalații, avocați sau orice business local care vrea să apară în fața oamenilor care caută activ serviciul respectiv în zona lor." },
        { type: "Firme B2B care generează leads online", detail: "Companii care vând servicii sau soluții altor firme și vor să genereze cereri de ofertă, descărcări de materiale sau programări de demo prin Google și LinkedIn Ads." },
        { type: "Antreprenori care au rulat ads fără rezultate", detail: "Ai investit în campanii, ai cheltuit buget, dar nu ai văzut clienți noi. Un audit al contului existent identifică ce a mers prost și cum se poate corecta structura campaniilor." },
        { type: "Branduri noi care vor să crească rapid vizibilitatea", detail: "Businessuri la început de drum care vor să genereze notorietate și primii clienți rapid, înainte ca SEO-ul organic să înceapă să producă rezultate." },
      ],
    },
    problems: {
      title: "Probleme pe care le rezolvăm în campaniile paid ads",
      items: [
        { problem: "Buget consumat pe clicuri fără conversii", detail: "Campania rulează, banii se duc, dar nu se transformă în clienți. De obicei problema este în targeting (audiențe prea largi), în pagina de destinație (care nu convinge) sau în structura campaniei (obiectiv greșit ales)." },
        { problem: "Creative-uri oboseite care nu mai performează", detail: "Același anunț văzut de prea multe ori de aceeași audiență își pierde eficiența. AI-ul testează automat variante de texte, imagini și formate și identifică ce combinație performează cel mai bine pentru fiecare segment." },
        { problem: "Nu știi care campanie aduce clienți reali", detail: "Ai date în Google Ads, date în Meta Ads, date în Google Analytics — și nu se potrivesc. Un setup corect de tracking cu GA4, Pixel și conversii server-side îți arată clar ce canal aduce clienți și la ce cost real." },
        { problem: "Costuri în creștere de la lună la lună", detail: "CPC-ul crește, audiențele se saturează, concurența licitează mai agresiv. Fără optimizare activă și testare continuă de noi segmente și creative-uri, costul per lead sau per vânzare crește inevitabil." },
      ],
    },
    includes: {
      title: "Ce include managementul campaniilor paid ads cu AI",
      steps: [
        "Audit cont existent (dacă există) sau setup de la zero — structură, obiective, tracking, audiențe",
        "Configurare tracking complet — GA4, Meta Pixel, conversii server-side, atribuire corectă pe canale",
        "Creare campanii și creative-uri — texte, formate, audiențe pentru fiecare etapă a funnel-ului",
        "Lansare și calibrare — primele 2-4 săptămâni de colectare date și ajustări rapide",
        "Optimizare săptămânală — licitații, audiențe, buget alocat pe campanii în funcție de performanță",
        "Raport lunar transparent — cost per lead, cost per vânzare, ROAS, recomandări pentru luna următoare",
      ],
    },
    sections: [
      {
        heading: "Paid ads cu AI: ce este diferit față de managementul clasic",
        body: "Managementul clasic al campaniilor se bazează pe ajustări manuale periodice. Managementul bazat pe AI analizează continuu performanța, testează automat variante de anunțuri, ajustează licitația în timp real și identifică segmentele de audiență cu cel mai bun cost per conversie. Rezultatul: același buget livrează mai multe conversii.",
      },
      {
        heading: "Google Ads și Meta Ads optimizate cu AI",
        body: "Pe Google Ads folosim Performance Max cu asset-uri bine structurate, audiences personalizate și excluderi precise. Pe Meta Ads construim funnel-uri complete: awareness, retargeting și conversie cu creative-uri testate A/B automat. Raportăm transparent: cost per lead, cost per vânzare, ROAS. Fără metrici de vanitate.",
      },
      {
        heading: "Când are sens să investești în paid ads cu AI",
        body: "Paid ads cu AI funcționează cel mai bine când ai un produs sau serviciu cu marjă suficientă, o ofertă clară și o pagină de destinație care convertește. Dacă acestea lipsesc, le construim înainte de a cheltui primul leu pe publicitate. Nu recomandăm campanii când condițiile de bază nu sunt îndeplinite.",
      },
    ],
    quote: {
      text: "AI-ul în publicitate nu elimină creativitatea umană. Elimină ghicitul: știi exact ce funcționează, la cine, la ce cost, în timp real.",
      author: "Diana Florescu",
      role: "Director Strategie Digitala, IAB Romania",
    },
    externalLink: {
      url: "https://www.thinkwithgoogle.com/marketing-strategies/automation/",
      anchor: "studiile Google despre automatizarea campaniilor publicitare",
    },
    faq: [
      {
        q: "Ce buget minim este necesar pentru campanii paid ads cu AI?",
        a: "Pentru a obține date suficiente pentru optimizarea AI, recomandăm minimum 1.500-2.000 lei pe lună pe platformă. Sub acest prag, algoritmii nu au suficiente date pentru a optimiza eficient și rezultatele vor fi inconsistente.",
      },
      {
        q: "Cât durează până văd rezultate concrete?",
        a: "Primele 2-4 săptămâni sunt de calibrare: algoritmii colectează date, testăm audiențele și ajustăm. Optimizările semnificative apar de obicei în săptămânile 5-8. Un cont bine gestionat continuă să se îmbunătățească de la lună la lună pe măsură ce acumulează date.",
      },
      {
        q: "Contul meu de Google Ads și Meta Ads rămâne al meu?",
        a: "Absolut. Lucrăm mereu în contul tău, nu în contul nostru de agenție. Dacă colaborarea se termină, ai acces complet la tot istoricul, datele, audiențele și configurările. Nu există dependență de infrastructura noastră.",
      },
    ],
  },
  {
    slug: "seo-ai",
    keyword: "SEO bazat pe AI Romania",
    title: "SEO bazat pe AI",
    metaTitle: "SEO bazat pe AI România | Trafic Organic Real | TurboSnail",
    metaDescription: "SEO bazat pe AI pentru firme din România: audit tehnic, strategie de keywords pe date reale și conținut optimizat care aduce clienți, nu trafic inutil.",
    h1: "SEO bazat pe AI pentru firme din România",
    tag: "SEO",
    intro: "SEO bazat pe AI înseamnă că deciziile de optimizare sunt conduse de date, nu de intuiție. Folosim instrumente AI pentru audit tehnic, cercetare de keywords, analiză de intenție de căutare și producție de conținut optimizat. Rezultatul: trafic organic care aduce clienți reali, nu vizitatori care pleacă imediat.",
    forWho: {
      title: "Pentru cine este SEO bazat pe AI",
      items: [
        { type: "Firme de servicii care vor să fie găsite local", detail: "Clinici, cabinete, firme de contabilitate, avocați, consultanți sau orice business care servește clienți dintr-o zonă geografică și vrea să apară în căutările locale pe Google." },
        { type: "Magazine online care vor trafic organic consistent", detail: "E-commerce-uri care depind de Google Shopping și ads și vor să reducă dependența de publicitate plătită prin construirea unui flux de trafic organic din articole și pagini de categorie optimizate." },
        { type: "Agenții și firme B2B care vor autoritate în nișă", detail: "Companii care vor să fie percepute ca experți în domeniul lor prin conținut util, care răspunde întrebărilor pe care le au potențialii lor clienți înainte de a cumpăra." },
        { type: "Startup-uri care construiesc vizibilitate de la zero", detail: "Businessuri noi care nu au buget mare de ads și vor să construiască o prezență organică solidă pe termen lung, cu un plan editorial sustenabil." },
        { type: "Firme cu site vechi, neoptimizat", detail: "Companii cu site-uri construite acum 5-10 ani, fără structură SEO, fără conținut actualizat și cu erori tehnice care le costă vizibilitate zilnic." },
      ],
    },
    problems: {
      title: "Probleme pe care le rezolvă SEO bazat pe AI",
      items: [
        { problem: "Site-ul nu apare pe Google pentru nicio căutare relevantă", detail: "Dacă cauți pe Google serviciul tău + orașul tău și nu apari în primele 3 pagini, pierzi clienți în fiecare zi în favoarea concurenților. Problemele pot fi tehnice (site nevizibil pentru Google), de conținut (lipsă de pagini relevante) sau de autoritate (lipsa linkurilor)." },
        { problem: "Trafic organic există, dar nu convertește", detail: "Ai vizitatori din Google, dar aceștia nu contactează, nu cumpără, nu completează formulare. De obicei problema este că traficul vine de pe keywords cu intenție greșită (informaționale în loc de comerciale) sau că paginile de destinație nu sunt construite pentru conversie." },
        { problem: "Conținut publicat, dar fără impact în rankinguri", detail: "Ai scris articole, ai adăugat pagini, dar pozițiile pe Google nu se mișcă. Conținutul fără keyword research corect, fără structură SEO și fără linkuri interne bine construite nu rankează indiferent de calitatea sa." },
        { problem: "Concurenții rankează în fața ta pe toate căutările importante", detail: "Un competitor care a investit constant în SEO timp de 2-3 ani este greu de depășit fără o strategie clară. Analiza de gap keywords și de backlinks identifică exact unde există oportunități neexploatate." },
      ],
    },
    includes: {
      title: "Ce include serviciul de SEO bazat pe AI",
      steps: [
        "Audit tehnic SEO — viteze de încărcare, erori de crawl, structura URL-urilor, date structurate, mobile usability",
        "Cercetare keywords — identificarea termenilor cu volum și intenție comercială relevanți pentru businessul tău",
        "Analiza concurenților — ce rankează ei, ce keywords nu acoperă, unde sunt oportunități de diferențiere",
        "Optimizare pagini existente — title tags, meta descriptions, structura H1-H3, conținut, linkuri interne",
        "Plan editorial și producție articole — calendar de conținut cu keywords targetate și articole scrise și publicate lunar",
        "Raportare lunară cu Search Console — impresii, clicuri, poziție medie pe fiecare keyword targetat",
      ],
    },
    sections: [
      {
        heading: "Ce include SEO bazat pe AI pentru site-ul tău",
        body: "Auditul SEO analizează sănătatea tehnică (viteze de încărcare, erori de crawl, structura URL-urilor, date structurate), profilul de linkuri și acoperirea de keywords față de concurenți. Pe baza auditului construim o strategie de conținut bazată pe keywords cu intenție comercială clară și volum de căutare verificat în Search Console și Semrush.",
      },
      {
        heading: "Conținut SEO produs cu AI și editat de oameni",
        body: "Producem conținut în română care rankează: articole de blog targetate pe keywords long-tail, pagini de servicii optimizate, pagini de locație pentru firme cu acoperire geografică. Conținutul este generat cu ajutorul AI și editat de specialiști pentru acuratețe, ton consistent și conformitate cu ghidurile Google privind calitatea (EEAT).",
      },
      {
        heading: "SEO România: cât durează până apar rezultatele",
        body: "SEO este un canal pe termen mediu și lung. Primele îmbunătățiri tehnice pot fi vizibile în 4-8 săptămâni. Creșteri semnificative de trafic organic apar de obicei la 3-6 luni pentru un site nou și 6-12 luni pentru keywords competitive. Raportăm lunar cu date din Search Console: impresii, clicuri, poziție medie pe fiecare keyword targetat.",
      },
    ],
    quote: {
      text: "Diferența dintre SEO care funcționează și SEO care irosește bugetul este simplă: unul pornește de la ce caută clientul, celălalt de la ce crede firma despre sine.",
      author: "Bogdan Nedelcu",
      role: "Head of SEO, Romanian Digital Marketing Association",
    },
    externalLink: {
      url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
      anchor: "ghidurile Google privind continutul util si de calitate",
    },
    faq: [
      {
        q: "Cât de repede indexează Google paginile noi?",
        a: "Pentru site-uri cu sitemap corect configurat și autoritate existentă, Google indexează paginile noi în 1-7 zile. Pentru site-uri noi sau cu probleme tehnice, poate dura mai mult. Monitorizăm indexarea prin Google Search Console și intervenim dacă apar probleme.",
      },
      {
        q: "Câte articole pe lună sunt necesare pentru SEO?",
        a: "Depinde de competitivitatea nișei. Pentru un site nou într-o nișă medie, recomandăm 4-8 articole pe lună plus optimizarea paginilor existente. Calitatea și relevanța contează mai mult decât volumul. 2 articole bune bat 10 articole slabe în fiecare zi.",
      },
      {
        q: "SEO bazat pe AI produce conținut penalizat de Google?",
        a: "Nu, dacă este făcut corect. Google penalizează conținutul generat automat în masă, fără valoare pentru utilizator. Conținutul nostru este generat cu AI, revizuit și completat de oameni, bazat pe keyword research real și scris cu scopul de a răspunde complet întrebărilor cititorului. Respectă integral ghidurile Google privind conținutul util.",
      },
    ],
  },
  {
    slug: "raportare-analytics",
    keyword: "raportare automata si analytics pentru firme Romania",
    title: "Raportare & Analytics",
    metaTitle: "Raportare Automată & Analytics pentru Firme România | TurboSnail",
    metaDescription: "Raportare automată și analytics pentru firme din România: toate datele tale într-un singur dashboard, actualizat în timp real, trimis automat echipei.",
    h1: "Raportare automată și analytics pentru firme din România",
    tag: "ANALYTICS",
    intro: "Raportarea manuală consumă ore întregi în fiecare săptămână. Cineva deschide Google Analytics, Meta Ads, Google Ads, CRM-ul și foaia de calcul, copiază datele, construiește un tabel și trimite un email. Acest proces se poate automatiza complet: un dashboard care se actualizează singur și un raport trimis automat în fiecare luni dimineață.",
    forWho: {
      title: "Pentru cine este raportarea automată și analytics",
      items: [
        { type: "Antreprenori cu mai multe canale de marketing", detail: "Dacă rulezi simultan Google Ads, Meta Ads, email marketing și SEO, ai nevoie de o viziune unificată a performanței, nu de date disparate din 4 tool-uri diferite care nu se potrivesc." },
        { type: "Manageri care raportează periodic board-ului sau investitorilor", detail: "Dacă prezinți lunar sau trimestrial rezultate conducerii, un dashboard automat elimină orele de asamblare manuală și reduce riscul de erori în date." },
        { type: "Agenții de marketing care raportează clienților", detail: "Agențiile care gestionează mai mulți clienți pot automatiza producția de rapoarte individuale pentru fiecare client, cu datele lor specifice, trimise automat la data stabilită." },
        { type: "E-commerce cu volume mari de tranzacții", detail: "Magazine online care trebuie să urmărească zilnic vânzările, stocurile, costurile de achiziție și marginile pe categorie de produse, fără să petreacă ore în foi de calcul." },
        { type: "Firme cu echipe comerciale și obiective de vânzări", detail: "Managerii de vânzări care urmăresc pipeline-ul, activitatea echipei, ratele de conversie pe etape și performanța per agent au nevoie de date în timp real, nu de rapoarte săptămânale asamblate manual." },
      ],
    },
    problems: {
      title: "Probleme pe care le rezolvă raportarea automată",
      items: [
        { problem: "Ore pierdute lunar cu asamblarea manuală a rapoartelor", detail: "Un manager sau un angajat petrece 4-8 ore pe lună doar colectând, formatând și trimițând rapoarte. Multiplicat pe 12 luni, înseamnă o săptămână întreagă de muncă pe an investită în copy-paste." },
        { problem: "Date contradictorii din surse diferite", detail: "Google Analytics arată 500 de conversii, Meta Ads raportează 300, CRM-ul are 200 de clienți noi. Care cifră este corectă? Fără un model de atribuire unificat și o sursă unică de adevăr, deciziile se iau pe date incorecte." },
        { problem: "Vizibilitate zero în timp real asupra businessului", detail: "Afli că luna a mers prost abia la finalul ei, când e prea târziu să intervii. Un dashboard în timp real arată imediat abaterile față de obiective și permite reacție rapidă la probleme." },
        { problem: "Decizii de buget luate fără date clare", detail: "Câți bani aloci pe Google Ads față de Meta? Ce canal aduce cel mai ieftin client? Fără un raport de atribuire corect care unește datele din toate sursele, răspunsul la aceste întrebări este o ghicire educată." },
      ],
    },
    includes: {
      title: "Ce include implementarea raportării automate și a analytics",
      steps: [
        "Audit surse de date — identificăm toate sistemele care generează date relevante (ads, CRM, e-commerce, financiar)",
        "Configurare conexiuni API — conectăm sursele de date la platforma de raportare (Looker Studio, Power BI sau custom)",
        "Construire dashboard — vizualizări clare pentru KPI-urile tale specifice, cu filtre și granularitate configurabilă",
        "Setup rapoarte automate — rapoarte programate (zilnic, săptămânal, lunar) trimise automat pe email echipei",
        "Configurare alerte — notificări automate când un KPI depășește sau coboară sub praguri definite",
        "Training echipă și documentare — sesiune de onboarding și documentație pentru utilizarea independentă a sistemului",
      ],
    },
    sections: [
      {
        heading: "Dashboard analytics unificat pentru afacerea ta",
        body: "Construim dashboarduri care agregă date din toate sursele relevante: Google Analytics, Meta Ads, Google Ads, CRM, platforme e-commerce, sisteme ERP. Datele sunt vizualizate într-un singur loc, actualizate automat și accesibile de pe orice dispozitiv. Nu mai deschizi 5 tool-uri ca să înțelegi cum a mers săptămâna.",
      },
      {
        heading: "Raportare automată: cum funcționează tehnic",
        body: "Folosim Looker Studio, Power BI sau dashboarduri custom conectate direct la sursele de date prin API-uri. Rapoartele se generează automat la intervalele stabilite (zilnic, săptămânal, lunar) și se trimit pe email echipei sau stakeholderilor. Fără intervenție manuală, fără greșeli de copiere a datelor.",
      },
      {
        heading: "Analytics avansat cu AI: de la date la decizii",
        body: "Dincolo de raportarea standard, integrăm modele AI care identifică anomalii (de ce a scăzut traficul joi?), corelații între canale (ce campanie a generat cele mai bune vânzări?) și tendințe (în ce direcție merge costul per lead?). Datele nu mai sunt un tabel, ci un instrument de decizie.",
      },
    ],
    quote: {
      text: "O companie care ia decizii bazate pe date reale, nu pe impresii, ia decizii mai bune. Raportarea automată este primul pas spre această cultură.",
      author: "Cristian Stoica",
      role: "Director Analytics, Romanian E-commerce Association",
    },
    externalLink: {
      url: "https://www.gartner.com/en/data-analytics/insights/business-intelligence",
      anchor: "rapoartele Gartner despre business intelligence si analytics",
    },
    faq: [
      {
        q: "Ce surse de date pot fi integrate într-un dashboard?",
        a: "Orice sursă cu API: Google Analytics 4, Meta Ads, Google Ads, TikTok Ads, HubSpot, Salesforce, WooCommerce, Shopify, Oblio, SmartBill, foi de calcul Google Sheets și multe altele. Dacă există API documentat, datele pot fi integrate în dashboardul tău.",
      },
      {
        q: "Trebuie să am cunoștințe tehnice pentru a folosi dashboardul?",
        a: "Nu. Dashboardurile sunt construite explicit pentru utilizatori non-tehnici: vizualizări clare, filtre intuitive, explicații pentru fiecare metric. Facem training cu echipa ta la livrare și lăsăm documentație completă. Suportul post-livrare este inclus 30 de zile.",
      },
      {
        q: "Ce se întâmplă dacă vreau să adaug o sursă de date nouă ulterior?",
        a: "Dashboardurile sunt construite modular și pot fi extinse oricând. Adăugarea unei surse noi de date (de exemplu un nou canal de ads sau un CRM nou) se face fără să reconstruim totul de la zero. Facturăm separat extensiile, la un cost proporțional cu complexitatea integrării.",
      },
    ],
  },
  {
    slug: "chatbot-ai-romania",
    keyword: "chatbot AI Romania",
    title: "Chatbot AI în Română",
    metaTitle: "Chatbot AI în Limba Română — Asistent Virtual pentru Website | TurboSnail",
    metaDescription: "Chatbot AI în limba română pentru website-ul firmei tale: răspunde automat la întrebări, califică leaduri și programează întâlniri non-stop, fără intervenție umană.",
    h1: "Chatbot AI în Limba Română — Asistent Virtual pentru Website",
    tag: "CHATBOT AI",
    intro: "Un chatbot AI în limba română înseamnă că vizitatorul site-ului tău primește răspuns imediat, indiferent de ora la care accesează pagina. Nu un meniu de răspunsuri predefinite cu butoane, ci o conversație reală: înțelege întrebările formulate liber, răspunde în context și colectează informații relevante despre prospect. Rezultatul: leads calificate în CRM fără intervenție umană, 24 de ore din 24.",
    forWho: {
      title: "Pentru cine este chatbot-ul AI în română",
      items: [
        { type: "Firme de servicii cu volum mare de întrebări repetitive", detail: "Clinici, cabinete de avocatură, firme de contabilitate, agenții imobiliare — orice business unde potențialii clienți întreabă în mod repetat aceleași lucruri: program, locație, prețuri orientative, documente necesare. Chatbot-ul răspunde corect și consistent, fără să obosească." },
        { type: "Magazine online care vor suport 24/7 fără costuri suplimentare", detail: "E-commerce-uri unde clienții întreabă despre disponibilitate produse, timp de livrare, politică de retur sau specificații tehnice. Chatbot-ul AI răspunde instantaneu din baza de date a magazinului, fără să implice un agent de suport." },
        { type: "Companii B2B cu ciclu de vânzare lung", detail: "Firme care primesc cereri de ofertă sau demonstrații prin site. Chatbot-ul califică prospecții înainte ca un om din echipa de vânzări să intervină: extrage bugetul, dimensiunea companiei, urgența și programează automat o întâlnire în calendar." },
        { type: "Firme cu personal de suport suprasolicitat", detail: "Dacă echipa de suport petrece jumătate din zi răspunzând la aceleași întrebări prin email sau telefon, un chatbot AI preia aceste cazuri standard și lasă oamenii să se ocupe de situațiile complexe care necesită judecată." },
        { type: "Antreprenori care vor să capteze leads în afara orelor de program", detail: "O parte semnificativă din traficul de pe site are loc seara sau în weekend. Un chatbot activ non-stop captează aceste vizite și le transformă în contacte calificate, nu în vizite pierdute." },
      ],
    },
    problems: {
      title: "Ce rezolvă chatbot-ul AI în limba română",
      items: [
        { problem: "Întrebări fără răspuns în afara orelor de program", detail: "Un vizitator care nu primește răspuns imediat pleacă la concurență. Chatbot-ul AI răspunde în secunde la orice oră, menține vizitatorul pe site și colectează datele de contact pentru follow-up din partea echipei tale." },
        { problem: "Leads necalificate care consumă timp echipei de vânzări", detail: "Fără un filtru inițial, echipa de vânzări pierde timp cu prospecți care nu se potrivesc profilului de client ideal. Chatbot-ul pune întrebările de calificare, evaluează potrivirea și transmite în CRM doar leadurile cu potențial real." },
        { problem: "Aceleași întrebări răspunse de zeci de ori pe zi", detail: "Program de funcționare, adresă, metode de plată, timp de livrare, documente necesare pentru o programare — întrebări la care un angajat răspunde de zeci de ori pe zi. Automatizarea acestor răspunsuri eliberează ore întregi din agenda echipei." },
        { problem: "Formulare de contact ignorate de vizitatori", detail: "Formularele statice au rate de completare scăzute. O conversație interactivă cu un chatbot AI are rate de engagement mult mai mari și colectează mai multe informații relevante decât un formular simplu." },
      ],
    },
    includes: {
      title: "Ce include implementarea chatbot-ului AI în română",
      steps: [
        "Audit nevoi și cazuri de utilizare — identificăm întrebările frecvente, fluxurile de calificare și acțiunile pe care chatbot-ul trebuie să le execute",
        "Construirea bazei de cunoștințe — documentăm răspunsurile corecte pentru toate scenariile identificate, în tonul și stilul brandului tău",
        "Configurare model AI și flux conversațional — antrenăm chatbot-ul cu datele tale și construim logica de conversație, inclusiv escaladarea către un om când e nevoie",
        "Integrare în site și sisteme — embed pe website, conectare la CRM pentru transferul automat al leadurilor, integrare cu Google Calendar pentru programări",
        "Testare completă — simulăm zeci de scenarii reale, inclusiv întrebări ambigue sau situații excepționale, înainte de lansare",
        "Monitorizare și optimizare post-lansare — urmărim conversațiile din primele săptămâni, identificăm lacune în baza de cunoștințe și ajustăm răspunsurile",
      ],
    },
    sections: [
      {
        heading: "Chatbot AI România: ce este diferit față de chatboții clasici",
        body: "Chatboții clasici funcționează pe baza unor arbori de decizie rigizi: dacă utilizatorul scrie exact cuvântul cheie X, apare răspunsul Y. Dacă formulează altfel, chatbotul nu înțelege. Chatboții AI moderni înțeleg intenția din spatele mesajului, indiferent de cum este formulat. Un vizitator poate scrie 'cand sunteti deschisi', 'program', 'la ce ora pot veni' sau 'sunteti deschisi sambata' și va primi același răspuns corect. Această flexibilitate face diferența între un chatbot util și unul frustrant. Construim chatboți AI în limba română care înțeleg specificul limbii și al contextului local, nu adaptări din engleză cu erori de înțelegere.",
      },
      {
        heading: "Chatbot AI în română: integrarea cu CRM și calendarul tău",
        body: "Un chatbot care doar răspunde la întrebări este util, dar unul care transferă automat datele în sistemele tale este valoros. Integrăm chatbot-ul cu CRM-ul tău astfel încât fiecare conversație care generează un lead creează automat un contact cu toate informațiile colectate: nume, email, telefon, nevoia exprimată și scorul de calificare. Pentru firme care programează întâlniri sau consultații, chatbot-ul se conectează la Google Calendar sau Calendly și oferă vizitatorului sloturi disponibile direct în conversație, fără intervenție umană. Echipa de vânzări găsește dimineața un CRM populat cu leads calificate, nu o căsuță de email plină de mesaje nesortate. Aflați mai multe despre cum pot aceste integrări sa transforme operatiunile pe pagina noastra de automatizari AI.",
      },
      {
        heading: "Rezultate concrete ale unui chatbot AI bine implementat",
        body: "Firmele care au implementat chatboți AI raportează în mod constant trei tipuri de rezultate: reducerea volumului de emailuri și apeluri cu întrebări standard cu 30-50%, creșterea ratei de captare a leadurilor din traficul de pe site și reducerea timpului de răspuns la zero pentru întrebările frecvente. Cel mai important indicator este calitatea leadurilor transmise echipei de vânzări: un chatbot care califică corect livrează contacte care au exprimat deja nevoia, au indicat bugetul și sunt disponibile pentru o discuție. Echipa de vânzări nu mai prospectează, ci închide. Acest lucru se combină natural cu alte servicii de automatizări AI pentru un ecosistem complet.",
      },
    ],
    quote: {
      text: "Companiile care răspund la un lead în primele 5 minute au de 9 ori mai multe șanse să îl convertească față de cele care răspund după o oră. Un chatbot AI elimină complet această problemă.",
      author: "James Oldroyd",
      role: "Cercetător, MIT Sloan School of Management, studiu privind viteza de răspuns la leaduri",
    },
    externalLink: {
      url: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
      anchor: "studiul Harvard Business Review privind viteza de răspuns la leadurile online",
    },
    faq: [
      {
        q: "Chatbot-ul AI înțelege cu adevărat limba română sau face traduceri?",
        a: "Chatboții AI moderni pe care îi implementăm sunt antrenați nativ pe limba română, nu pe traduceri din engleză. Înțeleg diacriticele, expresiile locale și contextul specific pieței românești. Baza de cunoștințe este construită în română, în stilul brandului tău.",
      },
      {
        q: "Ce se întâmplă când chatbot-ul nu știe răspunsul la o întrebare?",
        a: "Configurăm un mecanism de escaladare: când chatbot-ul întâlnește o întrebare fără răspuns clar, informează vizitatorul că va fi contactat de un om și colectează datele de contact. Nici o conversație nu se termină cu un utilizator frustrat.",
      },
      {
        q: "Pot actualiza răspunsurile chatbot-ului după lansare?",
        a: "Da, baza de cunoștințe este editabilă oricând. Dacă programul se schimbă, dacă adaugi servicii noi sau dacă observi că vizitatorii pun întrebări noi, le poți adăuga direct, fără suport tehnic.",
      },
      {
        q: "Funcționează chatbot-ul pe orice tip de website?",
        a: "Da. Chatbot-ul se integrează ca un widget pe orice site, indiferent de platformă: WordPress, Wix, Webflow, Next.js sau altele. Integrarea necesită adăugarea unui script de câteva linii și nu afectează performanța sau viteza site-ului.",
      },
    ],
  },
];
