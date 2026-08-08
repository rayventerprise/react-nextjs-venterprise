import React from 'react'
import {AnimateDiv} from './AnimateDiv'
// @ts-ignore
import {Checks} from '@phosphor-icons/react/dist/ssr'
import Image from "next/image";

interface Props {
  src?: string
  url?: string
  label: string
  expert?: boolean
  years?: number
  subLabel?: string
}

export const TechStack: React.FC<Props> = ({ src, url, label, years }) => {

  const advanced = years && years >= 5

  return (
    <AnimateDiv
        className="flex text-gray-500 flex-shrink-0 pl-3 space-x-5 h-[28px] duration-300 transition-colors items-center text-sm overflow-hidden"
        inViewClass="opacity-1"
        outViewClass="opacity-0"
      >
      <div className="bg-gray-400 w-[2px] flex-grow-0 flex-shrink-0 h-full"/>
      {src ? <div className="flex justify-center flex-shrink-0 items-center w-[20px] h-[20px] rounded-full">
        <Image alt="tech stack image" src={src} width={20} height={20}/>
      </div> : null}


      <div className="w-full space-y-1">
        <div className="flex space-x-2 items-center">
          {url ? <a target="_blank" href={url} rel="noreferrer">
            {label}
          </a> : <span>{label}</span>}
          {advanced ? <div className="skill-advanced">
            <Checks/>
          </div> : null}
        </div>
      </div>
    </AnimateDiv>
  )
}
