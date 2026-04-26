import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { personalProjects } from "@/content/projects/personal";

export default function PersonalProjectsSection() {
  return (
    <section id="personal" className="border-t border-foreground/10 max-w-5xl mx-auto px-6 py-12 sm:py-24">
      <SectionHeading>Personal Projects</SectionHeading>
      <div className="grid sm:grid-cols-2 gap-4">
        {personalProjects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
