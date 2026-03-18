import Section from "../../section-wrapper"
import SkillBox from "../skills/skill-box"
import {Database, Laptop, Figma} from "lucide-react"
import htmlImg from "../../../app/img/hello-world-html-code.png"
import SectionHero from "../../section-hero"
import SectionSubHeading from "../../section-sub-heading"

import Image from "next/image"
interface contentProps{
    id: string,
    className?: string
}
const skills = [
    {color: "bg-red-600", icon: Database, header: "Backend Development", body:"Experienced in building secure and scalable backend systems working with Python, SQL, REST APIs, and modern server infrastructure using Git and CI/CD workflows."},
    {color: "bg-blue-600", icon: Laptop, header: "Frontend Development", body:"Passionate about creating UX/UI experiences. Over 8 years of development experience in HTML, CSS, JS, React, and NextJS frameworks."},
    {color: "bg-green-600", icon: Figma, header: "UX/UI Design", body:"Over 4 years of experience designing responsive layouts and translating Figma concepts into polished campaigns / web applications."}
]

export default function Skills({id, className}: contentProps){
    return (
       <Section id={id} className="items-start bg-white z-10">
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
            <div className="w-full gap-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center">
                {skills.map((skill,idx) =>{
                    const skillID = `skillWrapper-${skill.header.replace(/\s+/g, "-").toLowerCase()}-${idx}`
                    return <SkillBox key={skillID} id={skillID} header={skill.header} body={skill.body} color={skill.color} icon={skill.icon} />
                })}
            </div>
            <Image src={htmlImg} alt="Background html example code image." className="hidden opacity-30 relative bottom-10 self-center saturate-25 md:w-[40vw] sm:w-[75vw] w-[90vw]"/>
       </Section>
    )
}