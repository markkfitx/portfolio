"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import clsx from "clsx"
import { isNavLinkActive, resolveNavHref } from "@/lib/navigation"

interface NavItemProps {
  label: string
  url: string
  className?: string
  onNavigate?: () => void
}

export default function NavItem({
  label,
  url,
  className,
  onNavigate,
}: NavItemProps) {
  const pathname = usePathname()
  const [hash, setHash] = useState("")

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash)
    syncHash()
    window.addEventListener("hashchange", syncHash)
    return () => window.removeEventListener("hashchange", syncHash)
  }, [])

  const href = resolveNavHref(url, pathname)
  const isActive = isNavLinkActive(url, pathname, hash)
  const isExternal =
    url.startsWith("http") || url.startsWith("mailto:")

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={clsx(
        "rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors",
        "text-white/75 hover:text-white",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40",
        isActive && "text-emerald-400",
        className
      )}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  )
}
