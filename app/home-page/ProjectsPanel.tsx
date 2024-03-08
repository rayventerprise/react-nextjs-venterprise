import React from 'react'
import Image from "next/image";
import {ProjectCard} from "@/app/home-page/ProjectCard";
// @ts-ignore
import {GithubLogo, MediumLogo} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
export const ProjectsPanel = () => {
  return  (
    <div className="flex justify-center" style={{ minHeight: 1150 }} id="projects">
      <div className="relative flex flex-col items-center justify-center w-[800px]">
        <div className="w-full py-6">
          <h1 className="relative text-2xl header-font">FEATURED PROJECTS</h1>
        </div>
        <div className="w-full">
          <ProjectCard gradientClass="from-green-800 to-green-600" url="/pizzamico">
            <div className="space-y-8">
              <div className="text-3xl font-bold uppercase header-font">
                Pizzamico
              </div>
              <div className="text-lg w-[250px]">
                Online ordering platform for restaurants.
              </div>
              <div className="w-[250px] flex-wrap hidden md:flex">
                <div className="stack-badge">Laravel</div>
                <div className="stack-badge">React</div>
                <div className="stack-badge">NextJS</div>
                <div className="stack-badge">Ionic</div>
                <div className="stack-badge">NodeJS</div>
              </div>
            </div>

            <Image
                src="/images/projects/pizzamico/iphone-home.png"
                alt="showcase-1"
                className="md:mt-32"
                width={250}
                height={470}
                loading="eager"
            />
          </ProjectCard>
          <ProjectCard gradientClass="from-yellow-800 to-yellow-600" url="/fpvexchange">
            <div className="space-y-8">
              <div className="text-3xl font-bold uppercase header-font">
                FPVExchange
              </div>
              <div className="text-lg w-[250px]">
                Social platform for drones with trading.
              </div>
              <div className="hidden md:flex w-[250px] flex-wrap">
                <div className="stack-badge">React</div>
                <div className="stack-badge">NextJS</div>
                <div className="stack-badge">GraphQL</div>
                <div className="stack-badge">DynamoDB</div>
                <div className="stack-badge">ElasticSearch</div>
                <div className="stack-badge">AWS Amplify</div>
              </div>
            </div>

            <Image
                src="/images/projects/fpv/iphone.png"
                alt="showcase fpv project"
                width={220}
                height={430}
                loading="eager"
                className="rotate-[-12deg]"
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
