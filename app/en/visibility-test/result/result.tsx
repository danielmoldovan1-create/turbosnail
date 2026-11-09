"use client";
import { useSyncExternalStore } from "react";
import Link from "next/link";
import { RESULT_KEY, category } from "../quiz";

type Result = { score: number; cat: string; recs: string[] };

const SUMMARY: Record<string, string> = {
  "Well positioned": "The foundations are in place. The next step is steady growth: useful content, new reviews and presence in AI answers.",
  "Partly visible": "You are probably found mostly by people who already search for your name. For new customers looking for your service, there are still important gaps.",
  "Hard to find": "For customers who do not know you yet, your business is hard to find online. The good news: the first steps are simple.",
};

// Rezultatul nu se schimbă cât timp pagina e deschisă, deci abonamentul nu are ce asculta
const subscribe = () => () => {};

function storedResult() {
  try {
    return sessionStorage.getItem(RESULT_KEY) ?? "";
  } catch {
    return "";
  }
}

function toResult(raw: string, search: string): Result | null {
  let r: Result | null = null;
  try {
    if (raw) r = JSON.parse(raw);
  } catch {}
  if (!r) {
    const s = new URLSearchParams(search).get("s");
    if (s && /^\d{1,3}$/.test(s) && Number(s) <= 100) r = { score: Number(s), cat: category(Number(s)), recs: [] };
  }
  return r;
}

export default function VisibilityResultEn() {
  // Pe server și la hidratare datele din browser lipsesc (null); imediat după, React citește valorile reale
  const raw = useSyncExternalStore(subscribe, storedResult, () => null);
  const search = useSyncExternalStore(subscribe, () => window.location.search, () => null);

  if (raw === null || search === null) return <div className="mx" style={{ minHeight: 300 }} />;
  const result = toResult(raw, search);

  if (!result) {
    return (
      <div className="mx box">
        <h1 className="hd title">No result found</h1>
        <p className="muted">Your result appears after you complete the visibility test.</p>
        <a href="/en/visibility-test" className="btn-p" style={{ marginTop: 20 }}>Take the test →</a>
      </div>
    );
  }

  return (
    <div className="mx box">
      <span className="tag">Your visibility test result</span>
      <div className="score">
        <span className="hd score-num">{result.score}</span>
        <span className="score-max">/100</span>
      </div>
      <div className="bar"><div className="bar-fill" style={{ width: `${result.score}%` }} /></div>
      <h1 className="hd title">{result.cat}</h1>
      <p className="lead">{SUMMARY[result.cat]}</p>

      {result.recs.length > 0 && (
        <>
          <h2 className="hd sub">What to do first</h2>
          <ol className="recs">
            {result.recs.slice(0, 5).map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ol>
        </>
      )}

      <p className="fine">The score is an indicative self-assessment calculated from your answers. It does not replace a technical audit of your website and Google profile.</p>

      <div className="cta">
        <h2 className="hd sub" style={{ marginTop: 0 }}>Want to start from your score?</h2>
        <p className="muted">Tell us about your business and we will look together at what is worth doing first.</p>
        <Link href="/en#contact" className="btn-p" style={{ marginTop: 18 }}>Contact us →</Link>
      </div>
      <a href="/en/visibility-test" className="again">Take the test again</a>
    </div>
  );
}
