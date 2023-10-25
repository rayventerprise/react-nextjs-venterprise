import React from 'react'
import Link from 'next/link'

export const WhoPanel = () =>
  <div className="w-full relative py-20">
    <div className="home-page-pattern"/>
    <div className="md:w-[600px] space-y-12">
      <div className="text-5xl">
        Hey I'm <b className="header-font">Ray</b>.
      </div>
      <div className="text-xl md:max-w-[400px]">
        I am a full stack engineer and startup enthusiast.
        I specialize in creating modern, user-friendly
        web & mobile experiences.
      </div>
      <div className="space-x-6">
        <Link href="/#projects">
          <button className="btn px-8 py-4 bg-primary text-white uppercase shadow-lg">
            View Work
          </button>
        </Link>
        <Link href="/contact">
          <button className="btn px-8 py-4 bg-white border border-gray-100 text-black uppercase shadow-lg">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  </div>
