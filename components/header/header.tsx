import MobileNavBar from "../navigation/mobile-navbar"
import NavBar from "../navigation/navbar"
import GitHub from "@/public/img/github.svg"
import LinkedIn from "@/public/img/linkedin.svg"
import Email from "@/public/img/email.svg"
import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"
import { mailtoHref, siteConfig } from "@/lib/site"

interface contentProps {
  className?: string
  id: string
}

export default function Header({ id, className }: contentProps) {
  return (
    <div
      id={id}
      className={clsx("w-full lg:pt-8 md:pt-6 pt-4", className)}
    >
      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 md:px-6 lg:px-8 flex flex-row flex-nowrap gap-4 items-center justify-between">
        <div className="md:hidden z-10">
          <MobileNavBar id="mobile-navigation-bar-dropdown" />
        </div>
        <NavBar id="navigation-menu" className="sticky z-10" />
        <div className="flex items-center gap-4 z-10">
          <Link href={mailtoHref} aria-label="Email Mark Kirby">
            <Image
              width={20}
              height={20}
              className="opacity-80 transition-opacity hover:opacity-100"
              alt=""
              src={Email}
            />
          </Link>
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <Image
              width={20}
              height={20}
              className="opacity-80 transition-opacity hover:opacity-100"
              alt=""
              src={LinkedIn}
            />
          </Link>
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <Image
              width={20}
              height={20}
              className="opacity-80 transition-opacity hover:opacity-100"
              alt="GitHub"
              src={GitHub}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
