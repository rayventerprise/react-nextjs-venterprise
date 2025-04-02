import React from "react";

export const AboutMeTextPanel = () => {
    return (<>
      <div className="h-[500px] w-full md:w-1/2 space-y-7 flex justify-center flex-col">
        <div className="text-5xl text-center md:text-left font-bold header-font">
          About <span className="text-primary">me.</span>
        </div>
        <div className="text-base text-center md:text-left">
          I began this journey at the ripe age of 12, developing a deep passion for software development. Over the past decade, I have gained extensive experience across the front-end, back-end, mobile development, and digital marketing.
          <br/><br/>
          One of my notable achievements was selling a side project that grew to over a million monthly views, which taught me invaluable lessons in scaling and rapid iteration.
          <br/><br/>
          I’ve led teams to success as an engineering manager and equally enjoy contributing to projects at all levels as an individual contributor.<br/>
        </div>
      </div>
    </>)
}
