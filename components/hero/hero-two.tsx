import Section from "../section-wrapper"
import clsx from "clsx"
import NavBar from "../../components/navigation/navbar-two"
import data from "../../app/data/hero.json"
import StatsSheet from "./stats-sheet"
import FrameworkBadges from "./framework-badges"

interface propContent{
    className?:string,
    id: string
}
export default function Hero({className, id}: propContent){
    const heroData = data.hero[0]
    return (
        <Section id={id} className={clsx("min-h-screen", className)}>
            <div className="w-full flex flex-row items-center justify-center gap-36 z-10">
                <div className="w-fit flex flex-col items-start justify-start">
                    <h1 id="hero-title" className="font-bold text-white text-[7.5vw] tracking-widest text-shadow-lg whitespace-nowrap uppercase text-start">{heroData.header}</h1> 
                    <h3 className="font-medium text-[1.6vw] text-start text-white/90 tracking-[6.5px] leading-[22px] text-shadow-md uppercase mb-4">{heroData.subHeader}</h3>
                    <span className="text-white/60 mb-12 md:w-3/4">{heroData.description}</span>
                    <StatsSheet id="hero-stats-sheet" className="mb-6" />
                    <FrameworkBadges id="hero-framework-badges" />
                </div>
                <NavBar />
            </div>
        </Section>
    )
}