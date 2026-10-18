import type { Metadata } from "next";

// Legal entity that operates turbosnail.ro: fill in before publishing
const OPERATOR = {
  denumire: "[DENUMIREA FIRMEI]",
  sediu: "[ADRESA SEDIULUI]",
  cui: "[CUI]",
};

const EMAIL = "hello@turbosnail.ro";

export const metadata: Metadata = {
  title: "Politica de confidențialitate | TurboSnail",
  description: "Ce date personale colectează turbosnail.ro prin formulare, de ce, cui le transmitem, cât timp le păstrăm și cum îți exerciți drepturile GDPR.",
  alternates: {
    canonical: "https://turbosnail.ro/politica-de-confidentialitate",
  },
  openGraph: {
    title: "Politica de confidențialitate | TurboSnail",
    description: "Ce date personale colectează turbosnail.ro prin formulare, de ce, cui le transmitem, cât timp le păstrăm și cum îți exerciți drepturile GDPR.",
    url: "https://turbosnail.ro/politica-de-confidentialitate",
    siteName: "TurboSnail",
    locale: "ro_RO",
    type: "website",
  },
};

export default function PoliticaDeConfidentialitate() {
  return (
    <main style={{ fontFamily: "'Instrument Sans', sans-serif", background: "#0a0c14", color: "#eae8e3", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Instrument+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hd { font-family: 'Outfit', sans-serif; }
        .mx { max-width: 760px; margin: 0 auto; padding: 0 20px; }
        .legal h2 { font-family: 'Outfit', sans-serif; font-size: 24px; font-weight: 800; margin: 44px 0 14px; color: #eae8e3; letter-spacing: -0.4px; }
        .legal h3 { font-family: 'Outfit', sans-serif; font-size: 18px; font-weight: 700; margin: 28px 0 10px; color: #eae8e3; }
        .legal p { font-size: 16px; line-height: 1.75; color: #a8a6a1; margin-bottom: 14px; }
        .legal ul { list-style: disc; padding-left: 22px; margin-bottom: 16px; }
        .legal li { font-size: 16px; line-height: 1.7; color: #a8a6a1; margin-bottom: 8px; }
        .legal a { color: #ff6a00; text-decoration: underline; }
        .legal strong { color: #eae8e3; }
        .updated { font-size: 14px; color: #888899; margin-bottom: 24px; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,12,20,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(26,29,42,0.7)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <img src="/turbosnail-logo.png" alt="TurboSnail" style={{ height: 46, width: "auto" }} />
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <a href="/servicii" style={{ fontSize: 14, color: "#888899", textDecoration: "none" }}>Servicii</a>
            <a href="/blog" style={{ fontSize: 14, color: "#888899", textDecoration: "none" }}>Blog</a>
            <a href="/#contact" style={{ background: "linear-gradient(135deg, #ff8c33, #ff6a00)", color: "#fff", borderRadius: 10, fontFamily: "'Outfit', sans-serif", fontWeight: 700, padding: "10px 22px", fontSize: 13, textDecoration: "none" }}>
              Audit Gratuit →
            </a>
          </div>
        </div>
      </nav>

      <article className="mx legal" style={{ paddingTop: 120, paddingBottom: 96 }}>
        <h1 className="hd" style={{ fontSize: 38, fontWeight: 900, lineHeight: 1.12, letterSpacing: -1, marginBottom: 12 }}>
          Politica de confidențialitate
        </h1>
        <p className="updated">Ultima actualizare: 18 octombrie 2026</p>
        <p>
          Aici afli ce date personale colectăm prin turbosnail.ro, de ce le colectăm, cui le transmitem, cât timp le păstrăm și ce drepturi ai conform Regulamentului (UE) 2016/679 privind protecția datelor (GDPR).
        </p>

        <h2>1. Cine suntem</h2>
        <p>
          Operatorul datelor este <strong>{OPERATOR.denumire}</strong>, cu sediul în {OPERATOR.sediu}, CUI {OPERATOR.cui}. Firma operează site-ul turbosnail.ro sub numele TurboSnail.
        </p>
        <p>
          Pentru orice întrebare sau cerere legată de datele tale, scrie-ne la <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>

        <h2>2. Ce date colectăm și de ce</h2>
        <h3>Formularul de contact</h3>
        <p>
          Când ne scrii prin formularul de pe pagina principală, primim numele, adresa de email, telefonul (dacă îl completezi) și mesajul tău.
        </p>
        <ul>
          <li>Scop: să îți răspundem și să pregătim auditul sau oferta pe care ne-o ceri.</li>
          <li>Temei legal: demersurile făcute la cererea ta înainte de încheierea unui contract (art. 6 alin. (1) lit. b) din GDPR).</li>
        </ul>

        <h3>Testul de vizibilitate</h3>
        <p>
          Când completezi <a href="/test-vizibilitate">testul de vizibilitate</a>, primim numele, adresa de email, site-ul sau numele firmei și telefonul (dacă îl completezi), împreună cu răspunsurile tale la cele 10 întrebări și scorul calculat.
        </p>
        <ul>
          <li>Scop: să îți arătăm rezultatul și să te contactăm în legătură cu el.</li>
          <li>Temei legal: consimțământul tău, exprimat prin bifa din formular (art. 6 alin. (1) lit. a) din GDPR). Îl poți retrage oricând.</li>
        </ul>
        <p>
          Scorul se calculează automat din răspunsurile tale. Nu luăm pe baza lui nicio decizie automată care să aibă efecte juridice asupra ta.
        </p>

        <h3>Emailuri cu sfaturi</h3>
        <p>
          Doar dacă bifezi separat căsuța pentru emailuri, folosim numele și adresa ta de email ca să îți trimitem sfaturi despre vizibilitate online și automatizări AI.
        </p>
        <ul>
          <li>Temei legal: consimțământul tău (art. 6 alin. (1) lit. a) din GDPR).</li>
          <li>Te poți dezabona oricând: scrie-ne la {EMAIL} sau folosește linkul de dezabonare din email.</li>
        </ul>

        <h3>Date tehnice</h3>
        <p>
          Când vizitezi site-ul, browserul tău trimite automat date tehnice, precum adresa IP, tipul de browser și pagina accesată. Furnizorul de hosting le folosește ca să livreze paginile și să protejeze site-ul.
        </p>
        <ul>
          <li>Temei legal: interesul nostru legitim de a avea un site funcțional și sigur (art. 6 alin. (1) lit. f) din GDPR).</li>
        </ul>

        <h2>3. Cui transmitem datele</h2>
        <p>
          Nu vindem datele tale. Le transmitem doar furnizorilor care ne ajută să facem site-ul să funcționeze și care le prelucrează în numele nostru:
        </p>
        <ul>
          <li><strong>Vercel Inc.</strong> găzduiește site-ul (<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">politica Vercel</a>).</li>
          <li><strong>Web3Forms</strong> transmite mesajele din formulare către adresa noastră de email (<a href="https://web3forms.com" target="_blank" rel="noopener noreferrer">web3forms.com</a>).</li>
          <li><strong>Google</strong>: fonturile site-ului se încarcă de pe serverele Google Fonts, așa că browserul tău transmite adresa IP către Google (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">politica Google</a>).</li>
          <li>Furnizorul căsuței noastre de email, unde ajung mesajele din formulare.</li>
        </ul>
        <p>
          Putem transmite date autorităților doar atunci când legea ne obligă.
        </p>

        <h2>4. Transferuri în afara Spațiului Economic European</h2>
        <p>
          Unii dintre acești furnizori pot prelucra datele în afara Spațiului Economic European, de exemplu în SUA. În aceste cazuri, transferul se face doar pe baza mecanismelor prevăzute de GDPR: o decizie de adecvare a Comisiei Europene, cum este Cadrul UE-SUA privind protecția datelor (EU-U.S. Data Privacy Framework), sau clauzele contractuale standard aprobate de Comisie.
        </p>

        <h2>5. Cât timp păstrăm datele</h2>
        <ul>
          <li>Mesajele din formularul de contact: cel mult 2 ani de la ultimul contact, dacă nu devii client.</li>
          <li>Datele din testul de vizibilitate: cel mult 12 luni de la completare, dacă nu ne-ai dat acordul pentru emailuri și nu devii client.</li>
          <li>Datele pentru emailurile cu sfaturi: până te dezabonezi sau îți retragi acordul. După dezabonare păstrăm doar adresa de email într-o listă de excludere, ca să nu îți mai scriem.</li>
          <li>Dacă devii client, datele din contract și din facturi se păstrează cât timp ne obligă legislația fiscală și contabilă.</li>
        </ul>

        <h2>6. Drepturile tale</h2>
        <p>Conform GDPR, ai dreptul:</p>
        <ul>
          <li>să afli ce date avem despre tine și să primești o copie a lor;</li>
          <li>să ceri corectarea datelor greșite sau incomplete;</li>
          <li>să ceri ștergerea datelor;</li>
          <li>să ceri restricționarea prelucrării;</li>
          <li>să primești datele într-un format structurat sau să ceri transmiterea lor către altă firmă (portabilitate);</li>
          <li>să te opui prelucrării bazate pe interesul nostru legitim;</li>
          <li>să îți retragi oricând consimțământul, fără să fie afectată prelucrarea făcută înainte de retragere.</li>
        </ul>
        <p>
          Pentru oricare dintre aceste cereri, scrie-ne la <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Îți răspundem în cel mult o lună.
        </p>
        <p>
          Dacă nu ești mulțumit de răspuns, poți depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP), <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">www.dataprotection.ro</a>.
        </p>

        <h2>7. Cookie-uri și stocare în browser</h2>
        <p>
          Site-ul nu folosește cookie-uri de analiză sau de publicitate.
        </p>
        <p>
          Testul de vizibilitate salvează temporar rezultatul în browserul tău (sessionStorage), ca să îl poți vedea pe pagina de rezultat. Datele salvate acolo se șterg când închizi tab-ul.
        </p>

        <h2>8. Securitate</h2>
        <p>
          Site-ul folosește conexiune criptată (HTTPS). Mesajele primite prin formulare sunt accesibile doar persoanelor din TurboSnail care îți răspund.
        </p>

        <h2>9. Modificări ale politicii</h2>
        <p>
          Când schimbăm această politică, actualizăm data de la începutul paginii.
        </p>
      </article>
    </main>
  );
}
