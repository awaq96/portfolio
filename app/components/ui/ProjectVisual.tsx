import type { ProjectVisual as ProjectVisualData } from "@/content/projects/enterprise";
import type { ReactNode } from "react";

interface ProjectVisualProps {
  visual: ProjectVisualData;
}

export default function ProjectVisual({ visual }: ProjectVisualProps) {
  if (visual.type === "workflow") {
    return (
      <VisualFrame title={visual.title}>
        <div className="grid gap-4 sm:grid-cols-2">
          <WorkflowColumn
            label={visual.before.label}
            steps={visual.before.steps}
            metric={visual.before.metric}
          />
          <WorkflowColumn
            label={visual.after.label}
            steps={visual.after.steps}
            metric={visual.after.metric}
            emphasized
          />
        </div>
      </VisualFrame>
    );
  }

  if (visual.type === "architecture") {
    if (visual.variant === "system") {
      return (
        <VisualFrame title={visual.title}>
          <SystemDesignVisual />
        </VisualFrame>
      );
    }

    if (visual.variant === "agentic") {
      return (
        <VisualFrame title={visual.title}>
          <AgenticMigrationVisual />
        </VisualFrame>
      );
    }

    return (
      <VisualFrame title={visual.title}>
        <div className="space-y-5">
          {visual.preview === "spreadsheet" && <SpreadsheetPreview />}
          <div className="grid gap-2 sm:grid-cols-4">
            {visual.steps.map((step, index) => (
              <div key={step} className="space-y-2 sm:contents">
                <div className="flex min-h-14 w-full items-center justify-center rounded-lg border border-foreground/15 bg-background px-3 py-3 text-center text-xs text-foreground/70 sm:min-h-20">
                  {step}
                </div>
                {index < visual.steps.length - 1 && (
                  <div className="text-center text-foreground/30 sm:hidden">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </VisualFrame>
    );
  }

  return (
    <VisualFrame title={visual.title}>
      <div className="grid gap-3 sm:grid-cols-3">
        {visual.items.map((item) => (
          <div key={item.label} className="rounded-lg border border-foreground/15 bg-background p-4">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-sm text-foreground/45 line-through">{item.before}</span>
              <span className="text-lg font-semibold text-foreground">{item.after}</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-foreground/55">{item.label}</p>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}

function AgenticMigrationVisual() {
  const agents = [
    ["POM", "dependencies + Java target"],
    ["AJSC", "internal framework removal"],
    ["API", "javax to jakarta + date types"],
    ["Docs", "Swagger to springdoc"],
  ];

  const gates = ["Build", "Start app", "Smoke APIs", "PR review"];

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-[1fr_1.2fr]">
        <div className="rounded-lg border border-foreground/15 bg-background p-3 sm:p-4">
          <p className="text-xs font-medium uppercase tracking-widest text-foreground/45">
            Prompt Agents
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {agents.map(([name, detail]) => (
              <div
                key={name}
                className="rounded-md border border-foreground/10 bg-foreground/[0.03] p-2"
              >
                <p className="text-sm font-medium text-foreground/80">{name}</p>
                <p className="mt-1 text-[11px] leading-snug text-foreground/50">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-foreground/25 bg-background p-3 sm:p-4">
          <p className="text-xs font-medium uppercase tracking-widest text-foreground/45">
            Service Workspace
          </p>
          <div className="mt-3 rounded-md border border-foreground/10 bg-foreground/[0.03] p-3">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-foreground/80">One microservice</p>
              <span className="rounded-full border border-foreground/15 px-2 py-0.5 text-xs text-foreground/55">
                ~70% automated
              </span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-foreground/10">
              <div className="h-full w-[70%] rounded-full bg-foreground/60" />
            </div>
            <p className="mt-3 text-xs leading-relaxed text-foreground/55">
              Copilot applies targeted migration prompts, then the remaining failures become reviewable fixes.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-[1.2fr_1fr]">
        <div className="rounded-lg border border-foreground/15 bg-background p-3 sm:p-4">
          <p className="text-xs font-medium uppercase tracking-widest text-foreground/45">
            Verification Gates
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {gates.map((gate) => (
              <div
                key={gate}
                className="rounded-md border border-foreground/10 bg-foreground/[0.03] px-2 py-2 text-center text-xs text-foreground/60"
              >
                {gate}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-foreground/15 bg-background p-3 sm:p-4">
          <p className="text-xs font-medium uppercase tracking-widest text-foreground/45">
            Feedback Memory
          </p>
          <p className="mt-2 text-sm font-medium text-foreground/80">Missed-items log</p>
          <p className="mt-1.5 text-xs leading-relaxed text-foreground/55">
            Manual fixes were captured and fed into later prompt runs so the workflow improved service by service.
          </p>
        </div>
      </div>
    </div>
  );
}

function SystemDesignVisual() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-[1fr_1.4fr_1fr] sm:items-center">
      <div className="contents sm:grid sm:gap-3">
        <SystemNode eyebrow="Input" title="RFDS design" detail="equipment list + site constraints" />
        <SystemNode eyebrow="Data" title="Equipment cache" detail="local dimensions for common components" />
      </div>

      <div className="col-span-2 space-y-3 sm:col-span-1">
        <SystemNode
          eyebrow="Service"
          title="RERC API"
          detail="validates request, coordinates calculations, returns compliance status"
          emphasized
        />
        <div className="rounded-lg border border-foreground/15 bg-background p-4">
          <p className="text-xs font-medium uppercase tracking-widest text-foreground/45">Compute</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {["Antenna", "Mount", "Cable"].map((item) => (
              <div
                key={item}
                className="min-h-14 rounded-md border border-foreground/10 bg-foreground/[0.03] px-2 py-2 text-center text-xs text-foreground/60 flex items-center justify-center"
              >
                {item}
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs leading-relaxed text-foreground/55">
            Parallel equipment calculations aggregate into total square-inch usage.
          </p>
        </div>
      </div>

      <div className="contents sm:grid sm:gap-3">
        <SystemNode eyebrow="Output" title="Compliance result" detail="within lease allotment or overage risk" />
        <SystemNode eyebrow="Events" title="Kafka updates" detail="catalog changes refresh local equipment data" />
      </div>
    </div>
  );
}

function SystemNode({
  eyebrow,
  title,
  detail,
  emphasized = false,
}: {
  eyebrow: string;
  title: string;
  detail: string;
  emphasized?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-lg border p-3 sm:p-4",
        emphasized ? "border-foreground/25 bg-background" : "border-foreground/15 bg-background/70",
      ].join(" ")}
    >
      <p className="text-xs font-medium uppercase tracking-widest text-foreground/45">{eyebrow}</p>
      <p className="mt-1.5 text-sm font-medium text-foreground/80">{title}</p>
      <p className="mt-1.5 text-xs leading-relaxed text-foreground/55">{detail}</p>
    </div>
  );
}

function VisualFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-foreground/10 bg-foreground/[0.03] p-4 sm:p-5">
      <h3 className="mb-4 text-sm font-medium text-foreground/80">{title}</h3>
      {children}
    </div>
  );
}

function WorkflowColumn({
  label,
  steps,
  metric,
  emphasized = false,
}: {
  label: string;
  steps: string[];
  metric: string;
  emphasized?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-lg border p-4",
        emphasized ? "border-foreground/25 bg-background" : "border-foreground/10 bg-background/60",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-medium uppercase tracking-widest text-foreground/45">{label}</span>
        <span className="rounded-full border border-foreground/15 px-2 py-0.5 text-xs text-foreground/55">
          {metric}
        </span>
      </div>
      <ol className="mt-4 space-y-2">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-3 text-sm text-foreground/70">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-xs text-foreground/50">
              {index + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}

function SpreadsheetPreview() {
  const rows = [
    ["SITE-1042", "MA-8821", "Valid"],
    ["SITE-2218", "MA-8821", "Invalid"],
    ["SITE-3097", "MA-9140", "Valid"],
  ];

  return (
    <div className="overflow-hidden rounded-lg border border-foreground/15 bg-background">
      <div className="grid grid-cols-[1.2fr_1.3fr_0.9fr] border-b border-foreground/10 bg-foreground/[0.04] text-xs font-medium text-foreground/55">
        <div className="px-3 py-2">Site ID</div>
        <div className="px-3 py-2">Master Agreement</div>
        <div className="px-3 py-2">Status</div>
      </div>
      {rows.map(([site, agreement, status]) => {
        const invalid = status === "Invalid";
        return (
          <div
            key={site}
            className={[
              "grid grid-cols-[1.2fr_1.3fr_0.9fr] border-b border-foreground/10 text-xs last:border-b-0",
              invalid ? "bg-red-500/10 text-red-700 dark:text-red-300" : "text-foreground/60",
            ].join(" ")}
          >
            <div className="px-3 py-2 font-mono">{site}</div>
            <div className="px-3 py-2 font-mono">{agreement}</div>
            <div className="px-3 py-2">{status}</div>
          </div>
        );
      })}
    </div>
  );
}
