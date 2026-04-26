import { ImageResponse } from "next/og";
import { gtProjects } from "@/content/projects/gt";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return gtProjects.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = gtProjects.find((p) => p.slug === slug);

  const title = project?.title ?? "Research — Asher Waqar";
  const meta = [project?.institution, project?.course, project?.period]
    .filter(Boolean)
    .join(" · ");

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
          waqlabs.ai · Research
        </p>

        <h1
          style={{
            color: "#fef9e7",
            fontSize: "58px",
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.15,
            fontFamily: "sans-serif",
            letterSpacing: "-1px",
            maxWidth: "920px",
          }}
        >
          {title}
        </h1>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "rgba(254,249,231,0.25)",
              marginRight: "10px",
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
            {meta}
          </p>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
