import { Reveal } from "@/app/components/ui/Reveal";
import { roles } from "@/lib/site";

// Roles live in lib/site.ts so this timeline, the Person JSON-LD, and the
// generated /resume.txt all render the same history.

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
