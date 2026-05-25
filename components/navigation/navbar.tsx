"use client"

import NavItem from "@/components/navigation/nav-item"
import { mainNavLinks } from "@/lib/navigation"
import clsx from "clsx"

interface NavBarProps {
  id?: string
  className?: string
}

export default function NavBar({ id = "navigation-menu", className }: NavBarProps) {
  return (
    <nav
      id={id}
      aria-label="Main"
      className={clsx("hidden lg:block", className)}
    >
      <ul className="flex flex-row flex-wrap items-center justify-center gap-1">
        {mainNavLinks.map((item) => (
          <li key={item.label}>
            <NavItem label={item.label} url={item.url} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
