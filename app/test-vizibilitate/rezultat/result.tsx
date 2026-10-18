"use client";
import { useEffect, useState } from "react";
import { RESULT_KEY, category } from "../quiz";

type Result = { score: number; cat: string; recs: string[] };

const SUMMARY: Record<string, string> = {
  "Bine poziționat": "Ai fundația pusă. Următorul pas este să crești constant: conținut util, recenzii noi și prezență în răspunsurile AI.",
  "Vizibil parțial": "Probabil te găsesc mai ales cei care te caută deja după nume. Pentru clienții noi, care caută serviciul, mai sunt goluri importante.",
  "Greu de găsit": "Pentru clienții care nu te cunosc încă, firma este greu de găsit online. Vestea bună: primii pași sunt simpli.",
};

export default function VisibilityResult() {
  const [result, setResult] = useState<Result | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let r: Result | null = null;
    try {
      const raw = sessionStorage.getItem(RESULT_KEY);
      if (raw) r = JSON.parse(raw);
    } catch {}
    if (!r) {
      const s = Number(new URLSearchParams(window.location.search).get("s"));
      if (Number.isFinite(s) && s >= 0 && s <= 100) r = { score: s, cat: category(s), recs: [] };
    }
    setResult(r);
    setReady(true);
  }, []);

  if (!ready) return <div className="mx" style={{ minHeight: 300 }} />;

  if (!result) {
    return (
      <div className="mx box">
        <h1 className="hd title">Nu am găsit niciun rezultat</h1>
        <p className="muted">Rezultatul apare după ce completezi testul de vizibilitate.</p>
        <a href="/test-vizibilitate" className="btn-p" style={{ marginTop: 20 }}>Fă testul →</a>
      </div>
    );
  }

  return (
    <div className="mx box">
      <span className="tag">Rezultatul testului de vizibilitate</span>
      <div className="score">
        <span className="hd score-num">{result.score}</span>
        <span className="score-max">/100</span>
      </div>
      <div className="bar"><div className="bar-fill" style={{ width: `${result.score}%` }} /></div>
      <h1 className="hd title">{result.cat}</h1>
      <p className="lead">{SUMMARY[result.cat]}</p>

      {result.recs.length > 0 && (
        <>
          <h2 className="hd sub">Ce să faci mai întâi</h2>
          <ol className="recs">
            {result.recs.slice(0, 5).map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ol>
        </>
      )}

      <p className="fine">Scorul este o autoevaluare orientativă, calculată din răspunsurile tale. Nu înlocuiește un audit tehnic al site-ului și al profilului Google.</p>

      <div className="cta">
        <h2 className="hd sub" style={{ marginTop: 0 }}>Vrei să discutăm rezultatul?</h2>
        <p className="muted">Completează formularul de contact și ne uităm împreună la ce merită făcut primul pentru firma ta.</p>
        <a href="/#contact" className="btn-p" style={{ marginTop: 18 }}>Vreau să discutăm →</a>
      </div>
      <a href="/test-vizibilitate" className="again">Refă testul</a>
    </div>
  );
}
