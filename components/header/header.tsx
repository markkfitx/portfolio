import MobileNavBar from "../navigation/mobile-navbar"
import NavBar from "../navigation/navbar"
import LinkedIn from "@/public/img/linkedin.svg"
import Email from "@/public/img/email.svg"
import GitHub from "@/public/img/github.svg"
import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"
interface contentProps{
    className?:string,
    id: string
}
export default function Header({id, className}: contentProps){
    return(
        <div id={id} className={clsx(`flex flex-row w-full flex-nowrap gap-4 items-center justify-between`,className)}>
            <div className="md:hidden z-10"><MobileNavBar id="mobile-navigation-bar-dropdown" /></div>
            <NavBar id="navigation-menu" className="sticky z-10" />
            <div className="flex flex-row w-full flex-nowrap gap-4 items-center justify-end z-10">
                <Link href="#"><Image width={16} alt="LinkedIn link - Mark Kirby" src={LinkedIn}/></Link>
                <Link href="#"><Image width={16} alt="GitHub link - Mark Kirby" src={GitHub}/></Link>
                <Link href="#"><Image width={16} alt="Email link - Mark Kirby" src={Email}/></Link>
            </div>
        </div>
    )
}