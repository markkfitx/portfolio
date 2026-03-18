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
        <Card className={clsx(" cursor-pointer bg-[#111216]/10 border border-black/5 shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-black/10",className)} >
            <CardHeader className="flex flex-row items-center justify-start gap-3">
                {Icon && <Icon size={32} className="mt-1" />}
                <h4 className="skill-card-title text-balance font-semibold relative z-10">{header}</h4>
            </CardHeader>
            <CardContent>
                <CardDescription id={`${id}-body`} ><p className="text-start font-medium">{body}</p></CardDescription>
            </CardContent>
        </Card>
    )
}