"use client"

import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardMedia,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { WorkWithDisplay } from "@/lib/works"
import { workImageUrl, workSlug, workYear } from "@/lib/works"

interface ContentProps {
  id: string
  work: WorkWithDisplay
  className?: string
}

const cardSurfaceByColor: Record<string, string> = {
  red: "to-neutral-700/60 border-neutral-600/30",
  cyan: "to-emerald-600/35 border-emerald-800/20",
  blue: "to-neutral-600/60 border-neutral-600/30",
  green: "to-emerald-700/35 border-emerald-800/20",
}

export default function WorkBox({ id, work, className }: ContentProps) {
  const surface = cardSurfaceByColor[work.cardColor] ?? cardSurfaceByColor.blue
  const slug = workSlug(work)
  const year = workYear(work)
  const skills = work.relevant_skills ?? []

  return (
    <div className={clsx("flex w-full flex-col", className)}>
      <Link
        href={`/work/${slug}`}
        className={cn(
          "group block",
          "transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "shadow-lg shadow-black/10 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/25",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
          "transition-all duration-300 ease-out"
        )}
        aria-label={`View case study: ${work.title}`}
      >
        <Card
          className={cn(
            "gap-0 overflow-hidden border-0 p-6 shadow-none md:p-6 lg:p-8",
            "text-white transition-[filter] duration-300 ease-out will-change-[filter]",
            "ring-white/8 bg-gradient-to-br from-emerald-900/30 via-neutral-800/20 border",
            "group-hover:brightness-[1.03]",
            surface
          )}
        >
          <CardHeader className="flex flex-row items-center justify-between gap-4 p-0">
            <div
              className="h-px w-10 shrink-0 origin-left bg-white transition-[width] duration-500 ease-out group-hover:w-14 md:w-12 md:group-hover:w-16"
              aria-hidden
            />
            <CardAction>
              {year ? (
                <span
                  className={cn(
                    "rounded-full border border-white/50 px-2 py-1 text-xs font-semibold tabular-nums text-white md:px-3",
                    "transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out",
                    "group-hover:border-white/30 group-hover:bg-white/15 group-hover:shadow-sm"
                  )}
                >
                  {year}
                </span>
              ) : null}
            </CardAction>
          </CardHeader>

          <CardContent className="mt-8 p-0 md:mt-10">
            <CardTitle
              className={cn(
                "font-heading text-balance text-2xl font-bolder uppercase leading-[1.15] tracking-wide text-white",
                "md:text-3xl lg:text-4xl"
              )}
            >
              {work.title}
            </CardTitle>
            {work.subtitle ? (
              <CardDescription
                className={cn(
                  "mt-3 text-xs font-medium uppercase tracking-[0.2em] text-white/70",
                  "md:text-[0.8125rem]",
                  "transition-[color,opacity] duration-300 ease-out",
                  "group-hover:text-white group-hover:opacity-100"
                )}
              >
                {work.subtitle}
              </CardDescription>
            ) : null}
          </CardContent>

          <CardMedia
            id={`${id}-media`}
            className={cn(
              "mt-8 aspect-4/3 w-full rounded-2xl border-0 bg-[#E2E8F0] p-4 md:mt-10 md:rounded-3xl md:p-6 lg:p-8",
              "transition-[box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
              "group-hover:shadow-xl group-hover:shadow-black/15"
            )}
          >
            <Image
              src={workImageUrl(work)}
              alt={work.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className={cn(
                "object-contain object-center",
                "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
                "group-hover:scale-[1.03]"
              )}
            />
            {skills.length > 0 ? (
              <div className="pointer-events-none absolute bottom-4 right-4 flex flex-col items-end gap-2 md:bottom-5 md:right-5">
                {skills.slice(0, 3).map((skill) => (
                  <span
                    key={`${id}-${skill}`}
                    className={cn(
                      "rounded-full bg-[#FAF7F2] px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-wide text-neutral-900 shadow-sm md:px-4 md:text-xs",
                      "transition-[transform,box-shadow] duration-300 ease-out",
                      "group-hover:-translate-y-0.5 group-hover:shadow-md"
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : null}
          </CardMedia>
        </Card>
      </Link>
    </div>
  )
}
