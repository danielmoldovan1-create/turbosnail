type BreadcrumbItem = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://turbosnail.ro${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "14px 20px 0",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap" as const,
          gap: 0,
        }}
      >
        {items.map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center" }}>
            {i > 0 && (
              <span style={{ color: "#333344", fontSize: 12, margin: "0 6px" }}>›</span>
            )}
            {item.href ? (
              <a
                href={item.href}
                style={{
                  fontSize: 12,
                  color: "#555566",
                  textDecoration: "none",
                  fontFamily: "'Instrument Sans', sans-serif",
                  transition: "color 0.15s",
                }}
              >
                {item.label}
              </a>
            ) : (
              <span
                style={{
                  fontSize: 12,
                  color: "#888899",
                  fontFamily: "'Instrument Sans', sans-serif",
                }}
              >
                {item.label}
              </span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
