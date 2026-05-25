import Link from "next/link"
import clsx from "clsx"
import TypingText from "./TypingText"
import { heroCtaBase, heroCtaPrimary, heroCtaSecondary } from "./hero-cta"

export type HeroContentData = {
  name: string
  email: string
  linkedin: string
  resumeUrl: string
  specialties: string[]
  description: string
}

type HeroContentProps = {
  data: HeroContentData
  className?: string
}

export default function HeroContent({ data, className }: HeroContentProps) {
  return (
    <div className={clsx("flex flex-col gap-5", className)}>
      <h1 className="sr-only">{data.name}</h1>
      <div className="flex flex-col gap-0">
        <p className="relative right-[-0.1rem] text-2xl font-medium uppercase text-white md:top-[0.35rem] md:right-[-0.25rem] lg:right-[-0.5rem]">
          Hi, I’m {data.name}
        </p>
        <h2 className="hero-ux-headline font-medium text-emerald-400 shadow-xl">
          <span className="relative right-[0.1rem] italic md:right-[0.25rem]">UX</span>
          <span className="heroSlash bg-gradient-to-r from-emerald-200 to-emerald-600 bg-clip-text text-transparent">
            /
          </span>
          <span className="relative right-[0.25rem] italic md:right-[1rem]">UI</span>
          <br />
          <TypingText
            words={data.specialties}
            typeSpeed={44}
            deleteSpeed={36}
            delay={500}
            pauseDelay={2400}
            loop
            blinkCursor
          />
        </h2>
        <span className="relative right-[-0.1rem] my-3 text-xs text-balance text-white md:right-[-0.25rem] md:text-sm">
          {data.description}
        </span>
      </div>
      <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap sm:items-start md:pt-2">
        <Link
          href={data.email}
          className={clsx(heroCtaBase, heroCtaPrimary, "w-full justify-center sm:w-auto")}
        >
          Email
        </Link>
        <div className="flex w-full flex-row gap-3 sm:w-auto sm:contents">
          <Link
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              heroCtaBase,
              heroCtaSecondary,
              "min-w-0 flex-1 justify-center sm:flex-initial"
            )}
          >
            LinkedIn
          </Link>
          <Link
            href={data.resumeUrl}
            className={clsx(
              heroCtaBase,
              heroCtaSecondary,
              "min-w-0 flex-1 justify-center sm:flex-initial"
            )}
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  )
}
