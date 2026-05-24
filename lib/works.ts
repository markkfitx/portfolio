import worksData from "@/app/data/works.json"

export type WorkItem = (typeof worksData.works)[number]
export type FilterOption = (typeof worksData.filterOptions)[number]

export const FILTER_ALL = "All"

export function getWorks(): WorkItem[] {
  return worksData.works
}

export function getFilterOptions(): FilterOption[] {
  return worksData.filterOptions
}

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return worksData.works.find((work) => work.slug === slug)
}

export function getWorkSlugs(): string[] {
  return worksData.works.map((work) => work.slug)
}

export function filterWorks(
  works: WorkItem[],
  category: string | null
): WorkItem[] {
  if (!category || category === FILTER_ALL) return works
  return works.filter((work) => work.categories.includes(category))
}

export function getFilterCounts(works: WorkItem[]): Record<string, number> {
  const counts: Record<string, number> = { [FILTER_ALL]: works.length }

  for (const option of worksData.filterOptions) {
    counts[option.label] = works.filter((work) =>
      work.categories.includes(option.label)
    ).length
  }

  return counts
}
