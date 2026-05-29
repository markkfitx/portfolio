import clsx from "clsx"
import {Card, CardContent, CardDescription, CardHeader} from "../../ui/card"
import { ExternalLink, LucideIcon } from "lucide-react"
interface contentProps{
    id:string,
    header: string,
    body: string,
    color:string
    className?: string,
    icon?:LucideIcon
    href?: string
}
export default function SkillBox(
    {id,
    className,
    header,
    body,
    color,
    icon: Icon,
    href = "#",
}: contentProps){
    return (
        <Card className={clsx("group border-0 ring-neutral-200 bg-gradient-to-br from-blue-50 via-neutral-50 to-neutral-100 shadow-none ring-1 ring-neutral-200",
          "transition-all duration-300 ease-out",
          "hover:-translate-y-1 hover:ring-neutral-300",className)} >
            <CardHeader className="flex flex-row items-start justify-between gap-3 text-neutral-900">
                <div className="flex min-w-0 flex-1 flex-row items-center gap-3">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-blue-300/25 bg-blue-400/10">
                        {Icon && <Icon className="size-4 text-blue-600" aria-hidden />} 
                    </span>
                    <h6 className="font-heading min-w-0 text-base font-semibold tracking-tight text-neutral-800">{header}</h6>
                </div>
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-6.5 shrink-0 items-center justify-center rounded-md border border-neutral-200 text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400/50"
                    aria-label={`Open ${header} in a new tab`}
                >
                    <ExternalLink className="size-3" aria-hidden />
                </a>
            </CardHeader>
            <CardContent>
                <CardDescription id={`${id}-body`} ><p className="text-left 
                font-normal text-neutral-600!">{body}</p></CardDescription>
            </CardContent>
        </Card>
    )
}