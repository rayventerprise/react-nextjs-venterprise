import Link from "next/link";
import React from "react";

export const FunProjectPanel = () => {
    return <div className="relative w-full py-3" id="contact">
      <div className="flex flex-col justify-center items-center h-[350px] space-y-9">
        <h1 className="relative text-4xl font-bold text-center md:text-left">Have a fun & interesting project?</h1>
        <div>Find out if I can help.</div>
        <Link href="/contact">
          <button className="btn bg-primary text-white px-10 py-4 uppercase font-bold">
            <span>Let's Talk</span>
          </button>
        </Link>
      </div>
    </div>
}
