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

const muted = "#6d6d6d"

function ShopMark({ className }: { className?: string }) {
  return (
    <div className={clsx("relative flex size-3 shrink-0 items-center justify-center", className)}>
      <ShoppingBag className="size-3 text-[#303030]" strokeWidth={1.5} />
      <span className="absolute text-[7px] font-bold leading-none text-[#303030]">S</span>
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
  /** Custom left icon (e.g. Shop “S” mark) */
  startSlot?: React.ReactNode
  label: string
  badge?: string
  trailing?: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 rounded-lg px-2 py-0.75 text-[13px] font-medium leading-tight text-[#303030]",
        "hover:bg-black/4",
        className
      )}
    >
      {startSlot ? (
        startSlot
      ) : Icon ? (
        <Icon className="size-3 shrink-0 " strokeWidth={2} />
      ) : null}
      <span className="text-[11px] min-w-0 flex-1 font-medium truncate tracking-wide! whitespace-nowrap">{label}</span>
      {badge ? (
        <span className="shrink-0 rounded-full bg-[#d4d4d4] px-2 py-0.5 text-[9px] font-normal tabular-nums text-[#303030]">
          {badge}
        </span>
      ) : null}
      {trailing}
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mt-4 flex items-center justify-between px-2 text-[9px] font-semibold uppercase tracking-wide first:mt-2"
      style={{ color: muted }}
    >
      <span>{children}</span>
      <ChevronRight className="size-3.5 shrink-0 opacity-80" aria-hidden />
    </div>
  )
}

function TextRow({
  label,
  chevron,
  className,
}: {
  label: string
  chevron?: boolean
  className?: string
}) {
  return (
    <button
      type="button"
      className={clsx(
        "flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-[12px] font-medium text-[#303030] hover:bg-black/4",
        className
      )}
    >
      <span className="min-w-0 flex-1 truncate">{label}</span>
      {chevron ? (
        <ChevronRight className="size-4 shrink-0 text-[#303030]/70" aria-hidden />
      ) : null}
    </button>
  )
}

export default function Sidebar() {
  return (
    <aside className="flex h-full min-h-0 w-[225px] shrink-0 flex-col border-r border-black/6 bg-[#ebebeb]">
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
        <nav className="flex flex-col gap-0.5 px-2 pb-2 pt-2" aria-label="Primary">
          <NavRow icon={Home} label="Home" />
          <NavRow icon={Inbox} label="Orders" badge="144" />
          <NavRow icon={Tag} label="Products" />
          <NavRow icon={Users} label="Customers" />
          <NavRow icon={Megaphone} label="Marketing" />
          <NavRow icon={Percent} label="Discounts" />
          <NavRow icon={ImageGallery} label="Content" />
          <NavRow icon={Globe} label="Markets" />
          <NavRow icon={Building2} label="Finance" />

          <div className="mt-1 rounded-lg bg-white px-2 py-1.5 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-3 text-[11px] min-w-0 flex-1 truncate tracking-wide! whitespace-nowrap font-semibold text-[#303030]">
              <BarChart3 className="size-3 shrink-0" strokeWidth={1.65} />
              <span>Analytics</span>
            </div>
            <div className="mt-1 space-y-0.5 pl-8">
              <button
                type="button"
                className="block w-full cursor-default rounded-md border-0 bg-transparent py-1 text-left text-[12px] font-medium text-[#5c5c5c] hover:bg-black/4"
              >
                Reports
              </button>
              <button
                type="button"
                className="block w-full cursor-default rounded-md border-0 bg-transparent py-1 text-left text-[12px] font-medium text-[#5c5c5c] hover:bg-black/4"
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
            trailing={<span className="size-1.5 shrink-0 rounded-full bg-black" aria-hidden />}
          />
        </nav>

        <div className="px-2 pb-1">
          <SectionLabel>Apps</SectionLabel>
          <NavRow icon={Puzzle} label="GOAFFPRO - Affiliate Mar…" />
        </div>

        <div className="mt-auto flex flex-col gap-0.5 border-t border-black/5 px-2 pb-3 pt-5">
        <NavRow icon={Settings} label="Settings" />
        </div>
      </div>
    </aside>
  )
}
