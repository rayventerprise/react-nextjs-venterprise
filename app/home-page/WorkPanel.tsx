'use client'
import React from 'react'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'

export const WorkPanel = () =>
  <div className="w-full relative py-20 justify-center items-center flex">
    <div className="max-w-[600px] text-center flex items-center flex-col space-y-10">
      <div className="flex items-center space-x-2 text-3xl font-bold">
        <span>I work with</span>
        <span className="text-primary header-font">
          <Typewriter
              options={{
                strings: ['React.', 'TypeScript.', 'Laravel.', 'NodeJS.', 'AWS.', 'NextJS.', 'Kubernetes.', 'Ionic.'],
                autoStart: true,
                loop: true,
              }}
            />
        </span>
      </div>
      <span className="text-lg">
        I build responsive websites and applications alone or as part of a team.
        I like clean, modern apps that delight users and are WCAG compliant.
        Besides web I can also develop for mobile devices using cross-platform SDKs like React Native or Ionic.
      </span>
      <Link href="/about">
        <button className="btn px-8 py-4 border border-gray-600 uppercase">
          <span>More About Me</span>
        </button>
      </Link>
    </div>
  </div>
