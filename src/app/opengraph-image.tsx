import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const dynamic = "force-static";
export const alt = `${SITE_NAME} — visual notes`;
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
          padding: "90px",
          background: "#f6f2e9",
          color: "#201d18",
        }}
      >
        {/* double rule, top */}
        <div
          style={{
            position: "absolute",
            top: 56,
            left: 90,
            right: 90,
            height: "6px",
            borderTop: "3px solid #201d18",
            borderBottom: "1.5px solid #201d18",
            display: "flex",
          }}
        />

        <div
          style={{
            fontSize: "26px",
            letterSpacing: "0.25em",
            color: "#bc3f22",
            marginBottom: "38px",
            display: "flex",
          }}
        >
          HARRY TRUONG · ENGINEER
        </div>

        <div
          style={{
            fontSize: "116px",
            fontWeight: 700,
            lineHeight: 1.04,
            letterSpacing: "-0.02em",
            color: "#bc3f22",
            fontStyle: "italic",
            display: "flex",
          }}
        >
          Visual notes.
        </div>

        <div
          style={{
            fontSize: "30px",
            color: "#5f594e",
            marginTop: "42px",
            display: "flex",
          }}
        >
          graphics · USD &amp; Omniverse · geospatial 3D · software design
        </div>

        {/* double rule, bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 90,
            right: 90,
            height: "6px",
            borderTop: "3px solid #201d18",
            borderBottom: "1.5px solid #201d18",
            display: "flex",
          }}
        />
      </div>
    ),
    size
  );
}
