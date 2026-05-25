import { createPublicClient } from "@/lib/supabase/public"
import type { Database } from "@/lib/supabase/database.types"

export type WorkRow = Database["public"]["Tables"]["Works"]["Row"]
export type FilterOptionRow = Database["public"]["Tables"]["FilterOptions"]["Row"]

/** Row plus UI-only fields derived from other tables (not duplicated schema). */
export type WorkWithDisplay = WorkRow & { cardColor: string }

export const FILTER_ALL = { label: "All", code: 0 } as const

const DEFAULT_IMAGE = "/img/smartphone-dashboard-view.png"

export function workSlug(work: Pick<WorkRow, "slug" | "id">): string {
  return work.slug ?? work.id
}

export function workYear(work: WorkRow): string {
  if (work.Year != null) return String(work.Year)
  if (work.created_at) return String(new Date(work.created_at).getFullYear())
  return ""
}

export function workImageUrl(work: WorkRow): string {
  return work.image_url ?? DEFAULT_IMAGE
}

export function workPrimaryLink(work: WorkRow): string {
  return work.live_url ?? work.github_url ?? "#"
}

export function cardColorForWork(
  work: WorkRow,
  filterOptions: FilterOptionRow[]
): string {
  const primaryCategory = work.category?.[0]
  return (
    filterOptions.find((o) => o.code === primaryCategory)?.color ?? "blue"
  )
}

export function enrichWork(
  row: WorkRow,
  filterOptions: FilterOptionRow[]
): WorkWithDisplay {
  return {
    ...row,
    cardColor: cardColorForWork(row, filterOptions),
  }
}

export function filterWorks(
  works: WorkRow[],
  category: number | null
): WorkRow[] {
  if (category == null || category === FILTER_ALL.code) return works
  return works.filter((work) => (work.category ?? []).includes(category))
}

export function getFilterCounts(
  works: WorkRow[],
  filterOptions: FilterOptionRow[]
): Record<string, number> {
  const counts: Record<string, number> = {
    [FILTER_ALL.label]: works.length,
  }

  for (const option of filterOptions) {
    counts[option.label] = works.filter((work) =>
      (work.category ?? []).includes(option.code)
    ).length
  }

  return counts
}

export async function getFilterOptions(): Promise<FilterOptionRow[]> {
  const supabase = createPublicClient()
  const { data, error } = await supabase
    .from("FilterOptions")
    .select("*")
    .order("code")
  if (error) throw error
  return data ?? []
}

export async function getWorks(): Promise<WorkWithDisplay[]> {
  const supabase = createPublicClient()
  const [worksResult, filterOptions] = await Promise.all([
    supabase.from("Works").select("*").order("created_at", { ascending: false }),
    getFilterOptions(),
  ])

  if (worksResult.error) throw worksResult.error
  return (worksResult.data ?? []).map((row) => enrichWork(row, filterOptions))
}

export async function getWorkBySlug(
  slug: string
): Promise<WorkWithDisplay | undefined> {
  const supabase = createPublicClient()
  const [workResult, filterOptions] = await Promise.all([
    supabase.from("Works").select("*").eq("slug", slug).maybeSingle(),
    getFilterOptions(),
  ])

  if (workResult.error) throw workResult.error
  if (!workResult.data) return undefined

  return enrichWork(workResult.data, filterOptions)
}

export async function getWorkSlugs(): Promise<string[]> {
  const supabase = createPublicClient()
  const { data, error } = await supabase.from("Works").select("slug")
  if (error) throw error

  return (data ?? [])
    .map((row) => row.slug)
    .filter((slug): slug is string => slug != null)
}
