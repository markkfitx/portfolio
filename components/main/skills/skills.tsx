import Section from "../../section-wrapper"
import SkillGroup from "./skill-group"
import htmlImg from "@/public/img/hello-world-html-code.png"
import SectionHero from "../../section-hero"
import SectionSubHeading from "../../section-sub-heading"
import SuperPowersGroup from "./superpowers-group"
import Image from "next/image"
import clsx from "clsx"
interface contentProps{
    id: string,
    className?: string
}

export default function Skills({id, className}: contentProps){
    return (
       <Section id={id} className={clsx(`items-start bg-linear-to-t to-black from-neutral-900 z-10`,className)}>
            <SectionHero 
                id={`${id}-section-hero`} 
                title="My Expertise"
                description=""
                alignment="start"
                badgeDesc="Skillsets"
                className="hidden"
                />
            <SectionSubHeading id={`${id}-subheading`} alignment="start" className="md:max-w-[450px]"> 
                <span className="text-neutral-400">I’ll help you to </span>design better products <span className="text-neutral-400">and</span> achieve results <span className="text-neutral-400">that matter.</span>
            </SectionSubHeading>
            <SuperPowersGroup id={`${id}-super-powers`} className="z-10 md:mb-4 mb-12!" />
            <SkillGroup id={`${id}-skill-group`} className="" />
            <Image src={htmlImg} alt="Background html example code image." className="hidden opacity-30 relative bottom-10 self-center saturate-25 md:w-[40vw] sm:w-[75vw] w-[90vw]"/>
       </Section>
    )
}