"use client"

import { useMemo, useState } from "react"
import WorkBox from "@/components/main/works/work-box"
import FilterForm from "@/components/main/works/filter-form"
import {
  FILTER_ALL,
  filterWorks,
  getFilterCounts,
  getWorks,
} from "@/lib/works"

interface WorkGridProps {
  sectionId: string
}

export default function WorkGrid({ sectionId }: WorkGridProps) {
  const allWorks = useMemo(() => getWorks(), [])
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const filteredWorks = useMemo(
    () => filterWorks(allWorks, activeFilter),
    [allWorks, activeFilter]
  )

  const counts = useMemo(() => getFilterCounts(allWorks), [allWorks])

  return (
    <>
      <FilterForm
        id={`${sectionId}-filter-form`}
        title="Filter projects"
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        counts={counts}
      />
      {filteredWorks.length === 0 ? (
        <p className="z-10 text-sm text-white/60">
          No projects in this category yet. Try{" "}
          <button
            type="button"
            onClick={() => setActiveFilter(null)}
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            {FILTER_ALL}
          </button>
          .
        </p>
      ) : (
        <div className="works-grid z-10 grid w-full gap-5">
          {filteredWorks.map((item, idx) => (
            <WorkBox
              key={item.slug}
              id={`${sectionId}-box-${item.slug}`}
              slug={item.slug}
              img={item.img}
              title={item.title}
              subTitle={item.subTitle}
              year={item.year}
              color={item.color}
              relevantSkills={item.relevantSkills}
              className={idx % 2 > 0 ? "relative top-7 md:top-15" : ""}
            />
          ))}
        </div>
      )}
    </>
  )
}
