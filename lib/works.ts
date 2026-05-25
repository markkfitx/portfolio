import { createPublicClient } from "@/lib/supabase/public"
import type { Database } from "@/lib/supabase/database.types"
import { WorkItem, FilterOption } from "./works-shared"

type CaseStudyRow = Database["public"]["Tables"]["works"]["Row"]
type FilterOptionRow = Database["public"]["Tables"]["FilterOptions"]["Row"]

function rowToWorkItem(row: CaseStudyRow): WorkItem {
  const year = row.created_at
    ? String(new Date(row.created_at).getFullYear())
    : ""

  return {
    slug: row.slug ?? row.id,
    title: row.title,
    subTitle: row.subtitle ?? "",
    year,
    img: row.image_url ?? "",
    link: row.live_url ?? row.github_url ?? "#",
    color: "blue",
    categories: row.category ?? [],
    relevantSkills: row.relevant_skills ?? [],
    caseStudy: {
      overview: row.description,
      role: "",
      highlights: [],
      deliverables: [],
    },
  }
}

function rowToFilterOption(row: FilterOptionRow): FilterOption {
  return {
    label: row.label ?? "",
    color: row.color ?? "",
    code: row.code ?? 0,
  }
}

export async function getWorks(): Promise<WorkItem[]> {
  const supabase = createPublicClient()
  const { data, error } = await supabase.from("works").select("*")
  if (error) throw error
  return (data ?? []).map(rowToWorkItem)
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

export async function getWorkBySlug(slug: string): Promise<WorkItem | undefined> {
  const supabase = createPublicClient()

  const { data, error } = await supabase
    .from("works")
    .select("*")
    .eq("slug", slug)
    .maybeSingle()

  if (error) throw error
  if (!data) return undefined

  return rowToWorkItem(data)
}

export async function getWorkSlugs(): Promise<string[]> {
  const supabase = createPublicClient()

  const { data, error } = await supabase.from("works").select("slug")

  if (error) throw error

  return (data ?? [])
    .map((row) => row.slug)
    .filter((slug): slug is string => slug != null)
}
