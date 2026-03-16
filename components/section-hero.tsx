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
        <div className={clsx(`flex flex-col md:items-${alignment} items-center justify-start mb-20 md:flex-nowrap flex-wrap z-10`,className)}>
            <Badge variant="outline" className="text-white md:mb-0 mb-4">{badgeDesc}</Badge>
            <h2 className={`font-bold text-white 2xl:text-[5.25vw] md:text-[6.25vw] text-[9vw] tracking-wide text-shadow-lg whitespace-wrap flex flex-col mb-10 md:text-${alignment} text-center`}>{title}</h2>
            <p className={`text-white text-md md:text-${alignment} text-center`}>{description}</p>
        </div>
    )
}