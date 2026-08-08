import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/app/components/ui/Reveal";
import { TechBreakdown } from "@/app/about/TechBreakdown";
import { ExperienceTimeline } from "@/app/about/ExperienceTimeline";
import { ContactModal } from "@/app/components/contact/ContactModal";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Ray Vandenberg: a decade of full stack, mobile, and infrastructure experience across startups and enterprise.",
};

export default function AboutPage() {
  return (
    <article className="content-container py-20">
      {/* About me */}
      <section className="flex flex-col items-center gap-12 md:flex-row md:items-start">
        <Reveal className="w-full space-y-7 md:w-3/5">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center">
            <Image
              src="/images/ray.jpg"
              alt="Raymond Vandenberg"
              width={288}
              height={288}
              className="h-28 w-28 shrink-0 rounded-2xl object-cover shadow-lg ring-1 ring-[rgba(var(--border))] md:h-32 md:w-32"
              priority
            />
            <h1 className="header-font text-center text-5xl font-bold sm:text-left md:text-6xl">
              About <span className="text-primary">me.</span>
            </h1>
          </div>
          <div className="space-y-5 text-center leading-relaxed opacity-80 md:text-left">
            <p>
              I wrote my first line of code at 12 and never really stopped. Over the
              past decade I&apos;ve shipped across the stack (front-end, back-end, and
              mobile) and picked up sharp product and growth instincts from years
              inside startups.
            </p>
            <p>
              Early on, I built and sold a side project that grew past a million
              monthly views, a crash course in scaling systems and iterating fast
              under real traffic.
            </p>
            <p>
              Since then I&apos;ve led engineering teams and, just as happily, gone
              heads-down as an individual contributor.
            </p>
          </div>
        </Reveal>

        {/* Stat highlights */}
        <Reveal delay={120} className="grid w-full grid-cols-2 gap-4 md:w-2/5">
          {[
            { value: "10+", label: "Years experience" },
            { value: "500K+", label: "Users reached" },
            { value: "Millions", label: "Orders processed" },
            { value: "20+", label: "Technologies" },
          ].map((stat) => (
            <div key={stat.label} className="card flex flex-col justify-center p-6 text-center">
              <div className="header-font text-3xl text-primary md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm opacity-70">{stat.label}</div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Experience */}
      <section className="pt-24">
        <Reveal>
          <h2 className="header-font mb-10 text-center text-4xl">Experience</h2>
        </Reveal>
        <div className="mx-auto max-w-2xl">
          <ExperienceTimeline />
        </div>
      </section>

      {/* Technology */}
      <section className="pt-24">
        <Reveal>
          <h2 className="header-font mb-10 text-center text-4xl">Technology</h2>
        </Reveal>
        <TechBreakdown />
      </section>

      {/* Fun project CTA */}
      <section className="pt-24">
        <Reveal>
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-[rgba(var(--border))] bg-[rgb(var(--surface))] px-8 py-16 text-center">
            <h2 className="header-font text-3xl md:text-4xl">
              Have a fun &amp; interesting project?
            </h2>
            <p className="text-lg opacity-80">Find out if I can help.</p>
            <ContactModal className="btn btn-primary px-10 py-4" />
          </div>
        </Reveal>
      </section>
    </article>
  );
}
