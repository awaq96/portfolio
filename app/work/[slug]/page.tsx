import { notFound } from "next/navigation";
import Link from "next/link";
import { enterpriseProjects } from "@/content/projects/enterprise";

export function generateStaticParams() {
  return enterpriseProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = enterpriseProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} — Asher Waqar` };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = enterpriseProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 sm:py-24">
      <Link
        href="/#enterprise"
        className="text-sm text-foreground/40 hover:text-foreground transition-colors mb-12 inline-block"
      >
        ← Back
      </Link>

      <p className="text-sm text-foreground/40 mt-10 mb-2 tracking-widest uppercase">
        {project.company} · {project.period}
      </p>
      <h1 className="text-4xl font-bold tracking-tight mb-6">{project.title}</h1>

      <div className="flex flex-wrap gap-3 mb-6">
        {project.metrics.map((m) => (
          <span
            key={m}
            className="text-sm px-3 py-1 rounded-full border border-foreground/20 text-foreground/70"
          >
            {m}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-16">
        {project.tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded-full bg-foreground/10 text-foreground/60"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="space-y-12">
        {project.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-lg font-semibold mb-4">{s.heading}</h2>
            <div className="space-y-4">
              {s.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-foreground/70 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
