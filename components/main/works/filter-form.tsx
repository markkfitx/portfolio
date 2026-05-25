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
import { ListFilter } from "lucide-react"

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

  function FilterPill({
    optionLabel,
    count,
    code,
  }: {
    optionLabel: string
    count: number
    code: number
  }) {
    const isActive =
      activeFilter === code ||
      (code === FILTER_ALL.code && activeFilter == null)

    return (
      <button
        type="button"
        onClick={() =>
          onFilterChange(code === FILTER_ALL.code ? null : code)
        }
        aria-pressed={isActive}
        className={clsx(
          "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
          isActive
            ? "border-emerald-400/50 bg-emerald-500/15 text-emerald-200"
            : "border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white/90"
        )}
      >
        {optionLabel}
        <span className="ml-1 tabular-nums opacity-70">({count})</span>
      </button>
    )
  }

  return (
    <div
      id={id}
      className={clsx("flex w-full flex-col gap-3 sm:flex-row sm:items-center", className)}
    >
      <span className="sr-only">{title}</span>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="h-9 rounded-full border border-white/10 bg-white/5 text-white/90"
              variant="default"
            >
              <ListFilter className="mr-2 h-4 w-4" />
              {label}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="mx-2 mt-2 w-screen max-w-xs rounded-2xl border border-white/10 bg-[#050509]/95 p-2 text-white shadow-2xl backdrop-blur-md sm:max-w-sm"
            align="start"
            sideOffset={8}
          >
            <DropdownMenuItem
              className="cursor-pointer rounded-xl px-3 py-2.5 text-sm"
              onClick={() => onFilterChange(null)}
            >
              {FILTER_ALL.label} ({counts[FILTER_ALL.label] ?? 0})
            </DropdownMenuItem>
            {filterOptions.map((item, idx) => (
              <DropdownMenuItem
                key={`${id}-dropdown-${idx}`}
                className="cursor-pointer rounded-xl px-3 py-2.5 text-sm"
                onClick={() => onFilterChange(item.code)}
              >
                {item.label} ({counts[item.label] ?? 0})
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden flex-wrap gap-2 md:flex">
        <FilterPill
          optionLabel={FILTER_ALL.label}
          count={counts[FILTER_ALL.label] ?? 0}
          code={FILTER_ALL.code}
        />
        {filterOptions.map((item, idx) => (
          <FilterPill
            key={`${id}-pill-${idx}`}
            optionLabel={item.label}
            count={counts[item.label] ?? 0}
            code={item.code}
          />
        ))}
      </div>
    </div>
  )
}
