'use client'
import React, {useState} from "react";
import {TextField} from "@mui/material";

export const ContactForm = () => {
    const [responseMsg, setResponseMsg] = useState('')

    const submitContactForm = async (e: any) => {
        setResponseMsg('Sending....')
        const formData = new FormData(e.target)

        formData.append('access_key', '0e2ced6d-f1fb-4dcc-a6ee-93614f84cc99')

        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        }).then((res) => res.json())

        setResponseMsg(res.message)
    }

    if ( responseMsg ) {
        return <div className="text-xl">
          {responseMsg}
        </div>
    }

    return  <form onSubmit={submitContactForm}>
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0">
        <div className="flex flex-col flex-shrink-0 w-[400px] space-y-6">
          <TextField required label="Name" name="name"/>
          <TextField required label="Email" name="email" type="email"/>
          <TextField required label="Company" name="company"/>
          <TextField required label="Notes" name="notes" placeholder="Notes"/>
        </div>
      </div>
      <div className="flex h-[150px] items-center">
        <button type="submit" className="btn bg-primary uppercase text-white font-bold px-11 py-5">
          Send It!
        </button>
      </div>
    </form>
}
