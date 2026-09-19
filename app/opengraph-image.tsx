import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — Cinematography, Lagos`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dark background, wordmark centered, tagline below.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#14120F",
          gap: 24,
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 500, color: "#F0EBE1" }}>
          {site.wordmark}
        </div>
        <div style={{ fontSize: 28, color: "#7A756B" }}>
          Cinematography, Lagos
        </div>
      </div>
    ),
    size
  );
}
