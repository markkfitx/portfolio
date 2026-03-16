import MobileNavBar from "../navigation/mobile-navbar"
import LinkedIn from "../../app/img/linkedin.svg"
import Email from "../../app/img/email.svg"
import GitHub from "../../app/img/github.svg"
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
            <div className="flex flex-row w-full flex-nowrap gap-4 items-center justify-end z-10">
                <Link href="#"><Image width={16} alt="LinkedIn link - Mark Kiby" src={LinkedIn}/></Link>
                <Link href="#"><Image width={16} alt="GitHub link - Mark Kiby" src={GitHub}/></Link>
                <Link href="#"><Image width={16} alt="Email link - Mark Kiby" src={Email}/></Link>
            </div>
        </div>
    )
}