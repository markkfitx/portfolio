import {Database, Laptop, Figma} from "lucide-react"
import SkillBox from "../skills/skill-box"
interface contentProps{
    id: string,
    className?: string
}
export default function SkillGroup({id, className}: contentProps){

    const skills = [
        {color: "bg-blue-600", icon: Laptop, header: "Web Development", body: "Web development is the process of building, programming, and optimizing accessible sites..."},
        {color: "bg-green-600", icon: Figma, header: "UX/UI Design", body: "UX/UI design focuses on creating clear user experiences, responsive layout..."},
        {color: "bg-red-600", icon: Database, header: "Marketing Automation", body: "Marketing automation focuses on workflows that nurture leads, personalize journeys, and..."}
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