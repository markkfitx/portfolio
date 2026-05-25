import Section from "../section-wrapper"
import clsx from "clsx"
import data from "../../app/data/hero.json"
import HeroBackground from "./hero-background"
import HeroContent from "./hero-content"
import HeroVisual from "./hero-visual"

interface ContentProps {
  className?: string
  id: string
}

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
      <HeroBackground />
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 md:px-6 lg:px-8">
        <div
          className={clsx(
            "grid w-full items-start gap-10",
            "md:gap-12",
            "lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:items-center lg:gap-12"
          )}
        >
          <HeroContent data={heroData} />
          {/* character={<YourAnimation />} or characterImageSrc="/img/hero-character.png" */}
          <HeroVisual />
        </div>
      </div>
    </Section>
  )
}
