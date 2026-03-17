import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import data from "@/app/data/works.json"
import clsx from "clsx"
import { Button } from "@/components/ui/button"
import { ListFilter, GalleryHorizontalEnd,Laptop } from "lucide-react"
interface contentProps{
    id:string,
    title: string,
    className?: string
}
const badgeColorMap: Record<string, string> = {
  blue: "bg-blue-800/60 text-blue-100 border-blue-500/20 hover:border-blue-500/60",
  cyan: "bg-cyan-800/60 text-cyan-100 border-cyan-500/20 hover:border-cyan-500/60",
  red: "bg-red-800/60 text-red-100 border-red-500/20 hover:border-red-500/60",
  green: "bg-green-800/60 text-green-100 border-green-500/20 hover:border-green-500/60",
  white: "bg-neutral-300/60 text-neutral-100 border-neutral-500/20 hover:border-neutral-500/60"
}

export default function FilterForm({id, title, className}: contentProps){
    return (
        <form id={id} className={clsx("w-full flex flex-row items-center justify-start gap-8 z-10", className)}>
            <div className="md:hidden block">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                          className="text-white mb-8 h-9 rounded-full bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/25"
                          variant="default"
                        >
                          <ListFilter className="mr-2 h-4 w-4" />
                          {title}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-screen max-w-xs sm:max-w-sm bg-[#050509]/95 text-white border border-white/10 rounded-2xl shadow-2xl p-2 mx-2 mt-2 backdrop-blur-md"
                      align="start"
                      sideOffset={8}
                    >
                        <DropdownMenuItem className="cursor-pointer rounded-xl px-3 py-2.5 text-sm text-white/85 hover:bg-white/10 focus:bg-white/10 focus:text-white transition-colors">
                          All
                        </DropdownMenuItem>
                        {data.filterOptions.map((item,idx) => (
                          <DropdownMenuItem
                            key={`${id}-dropdown-item-${idx}`}
                            className="cursor-pointer rounded-xl px-3 py-2.5 text-sm text-white/85 hover:bg-white/10 focus:bg-white/10 focus:text-white transition-colors"
                          >
                            {item.label}
                          </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="md:flex hidden flex-row justify-center align-center gap-2 my-10 bg-">
                <Button type="button" variant="default" key={`${id}-badge-0`} className={clsx(`py-0 px-2 hover:cursor-pointer`, badgeColorMap["white"] ?? "bg-white/10 text-white border-white/10")}>
                  <GalleryHorizontalEnd className="mr-1" />All<span>(6)</span>
                </Button>
                {data.filterOptions.map((item,idx=1) => (
                    <Button type="button" variant="default" key={`${id}-badge-${idx}`} className={clsx(`py-0 px-2 hover:cursor-pointer`, badgeColorMap[item.color] ?? "bg-white/10 text-white border-white/10")}>
                      <Laptop className="mr-1" />{item.label}
                    </Button>
                ))}
            </div>
        </form>
    )
}