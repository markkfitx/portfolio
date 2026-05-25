import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/lib/supabase/database.types"

/** Public reads — safe for build time (generateStaticParams, sitemap) and server components. */
export function createPublicClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
