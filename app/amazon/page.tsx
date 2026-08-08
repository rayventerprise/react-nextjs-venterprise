import type { Metadata } from "next";
import { Reveal } from "@/app/components/ui/Reveal";
import { TechBlock } from "@/app/components/ui/TechBlock";
import { ProjectNav } from "@/app/components/project/ProjectNav";
import { ProjectMeta } from "@/app/components/project/ProjectMeta";
import { BrowserFrame } from "@/app/components/ui/DeviceFrames";
import { DotPattern } from "@/app/components/ui/DotPattern";
import { LightboxProvider, LightboxTrigger } from "@/app/components/ui/Lightbox";
import { HardDrivesIcon, UsersIcon } from "@/app/components/ui/icons";

export const metadata: Metadata = {
  title: "Amazon",
  description:
    "An internal workspace compute platform for Amazon economists to run AI/ML workloads.",
};

const highlights = [
  { value: "AI/ML", label: "Large-scale workloads" },
  { value: "On-demand", label: "Workspace provisioning" },
  { value: "Zero", label: "Infra or credentials to manage" },
];

const gallery = [
  { src: "/images/projects/amazon/workspace-show.png", alt: "Amazon economist workspace dashboard", width: 1024, height: 1024 },
  { src: "/images/projects/amazon/workspace-vscode.png", alt: "VS Code running inside an Amazon workspace", width: 1024, height: 1224 },
];

export default function AmazonPage() {
  return (
    <LightboxProvider images={gallery}>
    <article className="content-container py-16">
      {/* Meta eyebrow (outside the band) */}
      <Reveal className="mb-6">
        <ProjectMeta items={["Amazon", "Senior SDE", "Feb 2024 – Oct 2025", "Austin, TX"]} />
      </Reveal>

      {/* Hero band */}
      <Reveal>
        <section className="relative overflow-hidden rounded-3xl border border-[rgba(var(--border))] bg-[rgb(var(--surface))] p-8 md:p-12 lg:p-14">
          {/* Left color clip */}
          <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-amber-400 to-amber-600" aria-hidden="true" />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-2/5"
            style={{ background: "linear-gradient(to right, rgba(245,158,11,0.10), transparent)" }}
            aria-hidden="true"
          />
          <DotPattern />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <h1 className="header-font text-4xl leading-tight md:text-6xl">
                Amplifying <span className="text-amber-500">Amazon</span> economists.
              </h1>
              <p className="text-lg leading-relaxed opacity-80">
                As a Senior Software Development Engineer at Amazon, I helped build the
                internal workspace platform that let economists spin up customizable
                compute environments (GPU/CPU configs and data sources) on demand and
                run large-scale AI/ML workloads, with no infrastructure or credentials
                to manage.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <LightboxTrigger src="/images/projects/amazon/workspace-show.png" className="w-full max-w-[440px] rotate-1">
                <BrowserFrame
                  src="/images/projects/amazon/workspace-show.png"
                  alt="Amazon economist workspace dashboard"
                  width={1024}
                  height={1024}
                  className="w-full"
                  priority
                />
              </LightboxTrigger>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Highlights */}
      <section className="mt-6 grid gap-4 sm:grid-cols-3">
        {highlights.map((h, i) => (
          <Reveal key={h.label} delay={i * 70}>
            <div className="card h-full p-6">
              <div className="header-font text-2xl text-primary md:text-3xl">{h.value}</div>
              <div className="mt-1 text-sm opacity-70">{h.label}</div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Overview */}
      <section className="pt-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="header-font mb-6 text-3xl md:text-4xl">The platform</h2>
          <p className="text-lg leading-relaxed opacity-80">
            Economists and employees created and managed their own workspaces, ran
            complex analyses, and visualized results all in one place, running Jupyter
            notebooks, R scripts, and SQL queries without worrying about infrastructure
            or credentials. Workspaces were provisioned on demand, with tools like Stata
            GUI, Spark UI, and VS Code all integrated.
          </p>
        </Reveal>
      </section>

      {/* Feature: integrated dev environment */}
      <section className="grid items-center gap-10 pt-20 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <div className="text-sm uppercase tracking-widest text-primary">
            Integrated dev environment
          </div>
          <p className="mt-4 text-lg leading-relaxed opacity-90">
            Users could open VS Code directly from their workspace and start coding
            right away, connecting data sources and running analyses seamlessly.
            <br />
            <br />
            I led the front-end and worked closely with UX designers and backend
            engineers to deliver a seamless experience, and contributed across the
            backend, helping design and implement the API that powered the platform.
          </p>
        </Reveal>
        <Reveal delay={100} className="order-1 flex justify-center lg:order-2">
          <LightboxTrigger src="/images/projects/amazon/workspace-vscode.png" className="w-full max-w-[460px]">
            <BrowserFrame
              src="/images/projects/amazon/workspace-vscode.png"
              alt="VS Code running inside an Amazon workspace"
              width={1024}
              height={1224}
              className="w-full"
            />
          </LightboxTrigger>
        </Reveal>
      </section>

      {/* Tech / roles */}
      <section className="grid gap-6 pt-24 md:grid-cols-2">
        <Reveal>
          <TechBlock
            name="Technology"
            icon={<HardDrivesIcon className="h-6 w-6" />}
            items={["Java", "Python", "React", "AWS CDK", "Lambda", "Kubernetes & EKS"]}
          />
        </Reveal>
        <Reveal delay={80}>
          <TechBlock
            name="Roles"
            icon={<UsersIcon className="h-6 w-6" />}
            items={[
              "Senior Software Development Engineer",
              "Full-stack: front-end lead + back-end / API",
            ]}
          />
        </Reveal>
      </section>

      <ProjectNav
        prev={{ label: "Return to", title: "Work", href: "/#projects" }}
        next={{ label: "Next", title: "Pizzamico", href: "/pizzamico" }}
      />
    </article>
    </LightboxProvider>
  );
}
