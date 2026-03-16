import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "40px solid transparent",
            borderRight: "40px solid transparent",
            borderBottom: "70px solid #3b82f6",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
