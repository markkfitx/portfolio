import { createPublicClient } from "@/lib/supabase/public"
import type { Database } from "@/lib/supabase/database.types"

export type Testimonial =
  Database["public"]["Tables"]["Testimonials"]["Row"]

export async function getTestimonials(): Promise<Testimonial[]> {
  const supabase = createPublicClient()
  const { data, error } = await supabase
    .from("Testimonials")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) throw error
  return data ?? []
}
