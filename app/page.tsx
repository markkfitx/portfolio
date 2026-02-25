import Hero from "@/components/hero/hero"
import Skills from "@/components/main/skills"
import Experience from "@/components/main/experience"
import Work from "@/components/main/work"

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center xl:gap-150 lg:gap-100 md:gap-50 gap-25">
        <Hero id="heroSection" />
        <Skills />
        <Work />
        <Experience />
    </div>
  );
}
