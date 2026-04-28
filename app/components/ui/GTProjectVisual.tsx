import type { GTProjectVisual as GTProjectVisualData } from "@/content/projects/gt";
import type { ReactNode } from "react";

interface GTProjectVisualProps {
  visual: GTProjectVisualData;
}

export default function GTProjectVisual({ visual }: GTProjectVisualProps) {
  return (
    <LabFrame title={visual.title}>
      {visual.type === "trading-lab" && <TradingLab />}
      {visual.type === "indicator-console" && <IndicatorConsole />}
      {visual.type === "learner-lab" && <LearnerLab />}
      {visual.type === "impact-sweep" && <ImpactSweep />}
      {visual.type === "enron-network" && <EnronNetwork />}
      {visual.type === "enron-funnel" && <EnronFunnel />}
      {visual.type === "enron-timeline" && <EnronTimeline />}
      {visual.type === "enron-calendar" && <EnronCalendar />}
      {visual.type === "enron-lexicon" && <EnronLexicon />}
      {visual.type === "enron-risk" && <EnronRisk />}
      {visual.type === "enron-findings" && <EnronFindings />}
      {visual.type === "em-segmentation" && <EMSegmentation />}
      {visual.type === "em-kmeans" && <EMKMeans />}
      {visual.type === "em-gmm" && <EMGMM />}
      {visual.type === "em-loop" && <EMLoop />}
      {visual.type === "em-bic" && <EMBIC />}
    </LabFrame>
  );
}

function LabFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-foreground/10 bg-foreground/[0.03]">
      <div className="flex items-center justify-between border-b border-foreground/10 px-4 py-3">
        <h3 className="text-sm font-medium text-foreground/80">{title}</h3>
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-rose-400/80" />
          <span className="size-2 rounded-full bg-amber-300/80" />
          <span className="size-2 rounded-full bg-teal-400/80" />
        </div>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

function TradingLab() {
  return (
    <div className="space-y-4">
      <div className="h-48 rounded-lg border border-foreground/10 bg-background p-3">
        <svg viewBox="0 0 520 220" className="h-full w-full" role="img" aria-label="Strategy performance chart">
          <path d="M35 20 V190 H500" fill="none" stroke="currentColor" strokeOpacity="0.14" />
          {[55, 95, 135, 175].map((y) => (
            <path key={y} d={`M35 ${y} H500`} stroke="currentColor" strokeOpacity="0.08" />
          ))}
          <polyline
            points="35,156 88,150 141,162 194,145 247,154 300,139 353,132 406,128 459,118 500,112"
            fill="none"
            stroke="#14b8a6"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="35,160 88,151 141,149 194,136 247,125 300,114 353,98 406,86 459,70 500,58"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="35,158 88,165 141,160 194,166 247,170 300,162 353,172 406,176 459,181 500,186"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.35"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="194" cy="136" r="5" fill="#22c55e" />
          <circle cx="353" cy="98" r="5" fill="#22c55e" />
          <circle cx="459" cy="70" r="5" fill="#ef4444" />
        </svg>
      </div>
      <div className="grid gap-2 text-xs sm:grid-cols-3">
        <ChartLegend color="bg-amber-500" label="Strategy learner" value="+8.2% out of sample" />
        <ChartLegend color="bg-teal-500" label="Manual strategy" value="-5.9% out of sample" />
        <ChartLegend color="bg-foreground/35" label="Benchmark" value="-8.4% out of sample" />
      </div>
    </div>
  );
}

function ChartLegend({ color, label, value }: { color: string; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-foreground/10 bg-background p-3">
      <div className="flex items-center gap-2">
        <span className={`size-2 rounded-full ${color}`} />
        <span className="text-foreground/55">{label}</span>
      </div>
      <p className="mt-2 font-medium text-foreground/80">{value}</p>
    </div>
  );
}

