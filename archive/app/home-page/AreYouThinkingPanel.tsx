import React from 'react'
import Link from 'next/link'

export const AreYouThinkingPanel = () => {
  return <div className="relative w-full py-3" id="contact">
    <div className="flex flex-col justify-center items-center h-[450px] space-y-9">
      <h1 className="relative text-4xl font-bold text-center md:text-left">Are you thinking what I'm thinking?</h1>
      <div>Let's make something <span className="text-secondary">amazing</span> together!</div>
      <Link href="/contact">
        <button className="btn bg-primary text-white px-10 py-4 uppercase font-bold">
          <span>Let's Talk</span>
        </button>
      </Link>
    </div>
  </div>
}
