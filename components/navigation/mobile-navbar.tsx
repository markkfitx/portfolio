"use client"

import { useState } from "react"
import NavItem from "@/components/navigation/nav-item"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { mainNavLinks } from "@/lib/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import clsx from "clsx"

interface MobileNavBarProps {
  className?: string
  id?: string
}

export default function MobileNavBar({ id, className }: MobileNavBarProps) {
  const [open, setOpen] = useState(false)

  return (
    <div id={id} className={clsx("lg:hidden", className)}>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="default"
            size="icon"
            className="h-9 w-9 rounded-full border border-neutral-200 bg-neutral-50 text-neutral-900 hover:border-neutral-300 hover:bg-neutral-100"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <X className="h-4 w-4" aria-hidden />
            ) : (
              <Menu className="h-4 w-4" aria-hidden />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="mx-2 mt-3 w-[min(100vw-1rem,20rem)] rounded-2xl border border-neutral-200 bg-white/95 p-2 shadow-2xl backdrop-blur-md"
          align="start"
          sideOffset={8}
        >
          <DropdownMenuGroup className="space-y-1">
            <DropdownMenuLabel className="flex flex-col gap-1 px-3 py-2 text-neutral-900">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                Menu
              </span>
              <span className="text-sm font-semibold">Mark Kirby</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="my-1 bg-neutral-200" />
            {mainNavLinks.map((item) => (
              <DropdownMenuItem
                key={item.label}
                asChild
                className="cursor-pointer rounded-xl p-0 focus:bg-transparent"
              >
                <NavItem
                  url={item.url}
                  label={item.label}
                  className="w-full px-3 py-2.5"
                  onNavigate={() => setOpen(false)}
                />
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
