import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { gtProjects } from "@/content/projects/gt";

export default function GTProjectsSection() {
  return (
    <section id="gt" className="border-t border-foreground/10 max-w-5xl mx-auto px-6 py-12 sm:py-24">
      <SectionHeading>Georgia Tech Projects</SectionHeading>
      <p className="text-sm text-foreground/50 mb-6">Code not public per academic integrity policy.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {gtProjects.map((p) => (
          <ProjectCard key={p.title} title={p.title} description={p.description} tags={p.tags} metrics={p.metrics} href={`/gt/${p.slug}`} />
        ))}
      </div>
    </section>
  );
}
