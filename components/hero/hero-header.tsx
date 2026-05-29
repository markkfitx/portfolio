import Link from "next/link"
import clsx from "clsx"
import { ArrowUpRight } from "lucide-react"
import type { HeroContentData } from "./hero-content"

type HeroHeaderProps = {
  data: HeroContentData
  className?: string
}

export default function HeroHeader({ data, className }: HeroHeaderProps) {
  return (
    <header
      className={clsx(
        "pointer-events-none absolute inset-0 z-0",
        "grid min-h-full grid-rows-[1fr_auto]",
        "px-4 pt-8 pb-10 sm:px-6 md:px-8 md:pt-12 md:pb-14",
        className
      )}
    >
      <div className="relative min-h-48 sm:min-h-56 md:min-h-64">
        <div className="absolute top-0 left-0 z-0 max-w-[min(100%,20rem)] sm:max-w-xs md:max-w-sm lg:max-w-md">
          <h1 className="sr-only">
            Hi, I&apos;m {data.name}. UX UI. {data.description}
          </h1>
          <h2 className="hero-ux-headline font-medium uppercase text-neutral-900">
            <span className="hero-display-title">Hi, I&apos;m {data.name}</span>
          </h2>
          <p className="mt-4 max-w-[18rem] text-pretty text-sm leading-relaxed text-neutral-600 sm:mt-5 sm:max-w-xs sm:text-[0.9375rem] md:mt-6 md:text-base">
            {data.description}
          </p>
        </div>

        <div
          className={clsx(
            "absolute right-0 z-0 text-right",
            "bottom-[32%] sm:bottom-[28%] md:bottom-[24%] lg:bottom-[10%]"
          )}
        >
          <h2 className="hero-ux-headline font-medium text-blue-600">
            <span className="hero-display-title block italic">UX/UI</span>
            <span className="hero-display-title block">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Engineer
              </span>
            </span>
          </h2>
        </div>
      </div>

      <div className="pointer-events-auto flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
        <Link
          href={data.email}
          className={clsx(
            "group inline-flex items-center gap-2",
            "text-sm font-medium text-neutral-800 transition-colors",
            "hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2",
            "focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          )}
        >
          <span>Email</span>
          <ArrowUpRight
            className="size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
        <div className="flex flex-wrap items-center gap-6 sm:gap-8">
          <Link
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "text-sm font-medium text-neutral-800 transition-colors",
              "hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            )}
          >
            LinkedIn
          </Link>
          <Link
            href={data.resumeUrl}
            className={clsx(
              "text-sm font-medium text-neutral-800 transition-colors",
              "hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            )}
          >
            Resume
          </Link>
        </div>
      </div>
    </header>
  )
}
