import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "GT Project One [placeholder]",
    description:
      "Lorem ipsum conceptual description of the coursework project — the problem domain, approach, and key concepts. No code linked (academic integrity).",
    tags: ["Machine Learning", "Python"],
  },
  {
    title: "GT Project Two [placeholder]",
    description:
      "Lorem ipsum conceptual description of the coursework project — the problem domain, approach, and key concepts. No code linked (academic integrity).",
    tags: ["Distributed Systems", "Java"],
  },
];

export default function GTProjectsSection() {
  return (
    <section className="border-t border-foreground/10 max-w-5xl mx-auto px-6 py-24">
      <SectionHeading>Georgia Tech Projects</SectionHeading>
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