function IndicatorConsole() {
  const indicators = [
    ["BBP", "band position", "w-[28%]", "oversold"],
    ["RSI", "relative strength", "w-[42%]", "entry zone"],
    ["MOM", "10-day movement", "w-[64%]", "trend"],
    ["EMA", "distance from mean", "w-[36%]", "reversion"],
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {indicators.map(([name, label, width, state]) => (
        <div key={name} className="rounded-lg border border-foreground/10 bg-background p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="font-mono text-lg font-semibold text-foreground/80">{name}</p>
            <span className="rounded-full bg-foreground/10 px-2 py-0.5 text-xs text-foreground/55">
              {state}
            </span>
          </div>
          <p className="mt-1 text-xs text-foreground/45">{label}</p>
          <div className="mt-4 h-2 rounded-full bg-foreground/10">
            <div className={`h-full rounded-full bg-teal-500/80 ${width}`} />
          </div>
        </div>
      ))}
    </div>
  );
}

function LearnerLab() {
  return (
    <div className="grid gap-3 sm:grid-cols-[1fr_1fr_1.1fr]">
      <LabNode title="Feature matrix" detail="price, momentum, RSI, BBP, EMA distance" />
      <LabNode title="Forward labels" detail="LONG / SHORT / CASH from 5-day returns" />
      <div className="rounded-lg border border-foreground/15 bg-background p-4 sm:row-span-2">
        <p className="text-xs font-medium uppercase tracking-widest text-foreground/45">Bagged forest</p>
        <div className="mt-3 grid grid-cols-4 gap-1.5">
          {Array.from({ length: 20 }, (_, index) => (
            <span
              key={index}
              className="h-6 rounded border border-foreground/10 bg-amber-400/20"
            />
          ))}
        </div>
        <p className="mt-3 text-xs leading-relaxed text-foreground/55">
          20 random-tree learners vote into a single trading policy.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2 sm:col-span-2">
        {["LONG", "CASH", "SHORT"].map((signal) => (
          <div
            key={signal}
            className="rounded-lg border border-foreground/10 bg-foreground/[0.03] px-2 py-3 text-center text-xs font-medium text-foreground/65"
          >
            {signal}
          </div>
        ))}
      </div>
    </div>
  );
}

function LabNode({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="rounded-lg border border-foreground/10 bg-background p-4">
      <p className="text-sm font-medium text-foreground/80">{title}</p>
      <p className="mt-2 text-xs leading-relaxed text-foreground/55">{detail}</p>
    </div>
  );
}

function ImpactSweep() {
  const rows = [
    ["0.000", "many trades", "w-full"],
    ["0.005", "fewer trades", "w-3/4"],
    ["0.010", "selective", "w-1/2"],
    ["0.020", "high conviction", "w-1/4"],
  ];

  return (
    <div className="space-y-3">
      {rows.map(([impact, label, width]) => (
        <div key={impact} className="grid grid-cols-[4rem_1fr] items-center gap-3">
          <span className="font-mono text-xs text-foreground/55">{impact}</span>
          <div>
            <div className="h-3 rounded-full bg-foreground/10">
              <div className={`h-full rounded-full bg-rose-400/80 ${width}`} />
            </div>
            <p className="mt-1 text-xs text-foreground/45">{label}</p>
          </div>
        </div>
      ))}
      <p className="pt-2 text-xs leading-relaxed text-foreground/55">
        Raising market impact widens the label threshold, so the learner trains itself to trade less often.
      </p>
    </div>
  );
}

