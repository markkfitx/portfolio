import {Badge} from "./ui/badge"
import clsx from "clsx"
interface contentProps{
    id:string,
    alignment:string,
    title:string,
    description:string,
    badgeDesc:string,
    className?:string
}
export default function SectionHero({id,alignment,title,description,badgeDesc,className} : contentProps){
    return (
        <div className={clsx(`flex flex-col items-${alignment} justify-start mb-20 md:flex-nowrap flex-wrap`,className)}>
            <Badge variant="outline" className="text-white">{badgeDesc}</Badge>
            <h2 className={`font-bold text-white md:text-[5.5rem] text-[4.5rem] tracking-wide text-shadow-lg whitespace-wrap flex flex-col mb-10 text-${alignment}`}>{title}</h2>
            <p className={`text-white text-md text-${alignment}`}>{description}</p>
        </div>
    )
}