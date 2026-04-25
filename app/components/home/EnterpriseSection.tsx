import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "Project Alpha [placeholder]",
    description:
      "Lorem ipsum description of the enterprise project — the problem it solved, the scale it operated at, and the measurable outcome.",
    tags: ["Java", "Kafka", "AWS"],
  },
  {
    title: "Project Beta [placeholder]",
    description:
      "Lorem ipsum description of the enterprise project — the problem it solved, the scale it operated at, and the measurable outcome.",
    tags: ["Python", "Kubernetes", "gRPC"],
  },
];

export default function EnterpriseSection() {
  return (
    <section className="border-t border-foreground/10 max-w-5xl mx-auto px-6 py-24">
      <SectionHeading>Enterprise Experience</SectionHeading>
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
