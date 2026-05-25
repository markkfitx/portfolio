export type WorkItem = {
  slug: string
  title: string
  subTitle: string
  year: string
  img: string
  link: string
  color: string
  categories: number[]
  relevantSkills: string[]
  caseStudy: {
    overview: string
    role: string
    highlights: string[]
    deliverables: string[]
  }
}

export type FilterOption = {
  label: string
  color: string
  code: number
}

export const FILTER_ALL = { label: "All", code: 0 } as const

export function filterWorks(
  works: WorkItem[],
  category: number | null
): WorkItem[] {
  if (category == null || category === FILTER_ALL.code) return works
  return works.filter((work) => work.categories.includes(category))
}

export function getFilterCounts(
  works: WorkItem[],
  filterOptions: FilterOption[]
): Record<string, number> {
  const counts: Record<string, number> = {
    [FILTER_ALL.label]: works.length,
  }

  for (const option of filterOptions) {
    counts[option.label] = works.filter((work) =>
      work.categories.includes(option.code)
    ).length
  }

  return counts
}
