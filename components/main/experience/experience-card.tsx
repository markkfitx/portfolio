import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import type { ReactNode } from "react"
import { ArrowUpRight } from "lucide-react"
import { Card, CardMedia } from "@/components/ui/card"

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
  /** Company / project URL (with or without protocol) */
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
  alignment,
  caseStudyUrl,
}: ContentProps) {
  const headline = headlineFromChildren(children, job)
  const studyHref = caseStudyHref(caseStudyUrl)

  const copyAlign = {
    start: "items-start text-left",
    center: "items-center text-center lg:items-start lg:text-left",
    end: "items-end text-right",
  } as const

  return (
    <div
      className={clsx(
        "flex w-full max-w-[1200px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-16",
        className
      )}
    >
      <div
        className={clsx(
          "flex w-full flex-col gap-3 md:gap-4 lg:w-[42%] lg:max-w-xl lg:shrink-0",
          copyAlign[alignment]
        )}
      >
        <div
          className={clsx(
            "mb-1 flex flex-wrap items-center gap-3",
            alignment === "center" && "justify-center lg:justify-start",
            alignment === "end" && "justify-end"
          )}
        >
          {icon.length > 0 ? (
            <Image
              src={icon}
              alt={`${company} logo`}
              width={40}
              height={40}
              className="size-10 shrink-0 rounded-full object-cover ring-1 ring-white/15"
            />
          ) : null}
          <div
            className={clsx(
              "flex min-w-0 flex-col gap-0.5 leading-tight",
              alignment === "center" &&
                "items-center text-center lg:items-start lg:text-left",
              alignment === "end" && "items-end text-right"
            )}
          >
            <h6 className="font-heading text-sm font-semibold tracking-tight text-white md:text-base">
              {company}
            </h6>
            <h6 className="font-sans text-xs font-medium tracking-wide text-white">
              {job}
            </h6>
          </div>
        </div>

        <h3
          id={`${id}-item-headline-${idx}`}
          className="experience-case-headline font-heading mb-2.5 text-balance text-white"
        >
          {headline}
        </h3>

        <p className="font-sans max-w-prose text-pretty text-sm leading-relaxed text-zinc-300">
          {body}
        </p>

        {studyHref ? (
          <div
            className={clsx(
              "pt-2",
              alignment === "center" && "flex justify-center lg:justify-start",
              alignment === "end" && "flex justify-end"
            )}
          >
            <Button
              asChild
              variant="default"
              id={`${id}-case-study-cta-${idx}`}
              className="font-sans group inline-flex items-center gap-1.5 text-sm text-white underline-offset-4 transition-colors hover:text-cyan-400 font-medium border border-white/5 px-4 py-2 rounded-full"
            >
              <Link href={studyHref} target="_blank" rel="noopener noreferrer">
              View case study
              <ArrowUpRight
                className="size-4 shrink-0 transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
                aria-hidden
              />
              </Link>   
            </Button>
          </div>
        ) : null}
      </div>

      <div className="relative w-full min-w-0 lg:flex-1 lg:w-[58%]">
        <Card className="overflow-hidden rounded-3xl border-0 bg-[#F5F5F7] p-0 shadow-none ring-1 ring-black/5 dark:bg-[#F5F5F7]">
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
