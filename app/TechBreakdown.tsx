import React from 'react'
import {TechStack} from './TechStack'
// @ts-ignore
import {Checks, Cloud, Database, DeviceMobile, HardDrives, PaintBrush} from '@phosphor-icons/react/dist/ssr'
import {TechBlock} from './TechBlock'

export const TechBreakdown = () => {
  return (
    <div className="flex flex-col flex-grow">
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-7 space-y-6 md:space-y-0">
        <TechBlock name="Backend" icon={<HardDrives size={24}/>}>
          <TechStack expert  years={6} label="Laravel" src="/images/tech-stacks/laravel.svg" url="https://laravel.com"/>
          <TechStack expert  years={5} label="Node" src="/images/tech-stacks/nodejs.svg" url="https://nodejs.org"/>
          <TechStack  years={2} label="GraphQL" src="/images/tech-stacks/graphql.svg" url="https://graphql.org"/>
          <TechStack  years={2} label="Elastic Search" src="/images/tech-stacks/elasticsearch.svg" url="https://www.elastic.co"/>
        </TechBlock>

        <TechBlock name="Frontend" icon={<PaintBrush size={24}/>}>
          <TechStack expert  years={5} label="Next.js" src="/images/tech-stacks/nextjs.svg" url="https://nextjs.org"/>
          <TechStack expert  years={5} label="React"  src="/images/tech-stacks/react.svg" url="https://reactjs.org"/>
          <TechStack expert  years={4} label="TypeScript" src="/images/tech-stacks/typescript.svg"  url="https://www.typescriptlang.org"/>
          <TechStack  years={4} label="Angular" src="/images/tech-stacks/angular.svg" url="https://angularjs.org"/>
          <TechStack  years={4} label="Vue.js" src="/images/tech-stacks/vue.svg" url="https://vuejs.org"/>
          <TechStack expert  years={4} label="TailwindCSS" src="/images/tech-stacks/tailwindcss.svg" url="https://www.tailwindcss.com"/>
        </TechBlock>

        <TechBlock name="Mobile Apps" icon={<DeviceMobile size={24}/>}>
          <TechStack expert years={4} label="Capacitor & Ionic" src="/images/tech-stacks/capacitor.svg" url="https://capacitorjs.com"/>
        </TechBlock>

        <TechBlock name="Data Storage" icon={<Database size={24}/>}>
          <TechStack  years={2} label="MongoDB" src="/images/tech-stacks/mongodb.svg" url="https://www.mongodb.com"/>
          <TechStack  years={2} label="Redis"  src="/images/tech-stacks/redis.svg" url="https://redis.io"/>
          <TechStack expert  years={6} label="MySQL" src="/images/tech-stacks/mysql.svg" url="https://www.mysql.com"/>
        </TechBlock>

        <TechBlock name="Infrastructure" icon={<Cloud size={24}/>}>
          <TechStack
                years={4}
                label="AWS"
                subLabel="RDS, EC2, S3, SQS, Lambda, DynamoDB"
                src="/images/tech-stacks/aws.svg"
                url="https://aws.amazon.com/"
              />

          <TechStack  years={6} label="DigitalOcean" src="/images/tech-stacks/digitalocean.svg" url="https://www.digitalocean.com"/>
          <TechStack expert  years={4} label="Docker" src="/images/tech-stacks/docker.svg" url="https://www.docker.com"/>
        </TechBlock>
      </div>
      <div className="flex text-sm py-6 justify-evenly w-full">
        <div className="flex items-center space-x-1">
          <div className="skill-advanced">
            <Checks/>
          </div>
          <span>= Over 5 years</span>
        </div>
      </div>
    </div>
  )
}
