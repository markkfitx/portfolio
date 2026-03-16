import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import data from "@/app/data/works.json"
import clsx from "clsx"
import { Badge } from "@/components/ui//badge"
import { Button } from "@/components/ui/button"
import { ListFilter } from "lucide-react"
interface contentProps{
    id:string,
    title: string,
    className?: string
}
const badgeColorMap: Record<string, string> = {
  blue: "bg-blue-800/60 text-blue-100 border-blue-500/20",
  cyan: "bg-cyan-800/60 text-cyan-100 border-cyan-500/20",
  red: "bg-red-800/60 text-red-100 border-red-500/20",
  yellow: "bg-yellow-800/60 text-yellow-100 border-yellow-500/20"
}

export default function FilterForm({id, title, className}: contentProps){
    return (
        <form id={id} className={clsx("flex flex-col items-start justify-start gap-2", className)}>
            <div className="md:hidden block">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="text-white mb-8" variant="default"><ListFilter className="mr-2" />{title}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-mist-900 text-white border-none">
                        <DropdownMenuItem>All</DropdownMenuItem>
                        {data.filterOptions.map((item,idx) => (<DropdownMenuItem key={`${id}-dropdown-item-${idx}`} >{item.label}</DropdownMenuItem>))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="md:flex hidden flex-row justify-center align-center gap-4 w-1/2 my-10">
                {data.filterOptions.map((item,idx) => (
                    <Badge variant="default" key={`${id}-badge-${idx}`} className={clsx(`py-1 px-4`, badgeColorMap[item.color] ?? "bg-white/10 text-white border-white/10")}>{item.label}</Badge>
                ))}
            </div> 
        </form>
    )
}