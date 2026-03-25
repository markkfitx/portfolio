"use client"

import {
  BarChart3,
  Maximize2,
  MoreHorizontal,
  Pencil,
  RefreshCw,
} from "lucide-react"
import DateTime from "./datetime"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

const iconToolbarClass =
  "inline-flex h-5 w-4 items-center justify-center rounded-sm border border-white/10 bg-zinc-800/80 text-zinc-200 transition-colors hover:bg-zinc-700/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/35 md:h-6 md:w-5"

export default function Header() {
  return (
    <div className="relative flex w-full flex-row items-center justify-between">
      <div className="flex flex-row items-center justify-start gap-1">
        <div className="flex min-w-0 flex-1 items-center gap-3 truncate whitespace-nowrap font-medium tracking-wide! text-zinc-100">
          <BarChart3 className="size-2 shrink-0 text-zinc-400 md:size-3" strokeWidth={1.65} />
          <span className="text-[9px] font-bold md:text-[11px]">Analytics</span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-1 md:gap-2">
        {/* md+: inline icon actions */}
        <div className="hidden items-center gap-1 md:flex md:gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                type="button"
                className={iconToolbarClass}
                aria-label="Refresh"
              >
                <RefreshCw className="size-[10px] md:size-[12px]" strokeWidth={1.65} />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="border border-white/10 bg-zinc-900 text-[9px] font-medium md:text-[10px]">
              <p className="text-zinc-100">Refresh every minute</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    variant="outline"
                    type="button"
                    className={iconToolbarClass}
                    aria-label="Maximize"
                >
                    <Maximize2 className="size-[12px] md:size-[14px]" strokeWidth={1.65} />
                </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="border border-white/10 bg-zinc-900 text-[9px] font-medium md:text-[10px]">
                <p className="text-zinc-100">Maximize Screen</p>
            </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
          <Button
            variant="outline"
            type="button"
            className={iconToolbarClass}
            aria-label="Drag and drop to rearrange"
          >
            <Pencil className="size-[12px] md:size-[14px]" strokeWidth={1.65} />
          </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="border border-white/10 bg-zinc-900 text-[9px] font-medium md:text-[10px]">
            <p className="text-zinc-100">Drag and drop to rearrange</p>
          </TooltipContent>
        </Tooltip>
        </div>

        {/* Below `md`: overflow menu (⋯) with the same three actions */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              type="button"
              className={`${iconToolbarClass} md:hidden`}
              aria-label="More actions"
            >
              <MoreHorizontal className="size-4" strokeWidth={2} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="min-w-44 border border-white/10 bg-zinc-900 text-zinc-100"
          >
            <DropdownMenuItem className="gap-2 text-[9px] focus:bg-white/10 md:text-[11px]">
              <RefreshCw className="size-2.5" strokeWidth={1.65} />
              <span>Refresh</span>
              <span className="ml-auto text-zinc-500">~1 min</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2 text-[9px] focus:bg-white/10 md:text-[11px]">
              <Maximize2 className="size-2.5" strokeWidth={1.65} />
              <span>Maximize</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2 text-[9px] focus:bg-white/10 md:text-[11px]">
              <Pencil className="size-2.5" strokeWidth={1.65} />
              <span>Edit</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="default"
          type="button"
          className="inline-flex h-5 items-center justify-center rounded-sm border border-emerald-400/45 bg-emerald-500/15 px-2 text-[9px] font-medium text-emerald-300 transition-colors hover:border-emerald-400/60 hover:bg-emerald-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40 md:h-6 md:text-[11px]"
          aria-label="New exploration"
        >
          New Exploration
        </Button>
      </div>
    </div>
  )
}
