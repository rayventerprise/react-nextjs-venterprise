import React from 'react'
import Link from 'next/link'

export const WhoPanel = () =>
  <div className="w-full relative py-20  flex justify-center">
    <div className="home-page-pattern"/>
    <div className="md:w-[600px] space-y-12 text-center">
      <div className="text-5xl">
        Hey I'm <b className="header-font">Ray</b>.
      </div>
      <div className="text-xl text-center">
        I am a full stack engineer, team lead, and startup enthusiast with over a decade of experience.
        I've worked in both startups and large enterprises to build scalable web and mobile applications.
      </div>
      <div className="space-y-2 md:space-y-0 sm:space-x-2 md:space-x-6">
        <Link href="/#projects">
          <button className="btn px-8 py-4 bg-primary text-white uppercase shadow-lg">
            <span>View Work</span>
          </button>
        </Link>
        <Link href="/contact">
          <button className="btn px-8 py-4 bg-white border border-gray-100 text-black uppercase shadow-lg" data-cy="contact-me">
            <span>Contact Me</span>
          </button>
        </Link>
      </div>
    </div>
  </div>
