import React from 'react'
import Link from 'next/link'
// @ts-ignore
import {GithubLogo} from "@phosphor-icons/react/dist/ssr";

export const Footer = () => {
  return (
    <div className="w-full border-t border-gray-300 flex flex-col items-center md:flex-row py-8 justify-between content-container h-[115px] mt-16">
      <div className="flex space-x-2 items-center md:items-start md:space-x-0 md:flex-col">
        <div className='header-font flex flex-col text-sm md:text-lg'>
          <Link href="/">
            RAYMOND VANDENBERG
          </Link>
        </div>
        <span className="text-xs">
          © {(new Date()).getFullYear()}
        </span>
      </div>
      <div>
        <div className="space-x-3 md:space-x-4">
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
        <div className="flex justify-center md:justify-end">
          <Link href="https://github.com/rayventerprise" target="_blank">
            <div className="light:bg-gray-100 rounded p-2">
              <GithubLogo width={20} height={20}/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
