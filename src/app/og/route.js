import { ImageResponse } from "next/og";
import * as siteMetadata from "../../config/siteMetadata";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#282a36",
          color: "#f8f8f2",
          fontSize: 48,
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: 72, margin: 0 }}>{siteMetadata.siteTitle}</h1>
        <p style={{ fontSize: 36, marginTop: "20px" }}>
          {siteMetadata.siteDescription}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
