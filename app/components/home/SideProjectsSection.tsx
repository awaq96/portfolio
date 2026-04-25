import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "Side Project One [placeholder]",
    description:
      "Lorem ipsum description of the side project — what it does, why you built it, and anything interesting about the implementation.",
    tags: ["TypeScript", "Next.js", "Postgres"],
    link: "https://github.com/asherwaqar",
  },
  {
    title: "Side Project Two [placeholder]",
    description:
      "Lorem ipsum description of the side project — what it does, why you built it, and anything interesting about the implementation.",
    tags: ["Python", "FastAPI", "Redis"],
    link: "https://github.com/asherwaqar",
  },
];

export default function SideProjectsSection() {
  return (
    <section className="border-t border-foreground/10 max-w-5xl mx-auto px-6 py-24">
      <SectionHeading>Side Projects</SectionHeading>
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
