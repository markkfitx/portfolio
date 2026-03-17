"use client"

import NavItem from "./navItem"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import data from "../../app/data/navigation.json"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
interface contentProps{
    className?:string,
    id?: string
}

export default function MobileNavBar({id, className}: contentProps){
    return(
        <div id={id} className={className}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                      variant="default"
                      size="icon"
                      className="h-9 w-9 rounded-full bg-white/5 text-white border border-white/15 hover:bg-white/10 hover:border-white/25"
                      aria-label="Open main navigation"
                    >
                      <Menu className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-screen max-w-xs sm:max-w-sm bg-[#050509]/95 border border-white/10 rounded-2xl shadow-2xl p-2 mx-2 mt-3 backdrop-blur-md"
                  align="start"
                  sideOffset={8}
                >
                    <DropdownMenuGroup className="space-y-1">
                      <DropdownMenuLabel className="flex flex-col gap-1 px-3 py-2 text-white">
                        <span className="mobile-nav-kicker text-xs uppercase text-white/40">
                          Navigate
                        </span>
                        <span className="text-sm font-semibold">
                          Explore the portfolio
                        </span>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-white/10 my-1" />
                      {data.navigation.map((item,idx) =>(
                          <DropdownMenuItem
                            key={`mobile-nav-item-${idx}`}
                            asChild
                            className="cursor-pointer rounded-xl px-3 py-2.5 text-sm text-white/85 hover:bg-white/10 focus:bg-white/10 focus:text-white transition-colors"
                          >
                              <NavItem url={item.url} label={item.label} idx={idx} />
                          </DropdownMenuItem>
                          )
                      )}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}