import clsx from "clsx"
interface contentProps{
    id:string,
    className?:string
}
export default function StatsSheet({id,className}: contentProps){
    return(
        <div id={id} className={clsx(`md:w-fit w-full flex flex-row items-start md:justify-start justify-center gap-12`,className)}>
            <div className="flex flex-col md:items-start items-center justify-start gap-0">
                <h6 className="font-bold text-2xl text-white">8+</h6>
                <span className="text-white/60 text-sm md:text-start text-center">Years Experience</span>
            </div>
            <div className="flex flex-col md:items-start items-center justify-start gap-0">
                <h6 className="font-bold text-2xl text-white">3</h6>
                <span className="text-white/60 text-sm md:text-start text-center">Core Disciplines</span>
            </div>
            <div className="flex flex-col md:items-start items-center justify-start gap-0">
                <h6 className="font-bold text-2xl text-white">2K+</h6>
                <span className="text-white/60 text-sm md:text-start text-center">Users Supported</span>
            </div>
        </div>
    )
}