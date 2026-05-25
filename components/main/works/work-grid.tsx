"use client"

import { useMemo, useState } from "react"
import WorkBox from "@/components/main/works/work-box"
import FilterForm from "@/components/main/works/filter-form"
import type { FilterOptionRow, WorkWithDisplay } from "@/lib/works"
import { FILTER_ALL, filterWorks, getFilterCounts } from "@/lib/works"

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
    <div className="flex w-full flex-col gap-8">
      <FilterForm
        id={`${sectionId}-filter-form`}
        title="Filter projects"
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        counts={counts}
        filterOptions={filterOptions}
      />
      {filteredWorks.length === 0 ? (
        <p className="text-sm text-white/60">
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
        <div className="works-grid z-10">
          {filteredWorks.map((work) => (
            <WorkBox
              key={work.id}
              id={`${sectionId}-box-${work.slug ?? work.id}`}
              work={work}
              featured={work.featured}
            />
          ))}
        </div>
      )}
    </div>
  )
}
