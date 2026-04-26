import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog — Asher Waqar",
  description: "Writing on distributed systems, AI tooling, and software engineering.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 sm:py-24">
      <h1 className="text-4xl font-bold tracking-tight mb-3">Blog</h1>
      <p className="text-foreground/50 mb-16">
        Writing on distributed systems, AI tooling, and software engineering.
      </p>

      <div className="space-y-12">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <p className="text-xs text-foreground/40 tracking-widest uppercase mb-2">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })}{" "}
              · {post.readTime}
            </p>
            <h2 className="text-xl font-semibold tracking-tight mb-2 group-hover:text-foreground/70 transition-colors">
              {post.title}
            </h2>
            <p className="text-foreground/60 leading-relaxed text-sm">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
