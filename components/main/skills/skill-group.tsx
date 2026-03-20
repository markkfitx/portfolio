import {Database, Laptop, Figma} from "lucide-react"
import SkillBox from "../skills/skill-box"
interface contentProps{
    id: string,
    className?: string
}
export default function SkillGroup({id, className}: contentProps){

    const skills = [
        {color: "bg-red-600", icon: Database, header: "Backend Development", body:"Experienced in building secure and scalable backend systems working with Python, SQL, REST APIs, and modern server infrastructure using Git and CI/CD workflows."},
        {color: "bg-blue-600", icon: Laptop, header: "Frontend Development", body:"Passionate about creating UX/UI experiences. Over 8 years of development experience in HTML, CSS, JS, React, and NextJS frameworks."},
        {color: "bg-green-600", icon: Figma, header: "UX/UI Design", body:"Over 4 years of experience designing responsive layouts and translating Figma concepts into polished campaigns / web applications."}
    ]
    return (
        <div className="w-full gap-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center">
            {skills.map((skill,idx) =>{
                const skillID = `skillWrapper-${skill.header.replace(/\s+/g, "-").toLowerCase()}-${idx}`
                return <SkillBox key={skillID} id={skillID} header={skill.header} body={skill.body} color={skill.color} icon={skill.icon} />
            })}
        </div>
    )
}