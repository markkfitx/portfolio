import LanguageCarousel from "@/components/hero/languageCasousel"
import TransitionIcon from "@/components/hero/transitionIcon"
import clsx from "clsx"

interface propContent{
    className?:string,
    id: string
}
export default function Hero({className, id}: propContent){
    return (
        <div id={id} className={clsx("w-full min-h-screen flex flex-col justify-center items-center md:py-10 py-4 md:px-20 px-4",className)}>
            <h1 id="hero-title" className="font-bold text-white lg:text-[6.5rem] md:text-[5.5rem] sm:text-[4.5rem] text-[3rem] tracking-widest">MARK KIRBY</h1> 
            <h3 className="font-normal text-center text-white lg:text-[20px] md:text-[15px] text-[12px] tracking-[6.5px] leading-[22px]">FRONT END DEVELOPER & MARTECH SPECIALIST.</h3>
            <LanguageCarousel className="" />  
            <TransitionIcon className="mt-20" />
        </div>
    )
}