import {Badge} from "./ui/badge"
import clsx from "clsx"
interface contentProps{
    id:string,
    alignment:"start" | "center" | "end",
    className?:string,
    children?: React.ReactNode
}
export default function SectionHero({id,alignment,className, children} : contentProps){
    const alignmentStyles = {
        start: {
            container: "items-start",
            text: "text-left",
        },
        center: {
            container: "items-center",
            text: "text-center",
        },
        end: {
            container: "items-end",
            text: "text-right",
        },
    } as const

    return (
        <div
          id={id}
          className={clsx(
            "w-full flex flex-col mb-12 z-10 ",
            alignmentStyles[alignment].container,
            className
            )}
          >
            <h3 className={clsx(``,alignmentStyles[alignment].text + " " + className)}>
              {children}
            </h3>
        </div>
    )
}