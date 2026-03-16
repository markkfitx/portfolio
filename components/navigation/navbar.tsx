"use client" 
import NavItem from "@/components/navigation/navItem"
import data from "../../app/data/navigation.json"
import clsx from "clsx"
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

interface contentProps{
    id:string,
    className:string
}
export default function NavBar({id, className}: contentProps){

    return(
        <NavigationMenu id={id} className={clsx(`relative lg:block hidden`,className)}>
            <div className="absolute w-1/2 h-1/2 top-[-1rem] left-[-1rem] rounded-tl-md border-t-2 border-l-2 border-white/80 z-[-1]"></div>
            <NavigationMenuList id={`${id}-menu-list`} className="w-fit flex flex-col justify-center items-start gap-1 z-10">
                {data.navigation.map((item,idx) =>(
                    <NavigationMenuLink key={`${id}-menu-list-item-${idx}`}>
                        <NavItem idx={idx} label={item.label} url={item.url}/>
                    </NavigationMenuLink>
                    )
                    /**return <NavItem key={`${id}-menu-list-item-${idx}`} idx={idx} label={item.label} url={item.url}/>**/
                )}
            </NavigationMenuList>
        </NavigationMenu>
    );

}