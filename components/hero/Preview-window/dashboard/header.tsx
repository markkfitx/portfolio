"use client"

import { Bell, Menu, Search, ShoppingBag, User } from "lucide-react"
import { Button } from "@/components/ui/button"
function ShopifyMark({ className }: { className?: string }) {
  return (
    <div
      className={className}
      aria-hidden
    >
      <div className="relative flex items-center justify-center text-white">
        <ShoppingBag
          className="size-4 shrink-0"
          strokeWidth={1.35}
        />
        <span className="absolute text-[6px] font-bold leading-none tracking-tight">
          S
        </span>
      </div>
    </div>
  )
}

type HeaderProps = {
  /** Opens the mobile navigation drawer below the `md` breakpoint */
  onOpenSidebar?: () => void
}

export default function Header({ onOpenSidebar }: HeaderProps) {
  return (
    <header className="flex shrink-0 items-center gap-3 border-none py-1.75 px-3 sm:gap-4 sm:px-4">
      <div className="flex min-w-0 shrink-0 items-center gap-2">
        {onOpenSidebar ? (
          <Button
            type="button"
            className="inline-flex md:h-6 md:w-6 h-5 w-5 shrink-0 items-center justify-center rounded-md text-white bg-none! transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 md:hidden"
            aria-label="Open navigation menu"
            onClick={onOpenSidebar}
          >
            <Menu className="md:size-[14px] size-[12px]" strokeWidth={2} />
          </Button>
        ) : null}
        <div className="hidden min-w-0 items-center gap-2 md:flex">
          <ShopifyMark />
          <span className="select-none text-[12px] font-semibold lowercase italic tracking-tight text-white">
            shopify
          </span>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 justify-center px-1 sm:px-2">
        <div
          role="search"
          className="flex w-full max-w-[min(100%,420px)] items-center gap-2 rounded-xl bg-[#303030] px-3 py-0.5 md:py-1 ring-1 ring-white/4"
        >
          <Search
            className="md:size-[12px] size-[10px] shrink-0 text-[#a3a3a3]"
            strokeWidth={2}
            aria-hidden
          />
          <span className="min-w-0 flex-1 truncate text-left md:text-[10px] text-[8px] text-[#a3a3a3]">
            Search
          </span>
          <div className="ml-auto flex shrink-0 items-center gap-1">
            <kbd className="inline-flex h-3.5 min-w-[14px] items-center justify-center rounded bg-[#1f1f1f] px-1 md:text-[10px] text-[8px] font-medium leading-none text-[#8a8a8a] ring-1 ring-black/40">
              ⌘
            </kbd>
            <kbd className="inline-flex h-3.5 min-w-[14px] items-center justify-center rounded bg-[#1f1f1f] px-1 md:text-[10px] text-[8px] font-medium leading-none text-[#8a8a8a] ring-1 ring-black/40">
              K
            </kbd>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <Button
          type="button"
          className="inline-flex md:h-6 md:w-6 h-5 w-5 items-center justify-center rounded-sm text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
          aria-label="Account"
        >
          <User className="md:size-[14px] size-[12px]" strokeWidth={1.75} />
        </Button>
        <Button
          type="button"
          className="inline-flex md:h-6 md:w-6 h-5 w-5 items-center justify-center rounded-sm text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
          aria-label="Notifications"
        >
          <Bell className="md:size-[14px] size-[12px]" strokeWidth={1.75} />
        </Button>
        <div className="hidden h-5 w-px shrink-0 bg-white/15 md:block" aria-hidden />
        <div className="hidden items-center gap-1.5 md:flex">
          <span className="max-w-28 truncate text-[8px] font-medium uppercase tracking-wide text-white sm:max-w-none">
            DevelopMore
          </span>
        </div>
      </div>
    </header>
  )
}
