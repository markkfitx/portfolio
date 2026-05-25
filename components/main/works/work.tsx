import Section from "../../section-wrapper"
import SectionHero from "../../section-hero"
import SectionSubHeading from "../../section-sub-heading"
import WorkGrid from "@/components/main/works/work-grid"
import { getFilterOptions, getWorks } from "@/lib/works"
import clsx from "clsx"

interface contentProps {
  id: string
  className?: string
}

export default async function Work({ id, className }: contentProps) {
  const [works, filterOptions] = await Promise.all([
    getWorks(),
    getFilterOptions(),
  ])

  return (
    <Section
      id={id}
      className={clsx(
        `items-start bg-linear-to-t from-black to-neutral-900 z-10`,
        className
      )}
    >
      <SectionHero
        id={`${id}-section-hero`}
        title="My Work"
        description="I've worked on a variety of projects, from small personal websites to large scale enterprise applications."
        alignment="start"
        badgeDesc="Recent Projects"
        className="hidden"
      />
      <SectionSubHeading
        id={`${id}-subheading`}
        alignment="start"
        className="md:max-w-[500px] text-white"
      >
        <span className="text-emerald-400">UX/UI across platforms</span> — Featured
        projects I&apos;m proud of.
      </SectionSubHeading>
      <WorkGrid
        sectionId={id}
        works={works}
        filterOptions={filterOptions}
      />
    </Section>
  )
}
