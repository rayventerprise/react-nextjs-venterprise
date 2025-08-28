import React from "react";
import Link from "next/link";
import {AnimateDiv} from "@/app/AnimateDiv";

interface Props {
    url: string
    gradientClass: string
    children?: React.ReactNode;
}


export const ProjectCard: React.FC<Props> = ({children, url, gradientClass}) =>
  <Link className="hover:no-underline hover:text-primary" href={url}>
    <AnimateDiv
        inViewClass="opacity-1"
        outViewClass="opacity-0"
        className={
        'relative w-full overflow-hidden mb-16 justify-between shadow-xl items-center flex-col md:flex-row flex-grow-0 flex p-12 h-[550px] lg:h-[425px] ' +
        `bg-gradient-to-r ${gradientClass} text-white transition-all hover:scale-[1.05] ` +
        'cursor-pointer'
        }
    >
      {children}
    </AnimateDiv>
  </Link>
