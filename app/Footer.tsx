import React from 'react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className="w-full border-t border-gray-300 flex flex-col items-center md:flex-row py-8 justify-between content-container h-[115px] mt-16">
      <div>
        <div className='header-font flex flex-col text-sm md:text-lg'>
          <Link href="/">
            RAYMOND VANDENBERG
          </Link>
        </div>
        <span className="text-xs">
          © {(new Date()).getFullYear()}
        </span>
      </div>
      <div className="space-x-3 md:space-x-12">
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/contact">
          Contact
        </Link>
      </div>
    </div>
  )
}
