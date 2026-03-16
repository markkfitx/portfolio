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
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="default"><Menu className="text-white" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 bg-[#1a1a1a] border border-white/10" align="start">
                <DropdownMenuGroup>
                <DropdownMenuLabel className="text-white font-bold">Menu</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/10"/>
                {data.navigation.map((item,idx) =>(
                    <DropdownMenuItem key={`mobile-nav-item-${idx}`} asChild>
                        <NavItem url={item.url} label={item.label} idx={idx} />
                    </DropdownMenuItem>
                    )
                )}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}