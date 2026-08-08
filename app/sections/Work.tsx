import Link from "next/link";
import { Typewriter } from "@/app/components/ui/Typewriter";
import { Reveal } from "@/app/components/ui/Reveal";

const stack = [
  "React", "TypeScript", "Next.js", "Node.js",
  "Laravel", "AWS", "Kubernetes", "Ionic",
];

export function Work() {
  return (
    <section id="work" className="scroll-mt-28 py-24">
      <div className="content-container flex flex-col items-center text-center">
        <Reveal>
          <h2 className="header-font flex flex-wrap items-center justify-center gap-x-3 text-3xl font-bold md:text-5xl">
            <span>I work with</span>
            <span className="text-primary">
              <Typewriter words={["React.", "TypeScript.", "Laravel.", "Node.js.", "AWS.", "Next.js.", "Kubernetes.", "Ionic."]} />
            </span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed opacity-80">
            I architect and ship production web and mobile applications, leading teams
            and staying hands-on in the codebase. I care about clean, accessible
            (WCAG-compliant) systems that scale and hold up under real traffic. Beyond
            web, I build cross-platform mobile apps with React Native and Ionic.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <ul className="mt-10 flex max-w-2xl flex-wrap justify-center gap-2.5">
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-[rgba(var(--border))] bg-[rgb(var(--surface))] px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={240}>
          <Link href="/about" className="btn btn-outline mt-12 px-8 py-4 no-underline">
            <span>More About Me</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
