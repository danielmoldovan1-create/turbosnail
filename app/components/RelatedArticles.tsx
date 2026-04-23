type Article = { slug: string; title: string; tag: string; readTime: string };

export default function RelatedArticles({ articles }: { articles: Article[] }) {
  return (
    <section style={{ marginTop: 64, marginBottom: 8 }}>
      <p
        style={{
          fontSize: 10,
          fontWeight: 700,
          color: "#ff6a00",
          letterSpacing: 2,
          textTransform: "uppercase" as const,
          fontFamily: "'Outfit', sans-serif",
          marginBottom: 20,
        }}
      >
        Articole conexe
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          gap: 14,
        }}
      >
        {articles.map((a) => (
          <a
            key={a.slug}
            href={`/blog/${a.slug}`}
            style={{
              display: "block",
              background: "#0f1119",
              border: "1px solid #1a1d2a",
              borderRadius: 12,
              padding: "18px 20px",
              textDecoration: "none",
            }}
          >
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#ff6a00",
                letterSpacing: 1.5,
                textTransform: "uppercase" as const,
                fontFamily: "'Outfit', sans-serif",
                marginBottom: 8,
              }}
            >
              {a.tag}
            </p>
            <h4
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#eae8e3",
                fontFamily: "'Outfit', sans-serif",
                lineHeight: 1.4,
                marginBottom: 12,
              }}
            >
              {a.title}
            </h4>
            <span
              style={{
                fontSize: 12,
                color: "#555566",
                fontFamily: "'Instrument Sans', sans-serif",
              }}
            >
              {a.readTime} citit →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
