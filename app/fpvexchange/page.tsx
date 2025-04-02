import React from 'react'
import {PhoneAppPreview} from '../PhoneAppPreview'
import {TechStack} from '@/app/TechStack'
import {TechBlock} from '@/app/TechBlock'
// @ts-ignore
import {AppleLogo, ArrowBendUpLeft, ArrowBendUpRight, HardDrives, Users} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import {Metadata} from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'FPVExchange'
}
export default function Page() {
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center pb-20">
          <div className="space-y-8">
            <div className="text-5xl font-bold">Meet <span className="header-font text-primary">FPVExchange.</span></div>
            <div className="max-w-[500px]">
              The town square for drone hobbyists,
              users create personal profiles, participate in forums,
              buy and sell from others, sync & manage their inventory,
              use our vendor price compare tool,
              and locate others to fly with.
            </div>
          </div>

          <Image
                src="/images/projects/fpv/iphone.png"
                width={250}
                height={470}
                alt="fpvexchange showcase"
                className="-rotate-12 md:mr-12"/>
        </div>
      </div>
      <div className="bg-[#202020] w-full flex items-center justify-center">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 py-12">
            <PhoneAppPreview src="/images/projects/fpv/iphone-home.png" />
            <PhoneAppPreview src="/images/projects/fpv/iphone-chats.png" />
            <PhoneAppPreview src="/images/projects/fpv/iphone-inventory.png"/>
            <PhoneAppPreview src="/images/projects/fpv/iphone-item-edit.png"/>
            <PhoneAppPreview src="/images/projects/fpv/iphone-login.png"/>
            <PhoneAppPreview src="/images/projects/fpv/iphone-offers.png"/>
            <PhoneAppPreview src="/images/projects/fpv/iphone-item.png"/>
            <PhoneAppPreview src="/images/projects/fpv/iphone-friends.png"/>
            <PhoneAppPreview src="/images/projects/fpv/iphone-global-chat.png"/>
          </div>
        </div>
      </div>
      <div>
        <div className="flex w-full md:justify-evenly space-y-4 md:space-y-0 md:items-start flex-col md:flex-row py-24">
          <TechBlock name="Technology" icon={<HardDrives size={24}/>}>
            <TechStack label="GraphQL" />
            <TechStack label="DynamoDB"/>
            <TechStack label="React"/>
            <TechStack label="NextJS"/>
            <TechStack label="ElasticSearch"/>
            <TechStack label="AWS Amplify"/>
          </TechBlock>
          <TechBlock name="Platforms" icon={<AppleLogo size={24}/>}>
            <TechStack  label="iOS"/>
            <TechStack label="Android"/>
            <TechStack label="Web"/>
          </TechBlock>
          <TechBlock name="Roles" icon={<Users size={24}/>}>
            <TechStack  label="Full Stack Developer"/>
            <TechStack  label="Engineering Manager"/>
          </TechBlock>
        </div>

        <div className="flex justify-between py-6">
          <Link href="/pizzamico">
            <div className="space-y-3 cursor-pointer">
              <div className="text-gray-700">
                PREVIOUS
              </div>
              <div className="font-bold text-3xl">
                PIZZAMICO
              </div>
              <ArrowBendUpLeft className="text-primary" size={84}/>
            </div>
          </Link>
          <Link href="/contact">
            <div className="space-y-3 text-right cursor-pointer">
              <div className="text-gray-700">
                NEXT
              </div>
              <div className="font-bold text-3xl">
                CONTACT
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
