import clsx from "clsx"
import {Card, CardContent, CardHeader} from "../../ui/card"
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
        <Card className={clsx("group cursor-pointer overflow-hidden rounded-sm bg-[#111216]/50 border border-white/10  shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl",className)} >
            <CardHeader className="flex flex-row md:justify-start justify-center gap-3">
                {Icon && <Icon size={32} className="text-white mt-1" />}
                <div id={`${id}-header`} className="mb-8 relative md:max-w-60">
                    <h5 className="skill-card-title text-balance text-white font-bold relative z-10">{header}</h5>
                    <div className={`absolute md:top-6/8 top-2/3 z-[0] w-1/2 h-1/4 ${color}`}></div>
                </div>
            </CardHeader>
            <CardContent id={`${id}-body`} ><p className="text-white font-light tracking-[2px] md:text-start text-center">{body}</p></CardContent>
        </Card>
    )
}