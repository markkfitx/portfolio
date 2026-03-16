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
        <Section id={id} className={clsx("min-h-screen", className)}>
            <div className="w-full flex flex-row items-center justify-center gap-16 z-10">
                <div className="md:w-fit w-full flex flex-col md:items-start items-center justify-start">
                    <h1 id="hero-title" className="font-bold text-white 2xl:text-[6vw] md:text-[7.5vw] text-[12vw] tracking-widest text-shadow-lg whitespace-nowrap uppercase md:text-start text-center mb-1">{heroData.header}</h1> 
                    <h3 className="font-medium 2xl:text-[1.3vw] md:text-[1.6vw] md:text-start text-center text-white tracking-[6.5px] text-shadow-md uppercase mb-5">{heroData.subHeader}</h3>
                    <span className="text-white/60 mb-24 md:w-3/4 italic md:text-start text-center">{heroData.description}</span>
                    <StatsSheet id="hero-stats-sheet" className="mb-6" />
                    <FrameworkBadges id="hero-framework-badges" />
                </div>
                <NavBar id="navigation-menu" className=""/>
            </div>
        </Section>
    )
}