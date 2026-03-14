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
            <CardHeader className="flex flex-row gap-3">
                {Icon && <Icon size={32} className="text-white mt-1" />}
                <h5 id={`${id}-header`} className="text-white font-bold mb-8 tracking-[1px] relative max-w-60">
                    <span className="max-w-sm text-balance relative z-10">{header}</span>
                    <div className={`absolute top-1/5 z-0 w-1/2 h-1/4 ${color}`}></div>
                </h5>
            </CardHeader>
            <CardContent id={`${id}-body`} className="text-white font-light tracking-[2px]">{body}</CardContent>
        </Card>
    )
}