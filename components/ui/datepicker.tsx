"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker({value}: {value: Date}) {
  const [date, setDate] = React.useState<Date | undefined>(value)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!date}
          className={cn(
            "h-5 shrink-0 gap-1 rounded-md border border-neutral-400/50 bg-white px-1! text-[9px] font-medium text-[#303030] shadow-none transition-colors md:h-6 md:px-2! md:text-[11px]",
            "hover:bg-neutral-50 hover:text-[#303030]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/40"
          )}
        >
          <CalendarIcon className="size-3" strokeWidth={1.65} />
          {date ? (
            format(date, "PPP")
          ) : (
            <span className="font-medium text-[#303030]">Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  )
}

export default DatePicker;