import Image from "next/image"
import {Badge} from "../../ui/badge"
interface contentProps{
    id: string, 
    title: string,
    description: string,
    className?: string
}

export default function SectionHero({id, title, description, className}: contentProps){
    return (
        <div id={id} className={className}>
            <div className="flex flex-row items-start justify-start gap-20 mb-20 md:flex-nowrap flex-wrap">
                <div className="md:w-3/4">
                    <Badge variant="outline" className="text-white">Lorem Ipsem</Badge>
                    <h2 className="font-bold text-white md:text-[5.5rem] text-[4.5rem] tracking-widest text-shadow-lg whitespace-wrap flex flex-col mb-10">{title}</h2>
                    <p className="text-white text-md ">{description}</p>
                </div>
                {/**<Image src="/work-img-files/impackt-brand.png" alt="Section Hero" width={500} height={500} className="md:w-1/2 w-[100vw] h-auto border-white/20 rounded-2xl" />**/}
            </div>
        </div>
    )
}