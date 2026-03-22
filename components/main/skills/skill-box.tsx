import clsx from "clsx"
import {Card, CardContent, CardDescription, CardHeader} from "../../ui/card"
import { LucideIcon } from "lucide-react"
interface contentProps{
    id:string,
    header: string,
    body: string,
    color:string
    className?: string,
    icon?:LucideIcon
}
export default function SkillBox(
    {id,
    className,
    header,
    body,
    color,
    icon: Icon
}: contentProps){
    return (
        <Card className={clsx("group border-0 ring-white/8 bg-gradient-to-br from-emerald-900/30 via-neutral-800/20 to-neutral-800/50 shadow-none ring-1 ring-white/6",
          "transition-all duration-300 ease-out",
          "hover:-translate-y-1 hover:ring-white/12",className)} >
            <CardHeader className="flex flex-row items-center justify-center gap-3 text-white">
                <span className="inline-flex size-8 items-center justify-center rounded-lg border border-emerald-300/25 bg-emerald-400/10">
                    {Icon && <Icon className="size-4 text-emerald-300" aria-hidden />} 
                </span>
                <h5 className="font-heading text-base font-semibold tracking-tight text-white/90">{header}</h5>
            </CardHeader>
            <CardContent>
                <CardDescription id={`${id}-body`} ><p className="text-center font-normal text-white/70!">{body}</p></CardDescription>
            </CardContent>
        </Card>
    )
}