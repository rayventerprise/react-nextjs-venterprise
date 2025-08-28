import React from 'react'
import Image from "next/image";
import {ProjectCard} from "@/app/home-page/ProjectCard";
// @ts-ignore
import {GithubLogo, MediumLogo} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export const ProjectsPanel = () => {
  return  (
    <div className="flex justify-center" id="projects">
      <div className="w-[800px]">
        <div className="w-full py-6">
          <h1 className="text-2xl header-font">FEATURED PROJECTS</h1>
        </div>
        <div className="w-full">
          <ProjectCard gradientClass="from-yellow-800 to-yellow-600" url="/amazon">
            <div className="space-y-8">
              <div className="text-3xl font-bold uppercase header-font">
                Amazon
              </div>
              <div className="text-lg w-[300px]">
                An internal workspace compute platform for Amazon economists to run AI/ML workloads.
              </div>
              <div className="hidden md:flex w-[250px] flex-wrap">
                <div className="stack-badge">React</div>
                <div className="stack-badge">Python</div>
                <div className="stack-badge">Java</div>
                <div className="stack-badge">Kubernetes</div>
                <div className="stack-badge">CI/CD Pipelines</div>
                <div className="stack-badge">AWS CDK (IaC)</div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 rotate-[12deg]">
              <Image
                      src="/images/projects/amazon/amazon.png"
                      alt="showcase amazon project"
                      width={200}
                      height={120}
                      loading="eager"
                  />
            </div>
          </ProjectCard>
          <ProjectCard gradientClass="from-green-800 to-green-600" url="/pizzamico">
            <div className="space-y-8">
              <div className="text-3xl font-bold uppercase header-font">
                Pizzamico
              </div>
              <div className="text-lg w-[250px]">
                A branded online ordering platform for restaurants.
              </div>
              <div className="w-[250px] flex-wrap hidden md:flex">
                <div className="stack-badge">React</div>
                <div className="stack-badge">Python</div>
                <div className="stack-badge">NextJS</div>
                <div className="stack-badge">Laravel</div>
                <div className="stack-badge">Ionic</div>
                <div className="stack-badge">NodeJS</div>
              </div>
            </div>

            <Image
                src="/images/projects/pizzamico/iphone-menu.png"
                alt="showcase-1"
                className="md:mt-32"
                width={250}
                height={470}
                loading="eager"
            />
          </ProjectCard>
          <div className="grid grid-cols-1 space-y-8 md:space-y-0 md:grid-cols-2">
            <div className="flex flex-col items-center w-full space-y-4">
              <span className="text-lg">Want to see some of my code?</span>

              <Link href="https://github.com/rayventerprise" target="_blank" className="hover:no-underline">
                <button className="btn flex items-center space-x-4 border border-gray-600 px-8 py-4">
                  <GithubLogo width={32} height={32}/>
                  <span>GitHub Repositories</span>
                </button>
              </Link>
            </div>
            <div className="flex flex-col items-center w-full space-y-4">
              <span className="text-lg">Want to see some of my articles?</span>

              <Link href="https://medium.com/@rayventerprise" target="_blank" className="hover:no-underline">
                <button className="btn flex items-center space-x-4 border border-gray-600 px-8 py-4">
                  <MediumLogo width={32} height={32}/>
                  <span>Medium Articles</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
