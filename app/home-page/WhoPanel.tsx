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
        I am a full stack engineer and startup enthusiast.
        I specialize in creating modern, user-friendly
        web & mobile experiences.
      </div>
      <div className="space-y-2 md:space-y-0 sm:space-x-2 md:space-x-6">
        <Link href="/#projects">
          <button className="btn px-8 py-4 bg-primary text-white uppercase shadow-lg">
            View Work
          </button>
        </Link>
        <Link href="/contact">
          <button className="btn px-8 py-4 bg-white border border-gray-100 text-black uppercase shadow-lg" data-cy="contact-me">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  </div>
