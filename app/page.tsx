import Hero from "@/components/hero/hero";
import About from "@/components/main/about/about";
import Skills from "@/components/main/skills/skills";
import Experience from "@/components/main/experience/experience";
import Work from "@/components/main/works/work";
import Awards from "@/components/main/awards/awards";
import ContactCta from "@/components/main/contact/contact-cta";
import Testimonials from "@/components/main/testimonials/testimonials";

export default function Home() {
  return (
    <>
      <Hero id="hero-section" className="z-10" />
      <About id="about-section" className="z-10" />
      <Skills id="skills-section" className="py-24 md:py-36" />
      <Work id="works-section" className="py-24 md:py-36" />
      {/* <Experience id="experience-section" className="" /> */}
      <Testimonials id="testimonials-section" />
      <ContactCta id="contact-cta-section" />
      <Awards id="awards-section" className="py-24 md:py-36" />
    </>
  );
}
