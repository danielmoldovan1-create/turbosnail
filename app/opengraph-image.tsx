import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0c14",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,106,0,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(255,106,0,0.1)",
            border: "1px solid rgba(255,106,0,0.3)",
            borderRadius: 100,
            padding: "8px 20px",
            marginBottom: 32,
          }}
        >
          <span style={{ color: "#ff6a00", fontSize: 14, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>
            Timișoara, România
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 64,
            fontWeight: 900,
            color: "#eae8e3",
            lineHeight: 1.1,
            marginBottom: 24,
            maxWidth: 900,
          }}
        >
          <span>Automatizări AI pentru&nbsp;</span>
          <span style={{ color: "#ff6a00" }}>afaceri din România</span>
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: 24, color: "#888899", maxWidth: 700, lineHeight: 1.5 }}>
          Recuperezi ore în fiecare săptămână prin automatizarea proceselor repetitive.
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div style={{ width: 40, height: 4, background: "#ff6a00", borderRadius: 2 }} />
          <span style={{ color: "#555566", fontSize: 20, fontWeight: 600 }}>turbosnail.ro</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
