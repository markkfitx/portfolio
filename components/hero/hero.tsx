import EmblaCarousel from "@/components/hero/carousel/carousel"
import TransitionIcon from "@/components/hero/transitionIcon"
import clsx from "clsx"

interface propContent{
    className?:string,
    id: string
}
export default function Hero({className, id}: propContent){
    return (
        <section id={id} className={clsx("w-full min-h-screen flex flex-col justify-center items-center py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24", className)}>
            <div className="w-fit flex flex-col items-center">
                <h1 id="hero-title" className="font-bold text-white tracking-widest text-shadow-lg whitespace-nowrap">MARK KIRBY</h1> 
                <h5 className="font-normal text-center text-white tracking-[6.5px] leading-[22px] text-shadow-md">FRONT END DEVELOPER & MARTECH SPECIALIST.</h5>
                <div id="languageSliderWrapper"className="text-center mt-12 md:mt-24 xl:w-[900px] lg:w-[700px] md:w-[500px] w-[400px] brightness-50 hover:brightness-100 transition-all duration-300">
                    <h6 className="text-white font-medium tracking-[4.5px] leading-[22px]">DEPLOYABLE. SCALABLE. SECURE.</h6>
                    <EmblaCarousel id="languageSlider" className="mt-8" />  
                </div>
                <TransitionIcon className="mt-12 md:mt-24" />
            </div>
        </section>
    )
}