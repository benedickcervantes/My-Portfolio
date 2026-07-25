import { ImageResponse } from "next/og";

export const alt = "Benedick Cervantes - Full Stack Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "linear-gradient(135deg, #0a1214 0%, #123038 48%, #1a4a52 100%)",
          color: "#f5fafb",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#4CC8A3",
          }}
        >
          Portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Benedick Cervantes
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#c5d9dc",
              maxWidth: 820,
              lineHeight: 1.3,
            }}
          >
            Full Stack Developer · UI/UX Designer · IT Consultant
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#8fb4b8",
          }}
        >
          <span>Modern web apps & digital solutions</span>
          <span
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#2C98A0",
              color: "#0a1214",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 28,
            }}
          >
            B
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
