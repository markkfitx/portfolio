import Link from "next/link"
import Section from "../section-wrapper"
import clsx from "clsx"
import data from "../../app/data/hero.json"
import TypingText from "./TypingText"
import PreviewWindow from "./Preview-window/preview-window"

interface ContentProps {
  className?: string
  id: string
}

const heroCtaBase = "group inline-flex items-center gap-2 rounded-full border border-emerald-400/45 bg-emerald-500/[0.07] px-5 py-2.5 text-sm font-medium text-emerald-400 transition-colors hover:border-emerald-400/70 hover:bg-emerald-500/15 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"

export default function Hero({ className, id }: ContentProps) {
  const heroData = data.hero[0]
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

        <h3 className="hero-intro font-sans max-w-3xl text-pretty text-white [&_a]:text-emerald-400 [&_a]:underline [&_a]:underline-offset-2">
          <span dangerouslySetInnerHTML={{ __html: heroData.intro }} />
          
            <TypingText
              className="text-emerald-500"
              words={heroData.specialties}
              typeSpeed={35}
              deleteSpeed={30}
              delay={0}
              loop={true}
            />
        </h3>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={heroData.email}
            className={clsx(
              heroCtaBase,
              ""
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
        <PreviewWindow  />
      </div>
    </Section>
  )
}
