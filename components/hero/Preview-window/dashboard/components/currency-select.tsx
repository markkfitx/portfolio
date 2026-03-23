"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { ArrowLeftRight, Check, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

type Currency = {
  code: string
  name: string
  symbol: string
}

/** Curated list — enough rows for scroll; search covers the rest for the demo */
const CURRENCIES: Currency[] = [
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "AED", name: "United Arab Emirates Dirham", symbol: "د.إ" },
  { code: "AFN", name: "Afghan Afghani", symbol: "؋" },
  { code: "ALL", name: "Albanian Lek", symbol: "L" },
  { code: "AMD", name: "Armenian Dram", symbol: "֏" },
  { code: "ANG", name: "Netherlands Antillean Guilder", symbol: "ƒ" },
  { code: "AOA", name: "Angolan Kwanza", symbol: "Kz" },
  { code: "ARS", name: "Argentine Peso", symbol: "$" },
  { code: "AUD", name: "Australian Dollar", symbol: "$" },
  { code: "BRL", name: "Brazilian Real", symbol: "R$" },
  { code: "CAD", name: "Canadian Dollar", symbol: "$" },
  { code: "CHF", name: "Swiss Franc", symbol: "Fr" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
  { code: "CZK", name: "Czech Koruna", symbol: "Kč" },
  { code: "DKK", name: "Danish Krone", symbol: "kr" },
  { code: "EGP", name: "Egyptian Pound", symbol: "£" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "British Pound", symbol: "£" },
  { code: "HKD", name: "Hong Kong Dollar", symbol: "$" },
  { code: "HUF", name: "Hungarian Forint", symbol: "Ft" },
  { code: "IDR", name: "Indonesian Rupiah", symbol: "Rp" },
  { code: "ILS", name: "Israeli New Shekel", symbol: "₪" },
  { code: "INR", name: "Indian Rupee", symbol: "₹" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥" },
  { code: "KRW", name: "South Korean Won", symbol: "₩" },
  { code: "MXN", name: "Mexican Peso", symbol: "$" },
  { code: "MYR", name: "Malaysian Ringgit", symbol: "RM" },
  { code: "NOK", name: "Norwegian Krone", symbol: "kr" },
  { code: "NZD", name: "New Zealand Dollar", symbol: "$" },
  { code: "PHP", name: "Philippine Peso", symbol: "₱" },
  { code: "PLN", name: "Polish Zloty", symbol: "zł" },
  { code: "RUB", name: "Russian Ruble", symbol: "₽" },
  { code: "SAR", name: "Saudi Riyal", symbol: "ر.س" },
  { code: "SEK", name: "Swedish Krona", symbol: "kr" },
  { code: "SGD", name: "Singapore Dollar", symbol: "$" },
  { code: "THB", name: "Thai Baht", symbol: "฿" },
  { code: "TRY", name: "Turkish Lira", symbol: "₺" },
  { code: "TWD", name: "New Taiwan Dollar", symbol: "$" },
  { code: "ZAR", name: "South African Rand", symbol: "R" },
]

function formatRow(c: Currency) {
  return `${c.name} (${c.code} ${c.symbol})`
}

export default function CurrencySelect() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [selectedCode, setSelectedCode] = useState("USD")
  const searchRef = useRef<HTMLInputElement>(null)

  const selected = useMemo(
    () => CURRENCIES.find((c) => c.code === selectedCode) ?? CURRENCIES[0],
    [selectedCode]
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return CURRENCIES
    return CURRENCIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q) ||
        c.symbol.toLowerCase().includes(q)
    )
  }, [query])

  useEffect(() => {
    if (!open) return
    const id = requestAnimationFrame(() => {
      searchRef.current?.focus()
    })
    return () => cancelAnimationFrame(id)
  }, [open])

  return (
    <Popover
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (!next) setQuery("")
      }}
    >
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          aria-expanded={open}
          aria-haspopup="listbox"
          className={cn(
            "h-5 shrink-0 gap-1 rounded-md border border-neutral-400/50 bg-white px-1! text-[9px] font-medium text-[#303030] shadow-none transition-colors md:h-6 md:px-2! md:text-[11px]",
            "hover:bg-neutral-50 hover:text-[#303030]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/40"
          )}
        >
          <ArrowLeftRight
            className="size-2.5 shrink-0 text-neutral-600 md:size-3"
            strokeWidth={2}
            aria-hidden
          />
          <span className="tabular-nums">
            {selected.symbol} {selected.code} {selected.symbol}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={6}
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="w-[min(calc(100vw-2rem),17.5rem)] overflow-hidden p-0 shadow-md"
      >
        <div className="border-b border-neutral-200 bg-white p-2">
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-2 top-1/2 size-3.5 -translate-y-1/2 text-neutral-400"
              strokeWidth={2}
              aria-hidden
            />
            <Input
              ref={searchRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a currency"
              className="h-8 border-neutral-200 bg-neutral-100 pl-8 md:text-[11px] text-[9px] placeholder:text-neutral-400"
              autoComplete="off"
              aria-autocomplete="list"
            />
          </div>
        </div>
        <div
          role="listbox"
          aria-label="Currencies"
          className="max-h-[min(50vh,15rem)] overflow-y-auto bg-white py-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-300 [&::-webkit-scrollbar-track]:bg-transparent"
        >
          {filtered.length === 0 ? (
            <p className="px-3 py-2 md:text-[11px] text-[9px] text-neutral-500">
              No currencies match your search.
            </p>
          ) : (
            filtered.map((c) => {
              const isSelected = c.code === selectedCode
              return (
                <button
                  key={c.code}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={cn(
                    "flex w-full items-center gap-2 px-3 py-1.5 text-left md:text-[11px] text-[9px] text-[#303030] transition-colors",
                    isSelected ? "bg-neutral-100" : "hover:bg-neutral-50"
                  )}
                  onClick={() => {
                    setSelectedCode(c.code)
                    setOpen(false)
                  }}
                >
                  <span className="min-w-0 flex-1 truncate">
                    {formatRow(c)}
                  </span>
                  {isSelected ? (
                    <Check
                      className="size-3.5 shrink-0 text-neutral-600"
                      strokeWidth={2}
                      aria-hidden
                    />
                  ) : (
                    <span className="size-3.5 shrink-0" aria-hidden />
                  )}
                </button>
              )
            })
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
