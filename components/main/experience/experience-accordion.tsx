import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import data from "../../../app/data/resume.json"
import clsx from "clsx"
import {MapPin,Link2, Building2} from "lucide-react"
import { Badge } from "../../ui/badge"
import Image from "next/image"

interface contentProps{
    id:string,
    className:string
}
export default function ExpAccordian({id,className}: contentProps){
    return(
        <Accordion type="single" collapsible className={clsx("",className)}>
            {data.resume.map((item, idx) => (
                <AccordionItem
                    key={`accordion-${idx}`}
                    value={`${item.title.replace(/\s+/g, "-").toLowerCase()}-accordion-item-${idx}`}
                    className={`border-0 bg-[#1a1a1a] rounded-sm px-5 ${idx < data.resume.length && "mb-4" }`}
                >
                    <AccordionTrigger className={`text-white`} value={`${item.title.replace(/\s+/g, "-").toLowerCase()}-accordion-item-${idx} hover:no-underline`}>
                        <div className="w-full flex flex-col sm:flex-row sm:items-center items-start justify-between gap-2 sm:gap-6 text-left">
                            <h6 className="relative z-10 tracking-[1px] md:text-[1rem] wrap-break-word">{item.title} @ {item.company}</h6>
                            <h6 className="relative z-10 tracking-[1px] md:text-[1rem] shrink-0">{item.from} - {item.to.length === 0 ? "Current" : item.to}</h6>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col md:flex-row md:items-start items-start justify-between gap-6 md:gap-16 md:mt-2 mt-4">
                        <div className="flex flex-col items-start justify-start min-w-0">
                            {(item.location.length > 0 || item.url.length > 0) && (
                                <div className="flex flex-col sm:flex-row sm:gap-6 gap-2 sm:items-center items-start justify-start text-white/55 mb-2 min-w-0">
                                    {item.location.length > 0 && <span className="flex flex-row gap-3 items-center justify-start min-w-0"><MapPin size={16} className="text-white/80 shrink-0"/><span className="wrap-break-word">{item.location}</span></span>}
                                    {item.url.length > 0 && <a href={item.url} className="flex flex-row gap-3 items-center justify-start hover:text-white/80 min-w-0 break-all"><Link2 size={16} className="text-white/80 shrink-0" /><span className="break-all">{item.url}</span></a>}
                                </div>
                            )}
                            {item.description.length > 0 && <p className="text-white/55">{item.description}</p>}
                            {item.skillBadges.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {item.skillBadges.map((skill, idx) => (
                                    <Badge
                                        key={`${id}-${skill}`}
                                        className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/55 font-medium hover:text-white hover:bg-white/15"
                                    >
                                        {skill}
                                    </Badge>
                                    ))}
                                </div>
                            )}
                        </div>
                        {item.img.length > 0 ?  (
                            <Image src={item.img} alt="" />
                        ):(
                            <span className="md:inline-flex hidden shrink-0 rounded-full border border-white/20 bg-white/10 dark:border-neutral-300/10 dark:bg-neutral-400/10 p-4 shadow-lg">
                                <Building2 className="text-neutral-300" size={48} />
                            </span>
                        )}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}