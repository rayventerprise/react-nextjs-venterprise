import { ImageResponse } from "next/og";

export const alt = "Raymond Vandenberg — Full-stack & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #e23636 0%, #ba2020 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            opacity: 0.85,
          }}
        >
          FULL-STACK · AI ENGINEER · EX-AMAZON
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 800, lineHeight: 1 }}>
            Raymond Vandenberg
          </div>
          <div style={{ display: "flex", fontSize: 34, opacity: 0.9, marginTop: 24 }}>
            Building scalable, AI-powered web and mobile products.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, opacity: 0.85 }}>
          <div style={{ display: "flex", width: 14, height: 14, borderRadius: 9999, background: "white" }} />
          venterprise.io
        </div>
      </div>
    ),
    { ...size }
  );
}
