import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { enterpriseProjects } from "@/content/projects/enterprise";

export default function EnterpriseSection() {
  return (
    <section id="enterprise" className="border-t border-foreground/10 max-w-5xl mx-auto px-6 pt-8 sm:pt-16 pb-12 sm:pb-24">
      <SectionHeading>Enterprise Experience</SectionHeading>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {enterpriseProjects.map((p) => (
          <ProjectCard
            key={p.slug}
            title={p.title}
            description={p.description}
            tags={p.tags}
            metrics={p.metrics}
            href={`/work/${p.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
