import clsx from "clsx"
interface contentProps{
    id:string,
    className?:string
}
export default function StatsSheet({id,className}: contentProps){
    return(
        <div id={id} className={clsx(`w-fit flex flex-row items-start justify-start gap-12`,className)}>
            <div className="flex flex-col items start justify-start gap-0">
                <h5 className="font-bold text-2xl text-white">8+</h5>
                <span className="text-white/60 text-sm">Years Experience</span>
            </div>
            <div className="flex flex-col items start justify-start gap-0">
                <h5 className="font-bold text-2xl text-white">3</h5>
                <span className="text-white/60 text-sm">Core Disciplines</span>
            </div>
            <div className="flex flex-col items start justify-start gap-0">
                <h5 className="font-bold text-2xl text-white">2K+</h5>
                <span className="text-white/60 text-sm">Users / Customers Supported</span>
            </div>
        </div>
    )
}