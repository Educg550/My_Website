import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const alt = "Eduardo Guedes — doge-dev";

export default async function OG() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#272822",
        color: "#F8F8F2",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 64,
        fontFamily: "serif",
      }}
    >
      <div style={{ fontSize: 24, color: "#75715E", fontFamily: "monospace" }}>$ whoami</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ fontSize: 96, fontStyle: "italic", lineHeight: 1 }}>
          Eduardo Guedes<span style={{ color: "#A6E22E" }}>.</span>
        </div>
        <div style={{ fontSize: 28, color: "#75715E", fontFamily: "monospace" }}>
          open-source · vs code extensions · contributions
        </div>
      </div>
      <div style={{ fontSize: 22, color: "#66D9EF", fontFamily: "monospace" }}>
        doge-dev.vercel.app
      </div>
    </div>,
    { ...size },
  );
}
