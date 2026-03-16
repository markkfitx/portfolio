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
            <DropdownMenuContent className="w-40 bg-[#111216]/50 border border-white/10" align="start">
                <DropdownMenuGroup>
                <DropdownMenuLabel>Menu</DropdownMenuLabel>
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