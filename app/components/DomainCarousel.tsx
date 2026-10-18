import { DOMAINS } from "../domenii/data";

// Server component: the homepage gets the rendered cards, not the data file.
// Phones: horizontal scroll-snap row with the next card peeking in.
// From 1024px: all cards on one row. `grid` is the /domenii layout.
const CSS = `
  .dom-list { list-style: none; margin: 0 -20px; padding: 6px 20px 18px; display: flex; gap: 12px; overflow-x: auto; scroll-snap-type: x mandatory; scroll-padding: 0 20px; scrollbar-width: thin; scrollbar-color: #252535 transparent; }
  .dom-item { flex: 0 0 78%; scroll-snap-align: start; display: flex; }
  .dom-grid { list-style: none; display: grid; grid-template-columns: 1fr; gap: 16px; }
  .dom-grid .dom-item { display: flex; }
  .dom-card { display: flex; flex-direction: column; width: 100%; padding: 22px 20px 20px; border-radius: 16px; background: linear-gradient(160deg, #0f1119 0%, #0c0e15 100%); border: 1px solid #1a1d2a; color: #eae8e3; text-decoration: none; transition: border-color 0.25s, transform 0.25s; }
  .dom-card:hover { border-color: rgba(255,106,0,0.35); transform: translateY(-3px); }
  .dom-card:focus-visible { outline: 2px solid #ff6a00; outline-offset: 2px; }
  .dom-name { font-family: 'Outfit', sans-serif; font-size: 17px; font-weight: 800; letter-spacing: -0.3px; line-height: 1.25; margin-bottom: 8px; }
  .dom-promise { font-size: 14px; line-height: 1.5; color: #a8a6a1; margin-bottom: 18px; }
  .dom-val { font-family: 'Outfit', sans-serif; font-size: 26px; font-weight: 900; line-height: 1.1; background: linear-gradient(135deg, #ff8c33, #ff6a00, #ff5500); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .dom-lbl { font-size: 13px; line-height: 1.45; color: #a8a6a1; margin-top: 4px; }
  .dom-src { font-size: 11px; color: #777788; margin-top: 6px; }
  .dom-more { margin-top: auto; padding-top: 18px; font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 700; color: #ff6a00; }
  .dom-all { justify-content: center; border-color: rgba(255,106,0,0.3); background: linear-gradient(160deg, rgba(255,106,0,0.10), rgba(255,106,0,0.03)); }
  @media (min-width: 640px) {
    .dom-item { flex-basis: 44%; }
    .dom-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (min-width: 1024px) {
    .dom-list { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); overflow: visible; margin: 0; padding: 6px 0 0; }
    .dom-list .dom-card { padding: 20px 16px 18px; }
    .dom-list .dom-name { font-size: 16px; }
    .dom-list .dom-val { font-size: 22px; }
    .dom-grid { grid-template-columns: 1fr 1fr 1fr; }
  }
`;

export default function DomainCarousel({ grid = false }: { grid?: boolean }) {
  return (
    <>
      <style>{CSS}</style>
      <ul className={grid ? "dom-grid" : "dom-list"}>
        {DOMAINS.map((d) => {
          const stat = d.stats[0];
          return (
            <li key={d.slug} className="dom-item">
              <a href={`/domenii/${d.slug}`} className="dom-card">
                <span className="dom-name">{d.name}</span>
                <span className="dom-promise">{d.promise}</span>
                <span className="dom-val">{stat.value}</span>
                <span className="dom-lbl">{stat.card}</span>
                <span className="dom-src">Sursa: {stat.source}</span>
                <span className="dom-more">Vezi cum →</span>
              </a>
            </li>
          );
        })}
        {!grid && (
          <li className="dom-item">
            <a href="/domenii" className="dom-card dom-all">
              <span className="dom-name">Toate domeniile →</span>
              <span className="dom-promise" style={{ marginBottom: 0 }}>Ce automatizăm concret în fiecare domeniu, cu cifre și surse.</span>
            </a>
          </li>
        )}
      </ul>
    </>
  );
}
