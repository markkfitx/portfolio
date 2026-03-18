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
        <Card className={clsx(" cursor-pointer bg-[#111216]/50 border border-white/10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl",className)} >
            <CardHeader className="flex flex-row items-center justify-start gap-3">
                {Icon && <Icon size={32} className="text-white mt-1" />}
                <h4 className="skill-card-title text-balance text-white font-normal relative z-10">{header}</h4>
            </CardHeader>
            <CardContent>
                <CardDescription id={`${id}-body`} ><p className="text-white tracking-[2px] font-light text-start">{body}</p></CardDescription>
            </CardContent>
        </Card>
    )
}