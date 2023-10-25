import React from 'react'
import {AnimateDiv} from "@/app/AnimateDiv";
import Image from "next/image";

interface Props {
  src: string
}
export const PhoneAppPreview: React.FC<Props> = ({ src }) => {
  return  <AnimateDiv className="flex justify-center items-center">
    <Image
      src={src}
      width={320}
      height={520}
      loading="eager"
      alt="phone app"
    />
  </AnimateDiv>
}
