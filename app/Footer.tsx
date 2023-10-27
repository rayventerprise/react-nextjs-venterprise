import React from 'react'
import Link from 'next/link'
import {GithubLogo} from "@phosphor-icons/react/dist/ssr";

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
      <div className="space-y-3">
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
        <div className="flex justify-end">
          <Link href="https://github.com/rayventerprise" target="_blank">
            <div className="bg-gray-100 rounded p-2">
              <GithubLogo width={24} height={24}/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
