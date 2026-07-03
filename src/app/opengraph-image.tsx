import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = `${SITE_NAME} — learning artifacts & visual notes`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0c0c0e",
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              width: "22px",
              height: "22px",
              background: "#38bdf8",
              boxShadow: "6px 6px 0 rgba(56,189,248,0.35)",
            }}
          />
          <div
            style={{
              fontSize: "30px",
              color: "#34d399",
              letterSpacing: "0.2em",
            }}
          >
            LEARNING ARTIFACTS
          </div>
        </div>
        <div
          style={{
            fontSize: "96px",
            fontWeight: 700,
            color: "#e0e0e0",
            display: "flex",
          }}
        >
          <span style={{ color: "#38bdf8", marginRight: "24px" }}>&gt;</span>
          {SITE_NAME}
        </div>
        <div
          style={{
            fontSize: "34px",
            color: "#8b8b95",
            marginTop: "28px",
          }}
        >
          visual notes on graphics, USD, geospatial 3D & software design
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "14px",
            background:
              "linear-gradient(90deg, #38bdf8 0%, #a78bfa 50%, #34d399 100%)",
            display: "flex",
          }}
        />
      </div>
    ),
    size
  );
}
