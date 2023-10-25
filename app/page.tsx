import {WhoPanel} from "@/app/home-page/WhoPanel";
import {WorkPanel} from "@/app/home-page/WorkPanel";
import {ProjectsPanel} from "@/app/home-page/ProjectsPanel";
import {AreYouThinkingPanel} from "@/app/home-page/AreYouThinkingPanel";

export default function Home() {
  return (
    <>
      <WhoPanel/>
      <WorkPanel/>
      <ProjectsPanel/>
      <AreYouThinkingPanel/>
    </>
  )
}
