import {TechBreakdown} from '../TechBreakdown'
import React from 'react'
import {AboutMeTextPanel} from "@/app/about/AboutMeTextPanel";
import {FunProjectPanel} from "@/app/about/FunProjectPanel";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'About'
}

export default function Page() {
  return (
    <>
      <AboutMeTextPanel/>
      <div className="w-full relative py-4">
        <div className="flex justify-center w-full px-4 md:px-0">
          <h1 className="relative text-4xl py-6 header-font">Technology</h1>
        </div>
        <TechBreakdown/>
      </div>
      <FunProjectPanel/>
    </>
  )
}
