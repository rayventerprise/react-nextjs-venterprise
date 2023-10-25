import React from "react";

export const AboutMeTextPanel = () => {
    return (<>
      <div className="h-[400px] w-full md:w-1/2 space-y-7 flex justify-center flex-col">
        <div className="text-5xl text-center md:text-left font-bold header-font">
          About <span className="text-primary">me.</span>
        </div>
        <div className="text-lg text-center md:text-left">
          Software started at the age of 12 for me. I am mostly self-taught and ever since graduation I have
          spent the last 8 years improving my skills in all environments, front-end, back-end, mobile-apps, and
          marketing.
        </div>
        <div className="text-xs space-y-1">
          <div>
            - Sold a small side project hitting over a million monthly views.
          </div>
          <div>
            - Previous experience as a team lead, but don't mind joining a team.
          </div>
          <div>
            - Currently living in Austin, TX.
          </div>
        </div>
      </div>
    </>)
}
