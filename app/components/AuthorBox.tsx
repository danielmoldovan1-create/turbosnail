export const AUTHOR_BIO =
  "Daniel Moldovan este specialist în automatizări AI și fondatorul TurboSnail, din Timișoara. A lucrat în e-commerce și SaaS, pe SEO, strategie de marketing și creșterea ratei de conversie, și are o certificare Anthropic, compania care dezvoltă Claude.";

// Autorul din schema Article a fiecărui articol.
export const AUTHOR_LD = {
  "@type": "Person",
  name: "Daniel Moldovan",
  jobTitle: "Fondator TurboSnail",
  description: AUTHOR_BIO,
  worksFor: {
    "@type": "Organization",
    "@id": "https://turbosnail.ro/#organization",
    name: "TurboSnail",
    url: "https://turbosnail.ro",
    sameAs: ["https://www.linkedin.com/company/turbo-snail/"],
  },
};

export default function AuthorBox() {
  return (
    <aside
      style={{
        marginTop: 56,
        display: "flex",
        gap: 18,
        alignItems: "flex-start",
        background: "#0f1119",
        border: "1px solid #1a1d2a",
        borderRadius: 16,
        padding: "22px 24px",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          flexShrink: 0,
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #ff8c33, #ff6a00)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 800,
          fontSize: 18,
        }}
      >
        DM
      </div>
      <div>
        <p
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: "#ff6a00",
            letterSpacing: 2,
            textTransform: "uppercase" as const,
            fontFamily: "'Outfit', sans-serif",
            margin: "0 0 6px",
          }}
        >
          Autor
        </p>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 17,
            fontWeight: 700,
            lineHeight: 1.3,
            color: "#eae8e3",
            margin: "0 0 8px",
          }}
        >
          Daniel Moldovan
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: "#a8a6a1", margin: 0 }}>{AUTHOR_BIO}</p>
      </div>
    </aside>
  );
}
