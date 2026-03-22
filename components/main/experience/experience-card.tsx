import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowUpRight } from "lucide-react"
import { Card, CardMedia } from "@/components/ui/card"
import { cn } from "@/lib/utils"

function caseStudyHref(raw: string): string | null {
  const u = raw.trim()
  if (!u) return null
  if (/^https?:\/\//i.test(u)) return u
  return `https://${u}`
}

interface ContentProps {
  id: string
  children: ReactNode
  body: string
  idx: number
  icon: string
  image: string
  company: string
  job: string
  alignment: "start" | "center" | "end"
  caseStudyUrl: string
  className?: string
}

function headlineFromChildren(children: ReactNode, fallback: string) {
  if (typeof children === "string") {
    const text = children.trim()
    return text.length > 0 ? text : fallback
  }
  return fallback
}

export default function ExperienceSubSection({
  id,
  className,
  children,
  icon,
  image,
  idx,
  company,
  job,
  body,
  alignment: _alignment,
  caseStudyUrl,
}: ContentProps) {
  const headline = headlineFromChildren(children, job)
  const studyHref = caseStudyHref(caseStudyUrl)

  return (
    <div
      className={clsx(
        "mx-auto flex w-full max-w-[1240px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-16",
        className
      )}
    >
      {/* Case-study copy column — left-aligned like reference + Awards / skill headers */}
      <div className="flex w-full min-w-0 flex-col items-start gap-5 text-left lg:w-[42%] lg:max-w-xl lg:shrink-0">
        <div className="flex w-full flex-wrap items-center gap-3">
          {icon.length > 0 ? (
            <Image
              src={icon}
              alt={`${company} logo`}
              width={40}
              height={40}
              className="size-10 shrink-0 rounded-full object-cover ring-1 ring-white/15"
            />
          ) : null}
          <div className="flex min-w-0 flex-col gap-0.5 leading-tight">
            <p className="font-heading text-sm font-semibold tracking-tight text-white md:text-base">
              {company}
            </p>
            <p className="font-sans text-sm font-normal text-white/70">{job}</p>
          </div>
        </div>

        <h3
          id={`${id}-item-headline-${idx}`}
          className="experience-case-headline font-heading text-balance text-white"
        >
          {headline}
        </h3>

        <p className="font-sans max-w-prose text-pretty text-base leading-relaxed text-white/70">
          {body}
        </p>

        {studyHref ? (
          <div className="pt-1">
            <Link
              href={studyHref}
              target="_blank"
              rel="noopener noreferrer"
              id={`${id}-case-study-cta-${idx}`}
              className={cn(
                "group inline-flex items-center gap-2 rounded-full border border-emerald-400/45",
                "bg-emerald-500/[0.07] px-5 py-2.5 text-sm font-medium text-emerald-400",
                "transition-colors hover:border-emerald-400/70 hover:bg-emerald-500/15 hover:text-emerald-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40",
                "focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              )}
            >
              View case study
              <ArrowUpRight
                className="size-4 shrink-0 transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
                aria-hidden
              />
            </Link>
          </div>
        ) : null}
      </div>

      <div className="relative w-full min-w-0 lg:flex-1 lg:w-[58%]">
        <Card
          className={cn(
            "overflow-hidden rounded-3xl border-0 bg-[#F5F5F7] p-0 shadow-xl shadow-black/20",
            "ring-1 ring-black/5 dark:bg-[#F5F5F7]"
          )}
        >
          <CardMedia className="relative aspect-4/3 min-h-[260px] w-full bg-transparent p-0 md:min-h-[300px]">
            <Image
              src={image}
              alt={`${company} — project preview`}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-contain object-center p-6 md:p-8 lg:p-10"
              priority={idx === 0}
            />
          </CardMedia>
        </Card>
      </div>
    </div>
  )
}
