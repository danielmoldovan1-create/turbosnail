"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Answer = "yes" | "partly" | "no" | "unsure";

const QUESTIONS: { id: string; label: string; q: string; rec: string }[] = [
  {
    id: "gbp",
    label: "Google Business Profile",
    q: "Does your business have a complete Google Business Profile: opening hours, services, photos and the right category?",
    rec: "Complete your Google Business Profile. It is the first thing a customer sees when they look for your business on the map or in their area.",
  },
  {
    id: "brand",
    label: "Shows up for its own name",
    q: "When you search Google for your business name, does your website come up first?",
    rec: "Check in Google Search Console that your site is indexed correctly. If you do not show up even for your own name, new customers will not find you for general searches either.",
  },
  {
    id: "gsc",
    label: "Google Search Console",
    q: "Is Google Search Console set up for your website, and do you look at it at least once a month?",
    rec: "Set up Google Search Console. It shows what people search for when they see your site in Google and which pages have problems.",
  },
  {
    id: "pages",
    label: "A page for each service",
    q: "Does your website have a dedicated page for each important service?",
    rec: "Create a clear page for each service. A single page that lists everything is hard to understand for Google and for AI assistants alike.",
  },
  {
    id: "content",
    label: "Useful content, regularly",
    q: "Do you publish useful content for customers at least once a month: articles, guides, answers to common questions?",
    rec: "Publish content regularly that answers your customers' real questions. It gives people and search engines a reason to come back.",
  },
  {
    id: "ai",
    label: "Presence in AI answers",
    q: "When you ask ChatGPT, Gemini or Copilot about your service in your town, does your business appear in the answer?",
    rec: "AI assistants recommend businesses more readily when they find clear, consistent information about them in several places: website, Google profile, directories, articles.",
  },
  {
    id: "nap",
    label: "Identical contact details everywhere",
    q: "Are your business name, address and phone number identical on your website, on Google and in online directories?",
    rec: "Make your name, address and phone number identical everywhere. Different versions confuse customers and make the business harder for search engines to identify.",
  },
  {
    id: "reviews",
    label: "Recent Google reviews",
    q: "Have you received customer reviews on Google in the last 3 months?",
    rec: "Ask satisfied customers for a review right after you deliver. Recent reviews matter when a customer compares you with other businesses.",
  },
  {
    id: "mobile",
    label: "Fast on mobile",
    q: "Does your website load quickly and read easily on a phone?",
    rec: "Test your website in PageSpeed Insights and fix the mobile issues first.",
  },
  {
    id: "links",
    label: "Links from other websites",
    q: "Do other relevant websites (trade associations, partners, local press) link to your site?",
    rec: "Earn a few real links from relevant sources: trade associations, partners, local press. A few good links are worth more than many weak ones.",
  },
];

const OPTIONS: { value: Answer; label: string; points: number }[] = [
  { value: "yes", label: "Yes", points: 10 },
  { value: "partly", label: "Partly", points: 5 },
  { value: "no", label: "No", points: 0 },
  { value: "unsure", label: "Not sure", points: 0 },
];

export const RESULT_KEY = "ts-visibility-test-en";

export function category(score: number) {
  if (score >= 70) return "Well positioned";
  if (score >= 40) return "Partly visible";
  return "Hard to find";
}

export default function VisibilityQuizEn() {
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
      setError("Please enter your name and a valid email address.");
      return;
    }
    if (!consent) {
      setError("Please tick the consent box to see your result.");
      return;
    }
    if (botcheck) return;
    setSending(true);
    const cat = category(score);
    const recs = QUESTIONS.filter((q) => answers[q.id] !== "yes").map((q) => q.rec);
    const answerLines = QUESTIONS.map((q, i) => `${i + 1}. ${q.label}: ${OPTIONS.find((o) => o.value === answers[q.id])?.label}`).join("\n");
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
          subject: `[EN visibility test] Score ${score}/100: ${name.trim()}`,
          from_name: "Visibility test turbosnail.ro (English)",
          formular: "Visibility test (EN)",
          name: name.trim(),
          email: email.trim(),
          website_or_company: company.trim() || "-",
          phone: phone.trim() || "-",
          score: `${score}/100 (${cat})`,
          marketing_consent: marketing ? "YES: may receive marketing emails" : "NO: contact about the result only",
          answers: answerLines,
          ...visit,
        }),
      });
      if (!res.ok) throw new Error("submit failed");
      try {
        sessionStorage.setItem(RESULT_KEY, JSON.stringify({ score, cat, recs }));
      } catch {}
      router.push(`/en/visibility-test/result?s=${score}`);
    } catch {
      setSending(false);
      setError("We could not send your answers. Please try again or email us at hello@turbosnail.ro.");
    }
  }

  if (step === "form") {
    return (
      <div className="mx quiz-wrap" id="test-start">
        <div className="gate">
          <span className="tag">Your result is ready</span>
          <h2 className="hd gate-title">One more step to your result</h2>
          <p className="muted">Fill in the details below to see your score and the recommendations for your business.</p>
          <div className="fields">
            <label className="lbl">Name *<input className="field" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
            <label className="lbl">Email *<input className="field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" /></label>
            <label className="lbl">Website or business name<input className="field" value={company} onChange={(e) => setCompany(e.target.value)} autoComplete="organization" /></label>
            <label className="lbl">Phone (optional)<input className="field" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" /></label>
            <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={botcheck} onChange={(e) => setBotcheck(e.target.value)} />
            <label className="check">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
              <span>I agree that TurboSnail may use my details to show me the result and to contact me about it. *</span>
            </label>
            <label className="check">
              <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
              <span>I would like to receive tips by email on online visibility and AI automation. I can unsubscribe at any time.</span>
            </label>
          </div>
          {error && <p className="err" role="alert">{error}</p>}
          <button className="btn-p" style={{ width: "100%", marginTop: 8 }} onClick={submit} disabled={sending}>
            {sending ? "Sending..." : "Show my result →"}
          </button>
          <p className="fine">We do not sell your data. You can ask us to delete it at any time at hello@turbosnail.ro. Details in our <a href="/en/legal" target="_blank" rel="noopener" style={{ color: "#888899", textDecoration: "underline" }}>legal notice and privacy</a>.</p>
          <button className="link-btn" onClick={() => setStep("quiz")}>← Back to the questions</button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx quiz-wrap" id="test-start">
      <div className="progress" aria-label={`${answered} of ${QUESTIONS.length} questions`}>
        <div className="progress-bar" style={{ width: `${(answered / QUESTIONS.length) * 100}%` }} />
      </div>
      <p className="muted" style={{ marginBottom: 24 }}>{answered} of {QUESTIONS.length} questions</p>
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
        {answered < QUESTIONS.length ? `${QUESTIONS.length - answered} questions left` : "See your result →"}
      </button>
    </div>
  );
}
