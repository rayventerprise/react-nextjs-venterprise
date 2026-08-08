import { Hero } from "@/app/sections/Hero";
import { Work } from "@/app/sections/Work";
import { Projects } from "@/app/sections/Projects";
import { Contact } from "@/app/sections/Contact";
import { LeftTrace } from "@/app/components/effects/LeftTrace";

export default function Home() {
  return (
    <>
      <LeftTrace />
      <Hero />
      <Work />
      <Projects />
      <Contact />
    </>
  );
}
