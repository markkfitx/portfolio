import {Badge} from "./ui/badge"
import clsx from "clsx"
interface contentProps{
    id:string,
    alignment:"start" | "center" | "end",
    title:string,
    description:string,
    badgeDesc:string,
    className?:string
}
export default function SectionHero({id,alignment,title,description,badgeDesc,className} : contentProps){
    const alignmentStyles = {
        start: {
            container: "items-center md:items-start",
            text: "text-center md:text-left",
        },
        center: {
            container: "items-center",
            text: "text-center",
        },
        end: {
            container: "items-center md:items-end",
            text: "text-center md:text-right",
        },
    } as const

    return (
        <div
          id={id}
          className={clsx(
            "w-full flex flex-col justify-start gap-4 md:gap-5 mb-16 md:mb-20 md:flex-nowrap flex-wrap z-10",
            alignmentStyles[alignment].container,
            className
          )}
        >
            <Badge
              variant="outline"
              className="text-white/90 text-xs md:text-[0.7rem] tracking-[0.25em] uppercase rounded-full px-4 py-1 md:mb-1"
            >
              {badgeDesc}
            </Badge>
            <h2
              className={clsx(
                "font-bold text-white text-shadow-lg whitespace-normal flex flex-col text-balance",
                alignmentStyles[alignment].text
              )}
            >
              {title}
            </h2>
            <p
              className={clsx(
                "text-white/70 max-w-xl md:max-w-2xl",
                alignmentStyles[alignment].text
              )}
            >
              {description}
            </p>
        </div>
    )
}