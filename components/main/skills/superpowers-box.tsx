import { Card } from "@/components/ui/card"
import clsx from "clsx"
import data from "@/app/data/languages.json"
import { Bolt } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ContentProps {
  id: string
  className?: string
}

type MarqueeDirection = "ltr" | "rtl"

function MarqueeRow({
  labels,
  direction,
}: {
  labels: string[]
  direction: MarqueeDirection
}) {
  const doubled = [...labels, ...labels]

  return (
    <div
      className={clsx(
        /* min-w-0 lets the track scroll inside CSS grid/flex (default min-width:auto blocks it) */
        "relative min-w-0 w-full overflow-hidden py-1",
        "[mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]",
        "[-webkit-mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
      )}
    >
      <div
        className={clsx(
          "flex w-max max-w-none shrink-0 flex-nowrap gap-3",
          direction === "ltr" ? "superpowers-marquee-ltr" : "superpowers-marquee-rtl"
        )}
      >
        {doubled.map((label, idx) => (
          <Badge
            key={`${label}-${idx}`}
            className="whitespace-nowrap rounded-lg border border-white/5 bg-black/35 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm"
          >
            {label}
          </Badge>
        ))}
      </div>
    </div>
  )
}

const ROW_DIRECTIONS: MarqueeDirection[] = ["ltr", "rtl", "ltr"]

export default function SuperPowerBox({ id, className }: ContentProps) {
  const rows = data.superPowerRows as string[][]

  return (
    <Card className={clsx("h-full p-0 gap-0", className)}>
      <div
        id={id}
        className="relative flex h-full flex-col items-center justify-start gap-6 p-6 md:p-7"
      >
        <div className="flex w-full items-center justify-center gap-2">
          <span className="inline-flex size-8 items-center justify-center rounded-lg border border-emerald-300/25 bg-emerald-400/10">
            <Bolt className="size-4 text-emerald-300" aria-hidden />
          </span>
          <h5 className="font-heading text-base font-semibold tracking-tight text-white/90">
            Super Powers
          </h5>
        </div>

        <div className="flex w-full flex-col gap-1">
          {rows.map((badges, rowIdx) => (
            <MarqueeRow
              key={`superpowers-row-${rowIdx}`}
              labels={badges}
              direction={ROW_DIRECTIONS[rowIdx] ?? "ltr"}
            />
          ))}
        </div>
      </div>
    </Card>
  )
}
