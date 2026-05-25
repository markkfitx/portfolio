import Section from "../../section-wrapper"
import SectionHeader from "@/components/section-header"
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
        "section-shell items-start bg-linear-to-t from-black to-neutral-900 py-24 md:py-32 lg:py-36",
        className
      )}
    >
      <SectionHeader
        kicker="Recent projects"
        title="My work"
        lead={
          <>
            <span className="text-emerald-400">UX/UI across platforms</span> — a
            selection of product, brand, and engineering work.
          </>
        }
      />
      {works.length === 0 ? (
        <p className="text-sm text-white/60">
          No projects published yet. Add rows to the{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-emerald-400/90">
            Works
          </code>{" "}
          table in Supabase.
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
