import clsx from "clsx"
import SectionSubHeading from "../../section-sub-heading"
import Image from "next/image"
import {Badge} from "../../ui/badge"

interface contentProps{
    id:string,
    children: React.ReactNode,
    body: string,
    idx:number,
    icon: string,
    image: string,
    company:string,
    job:string,
    badges: string[],
    alignment:"start" | "center" | "end",
    className?: string,
}
export default function ExperienceCenteredSubSection(
    {id,
    className,
    children,
    icon,
    image,
    badges,
    idx,
    company,
    job,
    body,
    alignment
}: contentProps){
    return (
        <>
            <SectionSubHeading className="self-start mb-8" alignment="start" id={`${id}-item-subheader-${idx}`} flex="row">
                {children}
            </SectionSubHeading>
            <div className={clsx(`w-full flex flex-col items-center justify-start gap-10`,className)} >
                <div className="relative w-full lg:w-1/2 aspect-4/3">
                    <Image
                        src={image}
                        alt={`${company}-image`}
                        fill
                        className="relative object-contain"
                    />
                </div>
                <div className={clsx("flex flex-col lg:w-1/2 items-center")}>
                    {icon.length > 0 && <Image className="mb-12" src={icon} alt={`${company}-logo-icon`} width={150} height={150}/>}
                    <h4 className={clsx("font-semibold mb-3 text-center")}>{job}</h4>
                    <p className={clsx("mb-9 text-center")}>{body}</p>
                    {badges.length > 0 && (
                        <div className="max-w-[500px] flex flex-row items-center flex-wrap gap-2 justify-center">
                            {badges.map((skill) => (
                            <Badge
                                key={`${id}-${skill}`}
                                className="rounded-full border-none bg-neutral-900/15 px-4 py-2 text-xs text-neutral-900/60 font-medium uppercase">
                                {skill}
                            </Badge>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}