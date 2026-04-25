interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export default function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  const Wrapper = link ? "a" : "div";
  const wrapperProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group border border-foreground/10 rounded-xl p-6 flex flex-col gap-3 hover:border-foreground/30 transition-colors"
    >
      <h3 className="font-medium group-hover:text-foreground/80 transition-colors">{title}</h3>
      <p className="text-sm text-foreground/60 flex-1 leading-relaxed">{description}</p>
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
    </Wrapper>
  );
}
