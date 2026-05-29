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
      className={clsx("items-start z-10", className)}
    >
      <SectionHero
        id={`${id}-section-hero`}
        title="My Work"
        description="Projects loaded from the portfolio database."
        alignment="start"
        badgeDesc="Recent Projects"
        className="hidden"
      />
      <SectionSubHeading
        id={`${id}-subheading`}
        alignment="start"
        className="max-w-[500px] text-neutral-900"
      >
        <span className="text-blue-600">UX/UI across platforms</span> — Featured
        projects I&apos;m proud of.
      </SectionSubHeading>
      {works.length === 0 ? (
        <p className="text-sm text-neutral-500">
          No projects published yet. Add rows to the{" "}
          <code className="text-blue-600">Works</code> table in Supabase.
        </p>
      ) : (
        <WorkGrid
          sectionId={id}
          works={works}
          filterOptions={filterOptions}
        />
      )}
    </Section>
  )
}
