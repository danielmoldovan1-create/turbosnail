type TOCItem = { id: string; text: string };

export default function BlogTOC({ items }: { items: TOCItem[] }) {
  return (
    <nav
      aria-label="Cuprins"
      style={{
        background: "rgba(255,106,0,0.04)",
        border: "1px solid rgba(255,106,0,0.12)",
        borderRadius: 12,
        padding: "20px 24px",
        marginBottom: 40,
      }}
    >
      <p
        style={{
          fontSize: 10,
          fontWeight: 700,
          color: "#ff6a00",
          letterSpacing: 2,
          textTransform: "uppercase" as const,
          fontFamily: "'Outfit', sans-serif",
          marginBottom: 12,
        }}
      >
        Cuprins
      </p>
      <ol style={{ margin: 0, padding: "0 0 0 18px" }}>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: 6 }}>
            <a
              href={`#${item.id}`}
              style={{
                fontSize: 14,
                color: "#888899",
                textDecoration: "none",
                lineHeight: 1.5,
                fontFamily: "'Instrument Sans', sans-serif",
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
