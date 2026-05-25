import Section from "@/components/section-wrapper"
import SectionSubHeading from "../../section-sub-heading"
import data from "../../../app/data/awards.json"
import {Separator} from "../../ui/separator"
import clsx from "clsx"
interface contentProps{
    id: string,
    className?: string
}

export default function Awards({id, className}: contentProps){
    return (
        <Section id={id} className={clsx(`bg-linear-to-t from-black to-neutral-900 z-10`,className)}>
            <SectionSubHeading id={`${id}-subheading`} alignment="center" className="md:max-w-[600px] text-white"> 
                Awards & <span className="text-emerald-400">Certifications</span>
            </SectionSubHeading>
            <div className="w-full flex flex-col justify-start items-start">
                {data.certifications.map((item,idx) => (
                    <div className="w-full" key={`${id}-list-item-${idx}`}>
                        <h6 className="font-normal w-full flex flex-row justify-between gap-4 py-4 text-white">
                            {"url" in item && item.url ? (
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-left transition-colors hover:text-emerald-400"
                              >
                                {item.name}
                              </a>
                            ) : (
                              <span>{item.name}</span>
                            )}
                            <span className="shrink-0 text-white/60">{item.year}</span>
                        </h6>
                        {idx < data.certifications.length - 1 && <Separator className="opacity-25" />}
                    </div>
                ))}
            </div>
        </Section>
    )
}