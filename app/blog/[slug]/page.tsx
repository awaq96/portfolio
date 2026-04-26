import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Asher Waqar`,
    description: post.description,
  };
}

const components = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      {...props}
      className="text-xl font-semibold tracking-tight mt-12 mb-4 first:mt-0"
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="text-foreground/70 leading-relaxed mb-6" />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className="list-disc list-outside pl-5 space-y-2 mb-6 text-foreground/70 leading-relaxed" />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li {...props} className="pl-1" />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong {...props} className="font-semibold text-foreground" />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em {...props} className="italic" />
  ),
  hr: () => <hr className="border-foreground/15 my-10" />,
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      {...props}
      className="font-mono text-sm bg-foreground/8 rounded px-1.5 py-0.5"
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      {...props}
      className="font-mono text-sm bg-foreground/8 rounded-lg p-5 overflow-x-auto mb-6"
    />
  ),
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 sm:py-24">
      <Link
        href="/blog"
        className="text-sm text-foreground/40 hover:text-foreground transition-colors mb-12 inline-block"
      >
        ← Blog
      </Link>

      <p className="text-xs text-foreground/40 tracking-widest uppercase mt-10 mb-3">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC",
        })}{" "}
        · {post.readTime}
      </p>

      <h1 className="text-4xl font-bold tracking-tight mb-16">{post.title}</h1>

      <article>
        <MDXRemote source={post.content} components={components} />
      </article>
    </main>
  );
}
