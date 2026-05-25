"use client"

import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { WorkWithDisplay } from "@/lib/works"
import { workImageUrl, workSlug, workYear } from "@/lib/works"

interface ContentProps {
  id: string
  work: WorkWithDisplay
  featured?: boolean
  className?: string
}

const accentRing: Record<string, string> = {
  blue: "ring-blue-500/25 hover:ring-blue-400/40",
  cyan: "ring-cyan-500/25 hover:ring-cyan-400/40",
  red: "ring-red-500/25 hover:ring-red-400/40",
  green: "ring-emerald-500/25 hover:ring-emerald-400/40",
}

export default function WorkBox({
  id,
  work,
  featured = false,
  className,
}: ContentProps) {
  const slug = workSlug(work)
  const year = workYear(work)
  const skills = work.relevant_skills ?? []
  const ring = accentRing[work.cardColor] ?? accentRing.blue

  return (
    <article
      className={clsx(
        "work-card group flex h-full flex-col",
        featured && "work-card--featured",
        className
      )}
    >
      <Link
        href={`/work/${slug}`}
        className={cn(
          "flex h-full flex-col overflow-hidden rounded-2xl bg-neutral-900/80 ring-1 ring-white/10",
          "transition-all duration-300 ease-out",
          "hover:-translate-y-1 hover:bg-neutral-900 hover:shadow-xl hover:shadow-black/30",
          ring,
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
        )}
        aria-label={`View case study: ${work.title}`}
      >
        <div
          id={`${id}-media`}
          className={cn(
            "relative w-full overflow-hidden bg-[#E8ECF0]",
            featured ? "aspect-[21/10]" : "aspect-[4/3]"
          )}
        >
          <Image
            src={workImageUrl(work)}
            alt={work.title}
            fill
            sizes={
              featured
                ? "(min-width: 1024px) 66vw, 100vw"
                : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            }
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          {year ? (
            <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 text-xs font-medium tabular-nums text-white backdrop-blur-sm">
              {year}
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <h3 className="work-card-title font-heading text-xl font-semibold leading-snug text-white md:text-2xl">
                {work.title}
              </h3>
              {work.subtitle ? (
                <p className="work-card-subtitle mt-1.5 text-sm text-white/60">
                  {work.subtitle}
                </p>
              ) : null}
            </div>
            <span
              className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors group-hover:border-emerald-400/40 group-hover:bg-emerald-500/10 group-hover:text-emerald-300"
              aria-hidden
            >
              <ArrowUpRight className="size-4" />
            </span>
          </div>

          {skills.length > 0 ? (
            <ul className="mt-auto flex flex-wrap gap-2 pt-1">
              {skills.slice(0, 4).map((skill) => (
                <li
                  key={`${id}-${skill}`}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[0.6875rem] font-medium uppercase tracking-wide text-white/75"
                >
                  {skill}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Link>
    </article>
  )
}
