"use client"

import { useEffect, useState } from "react"
import clsx from "clsx"

export default function DateTime({className}: {className?: string}) {
  const [time, setTime] = useState<Date | null>(null)

  useEffect(() => {
    setTime(new Date())
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className={clsx(
        "text-[9px] font-medium tracking-wide text-zinc-500 md:text-[11px]",
        className
      )}
    >
      Last Refreshed: {time ? time.toLocaleTimeString() : "—"}
    </span>
  )
}