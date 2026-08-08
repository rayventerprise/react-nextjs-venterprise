import { Reveal } from "@/app/components/ui/Reveal";

interface Role {
  company: string;
  title: string;
  dates: string;
  location?: string;
  description?: string;
  current?: boolean;
}

const roles: Role[] = [
  {
    company: "BRG",
    title: "Senior Software Engineer",
    dates: "Oct 2025 – Present",
    location: "Remote",
    description:
      "Senior full-stack engineering across the product, working primarily in Ruby on Rails.",
    current: true,
  },
  {
    company: "Amazon",
    title: "Senior Software Development Engineer",
    dates: "Feb 2024 – Oct 2025",
    location: "Austin, TX",
    description:
      "Built internal tooling for customizable compute environments (GPU/CPU configs, data sources) powering scalable AI/ML workflows and experimentation.",
  },
  {
    company: "Pizzamico",
    title: "Senior Software Engineer",
    dates: "Jan 2017 – Feb 2024",
    location: "Remote",
    description:
      "Built the full-stack ordering platform from the ground up (Laravel, Python, React), scaling to 500K+ users and millions of restaurant orders. Grew from engineer to team lead, leading a team of 3 engineers.",
  },
  {
    company: "Golevel, LLC",
    title: "Junior Software Engineer",
    dates: "Feb 2015 – Jan 2017",
    location: "Florida",
    description:
      "Built MVPs and production sites for clients in a fast-paced agency environment (Vue, Angular, React, PHP).",
  },
];

export function ExperienceTimeline() {
  return (
    <ol className="relative ml-3 border-l border-[rgba(var(--border))]">
      {roles.map((r, i) => (
        <Reveal
          as="li"
          key={`${r.company}-${r.title}`}
          delay={i * 60}
          className="relative mb-10 pl-8 last:mb-0"
        >
          <span
            className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[rgb(var(--background))] ${
              r.current ? "bg-primary" : "bg-[rgb(var(--foreground))] opacity-40"
            }`}
            aria-hidden="true"
          />
          <div className="text-xs uppercase tracking-widest opacity-60">
            {r.dates}
            {r.location ? ` · ${r.location}` : ""}
          </div>
          <h3 className="mt-1 text-lg font-semibold">
            {r.title} <span className="opacity-40">·</span>{" "}
            <span className="text-primary">{r.company}</span>
          </h3>
          {r.description && (
            <p className="mt-1.5 leading-relaxed opacity-80">{r.description}</p>
          )}
        </Reveal>
      ))}
    </ol>
  );
}
