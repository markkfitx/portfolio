"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { FilterOptionRow } from "@/lib/works"
import { FILTER_ALL } from "@/lib/works"
import clsx from "clsx"
import { Button } from "@/components/ui/button"
import { GalleryHorizontalEnd, Laptop, ListFilter } from "lucide-react"

const badgeColorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-800 border-blue-200 hover:border-blue-400",
  cyan: "bg-cyan-100 text-cyan-800 border-cyan-200 hover:border-cyan-400",
  red: "bg-red-100 text-red-800 border-red-200 hover:border-red-400",
  green: "bg-green-100 text-green-800 border-green-200 hover:border-green-400",
  white:
    "bg-neutral-100 text-neutral-800 border-neutral-200 hover:border-neutral-400",
}

interface FilterFormProps {
  id: string
  title: string
  className?: string
  activeFilter: number | null
  onFilterChange: (code: number | null) => void
  counts: Record<string, number>
  filterOptions: FilterOptionRow[]
}

function activeLabel(
  code: number | null,
  options: FilterOptionRow[]
): string {
  if (code == null || code === FILTER_ALL.code) return FILTER_ALL.label
  return options.find((o) => o.code === code)?.label ?? FILTER_ALL.label
}

export default function FilterForm({
  id,
  title,
  className,
  activeFilter,
  onFilterChange,
  counts,
  filterOptions,
}: FilterFormProps) {
  const label = activeLabel(activeFilter, filterOptions)

  function FilterButton({
    optionLabel,
    color,
    count,
    code,
  }: {
    optionLabel: string
    color: string
    count: number
    code: number
  }) {
    const isActive =
      activeFilter === code ||
      (code === FILTER_ALL.code && activeFilter == null)

    return (
      <Button
        type="button"
        variant="default"
        onClick={() =>
          onFilterChange(code === FILTER_ALL.code ? null : code)
        }
        aria-pressed={isActive}
        className={clsx(
          "py-0 px-3 hover:cursor-pointer text-xs transition-opacity",
          badgeColorMap[color] ?? badgeColorMap.white,
          !isActive && "opacity-50 hover:opacity-80",
          isActive && "ring-1 ring-neutral-400"
        )}
      >
        {code === FILTER_ALL.code ? (
          <GalleryHorizontalEnd className="mr-1 size-3.5" />
        ) : (
          <Laptop className="mr-1 size-3.5" />
        )}
        {optionLabel}
        <span className="ml-1 tabular-nums opacity-70">({count})</span>
      </Button>
    )
  }

  return (
    <div
      id={id}
      className={clsx(
        "z-10 mb-8 flex w-full flex-row items-center justify-start gap-4",
        className
      )}
    >
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="h-9 rounded-full border border-blue-200 bg-blue-50 text-blue-700"
              variant="default"
            >
              <ListFilter className="mr-2 h-4 w-4" />
              {label}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="mx-2 mt-2 w-screen max-w-xs rounded-2xl border border-neutral-200 bg-white/95 p-2 text-neutral-900 shadow-2xl backdrop-blur-md sm:max-w-sm"
            align="start"
            sideOffset={8}
          >
            <DropdownMenuItem
              className="cursor-pointer rounded-xl px-3 py-2.5 text-sm text-neutral-700 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-900"
              onClick={() => onFilterChange(null)}
            >
              {FILTER_ALL.label} ({counts[FILTER_ALL.label] ?? 0})
            </DropdownMenuItem>
            {filterOptions.map((item, idx) => (
              <DropdownMenuItem
                key={`${id}-dropdown-item-${idx}`}
                className="cursor-pointer rounded-xl px-3 py-2.5 text-sm text-neutral-700 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-900"
                onClick={() => onFilterChange(item.code)}
              >
                {item.label} ({counts[item.label] ?? 0})
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden flex-row flex-wrap items-center gap-2 md:flex">
        <FilterButton
          optionLabel={FILTER_ALL.label}
          color="white"
          count={counts[FILTER_ALL.label] ?? 0}
          code={FILTER_ALL.code}
        />
        {filterOptions.map((item, idx) => (
          <FilterButton
            key={`${id}-badge-${idx}`}
            optionLabel={item.label}
            color={item.color}
            count={counts[item.label] ?? 0}
            code={item.code}
          />
        ))}
      </div>
      <span className="sr-only">{title}</span>
    </div>
  )
}
