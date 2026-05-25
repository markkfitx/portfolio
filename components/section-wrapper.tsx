import clsx from "clsx"
import type { SectionAlign } from "@/components/section-sub-heading"

interface SectionProps {
  id: string
  children: React.ReactNode
  /**
   * Styles for the outer `<section>` (background, padding, borders).
   * Not a flex container — do not use items-* here; use `align` instead.
   */
  className?: string
  /** Horizontal alignment of children in the inner flex column. */
  align?: SectionAlign
  /** Vertical distribution of children (e.g. center 404 content in min-height sections). */
  justify?: "start" | "center" | "end"
}

const sectionAlignClass: Record<SectionAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
}

const sectionJustifyClass = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
} as const

function Section({
  id,
  children,
  className,
  align = "start",
  justify = "start",
}: SectionProps) {
  return (
    <section id={id} className={clsx("w-full", className)}>
      <div
        className={clsx(
          "mx-auto flex w-full flex-col px-4 md:px-6 lg:px-8 xl:px-24",
          id !== "hero-section" && "max-w-[1440px]",
          sectionAlignClass[align],
          sectionJustifyClass[justify]
        )}
      >
        {children}
      </div>
    </section>
  )
}

export default Section
