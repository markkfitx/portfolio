import Link from "next/link"
import Section from "@/components/section-wrapper"

export default function NotFound() {
  return (
    <Section
      id="not-found"
      className="min-h-[60vh] items-center justify-center py-32 text-center"
    >
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-emerald-500">
        404
      </p>
      <h1 className="mt-3 font-heading text-4xl font-bold text-white">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-white/70">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full border border-emerald-400/70 bg-emerald-400 px-5 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-emerald-300"
      >
        Back home
      </Link>
    </Section>
  )
}
