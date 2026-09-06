import Link from "next/link";
import { ArrowIcon } from "@/app/components/ui/icons";
import { HeroFlow } from "@/app/components/effects/HeroFlow";
import { brand } from "@/lib/site";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Ambient background */}
      <HeroFlow />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            `radial-gradient(closest-side, rgba(${brand.rgb}, 0.55), transparent)`,
        }}
        aria-hidden="true"
      />

      <div className="content-container relative flex flex-col items-center py-28 text-center md:py-36">
        <span className="mb-6 inline-flex animate-fade-up items-center gap-2 rounded-full border border-[rgba(var(--border))] bg-[rgb(var(--surface))] px-4 py-1.5 text-xs font-medium uppercase tracking-widest opacity-80">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          10+ years · Startups to enterprise
        </span>

        {/* One h1 carrying both the greeting and the actual job title — the
            title is the part search engines and LLM extraction read. */}
        <h1 className="animate-fade-up" style={{ animationDelay: "60ms" }}>
          <span className="header-font block text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Hey, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ray
            </span>
            .
          </span>
          <span className="mt-6 block text-balance text-lg font-medium tracking-tight opacity-70 md:text-2xl">
            Full stack engineer building web, mobile, and AI/ML platforms.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl animate-fade-up text-lg leading-relaxed opacity-80 md:text-xl" style={{ animationDelay: "140ms" }}>
          I&apos;m a full stack engineer, team lead, and startup operator with over
          a decade of experience across startups and large enterprises, building
          scalable web and mobile applications. Most recently at{" "}
          <span className="font-semibold text-primary">Amazon</span>, I built the
          platform that economists used to run{" "}
          <span className="font-semibold text-primary">large-scale AI/ML</span>{" "}
          workloads on demand. I also work with modern AI tooling daily to ship
          products faster.
        </p>

        <div className="mt-12 flex animate-fade-up flex-col items-center gap-4 sm:flex-row" style={{ animationDelay: "220ms" }}>
          <Link href="/#projects" className="btn btn-primary group px-8 py-4 no-underline">
            <span className="flex items-center gap-2">
              View Work
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
          <Link href="/#contact" className="btn btn-outline px-8 py-4 no-underline">
            <span>Contact Me</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
