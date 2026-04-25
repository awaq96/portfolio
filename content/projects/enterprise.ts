export interface ProjectSection {
  heading: string;
  content: string;
}

export interface EnterpriseProject {
  slug: string;
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  metrics: string[];
  sections: ProjectSection[];
}

export const enterpriseProjects: EnterpriseProject[] = [
  {
    slug: "att-payment-platform",
    title: "Mission-Critical Payment Platform",
    company: "AT&T",
    period: "2023 – Present",
    description:
      "Backend systems for a platform managing $6B in annual payments and 250,000+ enterprise contracts.",
    tags: ["Java", "Spring Boot", "Angular", "Azure", "REST APIs"],
    metrics: ["$6B in payments", "250K+ contracts", "$3M annual savings", "83% faster workflows"],
    sections: [
      {
        heading: "Overview",
        content: "[Placeholder]",
      },
      {
        heading: "The Challenge",
        content: "[Placeholder]",
      },
      {
        heading: "What I Built",
        content: "[Placeholder]",
      },
      {
        heading: "Outcome",
        content: "[Placeholder]",
      },
    ],
  },
  {
    slug: "att-cell-tower-calculator",
    title: "Cell Tower Equipment Calculator",
    company: "AT&T",
    period: "2023 – Present",
    description:
      "Modernized a legacy integration service supporting equipment calculations across 70,000+ cell sites nationwide.",
    tags: ["Java", "Spring Boot", "Kafka", "MuleSoft"],
    metrics: ["70K+ cell sites", "$5M annual savings", "60% efficiency gain", "$150K cost reduction"],
    sections: [
      {
        heading: "Overview",
        content: "[Placeholder]",
      },
      {
        heading: "The Challenge",
        content: "[Placeholder]",
      },
      {
        heading: "What I Built",
        content: "[Placeholder]",
      },
      {
        heading: "Outcome",
        content: "[Placeholder]",
      },
    ],
  },
  {
    slug: "att-microservices-modernization",
    title: "Microservices Modernization",
    company: "AT&T",
    period: "2023 – Present",
    description:
      "Led a 6-engineer team upgrading 80+ microservices from Java 8 to 17 and Spring Boot 2.x to 3.3.",
    tags: ["Java", "Spring Boot", "JUnit 5", "GitHub Copilot", "AI"],
    metrics: ["80+ services", "70% faster upgrades", "90% code coverage", "2 days → 4 hours"],
    sections: [
      {
        heading: "Overview",
        content: "[Placeholder]",
      },
      {
        heading: "The Challenge",
        content: "[Placeholder]",
      },
      {
        heading: "What I Built",
        content: "[Placeholder]",
      },
      {
        heading: "Outcome",
        content: "[Placeholder]",
      },
    ],
  },
];
