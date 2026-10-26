export type DomainStat = {
  value: string;
  label: string;
  card: string;
  source: string;
  url: string;
};

export type DomainData = {
  slug: string;
  name: string;
  tag: string;
  promise: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  answer: string;
  where: string;
  problems: { title: string; detail: string }[];
  flowsTitle: string;
  flowsIntro: string;
  flows: { name: string; before: string; after: string; tools: string }[];
  notes: { heading: string; body: string; sources?: { label: string; url: string }[] }[];
  // the first stat is also shown on the homepage card and on /domenii
  stats: DomainStat[];
  process: [string, string, string, string];
  links: { pre: string; anchor: string; href: string; post: string }[];
  faq: { q: string; a: string }[];
};

export const DOMAINS: DomainData[] = [
  {
    slug: "clinici-stomatologice",
    name: "Clinici stomatologice",
    tag: "CLINICI STOMATOLOGICE",
    promise: "Mai puține programări ratate, recall automat și recenzii noi.",
    summary: "confirmări și remindere automate, recall la 6 luni, cereri de recenzie și răspunsuri în afara programului, cu datele pacienților protejate.",
    metaTitle: "Automatizări AI pentru clinici stomatologice | TurboSnail",
    metaDescription: "Automatizări AI pentru clinici stomatologice: remindere pe WhatsApp sau SMS, recall la 6 luni, cereri de recenzie. Mai puține programări ratate.",
    h1: "Automatizări AI pentru clinici stomatologice: mai puține programări ratate, mai mulți pacienți noi",
    answer: "Într-o clinică stomatologică, AI poate prelua comunicarea repetitivă cu pacienții: confirmă programările și trimite remindere pe WhatsApp sau SMS, propune reprogramarea când cineva anulează, amintește de controlul la 6 luni, cere recenzii după vizită și răspunde la mesaje în afara programului. Recepția rămâne pentru pacienții din fața ei.",
    where: "într-o clinică stomatologică",
    problems: [
      { title: "Neprezentări și anulări de ultim moment", detail: "Un pacient care nu vine lasă o oră goală în programul medicului, iar o anulare anunțată cu o seară înainte rareori mai poate fi înlocuită. Confirmările se fac la telefon, când recepția are timp, adică de multe ori deloc." },
      { title: "Planuri de tratament acceptate, dar neprogramate", detail: "Pacientul pleacă de la consultație cu planul de tratament, spune că sună să se programeze și nu mai sună. Nimeni nu are o listă clară cu planurile rămase deschise, așa că tratamentul se pierde odată cu venitul lui." },
      { title: "Recepția prinsă la telefon", detail: "Aceeași persoană răspunde la telefon, primește pacienții, încasează și reprogramează. Când telefonul sună în timp ce cineva plătește, unul dintre ei așteaptă, iar apelurile pierdute rămân de multe ori fără răspuns." },
      { title: "Puține recenzii pe Google", detail: "Pacienții mulțumiți rareori lasă o recenzie din proprie inițiativă. Fără o cerere trimisă la momentul potrivit, profilul de Google rămâne cu câteva recenzii vechi, iar un pacient nou alege clinica de alături, care are mai multe." },
      { title: "Pacienții noi ajung la concurență", detail: "Unii pacienți cer recomandări direct în Google sau în ChatGPT, de exemplu „dentist bun în Timișoara care lucrează sâmbăta”. Dacă site-ul și profilul Google nu spun clar ce tratamente faceți, unde și când, recomandarea merge la altă clinică." },
    ],
    flowsTitle: "Ce automatizăm într-o clinică stomatologică",
    flowsIntro: "Fiecare flux de mai jos e o automatizare: un pas repetitiv pe care sistemul îl face singur, la momentul potrivit. Partea de AI intervine acolo unde trebuie înțeles un mesaj scris liber de pacient.",
    flows: [
      {
        name: "Confirmare și reminder înainte de programare",
        before: "Recepția sună pacienții cu o zi înainte, când apucă, iar cei care nu răspund rămân neconfirmați.",
        after: "Pacientul primește automat confirmarea și un reminder pe WhatsApp sau SMS, cu buton de confirmare și opțiune de reprogramare. Dimineața, recepția vede cine a confirmat și pe cine mai trebuie să sune.",
        tools: "WhatsApp Business sau SMS, conectate la programul de programări al clinicii",
      },
      {
        name: "Follow-up la planurile de tratament neprogramate",
        before: "Planurile acceptate stau în fișe și nimeni nu verifică cine nu s-a mai programat.",
        after: "La câteva zile după consultație, pacientul care nu are încă o programare primește un mesaj care îl invită să își aleagă ora. Dacă nu răspunde, numele lui ajunge pe o listă scurtă pe care recepția o sună.",
        tools: "programul de cabinet, un tabel sau un CRM simplu, WhatsApp sau email",
      },
      {
        name: "Recall preventiv la 6 luni",
        before: "Controlul periodic depinde de memoria pacientului.",
        after: "La 6 luni de la ultima vizită, pacientul primește automat invitația la control, cu link de programare. Golurile din program se umplu cu pacienți pe care clinica îi cunoaște deja.",
        tools: "lista de pacienți din programul de cabinet, SMS sau email",
      },
      {
        name: "Cerere de recenzie după vizită",
        before: "Recenziile se cer rar și doar pacienților cu care cineva a apucat să vorbească.",
        after: "După vizită, pacientul primește un mesaj scurt de mulțumire, cu linkul direct către profilul clinicii din Google. Mesajul pleacă la toți pacienții care au acceptat comunicări, fără efort din partea echipei.",
        tools: "Google Business Profile, WhatsApp sau SMS",
      },
      {
        name: "Răspuns în afara programului",
        before: "Mesajele primite seara pe site sau pe Facebook primesc răspuns a doua zi, după ce pacientul s-a programat în altă parte.",
        after: "Un asistent AI răspunde imediat la întrebările frecvente (program, adresă, tratamente) și preia cererea de programare: nume, telefon, motivul vizitei, intervalul preferat. Dimineața, recepția confirmă ora.",
        tools: "chat pe site, Facebook Messenger, WhatsApp",
      },
    ],
    notes: [
      {
        heading: "Datele pacienților sunt date de sănătate",
        body: "În GDPR, datele despre sănătate sunt o categorie specială, cu reguli mai stricte. De aceea, mesajele automate nu conțin diagnostic sau detalii de tratament: doar data, ora și numele clinicii. Fiecare flux folosește doar datele strict necesare, comunicările pleacă numai la pacienții care și-au dat acordul, iar datele sunt prelucrate pe servere din Uniunea Europeană.",
      },
    ],
    stats: [
      {
        value: "22,95%",
        label: "mai puține neprezentări după introducerea reminderelor automate, într-un studiu pe 21,5 milioane de programări din SUA. Studiul e făcut de Sesame, un furnizor de software pentru cabinete, deci cifra e orientativă.",
        card: "mai puține neprezentări cu remindere automate",
        source: "Sesame, studiu SUA",
        url: "https://www.dentalcompare.com/News/128266-Automated-Appointment-Reminders-Lead-to-Increased-Revenue-According-to-Sesame-Communications-Study/",
      },
      {
        value: "17.450",
        label: "cabinete stomatologice independente funcționau în România în 2024.",
        card: "cabinete stomatologice independente în România",
        source: "INS, 2024",
        url: "https://insse.ro/cms/sites/default/files/com_presa/com_pdf/activ_unit_sanitare24r.pdf",
      },
      {
        value: "2.700",
        label: "cabinete stomatologice în plus în ultimii zece ani, deci mai multă concurență pentru fiecare pacient.",
        card: "cabinete în plus în ultimii zece ani",
        source: "Forbes România",
        url: "https://www.forbes.ro/?p=481903",
      },
    ],
    process: [
      "30 de minute în care ne arăți cum se fac azi programările, confirmările și reprogramările și cât timp stă recepția la telefon.",
      "Alegem primul flux, de regulă confirmările, și stabilim ce mesaje pleacă, pe ce canal și cine le aprobă.",
      "Conectăm fluxul la programul de cabinet, testăm mesajele pe programări de probă și pornim cu un grup mic de pacienți.",
      "Urmărim lunar câte programări s-au confirmat, câte s-au reprogramat și câte goluri au rămas în program.",
    ],
    links: [
      { pre: "Confirmările, recall-ul și cererile de recenzie se construiesc ca ", anchor: "automatizări AI", href: "/servicii/automatizari-ai", post: " legate de programul clinicii." },
      { pre: "Pentru mesajele de seară și de weekend folosim un ", anchor: "chatbot AI în limba română", href: "/servicii/chatbot-ai-romania", post: " care preia cererile de programare." },
      { pre: "Ca pacienții noi să găsească clinica în Google și în ChatGPT, lucrăm la ", anchor: "SEO bazat pe AI", href: "/servicii/seo-ai", post: ": pagini clare pentru fiecare tratament și un profil Google complet." },
      { pre: "Dacă nu știi încă ce flux merită pornit primul, o sesiune de ", anchor: "consultanță AI", href: "/servicii/consultanta-ai", post: " pornește de la cum lucrează azi recepția." },
    ],
    faq: [
      { q: "Merge cu programul de cabinet pe care îl folosim?", a: "Depinde de program. Dacă are export de date, o integrare sau acces prin API, fluxurile citesc programările direct din el. Dacă nu are, pornim de la un calendar sincronizat sau de la un export zilnic. Verificăm asta la audit, înainte de orice altă discuție." },
      { q: "Primesc mesajele și pacienții în vârstă?", a: "Da, dacă au un telefon mobil. Pentru pacienții care nu folosesc WhatsApp, mesajul pleacă prin SMS, care merge pe orice telefon. Textul e scurt și clar, iar cine preferă poate suna în continuare la recepție." },
      { q: "Ce se întâmplă cu datele pacienților?", a: "Rămân ale clinicii. Mesajele nu conțin diagnostic sau detalii de tratament, folosim doar datele necesare (nume, telefon, data programării) și prelucrăm datele pe servere din Uniunea Europeană. Recall-ul și cererile de recenzie pleacă doar la pacienții care și-au dat acordul." },
      { q: "Trebuie să schimbăm softul?", a: "Nu. Automatizările se construiesc în jurul programului pe care îl folosiți deja. Echipa lucrează ca acum, doar că nu mai sună pentru confirmări și nu mai ține minte cine trebuie rechemat la control." },
      { q: "Cât durează implementarea?", a: "Depinde de program și de câte fluxuri porniți. Primul pas firesc e un singur flux, de exemplu confirmările; restul se adaugă după ce primul merge bine. La audit primești un termen concret pentru clinica ta." },
      { q: "Vedem câte programări s-au confirmat?", a: "Da. Primești un raport simplu, săptămânal sau lunar: câte mesaje au plecat, câte programări s-au confirmat, câte s-au reprogramat și câte au rămas fără răspuns. Așa vezi dacă fluxul își face treaba." },
    ],
  },
  {
    slug: "agentii-imobiliare",
    name: "Agenții imobiliare",
    tag: "AGENȚII IMOBILIARE",
    promise: "Răspuns în câteva minute la fiecare cerere, de pe orice canal.",
    summary: "cererile de pe portaluri, site, Facebook și WhatsApp strânse într-un loc, răspuns rapid cu întrebări de calificare, alocare către agent și follow-up după vizionare.",
    metaTitle: "Automatizări AI pentru agenții imobiliare | TurboSnail",
    metaDescription: "Automatizări AI pentru agenții imobiliare: cererile de pe portaluri, site și WhatsApp într-un singur loc, cu răspuns și calificare în câteva minute.",
    h1: "Automatizări AI pentru agenții imobiliare: fiecare cerere primește răspuns în câteva minute",
    answer: "Într-o agenție imobiliară, AI poate strânge într-un singur loc cererile venite de pe portaluri, site, Facebook și WhatsApp, poate răspunde în câteva minute cu întrebări despre buget, zonă și finanțare, poate aloca cererea agentului potrivit și poate pregăti draftul de anunț din fișa proprietății. Agentul păstrează vizionările și negocierea.",
    where: "într-o agenție imobiliară",
    problems: [
      { title: "Cererile vin din prea multe locuri", detail: "Un client scrie pe un portal, altul completează formularul de pe site, al treilea trimite mesaj pe Facebook sau pe WhatsApp. Fiecare canal are notificările lui, iar o cerere rămasă într-o căsuță pe care n-o verifică nimeni e un client pierdut." },
      { title: "Agentul e la vizionare când vine cererea", detail: "Cel mai bun moment să răspunzi e imediat după ce clientul a scris. Agentul e însă la o vizionare, la notar sau în trafic și răspunde după câteva ore, când clientul a vorbit deja cu altă agenție." },
      { title: "Timp pierdut cu cereri necalificate", detail: "O parte din cereri vin de la oameni fără buget clar, fără credit aprobat sau care doar se uită. Agentul află asta abia după un telefon lung sau după o vizionare, timp luat de la clienții serioși." },
      { title: "Follow-up uitat după vizionare", detail: "După vizionare, clientul are nevoie de un mesaj: ce părere a avut, dacă vrea să vadă și alte proprietăți, dacă are întrebări despre credit. Într-o săptămână aglomerată, mesajul rămâne pe mâine și apoi se uită." },
      { title: "Anunțuri scrise de mână", detail: "Fiecare proprietate nouă înseamnă titlu, descriere și adaptare pentru fiecare portal. Agentul scrie aceleași informații de mai multe ori, deși ele există deja în fișa proprietății." },
    ],
    flowsTitle: "Ce automatizăm într-o agenție imobiliară",
    flowsIntro: "O automatizare preia un pas repetitiv și îl face singură, de fiecare dată la fel. AI-ul ajută acolo unde trebuie citit un email de la portal sau scris un text pornind de la datele unei proprietăți.",
    flows: [
      {
        name: "Toate cererile într-un singur loc",
        before: "Agentul verifică pe rând emailurile de la portaluri, formularul de pe site, Facebook și WhatsApp.",
        after: "Emailurile trimise de portaluri sunt citite automat, iar datele clientului (nume, telefon, proprietate, mesaj) ajung într-un CRM sau într-un tabel comun, alături de cererile de pe site și din mesaje.",
        tools: "portalurile imobiliare, Gmail sau Outlook, CRM-ul agenției sau Google Sheets",
      },
      {
        name: "Răspuns imediat, cu întrebări de calificare",
        before: "Clientul așteaptă ore întregi un telefon.",
        after: "În câteva minute, clientul primește un mesaj cu întrebările care contează: bugetul, zona, dacă are credit aprobat și când vrea să se mute. Mesajul include un link de unde își alege ora pentru vizionare.",
        tools: "WhatsApp Business sau email, un calendar de programări",
      },
      {
        name: "Alocare automată către agent",
        before: "Cererile se împart la ședința de luni sau le ia cine apucă primul.",
        after: "Cererea calificată ajunge automat la agentul care se ocupă de zona sau de tipul de proprietate, cu notificare pe telefon și cu răspunsurile clientului deja completate.",
        tools: "CRM, notificări pe email sau WhatsApp",
      },
      {
        name: "Follow-up după vizionare",
        before: "Mesajul de după vizionare depinde de cât de aglomerată e ziua agentului.",
        after: "A doua zi după vizionare, clientul primește un mesaj care îl întreabă ce părere are și dacă vrea să vadă proprietăți asemănătoare. Agentul poate aproba mesajul înainte să plece.",
        tools: "CRM, WhatsApp sau email",
      },
      {
        name: "Draft de anunț și raport pe surse",
        before: "Anunțurile se scriu de la zero, iar nimeni nu știe ce canal aduce clienții buni.",
        after: "Din fișa proprietății se generează un draft de anunț, pe care agentul îl verifică înainte de publicare. Lunea, managerul primește un raport cu cererile venite din fiecare sursă și câte au ajuns la vizionare.",
        tools: "fișa proprietății, un model AI pentru draft, CRM sau Google Sheets pentru raport",
      },
    ],
    notes: [
      {
        heading: "Pentru dezvoltatori imobiliari",
        body: "La un proiect rezidențial, aceleași întrebări vin zilnic: în ce stadiu e construcția, ce apartamente mai sunt libere, când se poate vizita showroom-ul. Un asistent AI răspunde la ele 24/7, pe site și pe WhatsApp, doar din informațiile aprobate de voi, și programează vizitele la showroom direct în calendarul echipei de vânzări.",
      },
    ],
    stats: [
      {
        value: "~7x",
        label: "Firmele care contactează un lead în prima oră au de aproape 7 ori mai multe șanse să-l califice decât cele care încearcă o oră mai târziu. Studiul a analizat 1,25 milioane de lead-uri din SUA.",
        card: "mai multe șanse să califici un lead dacă răspunzi în prima oră",
        source: "HBR, 2011",
        url: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
      },
      {
        value: "1.213",
        label: "tranzacții imobiliare în Timișoara în decembrie 2025.",
        card: "tranzacții imobiliare în Timișoara în decembrie 2025",
        source: "Capital",
        url: "https://www.capital.ro/piata-imobiliara-la-final-de-2025-bucuresti-cluj-si-timisoara-raman-motoarele-tranzactiilor-in-ciuda-scaderii-anuale.html",
      },
      {
        value: "3",
        label: "potențiali cumpărători atrage, în medie, o locuință nouă din Timișoara, conform datelor Imobiliare.ro pentru trimestrul 4 din 2025.",
        card: "potențiali cumpărători pentru o locuință nouă din Timișoara",
        source: "Imobiliare.ro, T4 2025",
        url: "https://economedia.ro/?p=318973",
      },
    ],
    process: [
      "30 de minute în care ne arăți de unde vin cererile, cine le răspunde și cât trece până la primul contact cu clientul.",
      "Pornim de obicei cu strângerea cererilor într-un loc și cu răspunsul automat. Stabilim împreună întrebările de calificare și textul mesajelor.",
      "Conectăm portalurile, site-ul și WhatsApp-ul la CRM sau la tabel și testăm fluxul pe cereri de probă înainte să pornească pe cereri reale.",
      "Urmărim în cât timp primește clientul primul răspuns, câte cereri ajung la vizionare și din ce sursă vin cele bune.",
    ],
    links: [
      { pre: "Strângerea cererilor, alocarea și follow-up-ul sunt ", anchor: "automatizări AI", href: "/servicii/automatizari-ai", post: " legate de CRM-ul agenției." },
      { pre: "Răspunsurile de seară și de weekend le dă un ", anchor: "chatbot AI în română", href: "/servicii/chatbot-ai-romania", post: " care cunoaște proprietățile și regulile voastre." },
      { pre: "Despre cum lucrează un agent AI alături de oamenii de vânzări am scris în ghidul despre ", anchor: "agentul AI pentru vânzări", href: "/blog/agent-ai-pentru-vanzari-romania", post: "." },
      { pre: "Dacă vrei întâi o hartă a proceselor din agenție, începe cu o sesiune de ", anchor: "consultanță AI", href: "/servicii/consultanta-ai", post: "." },
    ],
    faq: [
      { q: "Se leagă de portaluri și de CRM-ul nostru?", a: "Portalurile trimit cererile pe email, iar emailurile pot fi citite automat, deci nu e nevoie de o integrare separată cu fiecare portal. Pentru CRM, verificăm la audit dacă are integrare sau API; dacă nu, folosim un tabel comun până decideți altfel." },
      { q: "Sună a robot răspunsul automat?", a: "Nu, dacă e scris bine. Mesajul pleacă în numele agentului, pe tonul agenției, și pune doar întrebările pe care le-ar pune un agent la primul telefon. Textul îl aprobați voi înainte de pornire." },
      { q: "Ce se întâmplă cu cererile din weekend?", a: "Primesc răspuns imediat, ca în timpul săptămânii, iar clientul își poate alege ora de vizionare din calendar. Luni dimineață, agentul găsește cererile deja calificate, nu o listă de mesaje necitite." },
      { q: "Pot aproba mesajele înainte să plece?", a: "Da. Pentru mesajele sensibile, cum e follow-up-ul după vizionare sau draftul de anunț, fluxul poate cere aprobarea agentului cu un singur click. Primul răspuns, cel cu întrebările de calificare, pleacă de regulă automat, ca să nu se piardă viteza." },
      { q: "Cine vede datele clienților?", a: "Doar echipa agenției, în CRM-ul sau în tabelul vostru. Fluxurile folosesc doar datele necesare pentru răspuns și programare, iar prelucrarea se face pe servere din Uniunea Europeană." },
    ],
  },
  {
    slug: "firme-contabilitate",
    name: "Firme de contabilitate",
    tag: "FIRME DE CONTABILITATE",
    promise: "Actele clienților strânse, citite și sortate automat.",
    summary: "colectarea și sortarea automată a actelor clienților, citirea bonurilor, facturilor și extraselor, facturile din SPV potrivite cu plățile, remindere și rapoarte lunare.",
    metaTitle: "Automatizări AI pentru firme de contabilitate | TurboSnail",
    metaDescription: "Automatizări AI pentru firme de contabilitate: actele clienților strânse și sortate automat, facturi din SPV potrivite cu plățile, remindere și rapoarte.",
    h1: "Automatizări AI pentru firme de contabilitate: documentele clienților, strânse și sortate fără tine",
    answer: "Într-o firmă de contabilitate, AI poate strânge documentele clienților într-un singur canal, le poate sorta pe client și lună, poate citi bonurile, facturile și extrasele, pregătindu-le pentru import, poate prelua facturile din SPV și le poate potrivi cu plățile. Contabilul verifică și înregistrează, în loc să caute și să copieze.",
    where: "într-o firmă de contabilitate",
    problems: [
      { title: "Actele vin pe toate canalele, la final de lună", detail: "Un client trimite poze cu bonuri pe WhatsApp, altul facturi pe email, al treilea un link către un folder. Totul vine în ultimele zile ale lunii, iar cineva din echipă descarcă, redenumește și mută fiecare document la clientul și luna lui." },
      { title: "Urmărirea actelor lipsă", detail: "Ca să închizi luna trebuie să știi ce lipsește: un extras, o factură de la un furnizor, un contract. Lista se ține în minte sau în mesaje, iar fiecare client e întrebat separat, de mai multe ori." },
      { title: "Facturile din SPV, descărcate și potrivite manual", detail: "Facturile primite prin e-Factura stau în SPV. Cineva le descarcă pentru fiecare client, le deschide și le caută în extras, una câte una, ca să vadă ce s-a plătit și ce nu." },
      { title: "Extrase introduse de mână", detail: "Extrasele bancare în PDF se citesc rând cu rând și se introduc în programul de contabilitate. E munca cea mai repetitivă din birou și cea în care o cifră greșită costă cel mai mult timp de corectat." },
      { title: "Rapoarte lunare asamblate manual", detail: "Clienții vor să știe cum stau: venituri, cheltuieli, TVA de plată. Raportul se construiește în Excel, de la zero, pentru fiecare client, exact în săptămâna cea mai aglomerată." },
      { title: "Aceleași întrebări de la clienți", detail: "„Ați primit factura?”, „Cât am de plată?”, „Până când trimit actele?”. Fiecare întrebare durează puțin, dar adunate întrerup munca de fond de mai multe ori pe zi." },
    ],
    flowsTitle: "Ce automatizăm într-o firmă de contabilitate",
    flowsIntro: "Automatizarea face pașii de strângere, citire și potrivire, care se repetă identic în fiecare lună. AI-ul citește documentele, iar decizia de înregistrare rămâne la contabil.",
    flows: [
      {
        name: "Un singur canal de colectare, cu sortare automată",
        before: "Actele vin pe WhatsApp, pe email și ca poze, amestecate.",
        after: "Clientul trimite documentele într-un singur loc, de exemplu o adresă de email dedicată. Fiecare document e recunoscut și salvat automat în folderul clientului și al lunii, cu un nume standard.",
        tools: "email dedicat, Google Drive sau OneDrive, WhatsApp Business",
      },
      {
        name: "Citirea bonurilor, facturilor și extraselor",
        before: "Datele se tastează de pe hârtie sau din PDF.",
        after: "AI-ul citește furnizorul, data, suma și TVA-ul și pregătește un fișier pentru importul în programul de contabilitate. Un om din echipă verifică fiecare lot înainte de înregistrare.",
        tools: "SAGA, WinMentor sau alt program cu import, un model AI de citire a documentelor",
      },
      {
        name: "Facturile din SPV, preluate și potrivite cu plățile",
        before: "Facturile se descarcă din SPV pentru fiecare client și se caută manual în extras.",
        after: "Facturile din SPV se preiau automat, iar fiecare e potrivită cu plata din extras după sumă, dată și furnizor. Pentru verificare rămân doar cele fără pereche.",
        tools: "SPV, RO e-Factura, extrase bancare",
      },
      {
        name: "Remindere către clienți înainte de termene",
        before: "Clienții sunt sunați unul câte unul când lipsesc acte.",
        after: "Cu câteva zile înainte de termen, fiecare client primește automat lista actelor care lipsesc pentru luna curentă. Cine a trimis tot nu primește nimic.",
        tools: "lista de clienți, email sau WhatsApp",
      },
      {
        name: "Rapoarte lunare automate pentru clienți",
        before: "Raportul se face în Excel, de la zero, pentru fiecare client.",
        after: "După închiderea lunii, fiecare client primește un raport scurt: venituri, cheltuieli, TVA și evoluția față de luna trecută. Contabilul îl verifică înainte de trimitere.",
        tools: "exporturi din programul de contabilitate, Google Sheets sau Looker Studio",
      },
    ],
    notes: [
      {
        heading: "e-Factura și SPV schimbă ritmul lunii",
        body: "Din 2025, e-Factura e obligatorie și pentru facturile către persoane fizice (B2C), iar amenzile se aplică din iulie 2025. Din ianuarie 2026, termenul de transmitere a facturilor în sistem e de 5 zile lucrătoare. Pentru o firmă de contabilitate, asta înseamnă că facturile trebuie urmărite în SPV pe tot parcursul lunii, nu doar la final. Regulile e-Factura și SPV se mai schimbă, așa că fluxurile se ajustează când apar modificări.",
        sources: [
          { label: "Fiscalitatea.ro", url: "https://www.fiscalitatea.ro/sanctiuni-pentru-neconformarea-cu-e-factura-in-b2c-de-la-1-iulie-2025-24221/" },
          { label: "StartupCafe", url: "https://startupcafe.ro/reminder-anaf-s-a-modificat-termenul-de-transmitere-a-facturii-electronice-prin-sistemul-ro-e-factura-93878" },
        ],
      },
      {
        heading: "Date financiare, acces minim",
        body: "Documentele clienților conțin date financiare confidențiale. Fiecare flux are acces doar la ce îi trebuie, de exemplu folderele clienților, nu tot serverul. Datele sunt prelucrate pe servere din Uniunea Europeană, iar accesele se pot retrage oricând.",
      },
    ],
    stats: [
      {
        value: "5 zile lucrătoare",
        label: "este, din ianuarie 2026, termenul de transmitere a facturilor în RO e-Factura.",
        card: "termenul de transmitere în e-Factura, din ianuarie 2026",
        source: "StartupCafe",
        url: "https://startupcafe.ro/reminder-anaf-s-a-modificat-termenul-de-transmitere-a-facturii-electronice-prin-sistemul-ro-e-factura-93878",
      },
      {
        value: "Iulie 2025",
        label: "de când se aplică amenzi pentru nerespectarea e-Factura în relația cu persoanele fizice (B2C), obligatorie din 2025.",
        card: "amenzi pentru e-Factura B2C",
        source: "Fiscalitatea.ro",
        url: "https://www.fiscalitatea.ro/sanctiuni-pentru-neconformarea-cu-e-factura-in-b2c-de-la-1-iulie-2025-24221/",
      },
    ],
    process: [
      "30 de minute în care ne arăți cum vin actele de la clienți, ce program de contabilitate folosiți și unde se pierde cel mai mult timp la închiderea lunii.",
      "Alegem un singur flux de pornire, de obicei colectarea și sortarea actelor, și stabilim cine verifică ce, înainte de orice înregistrare.",
      "Construim fluxul pe câțiva clienți de probă, verificăm citirea pe acte reale și abia apoi îl extindem la restul portofoliului.",
      "Urmărim câte documente au fost sortate și citite automat, câte au avut nevoie de corecturi și cât a durat închiderea lunii.",
    ],
    links: [
      { pre: "Colectarea, citirea documentelor și potrivirea plăților sunt ", anchor: "automatizări AI", href: "/servicii/automatizari-ai", post: " construite în jurul programului vostru de contabilitate." },
      { pre: "Rapoartele lunare pentru clienți folosesc același mecanism ca serviciul de ", anchor: "raportare și analytics", href: "/servicii/raportare-analytics", post: "." },
      { pre: "Cum elimini munca manuală din rapoartele periodice am explicat pas cu pas în ghidul despre ", anchor: "automatizarea rapoartelor", href: "/blog/automatizare-rapoarte-saptamanale-lunare", post: "." },
      { pre: "Cum se citesc automat facturile, bonurile și extrasele clienților am explicat în ghidul despre ", anchor: "automatizare documente", href: "/blog/automatizare-documente", post: "." },
      { pre: "Dacă vrei să afli întâi ce merită automatizat în biroul tău, pornește cu ", anchor: "consultanță AI", href: "/servicii/consultanta-ai", post: "." },
    ],
    faq: [
      { q: "Merge cu softul nostru de contabilitate?", a: "Dacă programul are import de date, cum au SAGA sau WinMentor, fluxul pregătește fișierele în formatul cerut de el. Verificăm la audit ce variantă de import folosiți. Nu înlocuim programul și nu umblăm direct în baza lui de date." },
      { q: "Trebuie clienții să instaleze ceva?", a: "Nu. Clienții trimit actele pe email sau pe WhatsApp, ca acum, doar că într-un singur loc. Restul se întâmplă în spate." },
      { q: "Cât de precisă e citirea automată?", a: "Depinde de calitatea documentelor: o factură PDF generată de un program se citește mult mai sigur decât poza unui bon șifonat. De aceea, citirea automată pregătește datele, iar un om le verifică înainte de înregistrare. Documentele neclare sunt marcate separat, nu ghicite." },
      { q: "Cine verifică înainte de înregistrare?", a: "Contabilul, ca și acum. Automatizarea face munca de strângere, citire și potrivire, iar decizia de înregistrare rămâne la om. Fluxul arată clar ce a citit și din ce document, ca verificarea să fie rapidă." },
      { q: "Putem începe cu un singur flux?", a: "Da, și așa recomandăm. Un prim flux potrivit e colectarea și sortarea actelor, pentru că efectul se vede imediat la final de lună. După ce merge, adăugăm citirea automată sau rapoartele." },
    ],
  },
  {
    slug: "producatori-distribuitori",
    name: "Producători și distribuitori",
    tag: "PRODUCĂTORI ȘI DISTRIBUITORI",
    promise: "Furnizorul pe care cumpărătorii îl găsesc în Google și în ChatGPT.",
    summary: "pagini OEM și private label în engleză, catalog pe categorii, certificări cu date structurate, listări în directoare B2B și cereri de ofertă calificate.",
    metaTitle: "Vizibilitate B2B: producători și distribuitori | TurboSnail",
    metaDescription: "Vizibilitate B2B pentru producători și distribuitori: pagini OEM și private label în engleză, catalog, certificări și cereri de ofertă calificate.",
    h1: "Vizibilitate B2B pentru producători și distribuitori: furnizorul pe care cumpărătorii îl găsesc în Google și în ChatGPT",
    answer: "Pentru un producător sau distribuitor, AI ajută în două locuri: face firma vizibilă pentru cumpărătorii care caută furnizori în Google și în asistenți ca ChatGPT, prin pagini clare în engleză, catalog și certificări, și preia automat cererile de ofertă, le califică după volum, țară și termen și anunță imediat echipa de vânzări.",
    where: "la un producător sau distribuitor",
    problems: [
      { title: "Site-ul e o carte de vizită", detail: "Site-ul spune cine sunteți, dar nu ce produceți: lipsesc catalogul, capacitatea de producție, certificările și termenele. Un cumpărător care compară furnizori nu are pe ce să se bazeze și trece la următorul." },
      { title: "Cumpărătorii străini caută în engleză și în asistenții AI", detail: "Un cumpărător din Germania sau din Olanda caută „OEM manufacturer Romania” sau „private label” și întreabă ChatGPT ce furnizori există. Dacă firma nu are pagini în engleză care răspund exact la asta, nu apare în listă." },
      { title: "Cererea de ofertă se pierde", detail: "Formularul de ofertă nu funcționează sau cererea ajunge pe o adresă generală și stă câteva zile până o vede cineva. Cumpărătorul care a scris la mai mulți furnizori lucrează cu cel care răspunde primul." },
      { title: "Firma lipsește din directoarele B2B", detail: "Cumpărătorii folosesc directoare ca Europages sau Kompass ca să găsească furnizori pe categorii și țări. O firmă care nu e listată acolo lipsește dintr-o sursă pe care concurenții ei o folosesc." },
    ],
    flowsTitle: "Ce livrăm pentru producători și distribuitori",
    flowsIntro: "Aici munca e mai mult de vizibilitate (SEO pentru Google și GEO, adică optimizare pentru răspunsurile asistenților AI) decât de automatizare internă. Automatizarea apare la final, când cererea de ofertă ajunge la oamenii de vânzări.",
    flows: [
      {
        name: "Pagini OEM și private label în engleză",
        before: "Site-ul are doar o pagină „Despre noi”, în română.",
        after: "Pagini în engleză care spun clar ce produceți la comandă, pentru ce industrii, în ce volume minime și cu ce termene, scrise pentru căutările pe care le fac cumpărătorii.",
        tools: "site-ul existent, Google Search Console",
      },
      {
        name: "Pagini pe categorii de produs, cu specificații",
        before: "Produsele apar într-un catalog PDF sau deloc.",
        after: "Câte o pagină pentru fiecare categorie de produs, cu specificații, materiale, standarde și fotografii, ușor de găsit în Google și ușor de citat de asistenții AI.",
        tools: "catalogul existent, fișele tehnice",
      },
      {
        name: "Pagină de certificări și capacitate",
        before: "Certificările și capacitatea de producție sunt menționate în treacăt, fără detalii.",
        after: "O pagină dedicată certificărilor și capacității, cu date structurate, ca motoarele de căutare și asistenții AI să le citească corect.",
        tools: "date structurate schema.org, documentele de certificare",
      },
      {
        name: "Listări în Europages și Kompass",
        before: "Firma nu apare în directoarele B2B sau apare cu date vechi.",
        after: "Profiluri complete în Europages și Kompass, cu aceleași date ca pe site: nume, categorii, certificări, contact.",
        tools: "Europages, Kompass",
      },
      {
        name: "Formular de cerere de ofertă care califică",
        before: "Cererea vine pe o adresă generală, fără volum, țară sau termen.",
        after: "Formularul cere volumul, țara de livrare și termenul, iar cererea completă ajunge imediat la omul de vânzări potrivit, cu notificare. Cererile incomplete primesc automat întrebările care lipsesc.",
        tools: "formularul de pe site, email sau CRM",
      },
      {
        name: "Măsurarea cererilor calificate",
        before: "Singura cifră urmărită e traficul pe site.",
        after: "Fiecare cerere de ofertă calificată e înregistrată ca conversie în GA4, cu sursa ei: căutare, director B2B sau asistent AI.",
        tools: "Google Analytics 4, Google Search Console",
      },
    ],
    notes: [
      {
        heading: "Ce măsurăm",
        body: "Trei lucruri: cererile de ofertă calificate, pozițiile pe căutări comerciale care nu conțin numele firmei și mențiunile firmei în asistenții AI. Traficul singur e un indicator de vanitate: vizitele fără cereri de ofertă nu ajută vânzările.",
      },
      {
        heading: "Termen realist",
        body: "Rezultatele SEO și GEO pe conținut nou apar de regulă în 3-5 luni. Primele semnale, cum sunt paginile indexate și primele afișări în Search Console, vin mai devreme, dar cererile de ofertă apar după ce paginile urcă pe căutările care contează. Cine promite rezultate peste noapte vinde altceva.",
      },
    ],
    stats: [
      {
        value: "89%",
        label: "dintre cumpărătorii B2B folosesc AI generativ în cel puțin o etapă a procesului de achiziție.",
        card: "dintre cumpărătorii B2B folosesc AI generativ în achiziție",
        source: "Forrester, 2024",
        url: "https://www.forrester.com/blogs/the-future-of-b2b-buying-will-come-slowly-and-then-all-at-once",
      },
      {
        value: "51%",
        label: "dintre cumpărătorii B2B de software își încep cercetarea mai des într-un chatbot AI decât în Google. Studiul se referă la cumpărătorii de software, nu la cei de produse fizice, dar arată cum se schimbă felul în care se caută furnizori.",
        card: "dintre cumpărătorii B2B de software încep cu un chatbot AI",
        source: "G2, martie 2026",
        url: "https://company.g2.com/news/g2-research-the-answer-economy",
      },
    ],
    process: [
      "30 de minute în care ne uităm împreună la site, la cum vin azi cererile de ofertă și la ce caută cumpărătorii din piețele care vă interesează.",
      "Stabilim piețele, categoriile de produs și paginile care se fac primele, plus ce înseamnă pentru voi o cerere de ofertă calificată.",
      "Scriem și publicăm paginile, completăm listările din directoare și conectăm formularul de ofertă la echipa de vânzări.",
      "Raportăm lunar cererile calificate, pozițiile pe căutările comerciale și mențiunile în asistenții AI, nu doar traficul.",
    ],
    links: [
      { pre: "Paginile, datele structurate și prezența în asistenții AI sunt partea de ", anchor: "SEO bazat pe AI", href: "/servicii/seo-ai", post: "." },
      { pre: "Dacă vreți să și căutați activ cumpărători, nu doar să fiți găsiți, completăm cu ", anchor: "cold email B2B", href: "/servicii/cold-email-outbound", post: " către importatori și distribuitori din piețele țintă." },
      { pre: "Cum arată o campanie de email bine făcută în B2B găsiți în ", anchor: "ghidul de cold email B2B", href: "/blog/cold-email-b2b-romania-ghid-complet", post: "." },
      { pre: "Dacă nu știți încă pe ce piață să mergeți întâi, o sesiune de ", anchor: "consultanță AI", href: "/servicii/consultanta-ai", post: " pune ordinea înainte de orice investiție." },
    ],
    faq: [
      { q: "Ne trebuie site în engleză?", a: "Dacă vindeți sau vreți să vindeți în afara României, da. Cumpărătorii străini caută în engleză, iar asistenții AI răspund din pagini pe care le pot înțelege. Nu trebuie tradus tot site-ul: se încep paginile pentru produsele și piețele care contează." },
      { q: "Ce înseamnă să apari în ChatGPT?", a: "Când un cumpărător întreabă un asistent AI ce producători există pentru un anumit produs, asistentul formulează răspunsul din informațiile pe care le găsește online. O firmă cu pagini clare, date consistente în directoare și mențiuni în alte surse are mai multe șanse să fie inclusă. Nimeni nu poate garanta o mențiune, dar se poate verifica periodic dacă apare." },
      { q: "Lucrăm doar la comandă. Ne trebuie produse pe site?", a: "Nu vă trebuie un magazin online. Trebuie să arătați ce puteți produce: materiale, procese, toleranțe, volume, certificări și exemple de categorii de produse. Pentru un cumpărător OEM, asta contează mai mult decât o listă de produse." },
      { q: "Cum măsurați rezultatele?", a: "Prin cererile de ofertă calificate, înregistrate în GA4, prin pozițiile pe căutările comerciale fără numele firmei, din Search Console, și prin verificarea periodică a răspunsurilor date de asistenții AI la întrebările cumpărătorilor. Raportul e lunar." },
      { q: "Mai contează directoarele B2B?", a: "Da. Cumpărătorii le folosesc ca să găsească furnizori pe categorii și țări, iar informațiile din ele pot ajunge și în răspunsurile asistenților AI. Un profil complet în Europages și Kompass, cu aceleași date ca pe site, ajută ambele canale." },
    ],
  },
  {
    slug: "piese-auto-service",
    name: "Piese auto și service-uri",
    tag: "PIESE AUTO ȘI SERVICE",
    promise: "Cererile de pe WhatsApp, ofertate în minute.",
    summary: "asistent pe WhatsApp care preia VIN-ul și pregătește cererea, oferte din șablon, programări online, remindere pentru ITP, revizie și anvelope.",
    metaTitle: "Automatizări AI: piese auto și service-uri | TurboSnail",
    metaDescription: "Automatizări AI pentru magazine de piese auto și service-uri: cereri pe WhatsApp cu VIN, oferte rapide, programări online, remindere ITP și revizie.",
    h1: "Automatizări AI pentru magazine de piese auto și service-uri: cererile de pe WhatsApp, ofertate în minute",
    answer: "Într-un magazin de piese auto sau într-un service, AI poate prelua cererile de pe WhatsApp, poate cere VIN-ul sau poza talonului și poate pregăti cererea pentru vânzător, care verifică piesa în catalog. Tot automat pleacă ofertele, follow-up-ul, reminderele pentru ITP, revizie și anvelope și mesajul că mașina e gata.",
    where: "într-un magazin de piese auto sau service",
    problems: [
      { title: "Cererile vin pe WhatsApp și la telefon", detail: "„Aveți plăcuțe pentru Golf 6?” Clientul trimite o poză, un VIN sau doar modelul, pe WhatsApp sau la telefon, de multe ori exact când vânzătorul servește pe altcineva." },
      { title: "Identificarea piesei durează", detail: "Pentru aceeași mașină există mai multe variante de piesă. Vânzătorul cere VIN-ul, caută în catalog și revine, iar clientul așteaptă." },
      { title: "Oferta pleacă târziu", detail: "Până se identifică piesa și se scrie oferta, clientul a întrebat și la alte magazine și cumpără de la cel care răspunde primul." },
      { title: "Remindere trimise manual sau deloc", detail: "ITP-ul, revizia și schimbul de anvelope sunt motive sigure de revenire în service, dar reminderele se trimit când e timp sau deloc. Clientul ajunge la service-ul care i-a scris primul." },
      { title: "Programări doar la telefon", detail: "Clientul care vrea să își programeze mașina seara sau în weekend nu are unde să scrie, așa că amână sau sună în altă parte." },
    ],
    flowsTitle: "Ce automatizăm în magazin și în service",
    flowsIntro: "Fiecare flux preia un pas care se repetă zilnic. AI-ul înțelege mesajul clientului și strânge datele, iar omul decide piesa și oferta.",
    flows: [
      {
        name: "Asistent pe WhatsApp pentru cereri de piese",
        before: "Vânzătorul cere detaliile pe rând, în mai multe mesaje.",
        after: "Asistentul cere VIN-ul sau poza talonului, modelul și piesa dorită, apoi trimite vânzătorului cererea completă. Vânzătorul verifică piesa în catalogul pe care îl folosește deja și confirmă.",
        tools: "WhatsApp Business, catalogul de piese folosit deja (de exemplu TecDoc)",
      },
      {
        name: "Ofertă din șablon și follow-up",
        before: "Oferta se scrie de la zero în fiecare conversație.",
        after: "Vânzătorul completează piesa, disponibilitatea și termenul într-un șablon, iar oferta pleacă imediat. Dacă clientul nu răspunde, primește automat un mesaj de follow-up.",
        tools: "WhatsApp Business, șabloane de mesaje",
      },
      {
        name: "Programări online la service",
        before: "Programările se fac doar la telefon, în timpul programului.",
        after: "Clientul își alege ora dintr-un calendar, oricând, iar service-ul primește programarea cu mașina și problema descrise.",
        tools: "calendar online, site sau WhatsApp",
      },
      {
        name: "Remindere pentru ITP, revizie și anvelope",
        before: "Nimeni nu urmărește când expiră ITP-ul sau când vine schimbul de sezon.",
        after: "Pe baza fișei mașinii, clientul primește automat un reminder înainte de ITP, de revizie și de schimbul sezonier de anvelope, cu link de programare.",
        tools: "fișa clientului, SMS sau WhatsApp",
      },
      {
        name: "„Mașina e gata” și cererea de recenzie",
        before: "Clientul sună să întrebe dacă e gata mașina.",
        after: "Când lucrarea e închisă, clientul primește automat mesajul că mașina e gata, iar a doua zi un mesaj scurt cu linkul pentru recenzie pe Google.",
        tools: "programul de service, WhatsApp, Google Business Profile",
      },
    ],
    notes: [],
    stats: [
      {
        value: "15,6 ani",
        label: "este vârsta medie a autoturismelor din România, față de 12,7 ani în Uniunea Europeană (date pentru 2024). Mașini mai vechi înseamnă mai multe piese și mai multe reparații.",
        card: "vârsta medie a mașinilor din România, față de 12,7 în UE",
        source: "ACEA",
        url: "https://www.acea.auto/publication/report-vehicles-on-european-roads-2026/",
      },
      {
        value: "69%",
        label: "din înmatriculările din ianuarie-octombrie 2024 au fost mașini rulate.",
        card: "din înmatriculări au fost mașini rulate",
        source: "APIA, 2024",
        url: "https://economedia.ro/apia-trage-un-semnal-de-alarma-pentru-piata-auto-din-romania-in-pragul-anului-2025-si-al-alegerilor-parlamentare-cresterea-alarmanta-a-importurilor-de-autoturisme-rulate-vechi-si-declinul-v.html",
      },
    ],
    process: [
      "30 de minute în care ne arăți cum vin cererile și programările și ce catalog de piese folosiți.",
      "Pornim cu un singur flux, de obicei asistentul de pe WhatsApp sau reminderele, și stabilim textul mesajelor.",
      "Configurăm fluxul pe numărul vostru de WhatsApp, îl testăm cu cereri de probă și pornim.",
      "Urmărim câte cereri au primit ofertă, în cât timp și câte programări au venit din remindere.",
    ],
    links: [
      { pre: "Asistentul de pe WhatsApp e un ", anchor: "chatbot AI în română", href: "/servicii/chatbot-ai-romania", post: " care pregătește cererea, nu vinde în locul vostru." },
      { pre: "Ofertele, reminderele și mesajele de după reparație sunt ", anchor: "automatizări AI", href: "/servicii/automatizari-ai", post: " legate de fișa clientului." },
      { pre: "Cum lucrează un asistent AI alături de vânzători am descris în articolul despre ", anchor: "agentul AI pentru vânzări", href: "/blog/agent-ai-pentru-vanzari-romania", post: "." },
      { pre: "Nu știi de unde să pornești? O discuție de ", anchor: "consultanță AI", href: "/servicii/consultanta-ai", post: " lămurește asta înainte de orice investiție." },
    ],
    faq: [
      { q: "Merge cu WhatsApp-ul pe care îl folosim deja?", a: "De regulă, da: numărul rămâne același, iar clienții scriu ca până acum. Verificăm la audit ce variantă de WhatsApp Business folosiți și ce trebuie configurat. Vânzătorul poate intra oricând în conversație." },
      { q: "Ne trebuie catalog online?", a: "Nu. Asistentul nu caută singur piesa: strânge datele de care are nevoie vânzătorul (VIN, model, piesă), iar vânzătorul verifică în catalogul pe care îl folosește deja." },
      { q: "Deranjează clienții mesajele automate?", a: "Nu, dacă sunt utile și rare. Un reminder înainte de ITP sau mesajul că mașina e gata sunt informații pe care clientul le vrea. Cine nu mai vrea mesaje se poate dezabona oricând." },
      { q: "Merge și la un service mic?", a: "Da. La un service mic, aceeași persoană repară, răspunde la telefon și face programările, așa că fiecare mesaj preluat automat contează. Se poate porni cu un singur flux, de exemplu reminderele pentru ITP." },
      { q: "Cât durează să pornim?", a: "Depinde de flux. Reminderele și mesajul „mașina e gata” sunt cele mai simple; asistentul de pe WhatsApp cere mai multă configurare. La audit primești un termen concret." },
    ],
  },
];
