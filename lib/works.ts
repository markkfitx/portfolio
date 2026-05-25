import { createPublicClient } from "@/lib/supabase/public"
import type { Database } from "@/lib/supabase/database.types"
import type { FilterOption, WorkItem } from "./works-shared"

type WorkRow = Database["public"]["Tables"]["Works"]["Row"]
type FilterOptionRow = Database["public"]["Tables"]["FilterOptions"]["Row"]

function rowToFilterOption(row: FilterOptionRow): FilterOption {
  return {
    label: row.label,
    color: row.color,
    code: row.code,
  }
}

function rowToWorkItem(row: WorkRow, filterOptions: FilterOption[]): WorkItem {
  const primaryCategory = row.category?.[0]
  const color =
    filterOptions.find((o) => o.code === primaryCategory)?.color ?? "blue"

  const year =
    row.Year != null
      ? String(row.Year)
      : row.created_at
        ? String(new Date(row.created_at).getFullYear())
        : ""

  return {
    slug: row.slug ?? row.id,
    title: row.title,
    subTitle: row.subtitle ?? "",
    year,
    img: row.image_url ?? "/img/smartphone-dashboard-view.png",
    link: row.live_url ?? row.github_url ?? "#",
    color,
    categories: row.category ?? [],
    relevantSkills: row.relevant_skills ?? [],
    caseStudy: {
      overview: row.description,
      role: row.subtitle ?? "",
      highlights: row.relevant_skills ?? [],
      deliverables: [],
    },
  }
}

export async function getFilterOptions(): Promise<FilterOption[]> {
  const supabase = createPublicClient()
  const { data, error } = await supabase
    .from("FilterOptions")
    .select("*")
    .order("code")
  if (error) throw error
  return (data ?? []).map(rowToFilterOption)
}

export async function getWorks(): Promise<WorkItem[]> {
  const supabase = createPublicClient()
  const [worksResult, filterOptions] = await Promise.all([
    supabase.from("Works").select("*").order("created_at", { ascending: false }),
    getFilterOptions(),
  ])

  if (worksResult.error) throw worksResult.error
  return (worksResult.data ?? []).map((row) =>
    rowToWorkItem(row, filterOptions)
  )
}

export async function getWorkBySlug(slug: string): Promise<WorkItem | undefined> {
  const supabase = createPublicClient()
  const [workResult, filterOptions] = await Promise.all([
    supabase.from("Works").select("*").eq("slug", slug).maybeSingle(),
    getFilterOptions(),
  ])

  if (workResult.error) throw workResult.error
  if (!workResult.data) return undefined

  return rowToWorkItem(workResult.data, filterOptions)
}

export async function getWorkSlugs(): Promise<string[]> {
  const supabase = createPublicClient()
  const { data, error } = await supabase.from("Works").select("slug")
  if (error) throw error

  return (data ?? [])
    .map((row) => row.slug)
    .filter((slug): slug is string => slug != null)
}
