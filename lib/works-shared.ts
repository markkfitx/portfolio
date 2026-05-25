import worksData from "@/app/data/works.json"

export type WorkItem = (typeof worksData.works)[number]

export type FilterOption = {
  label: string
  color: string
  code: number
}

export const FILTER_ALL = ["All",0]

export function filterWorks(
    works: WorkItem[],
    category: number | null
  ): WorkItem[] {
    if (!category || category === FILTER_ALL[1]) return works
    return works.filter((work) => work.categories.includes(category))
  }
  
  export function getFilterCounts(
    works: WorkItem[],
    filterOptions: FilterOption[]
  ): Record<string, number> {
    const counts: Record<string, number> = { [FILTER_ALL[0]]: works.length }
  
    for (const option of filterOptions) {
      counts[option.label] = works.filter((work) =>
        work.categories.includes(option.code)
      ).length
    }
  
    return counts
  }