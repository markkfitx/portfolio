import clsx from "clsx"
import Section from "../../section-wrapper"
import SkillBox from "../skills/skill-box"
import {Database, Laptop, Figma} from "lucide-react"
import htmlImg from "../../../app/img/hello-world-html-code.png"
import Image from "next/image"
interface contentProps{
    id: string,
    className?: string
}
const skills = [
    {color: "bg-red-600", icon: Database, header: "Backend Development", body:"Experienced in building secure and scalable backend systems working with Python, SQL, REST APIs, and modern server infrastructure using Git and CI/CD workflows."},
    {color: "bg-blue-600", icon: Laptop, header: "Frontend Development", body:"Passionate about creating UX/UI experiences. Over 8 years of development experience in HTML, CSS, JS, React, and NextJS frameworks."},
    {color: "bg-green-600", icon: Figma, header: "Web & Marketing Design", body:"Over 4 years of experience designing responsive email layouts and translating Figma concepts into polished campaigns using Klaviyo and modern email tools."}
]

export default function Skills({id, className}: contentProps){
    return (
       <Section id={id} className="">
            <h2 className="w-full font-bold text-white md:text-[5.5rem] text-[4.5rem] tracking-widest text-shadow-lg whitespace-wrap text-center mb-10 z-10">My Expertise</h2>
            <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-8 z-10">
                {skills.map((skill,idx) =>{
                    return <SkillBox key={`skillWrapper-${skill.header.replace(" ","-")}-${idx}`} id={`skillWrapper-${skill.header.replace(" ","-")}-${idx}`} header={skill.header} body={skill.body} color={skill.color} icon={skill.icon} />
                })}
            </div>
            <Image src={htmlImg} alt="Background html example code image." className="z-0 opacity-30 relative bottom-10 self-center saturate-25 lg:w-[40vw] w-[50vw]"/>
       </Section>
    )
}