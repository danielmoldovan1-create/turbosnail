export type ServiceData = {
  slug: string;
  keyword: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tag: string;
  intro: string;
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
        q: "Cât durează implementarea unei automatizări AI?",
        a: "Un flux simplu (ex: formular web → email automat + adăugare CRM) se implementează în 3-5 zile. Mai multe fluxuri conectate între ele: 1-2 săptămâni. Un ecosistem complet de automatizare: 3-6 săptămâni.",
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
    sections: [
      {
        heading: "Ce include consultanta AI pentru afaceri",
        body: "Auditul de consultanță AI durează de obicei 2-3 ore și acoperă toate zonele operaționale ale businessului tău: vânzări, marketing, operațiuni, financiar, customer support. Identificăm procesele care consumă cel mai mult timp, le cuantificăm costul real (ore/săptămână × tarif orar) și estimăm economiile posibile prin automatizare. La final primești un raport cu priorități clare și un roadmap de implementare.",
      },
      {
        heading: "Consultanta AI pentru firme mici si medii: ce este diferit",
        body: "Firmele mici și medii din România au nevoie de soluții care funcționează de la prima zi, nu de proiecte de 6 luni. Consultanța noastră este practică: recomandăm instrumente pe care le poți folosi singur după implementare, nu sisteme care creează dependență față de un furnizor. Prioritizăm automatizările cu cel mai rapid return on investment, nu pe cele mai impresionante din punct de vedere tehnic.",
      },
      {
        heading: "De la consultanta la implementare",
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
        q: "Ce se întâmplă la un audit de consultanță AI?",
        a: "Discutăm în detaliu fiecare zonă operațională a businessului tău. Identificăm procesele repetitive, estimăm costul lor real și stabilim prioritățile de automatizare. La final primești un document cu recomandări concrete, nu prezentări vagi despre potentialul AI.",
      },
      {
        q: "Trebuie să am deja instrumente AI instalate?",
        a: "Nu. Auditul analizează businessul de la zero. Dacă ai deja instrumente (CRM, ERP, tool-uri de email marketing), le includem în analiză. Dacă nu, recomandăm ce se potrivește cel mai bine nevoilor și bugetului tău.",
      },
      {
        q: "Consultanța AI este pentru orice tip de business?",
        a: "Lucrăm cu orice business care are procese repetitive: agenții, firme de servicii, e-commerce, producție, consultanță. Nu există un sector exclus. Dacă ai angajați care fac acelasi lucru în fiecare zi, există oportunități de automatizare.",
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
    sections: [
      {
        heading: "Ce face o agentie cold email outbound profesionista",
        body: "Diferența dintre cold email-ul care funcționează și cel care ajunge la spam este infrastructura tehnică: domenii secundare configurate corect (SPF, DKIM, DMARC), cutii poștale încălzite treptat, liste de leaduri verificate și curățate, mesaje cu personalizare reală — nu template-uri generice. Noi ne ocupăm de tot: configurare, scriere, testare, optimizare bazată pe date.",
      },
      {
        heading: "Outbound Romania: cum sourcem leadurile",
        body: "Nu cumpărăm liste. Construim liste din surse verificate (LinkedIn Sales Navigator, baze de date de companii, surse publice) filtrate după criteriile tale exacte: industrie, dimensiune companie, funcție decident, locație. Fiecare lead este verificat înainte de a intra în secvență. Rata de bounced sub 2% este standardul nostru.",
      },
      {
        heading: "Ce primesti la final: meetinguri, nu rapoarte",
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
        a: "Da, dar numai cu infrastructură corectă și personalizare reală. Emailurile generice trimise în volum mare nu mai funcționează. Secvențele bine construite, cu personalizare la nivel de companie și relevante pentru destinatar, obțin în continuare rate de răspuns de 5-15%.",
      },
      {
        q: "Câte meetinguri pot obține pe lună?",
        a: "Depinde de industrie, dimensiunea pieței și calitatea ofertei tale. Un sistem bine calibrat livrează în medie 8-20 meetinguri calificate pe lună. În primele 30 de zile infrastructura se construiește și se calibrează — rezultatele cresc în lunile 2-3.",
      },
      {
        q: "Ce se întâmplă cu lista de leaduri după ce terminăm colaborarea?",
        a: "Lista rămâne a ta. Tot sistemul (domenii, cutii poștale, secvențe, liste) rămâne al tău la finalul colaborării. Nu există lock-in.",
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
    sections: [
      {
        heading: "Paid ads cu AI: ce este diferit față de managementul clasic",
        body: "Managementul clasic al campaniilor se bazează pe ajustări manuale periodice. Managementul bazat pe AI analizează continuu performanța, testează automat variante de anunțuri, ajustează licitația în timp real și identifică segmentele de audiență cu cel mai bun cost per conversie. Rezultatul: același buget livrează mai multe conversii.",
      },
      {
        heading: "Google Ads si Meta Ads optimizate cu AI",
        body: "Pe Google Ads folosim Performance Max cu asset-uri bine structurate, audiences personalizate și excluderi precise. Pe Meta Ads construim funnel-uri complete: awareness, retargeting și conversie cu creative-uri testate A/B automat. Raportăm transparent: cost per lead, cost per vânzare, ROAS. Fără metrici de vanitate.",
      },
      {
        heading: "Cand are sens sa investesti in paid ads cu AI",
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
        a: "Pentru a obține date suficiente pentru optimizarea AI, recomandăm minimum 1.500-2.000 lei/lună pe platformă. Sub acest prag, algoritmii nu au suficiente date pentru a optimiza eficient.",
      },
      {
        q: "Cât durează până văd rezultate?",
        a: "Primele 2-4 săptămâni sunt de calibrare: algoritmii colectează date. Optimizările semnificative apar de obicei în săptămânile 5-8. Un cont bine gestionat continuă să se îmbunătățească lunar.",
      },
      {
        q: "Contul de ads rămâne al meu?",
        a: "Absolut. Lucrăm în contul tău de Google Ads și Meta Ads. Dacă colaborarea se termină, ai acces complet la tot istoricul, datele și configurările. Nu există dependență de infrastructura noastră.",
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
    sections: [
      {
        heading: "Ce include SEO bazat pe AI pentru site-ul tau",
        body: "Auditul SEO analizează sănătatea tehnică (viteze de încărcare, erori de crawl, structura URL-urilor, date structurate), profilul de linkuri și acoperirea de keywords față de concurenți. Pe baza auditului construim o strategie de conținut bazată pe keywords cu intenție comercială clară și volum de căutare verificat în Search Console și Semrush.",
      },
      {
        heading: "Continut SEO produs cu AI si editat de oameni",
        body: "Producem conținut în română care rankează: articole de blog targetate pe keywords long-tail, pagini de servicii optimizate, pagini de locație pentru firme cu acoperire geografică. Conținutul este generat cu ajutorul AI și editat de specialiști pentru acuratețe, ton consistent și conformitate cu ghidurile Google privind calitatea (EEAT).",
      },
      {
        heading: "SEO Romania: cat dureaza pana apar rezultatele",
        body: "SEO este un canal pe termen mediu și lung. Primele îmbunătățiri tehnice pot fi vizibile în 4-8 săptămâni. Creșteri semnificative de trafic organic apar de obicei la 3-6 luni pentru un site nou și 6-12 luni pentru keywords competitive. Raportăm lunar cu date din Search Console: impresii, clicuri, poziție medie pe fiecare keyword targetat.",
      },
    ],
    quote: {
      text: "Diferența dintre SEO care funcționează și SEO care iroseste bugetul este simpla: unul porneste de la ce cauta clientul, celalalt de la ce crede firma despre sine.",
      author: "Bogdan Nedelcu",
      role: "Head of SEO, Romanian Digital Marketing Association",
    },
    externalLink: {
      url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
      anchor: "ghidurile Google privind continutul util si de calitate",
    },
    faq: [
      {
        q: "SEO bazat pe AI este diferit de SEO clasic?",
        a: "Da. Instrumentele AI accelerează cercetarea de keywords, analiza competitivă și producția de conținut. Dar fundamentele rămân aceleași: conținut util pentru utilizator, site tehnic sănătos și autoritate construită prin linkuri de calitate.",
      },
      {
        q: "Câte articole pe lună sunt necesare pentru SEO?",
        a: "Depinde de competitivitatea nișei. Pentru un site nou într-o nișă medie, recomandăm 4-8 articole/lună plus optimizarea paginilor existente. Calitatea și relevanța contează mai mult decât volumul.",
      },
      {
        q: "Pot să fac SEO singur cu instrumente AI?",
        a: "Parțial. Instrumentele AI simplifică producția de conținut, dar auditul tehnic, analiza de backlinks și strategia de keywords necesită expertiză și acces la date din mai multe surse. Erorile tehnice SEO pot costa trafic organic timp de luni întregi.",
      },
    ],
  },
  {
    slug: "raportare-analytics",
    keyword: "raportare automata si analytics pentru firme Romania",
    title: "Raportare & Analytics",
    metaTitle: "Raportare Automată & Analytics pentru Firme România | TurboSnail",
    metaDescription: "Raportare automată și analytics pentru firme din România: toate datele tale într-un singur dashboard, actualizat în timp real, trimis automat echipei.",
    h1: "Raportare automată si analytics pentru firme din România",
    tag: "ANALYTICS",
    intro: "Raportarea manuală consumă ore întregi în fiecare săptămână. Cineva deschide Google Analytics, Meta Ads, Google Ads, CRM-ul și foaia de calcul, copiază datele, construiește un tabel și trimite un email. Acest proces se poate automatiza complet: un dashboard care se actualizează singur și un raport trimis automat în fiecare luni dimineață.",
    sections: [
      {
        heading: "Dashboard analytics unificat pentru afacerea ta",
        body: "Construim dashboarduri care agregă date din toate sursele relevante: Google Analytics, Meta Ads, Google Ads, CRM, platforme e-commerce, sisteme ERP. Datele sunt vizualizate într-un singur loc, actualizate automat și accesibile de pe orice dispozitiv. Nu mai deschizi 5 tool-uri ca să înțelegi cum a mers săptămâna.",
      },
      {
        heading: "Raportare automata: cum functioneaza tehnic",
        body: "Folosim Looker Studio, Power BI sau dashboarduri custom conectate direct la sursele de date prin API-uri. Rapoartele se generează automat la intervalele stabilite (zilnic, săptămânal, lunar) și se trimit pe email echipei sau stakeholderilor. Fără intervenție manuală, fără greșeli de copiere a datelor.",
      },
      {
        heading: "Analytics avansat cu AI: de la date la decizii",
        body: "Dincolo de raportarea standard, integrăm modele AI care identifică anomalii (de ce a scăzut traficul joi?), corelații între canale (ce campanie a generat cele mai bune vânzări?) și tendințe (în ce direcție merge costul per lead?). Datele nu mai sunt un tabel, ci un instrument de decizie.",
      },
    ],
    quote: {
      text: "O companie care ia decizii bazate pe date reale, nu pe impresii, ia decizii mai bune. Raportarea automata este primul pas spre aceasta cultura.",
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
        a: "Orice sursă cu API: Google Analytics 4, Meta Ads, Google Ads, TikTok Ads, HubSpot, Salesforce, WooCommerce, Shopify, Oblio, SmartBill, foi de calcul Google Sheets și multe altele. Dacă există API, datele pot fi integrate.",
      },
      {
        q: "Cât durează să construiești un dashboard analytics?",
        a: "Un dashboard cu 3-5 surse de date se construiește în 5-10 zile lucrătoare. Dashboarduri complexe cu mai multe surse și logică de business specifică: 2-4 săptămâni.",
      },
      {
        q: "Am nevoie de cunoștințe tehnice pentru a folosi dashboardul?",
        a: "Nu. Dashboardurile sunt construite pentru utilizatori non-tehnici: vizualizări clare, filtre intuitive, comentarii automate. Facem training cu echipa ta și documentăm tot.",
      },
    ],
  },
];
