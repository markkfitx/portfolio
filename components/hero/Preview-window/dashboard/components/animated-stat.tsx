"use client"

import CountUp from "@/components/animations/CountUp"
import { cn } from "@/lib/utils"

type AnimatedStatProps = {
  value: number
  from?: number
  prefix?: string
  suffix?: string
  delay?: number
  duration?: number
  className?: string
}

export function AnimatedStat({
  value,
  from = 0,
  prefix,
  suffix,
  delay = 0,
  duration = 1.25,
  className,
}: AnimatedStatProps) {
  return (
    <p className={cn("m-0 inline-flex items-baseline gap-0", className)}>
      {prefix ? <span className="tabular-nums">{prefix}</span> : null}
      <CountUp
        to={value}
        from={from}
        delay={delay}
        duration={duration}
        className="tabular-nums"
      />
      {suffix ? <span className="tabular-nums">{suffix}</span> : null}
    </p>
  )
}
