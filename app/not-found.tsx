import Link from "next/link"
import Section from "@/components/section-wrapper"

export default function NotFound() {
  return (
    <Section
      id="not-found"
      align="center"
      justify="center"
      className="min-h-[60vh] py-32 text-center"
    >
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-blue-500">
        404
      </p>
      <h1 className="mt-3 font-heading text-4xl font-bold text-neutral-900">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-neutral-600">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full border border-blue-600/80 bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
      >
        Back home
      </Link>
    </Section>
  )
}
