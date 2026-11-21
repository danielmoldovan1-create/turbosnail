"use client";
import { useSyncExternalStore } from "react";
import { RESULT_KEY, category, type Rec } from "../quiz";
import Link from "next/link";

type Result = { score: number; cat: string; recs: Rec[] };

const SUMMARY: Record<string, string> = {
  "Potențial mare de automatizare": "O parte mare din săptămână se duce pe muncă pe care o poate face un program: copiat, căutat și verificat de mână. Aici se câștigă cel mai repede timp.",
  "Potențial mediu de automatizare": "Unele procese merg deja bine, dar câteva consumă timp în fiecare săptămână. Merită automatizate întâi cele de mai jos, pe rând.",
  "Potențial mic de automatizare": "Procesele firmei sunt deja în mare parte în ordine. Automatizarea mai poate ajuta punctual, acolo unde o greșeală costă mult.",
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

export default function AutomationResult() {
  // Pe server și la hidratare datele din browser lipsesc (null); imediat după, React citește valorile reale
  const raw = useSyncExternalStore(subscribe, storedResult, () => null);
  const search = useSyncExternalStore(subscribe, () => window.location.search, () => null);

  if (raw === null || search === null) return <div className="mx" style={{ minHeight: 300 }} />;
  const result = toResult(raw, search);

  if (!result) {
    return (
      <div className="mx box">
        <h1 className="hd title">Nu am găsit niciun rezultat</h1>
        <p className="muted">Rezultatul apare după ce completezi testul de automatizare.</p>
        <a href="/test-automatizare" className="btn-p" style={{ marginTop: 20 }}>Fă testul →</a>
      </div>
    );
  }

  return (
    <div className="mx box">
      <span className="tag">Rezultatul testului de automatizare</span>
      <div className="score">
        <span className="hd score-num">{result.score}</span>
        <span className="score-max">/100</span>
      </div>
      <div className="bar"><div className="bar-fill" style={{ width: `${result.score}%` }} /></div>
      <h1 className="hd title">{result.cat}</h1>
      <p className="lead">{SUMMARY[result.cat]}</p>

      {result.recs.length > 0 && (
        <>
          <h2 className="hd sub">Primele automatizări pentru firma ta</h2>
          <ol className="recs">
            {result.recs.slice(0, 3).map((r, i) => (
              <li key={i}>
                {r.text} <Link href={r.href} style={{ color: "#ff6a00", textDecoration: "none", borderBottom: "1px solid rgba(255,106,0,0.3)" }}>{r.anchor} →</Link>
              </li>
            ))}
          </ol>
        </>
      )}

      <p className="fine">Scorul este o autoevaluare orientativă, calculată din răspunsurile tale. Cu cât e mai mare, cu atât firma face mai multă muncă repetitivă de mână. Nu înlocuiește un audit al proceselor.</p>

      <div className="cta">
        <h2 className="hd sub" style={{ marginTop: 0 }}>Înscrie-te pe lista de așteptare pentru auditul inițial de 30 de minute</h2>
        <p className="muted">Preluăm un număr limitat de firme în fiecare lună. La audit pornim de la răspunsurile tale și stabilim ce merită automatizat primul.</p>
        <Link href="/programare" className="btn-p" style={{ marginTop: 18 }}>Înscrie-te pe lista de așteptare →</Link>
      </div>
      <a href="/test-automatizare" className="again">Refă testul</a>
    </div>
  );
}
