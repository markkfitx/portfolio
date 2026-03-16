import { Badge } from "@/components/ui/badge"
import { BadgeCheck, BookmarkIcon } from "lucide-react"
import clsx from "clsx"
import data from "@/app/data/languages.json"
import Image from "next/image"

const badgeColorMap: Record<string, string> = {
  blue: "bg-blue-800/60 text-blue-100 border-blue-500/20",
  cyan: "bg-cyan-800/60 text-cyan-100 border-cyan-500/20",
  purple: "bg-purple-800/60 text-purple-100 border-purple-500/20",
  grey: "bg-mist-800/60 text-mist-100 border-mist-500/20"
}
interface contentProps{
    id:string,
    className?:string
}
export default function FrameworkBadges({id, className}: contentProps){
    return(
        <div id={id} className={clsx(`flex flex-wrap gap-3`,className)}>
            {data.topFrameworks.map((item,idx) =>( 
                <Badge key={`framework-badge-${idx}`} variant="secondary" className={clsx(`py-1`, badgeColorMap[item.color] ?? "bg-white/10 text-white border-white/10")}>
                    <Image className="mr-1" alt={`${item.name} logo icon badge`} src={item.src} width={16} height={16} />
                    {item.name}
                </Badge>
            ))}
        </div>
    )
}