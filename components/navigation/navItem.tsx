"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"
import clsx from "clsx"

interface NavItemProps extends React.ComponentPropsWithoutRef<"a"> {
  label: string
  url: string
  idx: number
}

const NavItem = React.forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ label, url, idx, className, ...props }, ref) => {
    const pathname = usePathname()

    const href =
      url.startsWith("#") && pathname !== "/"
        ? `/${url}`
        : url

    return (
      <Link
        href={href}
        ref={ref}
        className={clsx("text-center bg-transparent text-white hover:text-gray-300 font-medium py-1 px-3 text-[11px]!",className)}{...props}>
        {label}
      </Link>
    )
  }
)

NavItem.displayName = "NavItem"

export default NavItem