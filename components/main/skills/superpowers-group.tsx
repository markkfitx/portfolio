import clsx from "clsx"
import SuperPowerBox from "./superpowers-box"
import StatBox from "./stat-box"
interface contentProps{
    id: string,
    className?: string
}

export default function SuperPowersGroup({id, className}: contentProps){
    const cardClassName = "group relative overflow-hidden border-0 shadow-none ring-1 ring-white/8 bg-gradient-to-br from-emerald-900/30 via-neutral-800/20 to-neutral-800/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:ring-white/15"
    return (
        <div id={id} className={clsx(`w-full min-w-0 gap-5 grid grid-cols-12 justify-center`,className)}>
            <div className="min-w-0 md:col-span-4 col-span-12"><StatBox id={`${id}-stat-box`} className={cardClassName} /></div>
            <div className="min-w-0 md:col-span-8 col-span-12"><SuperPowerBox id={`${id}-super-power-box`} className={cardClassName} /></div>
        </div>
    )
}