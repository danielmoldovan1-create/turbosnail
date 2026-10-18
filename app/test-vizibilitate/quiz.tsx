"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Answer = "da" | "partial" | "nu" | "nustiu";

const QUESTIONS: { id: string; label: string; q: string; rec: string }[] = [
  {
    id: "gbp",
    label: "Google Business Profile",
    q: "Firma ta are un profil Google Business Profile complet: program, servicii, fotografii și categoria corectă?",
    rec: "Completează profilul Google Business Profile. Este primul lucru pe care îl vede un client care caută firma pe hartă sau în zona lui.",
  },
  {
    id: "brand",
    label: "Apare la căutarea numelui",
    q: "Când cauți în Google numele firmei, site-ul tău apare primul?",
    rec: "Verifică în Google Search Console dacă site-ul este indexat corect. Dacă nu apari nici la căutarea numelui, clienții noi nu te vor găsi nici la căutările generale.",
  },
  {
    id: "gsc",
    label: "Google Search Console",
    q: "Ai Google Search Console configurat pentru site și te uiți măcar o dată pe lună în el?",
    rec: "Configurează Google Search Console. Îți arată ce caută oamenii atunci când văd site-ul tău în Google și ce pagini au probleme.",
  },
  {
    id: "pages",
    label: "Pagini pentru fiecare serviciu",
    q: "Site-ul are câte o pagină dedicată pentru fiecare serviciu important?",
    rec: "Fă câte o pagină clară pentru fiecare serviciu. O singură pagină cu toate serviciile este greu de înțeles atât pentru Google, cât și pentru asistenții AI.",
  },
  {
    id: "content",
    label: "Conținut publicat regulat",
    q: "Publici cel puțin o dată pe lună conținut util pentru clienți: articole, ghiduri, răspunsuri la întrebări frecvente?",
    rec: "Publică regulat conținut care răspunde la întrebările reale ale clienților. Le dă oamenilor și motoarelor de căutare un motiv să revină.",
  },
  {
    id: "ai",
    label: "Prezență în răspunsurile AI",
    q: "Când întrebi ChatGPT, Gemini sau Copilot despre serviciul tău în orașul tău, firma ta apare în răspuns?",
    rec: "Asistenții AI recomandă mai ușor firmele despre care găsesc informații clare și consistente în mai multe locuri: site, profil Google, directoare, articole.",
  },
  {
    id: "nap",
    label: "Date de contact identice peste tot",
    q: "Numele, adresa și telefonul firmei sunt identice pe site, pe Google și în directoarele online?",
    rec: "Uniformizează numele, adresa și telefonul peste tot. Variantele diferite îi încurcă pe clienți și fac firma mai greu de identificat pentru motoarele de căutare.",
  },
  {
    id: "reviews",
    label: "Recenzii Google recente",
    q: "Ai primit recenzii de la clienți pe Google în ultimele 3 luni?",
    rec: "Cere recenzii clienților mulțumiți, imediat după ce ai livrat. Recenziile recente contează când un client te compară cu alte firme.",
  },
  {
    id: "mobile",
    label: "Site rapid pe telefon",
    q: "Site-ul se încarcă repede și se citește ușor pe telefon?",
    rec: "Testează site-ul în PageSpeed Insights și rezolvă întâi problemele de pe mobil.",
  },
  {
    id: "links",
    label: "Linkuri din alte site-uri",
    q: "Alte site-uri relevante (asociații, parteneri, presă locală) au linkuri către site-ul tău?",
    rec: "Construiește câteva linkuri reale din surse relevante: asociații profesionale, parteneri, presă locală. Câteva linkuri bune valorează mai mult decât multe linkuri slabe.",
  },
];

const OPTIONS: { value: Answer; label: string; points: number }[] = [
  { value: "da", label: "Da", points: 10 },
  { value: "partial", label: "Parțial", points: 5 },
  { value: "nu", label: "Nu", points: 0 },
  { value: "nustiu", label: "Nu știu", points: 0 },
];

export const RESULT_KEY = "ts-test-vizibilitate";

export function category(score: number) {
  if (score >= 70) return "Bine poziționat";
  if (score >= 40) return "Vizibil parțial";
  return "Greu de găsit";
}

export default function VisibilityQuiz() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
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

  const answered = QUESTIONS.filter((q) => answers[q.id]).length;
  const score = QUESTIONS.reduce((sum, q) => sum + (OPTIONS.find((o) => o.value === answers[q.id])?.points ?? 0), 0);

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
    const recs = QUESTIONS.filter((q) => answers[q.id] !== "da").map((q) => q.rec);
    const answerLines = QUESTIONS.map((q, i) => `${i + 1}. ${q.label}: ${OPTIONS.find((o) => o.value === answers[q.id])?.label}`).join("\n");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "f2d92ef1-727d-47b9-bbe2-f30548f4c010",
          subject: `[Test vizibilitate] Scor ${score}/100: ${name.trim()}`,
          from_name: "Test de vizibilitate turbosnail.ro",
          formular: "Test de vizibilitate",
          name: name.trim(),
          email: email.trim(),
          firma_sau_site: company.trim() || "-",
          telefon: phone.trim() || "-",
          scor: `${score}/100 (${cat})`,
          acord_marketing: marketing ? "DA: poate primi emailuri de marketing" : "NU: doar contact legat de rezultat",
          raspunsuri: answerLines,
        }),
      });
      if (!res.ok) throw new Error("submit failed");
      try {
        sessionStorage.setItem(RESULT_KEY, JSON.stringify({ score, cat, recs }));
      } catch {}
      router.push(`/test-vizibilitate/rezultat?s=${score}`);
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
          <p className="muted">Completează datele de mai jos ca să vezi scorul și recomandările pentru firma ta.</p>
          <div className="fields">
            <label className="lbl">Nume *<input className="field" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
            <label className="lbl">Email *<input className="field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" /></label>
            <label className="lbl">Site-ul sau numele firmei<input className="field" value={company} onChange={(e) => setCompany(e.target.value)} autoComplete="organization" /></label>
            <label className="lbl">Telefon (opțional)<input className="field" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" /></label>
            <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={botcheck} onChange={(e) => setBotcheck(e.target.value)} />
            <label className="check">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
              <span>Sunt de acord ca TurboSnail să folosească datele mele ca să îmi arate rezultatul și să mă contacteze în legătură cu el. *</span>
            </label>
            <label className="check">
              <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
              <span>Vreau să primesc pe email sfaturi despre vizibilitate online și automatizări AI. Mă pot dezabona oricând.</span>
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
            {OPTIONS.map((o) => (
              <button
                key={o.value}
                type="button"
                className={answers[q.id] === o.value ? "opt sel" : "opt"}
                aria-pressed={answers[q.id] === o.value}
                onClick={() => setAnswers((a) => ({ ...a, [q.id]: o.value }))}
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
