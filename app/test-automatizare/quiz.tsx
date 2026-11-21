"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Option = { label: string; points: number };
type Question = { id: string; label: string; q: string; options: Option[]; rec: string; href: string; anchor: string };
export type Rec = { text: string; href: string; anchor: string };

// Punctele măsoară munca repetitivă făcută de mână: 0 = rulează deja singur, 10 = totul se face manual.
// „Nu știu” primește 5, la mijloc, ca să nu umfle și să nu micșoreze scorul.
const QUESTIONS: Question[] = [
  {
    id: "facturi",
    label: "Facturile de la furnizori",
    q: "Cum ajung facturile de la furnizori la contabil?",
    options: [
      { label: "Se preiau automat, din SPV și din email, și ajung singure la contabil", points: 0 },
      { label: "Le descarcă cineva și le trimite o dată pe lună", points: 6 },
      { label: "Le strângem de mână din email, WhatsApp și SPV și căutăm ce lipsește", points: 10 },
      { label: "Nu știu", points: 5 },
    ],
    rec: "Strânge facturile primite într-un singur loc, automat, din SPV și din email. Contabilul primește pachetul lunii complet, la o dată fixă.",
    href: "/blog/automatizare-procese-contabile",
    anchor: "Ghidul despre automatizarea proceselor contabile",
  },
  {
    id: "documente",
    label: "Datele din documente",
    q: "Cine introduce în programe datele din facturi, bonuri sau contracte?",
    options: [
      { label: "Se citesc automat, iar un om doar verifică", points: 0 },
      { label: "Le tastează cineva, câteva pe săptămână", points: 5 },
      { label: "Le tastează cineva în fiecare zi", points: 10 },
      { label: "Nu știu", points: 5 },
    ],
    rec: "Lasă citirea documentelor în seama unui program: datele ajung singure în tabel, iar omul verifică doar ce e nesigur.",
    href: "/blog/automatizare-documente",
    anchor: "Ghidul despre automatizarea documentelor",
  },
  {
    id: "cereri",
    label: "Cererile de ofertă",
    q: "Ce se întâmplă cu o cerere de ofertă venită pe site sau pe email?",
    options: [
      { label: "Intră singură în CRM și ajunge la omul potrivit", points: 0 },
      { label: "O vede cineva și o trece de mână într-un tabel sau în CRM", points: 6 },
      { label: "Stă în email până o vede cineva și uneori se pierde", points: 10 },
      { label: "Nu știu", points: 5 },
    ],
    rec: "Fă ca fiecare cerere nouă să intre singură în CRM, cu un responsabil din primul minut, ca niciuna să nu se mai piardă.",
    href: "/blog/automatizare-crm",
    anchor: "Ghidul despre automatizarea CRM",
  },
  {
    id: "crm",
    label: "Istoria clienților",
    q: "Aveți un CRM în care se vede toată istoria fiecărui client?",
    options: [
      { label: "Da, și îl folosește toată echipa", points: 0 },
      { label: "Da, dar fiecare îl completează când apucă", points: 5 },
      { label: "Nu, folosim tabele, emailul și memoria", points: 10 },
      { label: "Nu știu", points: 5 },
    ],
    rec: "Pune istoria clienților într-un singur loc și lasă regulile simple să o țină la zi: cererile, follow-up-urile și etapele se actualizează singure.",
    href: "/blog/automatizare-crm",
    anchor: "Ghidul despre automatizarea CRM",
  },
  {
    id: "emailuri",
    label: "Emailurile repetitive",
    q: "Câte emailuri asemănătoare scrie echipa pe săptămână (confirmări, remindere, răspunsuri la aceleași întrebări)?",
    options: [
      { label: "Aproape niciunul, pleacă automat", points: 0 },
      { label: "Câteva, din șabloane", points: 5 },
      { label: "Multe, fiecare scris de la zero", points: 10 },
      { label: "Nu știu", points: 5 },
    ],
    rec: "Automatizează emailurile care se repetă: confirmările și reminderele pleacă singure, iar răspunsurile frecvente pornesc dintr-o ciornă gata scrisă.",
    href: "/blog/cum-sa-automatizezi-emailurile-firmei",
    anchor: "Ghidul despre automatizarea emailurilor",
  },
  {
    id: "rapoarte",
    label: "Rapoartele",
    q: "Cum se face raportul săptămânal sau lunar (vânzări, încasări, stocuri)?",
    options: [
      { label: "Se actualizează singur", points: 0 },
      { label: "Îl face cineva în Excel, în mai puțin de o oră", points: 5 },
      { label: "Îl face cineva în Excel, cu date din mai multe programe, în câteva ore", points: 10 },
      { label: "Nu facem rapoarte", points: 7 },
    ],
    rec: "Fă raportul să se construiască singur din datele pe care le ai deja și să ajungă pe email la ora stabilită.",
    href: "/blog/automatizare-rapoarte-saptamanale-lunare",
    anchor: "Ghidul despre automatizarea rapoartelor",
  },
  {
    id: "copiere",
    label: "Datele copiate între programe",
    q: "Cât de des copiază cineva aceleași date dintr-un program în altul (de exemplu din email în tabel sau din magazinul online în facturare)?",
    options: [
      { label: "Rar sau deloc, programele sunt legate între ele", points: 0 },
      { label: "De câteva ori pe săptămână", points: 5 },
      { label: "În fiecare zi", points: 10 },
      { label: "Nu știu", points: 5 },
    ],
    rec: "Leagă programele între ele cu o platformă de automatizare, ca datele să treacă singure dintr-un loc în altul.",
    href: "/blog/platforme-de-automatizare",
    anchor: "Ghidul despre platformele de automatizare",
  },
  {
    id: "incasari",
    label: "Facturile neîncasate",
    q: "Cum aflați ce facturi emise nu au fost încă plătite?",
    options: [
      { label: "Primim automat lista sau remindere", points: 0 },
      { label: "Verificăm extrasul de cont din când în când", points: 6 },
      { label: "Aflăm când ne lipsesc banii", points: 10 },
      { label: "Nu știu", points: 5 },
    ],
    rec: "Potrivește automat extrasul de cont cu facturile emise și trimite remindere politicoase pentru cele trecute de scadență.",
    href: "/blog/automatizare-procese-contabile",
    anchor: "Ghidul despre automatizarea proceselor contabile",
  },
  {
    id: "erori",
    label: "Greșelile",
    q: "Cine prinde greșelile, de exemplu o factură trecută de două ori, un client uitat sau o cifră greșită?",
    options: [
      { label: "Un sistem le semnalează automat", points: 0 },
      { label: "Un om verifică la final de lună", points: 6 },
      { label: "Le descoperim când se plânge cineva", points: 10 },
      { label: "Nu știu", points: 5 },
    ],
    rec: "Pune verificări automate pe procesele de care depind banii și clienții, ca o eroare să fie văzută în aceeași zi, nu la final de lună.",
    href: "/blog/sisteme-control-procese-afaceri",
    anchor: "Ghidul despre sistemele de control",
  },
];

