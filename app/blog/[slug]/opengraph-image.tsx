import { ImageResponse } from "next/og";
import { getPost, getAllPosts } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  const title = post?.title ?? "Blog — Asher Waqar";
  const meta = [
    post?.date
      ? new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC",
        })
      : null,
    post?.readTime ?? null,
  ]
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
          waqlabs.ai · Blog
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
