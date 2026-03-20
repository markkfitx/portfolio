import Link from "next/link"
import Section from "../section-wrapper"
import clsx from "clsx"
import data from "../../app/data/hero.json"
import TypingText from "./TypingText"

interface ContentProps {
  className?: string
  id: string
}

const heroCtaBase =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"

export default function Hero({ className, id }: ContentProps) {
  const heroData = data.hero[0]
  const marker = "|";
  const [before, after = ""] = heroData.intro.split(marker);
  return (
    <Section
      id={id}
      className={clsx(
        "min-h-screen pt-16 pb-20 md:pt-24 md:pb-28 lg:pb-32",
        className
      )}
    >
      <div className="flex w-full max-w-5xl flex-col items-start gap-10 md:gap-12 lg:gap-14">
        <h1 className="sr-only">{heroData.name}</h1>

        <h3 className="font-sans max-w-3xl text-pretty text-white">
        {before}
        {after !== "" ? <TypingText className="text-emerald-500" words={heroData.specialties} typeSpeed={100} deleteSpeed={100} delay={1000} loop={true} /> : null}
        <br/>
        {after}
        </h3>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={heroData.email}
            className={clsx(
              heroCtaBase,
              "bg-white/50 text-neutral-900 hover:bg-white/70 active:bg-white/90"
            )}
          >
            Email
          </Link>
          <Link
            href={heroData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              heroCtaBase,
              "border border-white/12 bg-zinc-900 text-white hover:bg-zinc-800"
            )}
          >
            LinkedIn
          </Link>
          <Link
            href={heroData.resumeUrl}
            className={clsx(
              heroCtaBase,
              "border border-white/12 bg-zinc-900 text-white hover:bg-zinc-800"
            )}
          >
            Resume
          </Link>
        </div>

        <div
          className="aspect-video w-full min-h-[200px] h-[702px] max-w-5xl shrink-0 rounded-3xl bg-neutral-300 ring-1 ring-black/5 md:min-h-[280px]"
          aria-hidden
        />
      </div>
    </Section>
  )
}
