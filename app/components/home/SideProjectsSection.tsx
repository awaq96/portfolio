import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { sideProjects } from "@/content/projects/side";

export default function SideProjectsSection() {
  return (
    <section id="side" className="border-t border-foreground/10 max-w-5xl mx-auto px-6 py-12 sm:py-24">
      <SectionHeading>Side Projects</SectionHeading>
      <div className="grid sm:grid-cols-2 gap-4">
        {sideProjects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
