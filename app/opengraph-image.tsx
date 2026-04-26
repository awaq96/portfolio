import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Asher Waqar — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d0f1e",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
        }}
      >
        {/* Top: name + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <p
            style={{
              color: "rgba(254,249,231,0.35)",
              fontSize: "18px",
              letterSpacing: "5px",
              textTransform: "uppercase",
              margin: 0,
              fontFamily: "sans-serif",
            }}
          >
            waqlabs.ai
          </p>
          <h1
            style={{
              color: "#fef9e7",
              fontSize: "88px",
              fontWeight: 700,
              margin: 0,
              lineHeight: 1.05,
              fontFamily: "sans-serif",
              letterSpacing: "-2px",
            }}
          >
            Asher Waqar
          </h1>
          <p
            style={{
              color: "rgba(254,249,231,0.55)",
              fontSize: "28px",
              margin: 0,
              fontFamily: "sans-serif",
            }}
          >
            Software Engineer · Distributed Systems · Applied AI
          </p>
        </div>

        {/* Bottom: subtle detail */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "rgba(254,249,231,0.25)",
            }}
          />
          <p
            style={{
              color: "rgba(254,249,231,0.25)",
              fontSize: "16px",
              margin: 0,
              fontFamily: "sans-serif",
              letterSpacing: "1px",
            }}
          >
            AT&T · Georgia Tech
          </p>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
