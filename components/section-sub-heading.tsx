import clsx from "clsx"
interface contentProps{
    id:string,
    alignment:"start" | "center" | "end",
    className?:string,
    flex?:"row" | "col",
    children?: React.ReactNode
}
export default function SectionSubHeading({id,alignment,className, flex, children} : contentProps){
        const alignmentStyles = flex === "row" ? {
            start: {
                container: "justify-start" ,
                text: "text-left",
            },
            center: {
                container: "justify-center",
                text: "text-center",
            },
            end: {
                container: "justify-end",
                text: "text-right",
            },
        } : {
            start: {
                container: "items-start" ,
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
            "w-full flex flex-col mb-12 z-10 md:max-w-[650px]",
            alignmentStyles[alignment].container,
            className
            )}
          >
            <h3 className={clsx(`font-medium`,alignmentStyles[alignment].text)}>
              {children}
            </h3>
        </div>
    )
}