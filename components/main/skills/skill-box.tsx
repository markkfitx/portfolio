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
        <Card className={clsx("group border-0 ring-white/8 bg-gradient-to-br from-emerald-900/30 via-neutral-800/20 to-neutral-800/50 shadow-none ring-1 ring-white/6",
          "transition-all duration-300 ease-out",
          "hover:-translate-y-1 hover:ring-white/12",className)} >
            <CardHeader className="flex flex-row items-start justify-between gap-3 text-white">
                <div className="flex min-w-0 flex-1 flex-row items-center gap-3">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-emerald-300/25 bg-emerald-400/10">
                        {Icon && <Icon className="size-4 text-emerald-300" aria-hidden />} 
                    </span>
                    <h6 className="font-heading min-w-0 text-base font-semibold tracking-tight text-white/90">{header}</h6>
                </div>
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-6.5 shrink-0 items-center justify-center rounded-md border border-white/10 text-white/45 transition-colors hover:border-white/20 hover:text-white/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400/50"
                    aria-label={`Open ${header} in a new tab`}
                >
                    <ExternalLink className="size-3" aria-hidden />
                </a>
            </CardHeader>
            <CardContent>
                <CardDescription id={`${id}-body`} ><p className="text-left 
                font-normal text-white/70!">{body}</p></CardDescription>
            </CardContent>
        </Card>
    )
}