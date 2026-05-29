import Section from "../section-wrapper"
import clsx from "clsx"
import data from "../../app/data/hero.json"
import HeroBackground from "./hero-background"
import HeroHeader from "./hero-header"
import Spline from '@splinetool/react-spline/next';

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
        "pb-16 md:pb-24",
        className
      )}
    >
      <HeroBackground />
      <div className="relative min-h-[min(100svh-72px,720px)] w-full">
        <HeroHeader data={heroData} />
        <Spline
          scene="https://prod.spline.design/J7am2e5D3RbUeRWi/scene.splinecode"
          className="relative z-10 h-full min-h-[inherit] w-full"
        />
      </div>
    </Section>
  )
}
