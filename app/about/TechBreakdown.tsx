import type { ReactNode } from "react";
import { Reveal } from "@/app/components/ui/Reveal";
import {
  HardDrivesIcon,
  PaintBrushIcon,
  DevicesIcon,
  DatabaseIcon,
  CloudIcon,
} from "@/app/components/ui/icons";

interface Skill {
  label: string;
  years: number;
  subLabel?: string;
  // Optional explicit tier override (otherwise derived from years).
  level?: "Expert" | "Proficient" | "Familiar";
}

interface Category {
  name: string;
  icon: ReactNode;
  skills: Skill[];
}

// Map years of experience to a proficiency tier (1-3).
function levelFor(years: number): { label: string; rank: number } {
  if (years >= 7) return { label: "Expert", rank: 3 };
  if (years >= 4) return { label: "Proficient", rank: 2 };
  return { label: "Familiar", rank: 1 };
}

function Meter({ rank }: { rank: number }) {
  return (
    <span className="flex gap-0.5" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-4 rounded-full ${
            i < rank ? "bg-primary" : "bg-[rgba(var(--border))]"
          }`}
        />
      ))}
    </span>
  );
}

const categories: Category[] = [
  {
    name: "Backend",
    icon: <HardDrivesIcon className="h-6 w-6" />,
    skills: [
      { label: "Laravel", years: 9 },
      { label: "Node", years: 8 },
      { label: "GraphQL", years: 5 },
      { label: "Elastic Search", years: 5 },
      { label: "Ruby on Rails", years: 2, level: "Proficient" },
      { label: "Go", years: 2 },
    ],
  },
  {
    name: "Frontend",
    icon: <PaintBrushIcon className="h-6 w-6" />,
    skills: [
      { label: "Next.js", years: 8 },
      { label: "React", years: 8 },
      { label: "TypeScript", years: 7 },
      { label: "Angular", years: 3 },
      { label: "Vue.js", years: 7 },
      { label: "TailwindCSS", years: 5 },
    ],
  },
  {
    name: "Mobile Apps",
    icon: <DevicesIcon className="h-6 w-6" />,
    skills: [
      { label: "Capacitor & Ionic", years: 7 },
      { label: "React Native", years: 3 },
    ],
  },
  {
    name: "Data Storage",
    icon: <DatabaseIcon className="h-6 w-6" />,
    skills: [
      { label: "MongoDB", years: 3 },
      { label: "Redis", years: 5 },
      { label: "MySQL", years: 9 },
      { label: "PostgreSQL", years: 3, level: "Proficient" },
    ],
  },
  {
    name: "Infrastructure",
    icon: <CloudIcon className="h-6 w-6" />,
    skills: [
      { label: "AWS", years: 7, subLabel: "RDS, EC2, S3, SQS, Lambda, DynamoDB" },
      { label: "Azure", years: 3 },
      { label: "Docker", years: 7 },
    ],
  },
];

const legend = [
  { label: "Expert", rank: 3 },
  { label: "Proficient", rank: 2 },
  { label: "Familiar", rank: 1 },
];

export function TechBreakdown() {
  return (
    <div className="flex flex-col">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <Reveal key={cat.name} delay={(i % 3) * 80}>
            <div className="card h-full p-6">
              <div className="mb-5 flex items-center gap-2 text-primary">
                {cat.icon}
                <h3 className="header-font text-lg uppercase tracking-wide text-current">
                  {cat.name}
                </h3>
              </div>
              <ul className="space-y-3.5">
                {cat.skills.map((skill) => {
                  const lvl = skill.level
                    ? { label: skill.level, rank: { Expert: 3, Proficient: 2, Familiar: 1 }[skill.level] }
                    : levelFor(skill.years);
                  return (
                    <li key={skill.label} className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-medium">{skill.label}</div>
                        {skill.subLabel && (
                          <div className="mt-0.5 text-xs opacity-60">{skill.subLabel}</div>
                        )}
                      </div>
                      <div className="flex shrink-0 flex-col items-end gap-1">
                        <Meter rank={lvl.rank} />
                        <span className="text-[11px] uppercase tracking-wide opacity-50">
                          {lvl.label}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs opacity-60">
        {legend.map((t) => (
          <span key={t.label} className="flex items-center gap-2">
            <Meter rank={t.rank} />
            {t.label}
          </span>
        ))}
      </div>
    </div>
  );
}
