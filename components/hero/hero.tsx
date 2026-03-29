import Link from "next/link"
import Section from "../section-wrapper"
import clsx from "clsx"
import data from "../../app/data/hero.json"
import TypingText from "./TypingText"
import PreviewWindow from "./Preview-window/preview-window"
import SoftAurora from '../ui/SoftAurora';
  


interface ContentProps {
  className?: string
  id: string
}

const heroCtaBase =
  "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"

const heroCtaPrimary =
  "border border-emerald-400/70 bg-emerald-400 text-neutral-950 shadow-[0_18px_60px_-28px_rgba(16,185,129,0.65)] hover:bg-emerald-300 hover:border-emerald-300"

const heroCtaSecondary =
  "border border-white/12 bg-zinc-900/40 text-white/90 hover:bg-zinc-900/65 hover:text-white"

export default function Hero({ className, id }: ContentProps) {
  const heroData = data.hero[0]
  return (
    <Section
      id={id}
      className={clsx(
        "relative w-full overflow-hidden",
        "min-h-[calc(100svh-72px)] md:min-h-[calc(100svh-88px)]",
        "flex items-start justify-center md:items-center",
        "py-12 pb-16 md:py-24",
        className
      )}
    >
      <SoftAurora
          speed={0.6}
          scale={1.5}
          brightness={0.8}
          color1="#f7f7f7"
          color2="#00d492"
          noiseFrequency={2.5}
          noiseAmplitude={1}
          bandHeight={0.5}
          bandSpread={1}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction
          mouseInfluence={0.25}
          className={clsx(
            "opacity-50 md:opacity-55",
            // Mobile: glow centered on stacked content; md+: behind preview column.
            "mask-[radial-gradient(92%_72%_at_50%_38%,#000_18%,transparent_72%)]",
            "md:mask-[radial-gradient(60%_80%_at_76%_48%,#000_28%,transparent_72%)]"
          )}
        />
      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 md:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:items-center lg:gap-12">
          <div className="flex flex-col gap-5">
            <h1 className="sr-only">{heroData.name}</h1>
            <div className="flex flex-col gap-0">
              <p className="text-2xl font-medium text-white uppercase relative md:top-[0.35rem] md:right-[-0.25rem] lg:right-[-0.5rem] right-[-0.1rem]">
                Hi, I’m {heroData.name}
              </p>
              <h2 className="hero-ux-headline font-medium text-emerald-400 shadow-xl">
               <span className="italic relative md:right-[0.25rem] right-[0.1rem]">UX</span>
               <span className="heroSlash bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-emerald-600">/</span>
               <span className="italic relative md:right-[1rem] right-[0.25rem]">UI</span><br/>
               <TypingText
                  className=""
                  words={heroData?.specialties}
                  typeSpeed={44}
                  deleteSpeed={36}
                  delay={500}
                  pauseDelay={2400}
                  loop={true}
                  blinkCursor
                />
              </h2>
              <span className="md:text-sm text-xs text-balance text-white my-3 relative md:right-[-0.25rem] right-[-0.1rem]">
                {heroData?.description}
              </span>
              
            </div>
            <div className="flex flex-col gap-3 md:pt-2 pt-4 sm:flex-row sm:flex-wrap sm:items-start">
              <Link
                href={heroData.email}
                className={clsx(
                  heroCtaBase,
                  heroCtaPrimary,
                  "w-full justify-center sm:w-auto"
                )}
              >
                Email
              </Link>
              <div className="flex w-full flex-row gap-3 sm:w-auto sm:contents">
                <Link
                  href={heroData.linkedin}
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
                  href={heroData.resumeUrl}
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
          <div className="relative flex justify-center lg:justify-end">
            <div
              className={clsx(
                "relative z-50",
                "w-full max-w-[980px] lg:max-w-[920px]",
                "lg:translate-x-8 lg:-translate-y-6 lg:rotate-[1.25deg]"
              )}
            >
              <div className="hero-preview-float">
                <PreviewWindow className="z-50" />
              </div>
            </div>
          </div>  
        </div>
      </div>    
    </Section>
  )
}
