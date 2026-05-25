import Section from "@/components/section-wrapper"
import SectionHeader from "@/components/section-header"
import data from "../../../app/data/awards.json"
import {Separator} from "../../ui/separator"
import clsx from "clsx"
interface contentProps{
    id: string,
    className?: string
}

export default function Awards({id, className}: contentProps){
    return (
        <Section
          id={id}
          align="center"
          className={clsx(`bg-linear-to-t from-black to-neutral-900 z-10`, className)}
        >
            <SectionHeader
              kicker="Recognition"
              title={
                <>
                  Awards & <span className="text-emerald-400">Certifications</span>
                </>
              }
              align="center"
              className="max-w-[600px]"
            />
            <div className="w-full max-w-2xl flex flex-col justify-start items-stretch">
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