function EnronNetwork() {
  const nodes = [
    ["West Desk", 255, 94, 24, "#f59e0b"],
    ["Scheduler", 150, 132, 14, "#14b8a6"],
    ["Trader", 330, 135, 15, "#14b8a6"],
    ["Exec alias", 250, 170, 12, "#f43f5e"],
    ["Counterparty", 90, 72, 10, "currentColor"],
    ["Ops", 400, 82, 10, "currentColor"],
    ["Legal", 120, 190, 9, "currentColor"],
    ["Market", 420, 190, 9, "currentColor"],
  ] as const;

  const edges = [
    [255, 94, 150, 132],
    [255, 94, 330, 135],
    [255, 94, 250, 170],
    [150, 132, 90, 72],
    [330, 135, 400, 82],
    [250, 170, 120, 190],
    [330, 135, 420, 190],
    [150, 132, 250, 170],
  ];

  return (
    <div className="space-y-3">
      <div className="h-56 rounded-lg border border-foreground/10 bg-background p-3">
        <svg viewBox="0 0 500 240" className="h-full w-full" role="img" aria-label="Email network graph">
          {edges.map(([x1, y1, x2, y2], index) => (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeOpacity="0.16"
              strokeWidth="2"
            />
          ))}
          {nodes.map(([label, cx, cy, r, color]) => (
            <g key={label}>
              <circle cx={cx} cy={cy} r={r} fill={color} fillOpacity={color === "currentColor" ? 0.28 : 0.85} />
              <text
                x={cx}
                y={cy + r + 15}
                textAnchor="middle"
                className="fill-current text-[11px]"
                opacity="0.55"
              >
                {label}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <div className="grid gap-2 text-xs sm:grid-cols-3">
        <ChartLegend color="bg-amber-500" label="Seed actors" value="West Desk aliases" />
        <ChartLegend color="bg-teal-500" label="Ego network" value="senders + recipients" />
        <ChartLegend color="bg-rose-500" label="Mandatory includes" value="convicted individuals" />
      </div>
    </div>
  );
}

function EnronFunnel() {
  const stages = [
    ["Raw corpus", "500K", "w-full"],
    ["Deduped", "249K", "w-[72%]"],
    ["Actor network", "165K", "w-[56%]"],
    ["Crisis window", "11K", "w-[26%]"],
    ["Top ranked", "50", "w-[10%]"],
  ];

  return (
    <div className="space-y-3">
      {stages.map(([label, value, width]) => (
        <div key={label} className="grid grid-cols-[5.5rem_1fr_3.5rem] items-center gap-3">
          <span className="text-xs text-foreground/50">{label}</span>
          <div className="h-5 rounded-full bg-foreground/10">
            <div className={`h-full rounded-full bg-amber-400/75 ${width}`} />
          </div>
          <span className="text-right font-mono text-xs text-foreground/65">{value}</span>
        </div>
      ))}
    </div>
  );
}

function EnronTimeline() {
  const events = [
    ["Jun", 72],
    ["Aug", 168],
    ["Dec", 290],
    ["Jan", 334],
    ["Mar", 410],
  ] as const;

  const emails = [
    [45, false],
    [64, true],
    [86, true],
    [130, false],
    [158, true],
    [181, true],
    [236, false],
    [278, true],
    [304, true],
    [342, true],
    [380, false],
    [420, true],
    [458, false],
  ] as const;

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-foreground/10 bg-background p-4">
        <svg viewBox="0 0 500 170" className="h-40 w-full" role="img" aria-label="Crisis timeline filter">
          <line x1="35" y1="82" x2="465" y2="82" stroke="currentColor" strokeOpacity="0.16" strokeWidth="2" />

          {events.map(([label, x]) => (
            <g key={`${label}-${x}`}>
              <rect x={x - 26} y="46" width="52" height="72" rx="14" fill="#f59e0b" fillOpacity="0.14" />
              <line x1={x} y1="38" x2={x} y2="126" stroke="#f59e0b" strokeWidth="2" />
              <circle cx={x} cy="82" r="6" fill="#f59e0b" />
              <text x={x} y="28" textAnchor="middle" className="fill-current text-[11px]" opacity="0.55">
                {label}
              </text>
            </g>
          ))}

          {emails.map(([x, passes], index) => (
            <circle
              key={index}
              cx={x}
              cy={passes ? 104 - (index % 3) * 14 : 142 - (index % 2) * 12}
              r={passes ? 4 : 3}
              fill={passes ? "#14b8a6" : "currentColor"}
              opacity={passes ? 0.9 : 0.22}
            />
          ))}

          <text x="35" y="158" className="fill-current text-[11px]" opacity="0.45">
            Jun 2000
          </text>
          <text x="465" y="158" textAnchor="end" className="fill-current text-[11px]" opacity="0.45">
            Jun 2001
          </text>
        </svg>
      </div>

      <div className="grid gap-2 text-xs sm:grid-cols-3">
        <ChartLegend color="bg-amber-500" label="Crisis marker" value="known blackout/emergency date" />
        <ChartLegend color="bg-amber-400/40" label="Window" value="plus/minus 48 hours" />
        <ChartLegend color="bg-teal-500" label="Email passes" value="nearest crisis distance <= 48h" />
      </div>
    </div>
  );
}

function EnronCalendar() {
  const weeks = [
    [0, 1, 0, 2, 1, 0, 0],
    [1, 2, 4, 5, 3, 1, 0],
    [0, 1, 3, 6, 4, 2, 1],
    [0, 0, 1, 2, 1, 0, 0],
    [1, 1, 2, 4, 7, 5, 2],
    [0, 1, 1, 3, 5, 4, 1],
  ];

  const intensity = [
    "bg-foreground/[0.04]",
    "bg-teal-400/15",
    "bg-teal-400/25",
    "bg-amber-400/30",
    "bg-amber-400/45",
    "bg-rose-400/45",
    "bg-rose-400/60",
    "bg-rose-400/75",
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-[1fr_0.85fr]">
      <div className="rounded-lg border border-foreground/10 bg-background p-4">
        <div className="mb-3 grid grid-cols-7 gap-1.5 text-center text-[10px] uppercase tracking-wide text-foreground/35">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
            <span key={`${day}-${index}`}>{day}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {weeks.flatMap((week, weekIndex) =>
            week.map((value, dayIndex) => {
              const crisis = value >= 6;
              const window = value >= 4;
              return (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={[
                    "aspect-square rounded-md border",
                    intensity[value],
                    crisis ? "border-rose-300/80" : window ? "border-amber-300/60" : "border-foreground/10",
                  ].join(" ")}
                />
              );
            }),
          )}
        </div>
      </div>

      <div className="space-y-2">
        <CalendarStat label="Crisis dates" value="16" tone="bg-rose-400/70" />
        <CalendarStat label="Window" value="+/-48h" tone="bg-amber-400/70" />
        <CalendarStat label="Emails after filter" value="~11K" tone="bg-teal-400/70" />
        <p className="pt-2 text-xs leading-relaxed text-foreground/55">
          Darker days show heavier email traffic near blackout and emergency windows.
        </p>
      </div>
    </div>
  );
}

function CalendarStat({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div className="rounded-lg border border-foreground/10 bg-background p-3">
      <div className="flex items-center gap-2">
        <span className={`size-2 rounded-full ${tone}`} />
        <span className="text-xs text-foreground/50">{label}</span>
      </div>
      <p className="mt-1.5 font-mono text-sm font-medium text-foreground/80">{value}</p>
    </div>
  );
}

function EnronLexicon() {
  const signals = [
    ["Gaming", "55 terms", "Death Star, Ricochet, wash trade", "bg-rose-400/20"],
    ["Hedging", "48 terms", "probably, should appear, seems", "bg-amber-400/20"],
    ["Optics", "55 terms", "keep quiet, off record, avoid optics", "bg-teal-400/20"],
    ["Sentiment", "VADER", "positive tone during blackout", "bg-sky-400/20"],
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {signals.map(([name, count, detail, color]) => (
        <div key={name} className="rounded-lg border border-foreground/10 bg-background p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-foreground/80">{name}</p>
            <span className={`rounded-full px-2 py-0.5 text-xs text-foreground/65 ${color}`}>{count}</span>
          </div>
          <p className="mt-3 font-mono text-xs leading-relaxed text-foreground/55">{detail}</p>
        </div>
      ))}
    </div>
  );
}

function EnronRisk() {
  const weights = [
    ["Gaming", "35%", "w-[35%]", "bg-rose-400/80"],
    ["Temporal", "20%", "w-[20%]", "bg-amber-400/80"],
    ["Optics", "15%", "w-[15%]", "bg-teal-400/80"],
    ["Hedging", "15%", "w-[15%]", "bg-sky-400/80"],
    ["Sentiment", "10%", "w-[10%]", "bg-violet-400/80"],
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-lg border border-foreground/10 bg-background p-4">
        <p className="text-xs font-medium uppercase tracking-widest text-foreground/45">Weighted signals</p>
        <div className="mt-4 space-y-3">
          {weights.map(([label, value, width, color]) => (
            <div key={label} className="grid grid-cols-[4.5rem_1fr_2.5rem] items-center gap-3">
              <span className="text-xs text-foreground/50">{label}</span>
              <div className="h-2 rounded-full bg-foreground/10">
                <div className={`h-full rounded-full ${color} ${width}`} />
              </div>
              <span className="text-right font-mono text-xs text-foreground/60">{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-lg border border-foreground/10 bg-background p-4">
        <p className="text-xs font-medium uppercase tracking-widest text-foreground/45">Boosts</p>
        <div className="mt-3 space-y-2">
          {["actor involvement", "signal interaction", "evidence tier"].map((boost) => (
            <div key={boost} className="rounded-md border border-foreground/10 bg-foreground/[0.03] px-3 py-2 text-xs text-foreground/60">
              {boost}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EnronFindings() {
  const rows = [
    ["Direct", "0.94", "gaming + mechanics"],
    ["Supporting", "0.81", "actor + transaction"],
    ["Supporting", "0.76", "optics + hedging"],
  ];

  return (
    <div className="overflow-hidden rounded-lg border border-foreground/10 bg-background">
      <div className="grid grid-cols-[1fr_4rem_1.2fr] border-b border-foreground/10 bg-foreground/[0.04] px-3 py-2 text-xs font-medium text-foreground/55">
        <span>Tier</span>
        <span>Risk</span>
        <span>Reason</span>
      </div>
      {rows.map(([tier, score, reason]) => (
        <div key={`${tier}-${score}`} className="grid grid-cols-[1fr_4rem_1.2fr] border-b border-foreground/10 px-3 py-3 text-xs text-foreground/60 last:border-b-0">
          <span>{tier}</span>
          <span className="font-mono text-foreground/75">{score}</span>
          <span>{reason}</span>
        </div>
      ))}
    </div>
  );
}

function EMSegmentation() {
  const panels = [
    ["Raw pixels", ["#1d4ed8", "#0f766e", "#f59e0b", "#7c3aed", "#0369a1", "#f97316"]],
    ["Cluster map", ["#2563eb", "#2563eb", "#f59e0b", "#7c3aed", "#2563eb", "#f59e0b"]],
    ["Compressed", ["#2563eb", "#2563eb", "#f59e0b", "#f59e0b", "#7c3aed", "#7c3aed"]],
  ] as const;

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {panels.map(([title, colors]) => (
        <div key={title} className="rounded-lg border border-foreground/10 bg-background p-3">
          <div className="grid grid-cols-5 gap-1">
            {Array.from({ length: 25 }, (_, index) => (
              <span
                key={index}
                className="aspect-square rounded-sm"
                style={{ backgroundColor: colors[(index + Math.floor(index / 5)) % colors.length] }}
              />
            ))}
          </div>
          <p className="mt-3 text-center text-xs font-medium text-foreground/60">{title}</p>
        </div>
      ))}
    </div>
  );
}

function EMKMeans() {
  const points = [
    [54, 58, "#2563eb"],
    [82, 82, "#2563eb"],
    [118, 48, "#2563eb"],
    [210, 66, "#f59e0b"],
    [248, 92, "#f59e0b"],
    [286, 58, "#f59e0b"],
    [150, 146, "#7c3aed"],
    [194, 174, "#7c3aed"],
    [236, 142, "#7c3aed"],
  ] as const;

  return (
    <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
      <div className="h-52 rounded-lg border border-foreground/10 bg-background p-3">
        <svg viewBox="0 0 340 210" className="h-full w-full" role="img" aria-label="K-means cluster assignment">
          <path d="M25 25 H315 V185 H25 Z" fill="none" stroke="currentColor" strokeOpacity="0.08" />
          {[80, 150, 230].map((x) => (
            <circle key={x} cx={x} cy={105} r="8" fill="currentColor" fillOpacity="0.18" />
          ))}
          {points.map(([cx, cy, color], index) => (
            <circle key={index} cx={cx} cy={cy} r="6" fill={color} fillOpacity="0.9" />
          ))}
          <path d="M80 105 L54 58 M150 105 L150 146 M230 105 L248 92" stroke="currentColor" strokeOpacity="0.18" />
        </svg>
      </div>
      <div className="grid gap-2">
        <LabNode title="Assign" detail="each pixel moves to its nearest centroid" />
        <LabNode title="Update" detail="centroids shift to the mean of assigned pixels" />
      </div>
    </div>
  );
}

function EMGMM() {
  return (
    <div className="grid gap-3 sm:grid-cols-[1fr_0.9fr]">
      <div className="h-52 rounded-lg border border-foreground/10 bg-background p-3">
        <svg viewBox="0 0 340 210" className="h-full w-full" role="img" aria-label="Gaussian mixture soft responsibilities">
          <ellipse cx="116" cy="102" rx="86" ry="42" fill="#2563eb" fillOpacity="0.16" stroke="#2563eb" strokeOpacity="0.45" />
          <ellipse cx="210" cy="104" rx="80" ry="48" fill="#f59e0b" fillOpacity="0.16" stroke="#f59e0b" strokeOpacity="0.45" />
          <ellipse cx="170" cy="136" rx="70" ry="38" fill="#7c3aed" fillOpacity="0.16" stroke="#7c3aed" strokeOpacity="0.45" />
          <circle cx="166" cy="108" r="7" fill="currentColor" fillOpacity="0.75" />
          <text x="166" y="91" textAnchor="middle" className="fill-current text-[11px]" opacity="0.55">
            pixel
          </text>
        </svg>
      </div>
      <div className="rounded-lg border border-foreground/10 bg-background p-4">
        <p className="text-xs font-medium uppercase tracking-widest text-foreground/45">Responsibilities</p>
        {[
          ["blue", "0.42", "w-[42%]", "bg-blue-500/80"],
          ["gold", "0.36", "w-[36%]", "bg-amber-500/80"],
          ["violet", "0.22", "w-[22%]", "bg-violet-500/80"],
        ].map(([name, value, width, color]) => (
          <div key={name} className="mt-3 grid grid-cols-[3rem_1fr_2.5rem] items-center gap-2">
            <span className="text-xs text-foreground/50">{name}</span>
            <div className="h-2 rounded-full bg-foreground/10">
              <div className={`h-full rounded-full ${color} ${width}`} />
            </div>
            <span className="text-right font-mono text-xs text-foreground/60">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EMLoop() {
  return (
    <div className="grid gap-3 sm:grid-cols-[1fr_1fr_0.9fr]">
      <LabNode title="E step" detail="compute per-pixel responsibility for every Gaussian component" />
      <LabNode title="M step" detail="re-estimate means, covariances, and mixing coefficients" />
      <div className="rounded-lg border border-foreground/10 bg-background p-4 sm:row-span-2">
        <p className="text-xs font-medium uppercase tracking-widest text-foreground/45">Converges</p>
        <div className="mt-4 space-y-2">
          {["log likelihood", "MU", "SIGMA", "PI"].map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-teal-400/80" />
              <span className="text-xs text-foreground/60">{item}</span>
              <span className="ml-auto font-mono text-xs text-foreground/45">{index < 1 ? "10x" : "stable"}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-lg border border-foreground/10 bg-background p-4 sm:col-span-2">
        <div className="h-2 rounded-full bg-foreground/10">
          <div className="h-full w-[78%] rounded-full bg-teal-400/80" />
        </div>
        <p className="mt-3 text-xs leading-relaxed text-foreground/55">
          Vectorized E steps avoid the huge intermediate matrices that make naive loops blow up.
        </p>
      </div>
    </div>
  );
}

function EMBIC() {
  const bars = [
    ["k=3", "w-[62%]", false],
    ["k=5", "w-[38%]", true],
    ["k=8", "w-[54%]", false],
    ["k=12", "w-[78%]", false],
  ] as const;

  return (
    <div className="grid gap-4 sm:grid-cols-[1fr_0.9fr]">
      <div className="rounded-lg border border-foreground/10 bg-background p-4">
        <p className="text-xs font-medium uppercase tracking-widest text-foreground/45">BIC sweep</p>
        <div className="mt-4 space-y-3">
          {bars.map(([label, width, selected]) => (
            <div key={label} className="grid grid-cols-[3rem_1fr] items-center gap-3">
              <span className="font-mono text-xs text-foreground/55">{label}</span>
              <div className="h-3 rounded-full bg-foreground/10">
                <div className={`h-full rounded-full ${selected ? "bg-teal-400/85" : "bg-amber-400/55"} ${width}`} />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-foreground/55">Lower score wins: fit quality balanced against model complexity.</p>
      </div>
      <div className="rounded-lg border border-foreground/10 bg-background p-4">
        <p className="text-xs font-medium uppercase tracking-widest text-foreground/45">Point cloud</p>
        <div className="mt-4 grid grid-cols-6 gap-1.5">
          {Array.from({ length: 36 }, (_, index) => {
            const color = index % 5 < 2 ? "bg-blue-500/70" : index % 5 === 2 ? "bg-amber-500/70" : "bg-violet-500/70";
            return <span key={index} className={`aspect-square rounded-full ${color}`} />;
          })}
        </div>
      </div>
    </div>
  );
}
