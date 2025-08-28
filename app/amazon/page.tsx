import React from 'react'
import {TechStack} from '@/app/TechStack'
import {TechBlock} from '@/app/TechBlock'
// @ts-ignore
import {ArrowBendUpLeft, ArrowBendUpRight, HardDrives, Users} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import {Metadata} from "next";
import Image from "next/image";
import {AnimateDiv} from "@/app/AnimateDiv";

export const metadata: Metadata = {
  title: 'Amazon'
}
export default function Page() {
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center pb-20">
          <div className="space-y-8 md:pr-12">
            <div className="text-5xl font-bold">Amplifying <span className="header-font text-primary">Amazon</span> economists.</div>
            <div className="max-w-[650px]">
              Empowering Amazon's economists to analyze and forecast
              the impact of various data sets, and run AI/ML workloads all through a web application. We provided them the ability to provision
              their workspaces without having to provision infrastructure or manage credentials.
            </div>
          </div>


          <AnimateDiv className="bg-gray-100 dark:bg-gray-50 rounded-lg mt-16 md:mt-0 p-4 rotate-[12deg]">
            <Image
                    src="/images/projects/amazon/amazon.png"
                    alt="showcase amazon project"
                    width={200}
                    height={120}
                    loading="eager"
                />
          </AnimateDiv>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 pt-16">
        <div className="flex justify-center">
          <AnimateDiv className="bg-gray-100 rounded box-border overflow-hidden p-3">
            <Image
                src="/images/projects/amazon/placeholder-400.png"
                alt="showcase amazon workspace"
                className="w-full"
                width={400}
                height={400}
                loading="eager"
            />
          </AnimateDiv>
        </div>
        <div>
          <div className="lg:pl-12 pt-6 lg:pt-0 text-lg lg:flex lg:items-center lg:h-full">
            Amazon economists and employees were able to easily create and manage their workspaces, run complex analyses, and visualize their results all in one place.
            They could run Jupyter notebooks, R scripts, and SQL queries without having to worry about infrastructure or credentials.
            Workspaces were provisioned on-demand, and users could easily share their work with colleagues, tools like Stata GUI, Spark UI, VSCode were all integrated.
          </div>
        </div>
      </div>
      <div>
        <div className="w-full h-[12px] dark:bg-gray-500 bg-gray-200 my-32"/>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="lg:pr-12 pt-6 lg:pt-0 text-lg lg:flex lg:items-center lg:h-full">
            Users could directly open up VSCode from their workspace and start coding right away.
            They would connect data sources and run their analyses seamlessly.
            <br/><br/>
            I served as the lead front end developer on this project, working closely with UX designers and backend engineers to deliver a seamless user experience.
            I also did backend work, helping to design and implement the API that powered the application.
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <AnimateDiv className="bg-gray-100 rounded p-3">
            <Image
                    src="/images/projects/amazon/placeholder-400.png"
                    alt="showcase amazon workspace vscode"
                    width={400}
                    height={400}
                    loading="eager"
                />
          </AnimateDiv>
        </div>
      </div>
      <div>
        <div className="flex w-full md:justify-evenly space-y-4 md:space-y-0 md:items-start flex-col md:flex-row pt-24">
          <TechBlock name="Technology" icon={<HardDrives size={24}/>}>
            <TechStack label="Java" />
            <TechStack label="Python"/>
            <TechStack label="React"/>
            <TechStack label="AWS CDK"/>
            <TechStack label="Lambda"/>
            <TechStack label="Kubernetes & EKS"/>

          </TechBlock>
          <TechBlock name="Roles" icon={<Users size={24}/>}>
            <TechStack  label="Lead Front End Developer (70%)"/>
            <TechStack label="Back End Developer (30%)"/>
          </TechBlock>
        </div>

        <div className="flex justify-between py-6">
          <Link href="/#projects">
            <div className="space-y-3 cursor-pointer">
              <div className="text-gray-700">
                RETURN TO
              </div>
              <div className="font-bold text-3xl">
                WORK
              </div>
              <ArrowBendUpLeft className="text-primary" size={84}/>
            </div>
          </Link>
          <Link href="/pizzamico">
            <div className="space-y-3 text-right cursor-pointer">
              <div className="text-gray-700">
                NEXT
              </div>
              <div className="font-bold text-3xl">
                PIZZAMICO
              </div>
              <div className="flex justify-end">
                <ArrowBendUpRight className="text-primary" size={84}/>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
