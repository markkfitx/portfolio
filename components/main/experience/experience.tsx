import Section from "@/components/section-wrapper"
import data from "@/app/data/resume.json"
import ExperienceSubSection from "@/components/main/experience/experience-card"
import { ChevronDown } from "lucide-react"
import clsx from "clsx"

type Alignment = "start" | "center" | "end"

function experienceSectionDomId(baseId: string, index: number) {
  return index === 0 ? baseId : `${baseId}-${index}`
}

interface contentProps {
  id: string
  className?: string
}

export default function Experience({ id, className }: contentProps) {
  return data.resume.map((item, idx) => {
    const alignment = item.alignment as Alignment
    const sectionDomId = experienceSectionDomId(id, idx)
    return (
      <Section
        id={sectionDomId}
        className={clsx(
          idx === 0
            ? `pt-24 md:pt-36 pb-12 md:pb-18`
            : idx === data.resume.length - 1
              ? `pb-24 md:pb-36 pt-12 md:pt-18`
              : `py-12 md:py-18`,
          "bg-neutral-950 text-white z-10",
          className
        )}
        key={`${id}-sub-section-item-${idx}`}
      >
        <ExperienceSubSection
          id={`${id}-job-${idx}`}
          className=""
          icon={item.logo}
          idx={idx}
          company={item.company}
          job={item.title}
          body={item.description}
          alignment={alignment}
          image={item.img}
          caseStudyUrl={item.url}
        >
          {item.header.length > 0 ? item.header : item.title}
        </ExperienceSubSection>

        {idx !== data.resume.length - 1 && (
          <a
            href={`#${experienceSectionDomId(id, idx + 1)}`}
            className="mt-36 flex items-center justify-center self-center rounded-full border border-white/2.5 bg-white/2.5 transition-all duration-400 hover:-translate-y-1 hover:cursor-pointer"
            aria-label="Scroll to next experience"
          >
            <ChevronDown
              size={42}
              className="text-white/20 mt-[2px] hover:text-white/80 transition-colors transition-400"
            />
          </a>
        )}
      </Section>
    )
  })
}
