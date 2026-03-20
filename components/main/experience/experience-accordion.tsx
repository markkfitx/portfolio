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
                    className={`border-b border-black/5 ${idx < data.resume.length && "" }`}
                >
                    <AccordionTrigger className={``} value={`${item.title.replace(/\s+/g, "-").toLowerCase()}-accordion-item-${idx}`}>
                        <div className="w-full flex flex-col sm:flex-row sm:items-center items-start justify-between gap-2 sm:gap-6 text-left">
                            <h5 className="relative wrap-break-word font-semibold">{item.title} @ {item.company}</h5>
                            <h5 className="relative shrink-0 font-semibold">{item.from} - {item.to.length === 0 ? "Current" : item.to}</h5>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col md:flex-row md:items-start items-start justify-between gap-6 md:gap-16 md:mt-2 mt-4">
                        <div className="flex flex-col items-start justify-start min-w-0">
                            {(item.location.length > 0 || item.url.length > 0) && (
                                <div className="flex flex-col sm:flex-row sm:gap-6 gap-2 sm:items-center items-start justify-start mb-2 min-w-0">
                                    {item.location.length > 0 && <p className="flex flex-row items-center justify-start min-w-0"><MapPin size={16} className="shrink-0 mr-3"/>{item.location}</p>}
                                    {item.url.length > 0 && <a href={item.url} className="flex flex-row items-center justify-start min-w-0 break-all"><Link2 size={16} className="shrink-0 mr-3" /><span className="break-all">{item.url}</span></a>}
                                </div>
                            )}
                            {item.description.length > 0 && <p className="text-muted-foreground font-normal mb-6">{item.description}</p>}
                            {item.skillBadges.length > 0 && (
                                <div className="hiddenmt-4 flex flex-wrap gap-2">
                                    {item.skillBadges.map((skill) => (
                                    <Badge
                                        key={`${id}-${skill}`}
                                        className="rounded-full border-none bg-neutral-900/15 px-3 py-1 text-xs text-neutral-900/60 font-medium uppercase"
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
                            <span className="hidden shrink-0 rounded-full border border-neutral-900/20 bg-neutral-900/10 dark:border-neutral-300/10 dark:bg-neutral-400/10 p-4 shadow-none">
                                <Building2 className="text-neutral-300" size={48} />
                            </span>
                        )}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}