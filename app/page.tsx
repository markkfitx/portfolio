import Hero from "@/components/hero/hero"
import Skills from "@/components/main/skills/skills"
import Experience from "@/components/main/experience/experience"
import Work from "@/components/main/works/work"
import Awards from "@/components/main/awards/awards"

export default function Home() {
  return (
    <>
        <Hero id="hero-section" />
        <Skills id="skills-section" className="py-24 md:py-36" />
        <Work id="works-section" className="py-24 md:py-36" />
        <Experience id="experience-section" className="" />
        <Awards id="awards-section" className="py-24 md:py-36" />
    </>
  );
}
