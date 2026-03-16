import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Arkiology — Digital Infrastructure Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontSize: 64,
            fontWeight: 700,
            color: "#fafafa",
            letterSpacing: "-0.02em",
          }}
        >
          <span>ARK</span>
          <span style={{ color: "#3b82f6" }}>▲</span>
          <span>OLOGY</span>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            color: "#999999",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Digital Infrastructure Agency
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 32,
            fontSize: 16,
            color: "#555555",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          <span>Websites</span>
          <span>·</span>
          <span>Automations</span>
          <span>·</span>
          <span>AI Employees</span>
          <span>·</span>
          <span>Digital Presence</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
