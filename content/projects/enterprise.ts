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
      "Backend systems for a platform managing $6B in annual payments and 250,000+ enterprise contracts across AT&T's infrastructure leases.",
    tags: ["Java", "Spring Boot", "Angular", "Azure", "REST APIs", "Apache POI"],
    metrics: ["$6B in payments", "250K+ contracts", "$3M annual savings", "83% faster workflows"],
    sections: [
      {
        heading: "Overview",
        content: `AT&T's lease management platform handles $6 billion in annual payments and 250,000 active contracts for the infrastructure the company depends on: cell towers, fiber cable, and phone line poles across the country. Each tower site is its own set of agreements. The tower structure, the land it sits on, the equipment it carries, and the utilities supporting it can each be owned or leased independently, and the platform tracks and pays for all of it.

My work was focused on the contract workflow layer. The biggest feature I built was a bulk update system that automated a process employees were doing one record at a time.`,
      },
      {
        heading: "The Challenge",
        content: `The platform uses two tiers of contracts. A lease is a site-specific contract covering details for one component at one location. A master agreement sits above that as a regional umbrella contract with large tower vendors like Crown Castle or American Tower. Where a lease might specify how much rent is paid for a particular tower, the master agreement handles the shared details across a whole portfolio: which account the payment goes to, when it is due, and what the penalties are if it is missed.

When vendors sell off tower portfolios, which happens regularly in the industry, the acquiring vendor brings a new master agreement. Every lease tied to those towers needs its association updated to point to the new one. These acquisitions can involve 10,000 to 15,000 documents at a time. Before I built this, a user had to open each lease individually and manually change the association. At that scale, a single acquisition took six months of work.`,
      },
      {
        heading: "What I Built",
        content: `I built a bulk update flow to automate the master agreement re-association process. The user downloads an Excel template, fills in the cell site IDs they want to update, and uploads it to the app. The backend validates every ID and if any are invalid, generates a new Excel file using Apache POI with the bad IDs highlighted in red. They can fix the file and re-upload before anything runs.

Once the template is clean, the user fills in the new master agreement number for each row. Different sites can point to different master agreements in the same job. They upload the completed sheet and hit submit. The API responds immediately with a job ID and the user lands on a job summary table showing the new job as In Progress. They can go anywhere in the app while it processes.

In the background, a Java thread pool processes the records in parallel chunks. The thread count is calculated dynamically based on the number of records divided by the chunk size, with a configurable cap to prevent the bulk job from monopolizing the microservice's resources and slowing down other API calls. A job that used to take an hour now finishes in about 15 minutes.

When the job is done, a push notification appears in the app's global notifications center. The user can download a status report with two tabs: one for successful updates and one for failures showing the specific reason each one failed.`,
      },
      {
        heading: "Outcome",
        content: `Cutting a six-month manual process down to one month saves AT&T $3 million a year in labor costs. The parallel processing architecture also fixed a performance issue we caught during Azure testing: the original sequential implementation was hitting the database with individual queries for an hour straight, which caused noticeable latency across the entire app while a job ran. With chunked, bounded parallel processing the app stays responsive and the job finishes in a fraction of the time.`,
      },
    ],
  },
  {
    slug: "att-cell-tower-calculator",
    title: "Real Estate Rights Calculator",
    company: "AT&T",
    period: "2023 – Present",
    description:
      "Rebuilt a legacy tool used by RF engineers, ensuring cell tower designs comply with square-inch lease agreements across 70,000+ sites.",
    tags: ["Java", "Spring Boot", "Kafka", "Oracle"],
    metrics: ["70K+ cell sites", "$5M in prevented penalties", "$150K operational savings"],
    sections: [
      {
        heading: "Overview",
        content: `The Real Estate Rights Calculator (RERC) is a tool used by RF design engineers to verify that a cell tower design stays within the square inch allotment in AT&T's lease agreements. On a shared tower, multiple carriers each have a designated RAD Center where their antennas are installed, and each carrier has a contractually defined amount of space they can use. A design that goes over that limit risks interference with neighboring carriers and triggers fees or forces renegotiation.

RERC takes an engineer's RFDS (Radio Frequency Data Sheet) as input, calculates the total square inch usage of the design, and tells the connected design tool whether the design is compliant. Catching an overage early is critical. If it surfaces further down the line, fixing it means redesigning the site, paying fees, or renegotiating lease agreements.`,
      },
      {
        heading: "The Challenge",
        content: `The RERC had been owned by another team and built as a MuleSoft API backed by a 1,500-line Oracle stored procedure that calculated equipment square inches one piece at a time. It had known miscalculation issues and was slow to support new features. The owning team had too many applications to give RERC real attention, so our team took ownership.

That meant making an architectural call: lift-and-shift, or rebuild. My principal architect favored a lift-and-shift for speed to market. I pushed for a rebuild. Our existing CI/CD pipelines and Kubernetes infrastructure were built for Java Spring Boot, so spinning up a new service would be simple. Moving the business logic out of a 1,500-line stored procedure into Java would make it testable, debuggable, and maintainable in a way that stored procedures fundamentally are not. MuleSoft also carried licensing costs we could eliminate, and keeping it would have created a separate infrastructure path to maintain indefinitely.

We worked through it and landed on a middle ground: migrate to Spring Boot, refactor the critical calculation logic, and keep the Oracle database to hit the 3-month timeline. I built it solo.`,
      },
      {
        heading: "What I Built",
        content: `I built the new RERC service using a test-driven approach. The main architectural change was parallelizing the equipment calculations. The original stored procedure calculated each equipment piece sequentially. I refactored this so all calculations run concurrently and aggregate once they are complete, cutting the API response time from 1 minute to 20 seconds.

While rebuilding the logic I found several underestimation bugs in the original calculations. Designs that appeared compliant were actually over their square inch allotment. These fixes were a key part of the accuracy improvements that drove the post-launch outcome.

I also replaced a fragile database link to the Equipment Catalog with a Kafka-based integration. The old DB link was unreliable and often returned stale equipment dimensions. Now when the catalog team updates a dimension, an event is published and RERC updates its local copy in real time, with a local cache of the most commonly used equipment for faster lookups.`,
      },
      {
        heading: "Outcome",
        content: `The service launched defect-free with 90% code coverage on a 3-month timeline. Cutting the MuleSoft license and improving calculation efficiency reduced annual operational costs by $150K. After launch, all in-progress RFDS across AT&T were re-run through the new tool as part of a maintenance audit. The more accurate calculations surfaced $5 million in potential overage fees, rework costs, and re-engineering labor that the old tool would have missed.`,
      },
    ],
  },
  {
    slug: "att-microservices-modernization",
    title: "Agentic Microservices Modernization",
    company: "AT&T",
    period: "2023 – Present",
    description:
      "Led a 6-engineer team upgrading 80+ microservices from Java 8 to 17 and Spring Boot 2.x to 3.3, using AI-assisted tooling to cut per-service upgrade time from days to hours.",
    tags: ["Java", "Spring Boot", "GitHub Copilot", "Agentic AI"],
    metrics: ["80+ services", "3 months vs. 12 estimated", "2-4 days to 4 hours", "70% automated"],
    sections: [
      {
        heading: "Overview",
        content: `Our team's application is composed of 80 microservices built on Java 8 and Spring Boot 2.x. With Spring Boot 2.x reaching end of life, staying on unsupported software was not an option. Java 8 was also EOL, so both had to be upgraded together. I led the effort to bring the entire service catalog up to supported versions.

This project had a second dimension to it: I used it as an opportunity to experiment with AI-assisted engineering and see how much of a large, repetitive migration could be automated.`,
      },
      {
        heading: "The Challenge",
        content: `The original plan was to move to Java 21 and Spring Boot 4, the latest available versions. AT&T's security policies for offshore developers capped the supported Java version at 17, and the compatible Spring Boot version was 3.3. Since Spring Boot 4 requires Java 21 as its minimum, both targets had to come down together. Java 17 and Spring Boot 3.3 were the ceiling we could actually use.

Manual estimates put the effort at 9 to 12 months across 80 services. Each service required the same categories of changes: POM dependency updates, removal of deprecated APIs, and several framework-specific migration paths. No novel business logic was involved, just repetitive, well-documented work that developers across the industry had already done thousands of times. That made it a strong candidate for automation.`,
      },
      {
        heading: "What I Built",
        content: `Before writing a single prompt, I manually upgraded two services to build a solid understanding of what actually needed to happen at each step. Then I spent two weeks researching and iterating on prompts using GitHub Copilot in VS Code.

My first attempt was a single prompt to handle the full upgrade. The results were inconsistent: sometimes the POM updated correctly, sometimes it did not. Also the service layer changes were unreliable. I broke the problem down into four targeted prompts, each scoped to one category of change.

The first prompt handled POM updates: bumping Java, Spring, and Spring Boot versions and replacing dependencies with compatible ones. I included my manually upgraded POM as a reference and explicitly called out fields the model consistently missed. 
The second prompt covered AJSC removal. AJSC was AT&T's internal framework for on-premises hosting. With the company now on Azure, AJSC was unsupported and incompatible with Java 17, so it needed to be replaced. The third prompt handled service layer deprecations: javax to jakarta, Date to LocalDateTime, and other API changes that Spring Boot 3.x introduced. The fourth migrated Swagger from Springfox to springdoc-openapi, including annotation updates and the removal of the Docket configuration class.

The workflow for each service: run the prompts, review the output, build and start the app, fix any failures, run a few API calls to verify functionality, then move to the next service. AI handled about 70 percent of each upgrade consistently. I kept a shared markdown file where the team logged every manual fix the prompts missed. I fed it back into each prompt run as a list of previously missed items. This helped close some gaps, but getting from 70 to 100 percent would have required a level of fine-tuning that was not worth the investment.

I ran knowledge transfer sessions throughout so the team could work on services in parallel while I developed later prompts. I reviewed every PR and mentored developers through the manual fixes.`,
      },
      {
        heading: "Outcome",
        content: `What was estimated at 9 to 12 months took 3 months. A per-service upgrade that used to take 2 to 4 days came down to 4 hours, with GitHub Copilot handling the bulk of the repetitive work. After we finished, I demo'd the workflow and shared the prompts with teams across AT&T. Three teams have since reached out to reuse them for their own migration efforts.`,
      },
    ],
  },
];
