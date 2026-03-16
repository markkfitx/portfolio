import Section from "../section-wrapper"
import clsx from "clsx"
import NavBar from "../navigation/navbar"
import data from "../../app/data/hero.json"
import StatsSheet from "./stats-sheet"
import FrameworkBadges from "./framework-badges"

interface contentProps{
    className?:string,
    id: string
}
export default function Hero({className, id}: contentProps){
    const heroData = data.hero[0]
    return (
        <Section id={id} className={clsx("min-h-screen pt-16 md:pt-24", className)}>
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 z-10">
                <div className="md:w-[60%] w-full flex flex-col md:items-start items-center justify-start">
                    <h1
                      id="hero-title"
                      className="font-bold text-white 2xl:text-[4.5vw] md:text-[5.5vw] text-[10vw] tracking-[0.35em] text-shadow-lg whitespace-normal md:whitespace-nowrap uppercase md:text-start text-center mb-3 wrap-break-word"
                    >
                      {heroData.header}
                    </h1> 
                    <h3 className="font-medium 2xl:text-[1.1vw] md:text-[1.3vw] text-sm md:text-base md:text-start text-center text-white tracking-[0.3em] text-shadow-md uppercase mb-4">
                      {heroData.subHeader}
                    </h3>
                    <span className="text-white/70 md:text-base text-sm mb-10 md:mb-14 md:w-3/4 max-w-xl italic md:text-start text-center">
                      {heroData.description}
                    </span>
                    <div className="w-full flex flex-col gap-6 md:gap-4">
                      <StatsSheet id="hero-stats-sheet" className="mb-1" />
                      <FrameworkBadges id="hero-framework-badges" />
                    </div>
                </div>
                <NavBar id="navigation-menu" className="mt-2 lg:mt-0 lg:self-start" />
            </div>
        </Section>
    )
}