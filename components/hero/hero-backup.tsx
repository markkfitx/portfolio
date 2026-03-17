import Section from "../section-wrapper"
import clsx from "clsx"
import NavBar from "../navigation/navbar"
import data from "../../app/data/hero.json"
import StatsSheet from "./stats-sheet"
import FrameworkBadges from "./framework-badges"
import TypingText from "./TypingText"

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
                    {heroData.name.length > 0 && (
                      <>
                        <h2 className="font-medium md:text-start text-center text-white text-shadow-md mb-1">Hello, I'm</h2>
                        <h1 id="hero-title" className="font-bold text-white text-shadow-lg whitespace-normal uppercase md:text-start text-center mb-1 wrap-break-word">
                          {heroData.name}
                        </h1>
                      </>
                    )} 
                    {heroData.specialties.length > 0 && (
                      <h3 className="font-bold md:text-start text-center text-white text-shadow-md mb-12">
                        <span className="text-white/70">And I'm a</span> <TypingText words={heroData.specialties} className="text-cyan-500" />
                      </h3>
                    )}
                    {heroData.description.length > 0 && (
                      <span className="font-normal hero-description text-white/70  mb-4 md:w-3/4 max-w-xl italic md:text-start text-center">
                        {heroData.description}
                      </span>
                    )}
                    <div className="w-full flex flex-col gap-6 md:gap-4">
                      {/**<StatsSheet id="hero-stats-sheet" className="mb-1" /> */}
                      <FrameworkBadges id="hero-framework-badges" />
                    </div>
                </div>
                <NavBar id="navigation-menu" className="mt-2 lg:mt-0 lg:self-start" />
            </div>
        </Section>
    )
}