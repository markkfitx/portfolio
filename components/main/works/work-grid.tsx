"use client"

import { useMemo, useState } from "react"
import WorkBox from "@/components/main/works/work-box"
import FilterForm from "@/components/main/works/filter-form"
import type { FilterOptionRow, WorkWithDisplay } from "@/lib/works"
import { FILTER_ALL, filterWorks, getFilterCounts, workSlug } from "@/lib/works"

interface WorkGridProps {
  sectionId: string
  works: WorkWithDisplay[]
  filterOptions: FilterOptionRow[]
}

export default function WorkGrid({
  sectionId,
  works,
  filterOptions,
}: WorkGridProps) {
  const [activeFilter, setActiveFilter] = useState<number | null>(null)

  const filteredWorks = useMemo(
    () => filterWorks(works, activeFilter) as WorkWithDisplay[],
    [works, activeFilter]
  )

  const counts = useMemo(
    () => getFilterCounts(works, filterOptions),
    [works, filterOptions]
  )

  return (
    <>
      <FilterForm
        id={`${sectionId}-filter-form`}
        title="Filter projects"
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        counts={counts}
        filterOptions={filterOptions}
      />
      {filteredWorks.length === 0 ? (
        <p className="z-10 text-sm text-white/60">
          No projects in this category yet. Try{" "}
          <button
            type="button"
            onClick={() => setActiveFilter(null)}
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            {FILTER_ALL.label}
          </button>
          .
        </p>
      ) : (
        <div className="works-grid z-10 grid w-full gap-5">
          {filteredWorks.map((work, idx) => (
            <WorkBox
              key={work.id}
              id={`${sectionId}-box-${workSlug(work)}`}
              work={work}
              className={idx % 2 > 0 ? "relative top-7 md:top-15" : ""}
            />
          ))}
        </div>
      )}
    </>
  )
}
