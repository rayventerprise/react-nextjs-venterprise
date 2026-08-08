import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/app/components/ui/Reveal";
import { ProjectCard } from "@/app/components/project/ProjectCard";
import { ScrollFloat } from "@/app/components/effects/ScrollFloat";
import { BrowserFrame } from "@/app/components/ui/DeviceFrames";
import { GithubIcon, MediumIcon, ArrowIcon } from "@/app/components/ui/icons";
import { social } from "@/lib/site";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 py-24">
      <div className="content-container">
        <Reveal>
          <div className="mb-12 flex items-end justify-between">
            <h2 className="header-font text-3xl md:text-4xl">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <span className="hidden text-sm uppercase tracking-widest opacity-50 sm:block">
              Selected work
            </span>
          </div>
        </Reveal>

        <div className="space-y-8">
          <Reveal>
            <ScrollFloat intensity={1}>
              <ProjectCard
                href="/amazon"
                gradient="from-amber-600 via-yellow-600 to-amber-700"
                title="Amazon"
                description="An internal workspace compute platform for Amazon economists to run AI/ML workloads."
                stack={["React", "Python", "Java", "Kubernetes", "CI/CD Pipelines", "AWS CDK (IaC)"]}
                visual={
                  <BrowserFrame
                    src="/images/projects/amazon/workspace-show.png"
                    alt="Amazon economist workspace dashboard"
                    width={1024}
                    height={1024}
                    className="w-[300px] rotate-2 md:w-[360px]"
                  />
                }
              />
            </ScrollFloat>
          </Reveal>

          <Reveal>
            <ScrollFloat intensity={0.8}>
              <ProjectCard
                href="/pizzamico"
                gradient="from-emerald-600 via-green-600 to-emerald-700"
                title="Pizzamico"
                description="A branded online ordering platform for restaurants."
                stack={["React", "Python", "Next.js", "Laravel", "Ionic", "Node.js"]}
                visual={
                  <Image
                    src="/images/projects/pizzamico/iphone-menu.png"
                    alt="Pizzamico ordering app menu screen"
                    width={1570}
                    height={2932}
                    className="h-auto w-[190px] drop-shadow-2xl md:w-[225px]"
                  />
                }
              />
            </ScrollFloat>
          </Reveal>
        </div>

        {/* Links out */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card flex h-full flex-col items-start gap-4 p-8">
              <p className="text-lg opacity-80">Want to see some of my code?</p>
              <Link
                href={social.github}
                target="_blank"
                className="btn btn-outline group mt-auto flex items-center gap-3 px-6 py-3 no-underline"
              >
                <GithubIcon className="h-6 w-6" />
                <span>GitHub Repositories</span>
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="card flex h-full flex-col items-start gap-4 p-8">
              <p className="text-lg opacity-80">Want to see some of my articles?</p>
              <Link
                href={social.medium}
                target="_blank"
                className="btn btn-outline group mt-auto flex items-center gap-3 px-6 py-3 no-underline"
              >
                <MediumIcon className="h-6 w-6" />
                <span>Medium Articles</span>
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
