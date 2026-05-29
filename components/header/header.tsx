import Link from "next/link"
import clsx from "clsx"
import MobileNavBar from "@/components/navigation/mobile-navbar"
import NavBar from "@/components/navigation/navbar"
import SocialLinks from "@/components/navigation/social-links"
import { siteConfig } from "@/lib/site"

interface HeaderProps {
  className?: string
  id: string
}

export default function Header({ id, className }: HeaderProps) {
  return (
    <header
      id={id}
      className={clsx(
        "sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md",
        className
      )}
    >
      <div className="mx-auto flex h-14 max-w-[1440px] items-center gap-4 px-4 md:h-16 md:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <MobileNavBar id="mobile-navigation" />
          <Link
            href="/"
            className="font-heading truncate text-sm font-semibold tracking-tight text-neutral-900 transition-colors hover:text-blue-600 sm:text-base"
          >
            {siteConfig.name}
          </Link>
        </div>

        <div className="flex flex-1 justify-center">
          <NavBar id="desktop-navigation" />
        </div>

        <SocialLinks />
      </div>
    </header>
  )
}
