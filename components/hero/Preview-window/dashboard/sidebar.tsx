"use client"

import {
  BarChart3,
  Building2,
  ChevronRight,
  Globe,
  Home,
  Image as ImageGallery,
  Inbox,
  Megaphone,
  Monitor,
  Percent,
  Puzzle,
  ShoppingBag,
  Tag,
  Users,
  Settings,
} from "lucide-react"
import clsx from "clsx"

function ShopMark({ className }: { className?: string }) {
  return (
    <div className={clsx("relative flex size-2 shrink-0 items-center justify-center md:size-3", className)}>
      <ShoppingBag className="size-2 text-zinc-300 md:size-3" strokeWidth={1.5} />
      <span className="absolute text-[7px] font-bold leading-none text-zinc-200">S</span>
    </div>
  )
}

function NavRow({
  icon: Icon,
  startSlot,
  label,
  badge,
  trailing,
  className,
}: {
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>
  startSlot?: React.ReactNode
  label: string
  badge?: string
  trailing?: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 rounded-lg px-2 py-0.75 text-[11px] font-medium leading-tight text-zinc-200 hover:bg-white/5 md:gap-3 md:text-[13px]",
        className
      )}
    >
      {startSlot ? (
        startSlot
      ) : Icon ? (
        <Icon className="size-2 shrink-0 text-zinc-400 md:size-3" strokeWidth={2} />
      ) : null}
      <span className="min-w-0 flex-1 truncate whitespace-nowrap font-medium tracking-wide! text-[8px] md:text-[10px]">
        {label}
      </span>
      {badge ? (
        <span className="shrink-0 rounded-full bg-zinc-700 px-2 py-0.5 text-[7px] font-normal tabular-nums text-zinc-200 md:text-[9px]">
          {badge}
        </span>
      ) : null}
      {trailing}
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 flex items-center justify-between px-2 text-[7px] font-semibold uppercase tracking-wide text-zinc-500 first:mt-2 md:text-[9px]">
      <span>{children}</span>
      <ChevronRight className="size-2 shrink-0 opacity-80 md:size-3.5" aria-hidden />
    </div>
  )
}

export default function Sidebar() {
  return (
    <aside className="flex h-full min-h-0 w-[150px] shrink-0 flex-col border-r border-white/10 bg-zinc-900 md:w-[225px]">
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
        <nav className="flex flex-col gap-0 px-2 pb-2 pt-2 md:gap-0.5" aria-label="Primary">
          <NavRow icon={Home} label="Home" />
          <NavRow icon={Inbox} label="Orders" badge="144" />
          <NavRow icon={Tag} label="Products" />
          <NavRow icon={Users} label="Customers" />
          <NavRow icon={Megaphone} label="Marketing" />
          <NavRow icon={Percent} label="Discounts" />
          <NavRow icon={ImageGallery} label="Content" />
          <NavRow icon={Globe} label="Markets" />
          <NavRow icon={Building2} label="Finance" />

          <div className="mt-1 rounded-lg bg-white/10 px-2 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <div className="flex min-w-0 flex-1 items-center gap-3 truncate whitespace-nowrap text-[8px] font-semibold text-zinc-100 md:text-[11px]">
              <BarChart3 className="size-2 shrink-0 md:size-3" strokeWidth={1.65} />
              <span className="text-[8px] md:text-[11px]">Analytics</span>
            </div>
            <div className="mt-1 space-y-0.5 pl-4">
              <button
                type="button"
                className="block w-full cursor-default rounded-md border-0 bg-transparent p-1 text-left text-[9px] font-medium text-zinc-400 hover:bg-white/5 md:text-[12px]"
              >
                Reports
              </button>
              <button
                type="button"
                className="block w-full cursor-default rounded-md border-0 bg-transparent p-1 text-left text-[9px] font-medium text-zinc-400 hover:bg-white/5 md:text-[12px]"
              >
                Live View
              </button>
            </div>
          </div>

          <SectionLabel>Sales channels</SectionLabel>
          <NavRow icon={Monitor} label="Online Store" />
          <NavRow
            startSlot={<ShopMark />}
            label="Shop"
            trailing={<span className="size-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />}
          />
        </nav>

        <div className="px-2 pb-1">
          <SectionLabel>Apps</SectionLabel>
          <NavRow icon={Puzzle} label="GOAFFPRO - Affiliate Mar…" />
        </div>

        <div className="mt-auto flex flex-col gap-0.5 border-t border-white/10 px-2 pb-3 pt-5">
          <NavRow icon={Settings} label="Settings" />
        </div>
      </div>
    </aside>
  )
}
