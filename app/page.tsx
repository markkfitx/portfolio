import Hero from "@/components/hero/hero"
import Skills from "@/components/main/skills/skills"
import Experience from "@/components/main/experience"
import Work from "@/components/main/works/work"

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
        <Hero id="heroSection" />
        <Skills id="mySkills" />
        <Work id="work" />
        <Experience id="experience" />
    </div>
  );
}
