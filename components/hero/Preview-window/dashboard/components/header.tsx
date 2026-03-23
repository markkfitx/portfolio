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
  "inline-flex h-5 w-4 items-center justify-center rounded-sm text-neutral-900 bg-neutral-400/30 border-none transition-colors hover:bg-neutral-400/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 md:h-6 md:w-5"

export default function Header() {
  return (
    <div className="relative flex w-full flex-row items-center justify-between">
      <div className="flex flex-row items-center justify-start gap-1">
        <div className="flex min-w-0 flex-1 items-center gap-3 truncate whitespace-nowrap font-medium tracking-wide! text-[#303030]">
          <BarChart3 className="size-2 shrink-0 md:size-3" strokeWidth={1.65} />
          <span className="text-[9px] md:text-[11px] font-bold">Analytics</span>
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
            <TooltipContent side="bottom" className="bg-neutral-900 text-[9px] font-medium md:text-[10px]">
              <p className="text-white">Refresh every minute</p>
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
            <TooltipContent side="bottom" className="bg-neutral-900 text-[9px] font-medium md:text-[10px]">
                <p className="text-white">Maximize Screen</p>
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
          <TooltipContent side="bottom" className="bg-neutral-900 text-[9px] font-medium md:text-[10px]">
            <p className="text-white">Drag and drop to rearrange</p>
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
          <DropdownMenuContent align="end" className="min-w-44">
            <DropdownMenuItem className="gap-2 text-[9px] text-[#303030] md:text-[11px]">
              <RefreshCw className="size-2.5" strokeWidth={1.65} />
              <span>Refresh</span>
              <span className="ml-auto text-muted-foreground">~1 min</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2 text-[9px] text-[#303030] md:text-[11px]">
              <Maximize2 className="size-2.5" strokeWidth={1.65} />
              <span>Maximize</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2 text-[9px] text-[#303030] md:text-[11px]">
              <Pencil className="size-2.5" strokeWidth={1.65} />
              <span>Edit</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="default"
          type="button"
          className="inline-flex h-5 items-center justify-center rounded-sm border border-neutral-400/50 px-2 text-[9px] text-white/80 transition-colors hover:border-neutral-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 md:h-6 md:text-[11px]"
          aria-label="New exploration"
        >
          New Exploration
        </Button>
      </div>
    </div>
  )
}
