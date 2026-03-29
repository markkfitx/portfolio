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
        <div
          id={id}
          className={clsx(
            "w-full lg:pt-8 md:pt-6 pt-4",
            className
          )}
        >
            <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 md:px-6 lg:px-8 flex flex-row flex-nowrap gap-4 items-center justify-between">
                <div className="md:hidden z-10"><MobileNavBar id="mobile-navigation-bar-dropdown" /></div>
                <NavBar id="navigation-menu" className="sticky z-10" />
                <Link href="https://github.com/markkfitx" className="z-10"><Image width={20} className="hover:text-emerald-500 transition-colors" alt="GitHub link - Mark Kirby" src={GitHub}/></Link>
            </div>
        </div>
    )
}