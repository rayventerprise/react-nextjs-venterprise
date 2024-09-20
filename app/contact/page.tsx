import React from 'react'

import {Metadata} from "next";
import {ContactForm} from "@/app/contact/ContactForm";

export const metadata: Metadata = {
  title: 'Contact'
}
export default function Page() {
  return (<>
    <div className="h-[400px] flex flex-col justify-center">
      <div className="space-y-9">
        <div className="font-bold text-5xl max-w-[500px]">
          Hi. Lets talk about your project.
        </div>
        <div className="border-l-4 px-4 border-secondary max-w-[400px]">
          <span>Fill out the form below or send me an email at </span>
          <a className="text-primary underline" href="mailto:ray@venterprise.io">ray@venterprise.io</a>
          <span>.</span>
        </div>
      </div>
    </div>
    <ContactForm/>
  </>)
}
