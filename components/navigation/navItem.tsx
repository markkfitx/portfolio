"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface navlink{
    label: string,
    url: string,
    idx: number,
    children?: React.ReactNode
}

export default function NavItem({label,url,idx, children}:navlink){
    const pathname = usePathname()
     // Hash-only links (#about, #portfolio): on home scroll in place; on other pages go to home + hash
    const href = url.startsWith("#") && pathname !== "/"
        ? `/${url}`   // e.g. /#portfolio so we land on home then scroll to section
        : url
        
    return(
       <Link href={href} className="flex flex-col items-end content-center bg-transparent text-white hover:text-gray-300 font-semibold py-1 px-3 text-sm">
            <small className="text-[10px]">0{idx+1}</small>
            <div className="flex nowrap flex-row gap-2"><span className="">//</span>{label}</div>
        </Link>
    );
}