const MAX_POINTS = QUESTIONS.length * 10;

export const RESULT_KEY = "ts-test-automatizare";

export function category(score: number) {
  if (score >= 60) return "Potențial mare de automatizare";
  if (score >= 30) return "Potențial mediu de automatizare";
  return "Potențial mic de automatizare";
}

export default function AutomationQuiz() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [step, setStep] = useState<"quiz" | "form">("quiz");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [botcheck, setBotcheck] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const answered = QUESTIONS.filter((q) => answers[q.id] !== undefined).length;
  const points = QUESTIONS.reduce((sum, q) => sum + (q.options[answers[q.id]]?.points ?? 0), 0);
  const score = Math.round((points / MAX_POINTS) * 100);

  function showForm() {
    setStep("form");
    requestAnimationFrame(() => {
      const el = document.getElementById("test-start");
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 84, behavior: "smooth" });
    });
  }

  async function submit() {
    setError("");
    if (!name.trim() || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError("Completează numele și o adresă de email validă.");
      return;
    }
    if (!consent) {
      setError("Bifează acordul pentru folosirea datelor, ca să vezi rezultatul.");
      return;
    }
    if (botcheck) return;
    setSending(true);
    const cat = category(score);
    // Primele 3 recomandări: procesele cu cea mai multă muncă manuală, fără ghiduri repetate.
    const recs: Rec[] = [];
    const ranked = QUESTIONS.map((q) => ({ q, p: q.options[answers[q.id]]?.points ?? 0 }))
      .filter((x) => x.p >= 5)
      .sort((a, b) => b.p - a.p);
    for (const { q } of ranked) {
      if (recs.length === 3) break;
      if (recs.some((r) => r.href === q.href)) continue;
      recs.push({ text: q.rec, href: q.href, anchor: q.anchor });
    }
    const answerLines = QUESTIONS.map((q, i) => `${i + 1}. ${q.label}: ${q.options[answers[q.id]]?.label}`).join("\n");
    // Paginile vizitei, salvate de VisitTracker: ne spun ce pagină a adus testul.
    let visit = { pagina_intrare: "", sursa: "", pagina_anterioara: "" };
    try {
      const store = window.sessionStorage;
      visit = {
        pagina_intrare: store.getItem("ts_landing") || "",
        sursa: store.getItem("ts_referrer") || "",
        pagina_anterioara: store.getItem("ts_prev") || "",
      };
    } catch {
      // Fără sessionStorage, răspunsurile pleacă fără paginile vizitei.
    }
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "f2d92ef1-727d-47b9-bbe2-f30548f4c010",
          subject: `[Test automatizare] Scor ${score}/100: ${name.trim()}`,
          from_name: "Test de automatizare turbosnail.ro",
          formular: "Test automatizare",
          name: name.trim(),
          email: email.trim(),
          firma: company.trim() || "-",
          telefon: phone.trim() || "-",
          scor: `${score}/100 (${cat})`,
          acord_marketing: marketing ? "DA: poate primi emailuri de marketing" : "NU: doar contact legat de rezultat",
          raspunsuri: answerLines,
          ...visit,
        }),
      });
      if (!res.ok) throw new Error("submit failed");
      try {
        sessionStorage.setItem(RESULT_KEY, JSON.stringify({ score, cat, recs }));
      } catch {}
      router.push(`/test-automatizare/rezultat?s=${score}`);
    } catch {
      setSending(false);
      setError("Nu am putut trimite răspunsurile. Încearcă din nou sau scrie-ne la hello@turbosnail.ro.");
    }
  }

  if (step === "form") {
    return (
      <div className="mx quiz-wrap" id="test-start">
        <div className="gate">
          <span className="tag">Rezultatul tău e gata</span>
          <h2 className="hd gate-title">Mai e un pas până la rezultat</h2>
          <p className="muted">Completează datele de mai jos ca să vezi scorul și primele 3 automatizări recomandate pentru firma ta.</p>
          <div className="fields">
            <label className="lbl">Nume *<input className="field" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
            <label className="lbl">Email *<input className="field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" /></label>
            <label className="lbl">Numele firmei<input className="field" value={company} onChange={(e) => setCompany(e.target.value)} autoComplete="organization" /></label>
            <label className="lbl">Telefon (opțional)<input className="field" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" /></label>
            <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={botcheck} onChange={(e) => setBotcheck(e.target.value)} />
            <label className="check">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
              <span>Sunt de acord ca TurboSnail să folosească datele mele ca să îmi arate rezultatul și să mă contacteze în legătură cu el. *</span>
            </label>
            <label className="check">
              <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
              <span>Vreau să primesc pe email sfaturi despre automatizări AI. Mă pot dezabona oricând.</span>
            </label>
          </div>
          {error && <p className="err" role="alert">{error}</p>}
          <button className="btn-p" style={{ width: "100%", marginTop: 8 }} onClick={submit} disabled={sending}>
            {sending ? "Se trimite..." : "Vreau să văd rezultatul →"}
          </button>
          <p className="fine">Nu vindem datele tale. Poți cere oricând ștergerea lor la hello@turbosnail.ro. Detalii în <a href="/politica-de-confidentialitate" target="_blank" rel="noopener" style={{ color: "#888899", textDecoration: "underline" }}>politica de confidențialitate</a>.</p>
          <button className="link-btn" onClick={() => setStep("quiz")}>← Înapoi la întrebări</button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx quiz-wrap" id="test-start">
      <div className="progress" aria-label={`${answered} din ${QUESTIONS.length} întrebări`}>
        <div className="progress-bar" style={{ width: `${(answered / QUESTIONS.length) * 100}%` }} />
      </div>
      <p className="muted" style={{ marginBottom: 24 }}>{answered} din {QUESTIONS.length} întrebări</p>
      {QUESTIONS.map((q, i) => (
        <div key={q.id} className="q-card">
          <p className="q-text"><span className="q-num">{i + 1}.</span> {q.q}</p>
          <div className="opts" role="group" aria-label={q.label}>
            {q.options.map((o, oi) => (
              <button
                key={o.label}
                type="button"
                className={answers[q.id] === oi ? "opt sel" : "opt"}
                aria-pressed={answers[q.id] === oi}
                onClick={() => setAnswers((a) => ({ ...a, [q.id]: oi }))}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button className="btn-p" style={{ width: "100%", marginTop: 8 }} onClick={showForm} disabled={answered < QUESTIONS.length}>
        {answered < QUESTIONS.length ? `Mai ai ${QUESTIONS.length - answered} întrebări` : "Vezi rezultatul →"}
      </button>
    </div>
  );
}
