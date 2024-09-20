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
  title: 'Pizzamico'
}
export default function Page() {
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center pb-20">
          <div className="space-y-8">
            <div className="text-5xl font-bold">Meet <span className="header-font text-primary">Pizzamico.</span></div>
            <div className="max-w-[500px]">
              The powerhouse to simplify restaurant ecommerce. Take GrubHub, Shopify, DoorDash and blend them together to
              make a beautiful branded solution for restaurants.
            </div>
          </div>

          <Image
                src="/images/projects/pizzamico/iphone-home.png"
                width={250}
                height={470}
                alt="Pizzamico image design"
                className="-rotate-12 md:mr-12"/>
        </div>
      </div>
      <div className="bg-[#202020] w-full flex items-center justify-center">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 py-12">
            <PhoneAppPreview src="/images/projects/pizzamico/iphone-cart.png"/>
            <PhoneAppPreview src="/images/projects/pizzamico/iphone-edit-item.png" />
            <PhoneAppPreview src="/images/projects/pizzamico/iphone-menu.png"/>
            <PhoneAppPreview src="/images/projects/pizzamico/iphone-checkout.png" />
            <PhoneAppPreview src="/images/projects/pizzamico/iphone-pos-index.png"/>
            <PhoneAppPreview src="/images/projects/pizzamico/iphone-pos-order.png" />
            <PhoneAppPreview src="/images/projects/pizzamico/iphone-dashboard.png"/>
            <PhoneAppPreview src="/images/projects/pizzamico/iphone-settings.png" />
            <PhoneAppPreview src="/images/projects/pizzamico/iphone-reports.png"/>
          </div>
        </div>
      </div>
      <div>
        <div className="flex w-full md:justify-evenly space-y-4 md:space-y-0 md:items-start flex-col md:flex-row pt-24">
          <TechBlock name="Technology" icon={<HardDrives size={24}/>}>
            <TechStack label="Laravel" />
            <TechStack label="Node"/>
            <TechStack label="React"/>
            <TechStack label="NextJS"/>
            <TechStack label="Ionic"/>
            <TechStack label="Angular*"/>
            <TechStack label="Vue*"/>
          </TechBlock>
          <TechBlock name="Platforms" icon={<AppleLogo size={24}/>}>
            <TechStack  label="iOS"/>
            <TechStack label="Android"/>
            <TechStack label="Web"/>
          </TechBlock>
          <TechBlock name="Roles" icon={<Users size={24}/>}>
            <TechStack  label="Full Stack Developer"/>
            <TechStack label="Team Lead"/>
          </TechBlock>
        </div>

        <div className="text-sm text-center py-12">*Technologies used in previous builds of the app.</div>

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
          <Link href="/fpvexchange">
            <div className="space-y-3 text-right cursor-pointer">
              <div className="text-gray-700">
                NEXT
              </div>
              <div className="font-bold text-3xl">
                FPVExchange
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
