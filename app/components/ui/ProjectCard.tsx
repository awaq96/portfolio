import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  metrics?: string[];
  href?: string;
}

export default function ProjectCard({ title, description, tags, metrics, href }: ProjectCardProps) {
  const isInternal = href?.startsWith("/");

  const content = (
    <>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-foreground/60 flex-1 leading-relaxed">{description}</p>
      {metrics && metrics.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {metrics.map((m) => (
            <span
              key={m}
              className="text-xs px-2 py-0.5 rounded-full border border-foreground/20 text-foreground/50"
            >
              {m}
            </span>
          ))}
        </div>
      )}
      <div className="flex flex-wrap gap-2 pt-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-foreground/10 text-foreground/60"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  const className =
    "group border border-foreground/10 rounded-xl p-6 flex flex-col gap-3 hover:border-foreground/30 transition-colors";

  if (!href) return <div className={className}>{content}</div>;
  if (isInternal) return <Link href={href} className={className}>{content}</Link>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  );
}
