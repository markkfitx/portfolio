import clsx from "clsx"
import type { SectionAlign } from "@/components/section-sub-heading"

interface componentProps {
  id: string
  children: React.ReactNode
  className?: string
  /** Aligns section children on the cross axis (horizontal in a column layout). */
  align?: SectionAlign
}

const sectionAlignClass: Record<SectionAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
}

function Section({ id, children, className, align = "start" }: componentProps) {
  return (
    <section id={id} className={clsx("w-full", className)}>
      <div
        className={clsx(
          "mx-auto flex flex-col justify-start px-4 md:px-6 lg:px-8 xl:px-24",
          id !== "hero-section" && "max-w-[1440px]",
          sectionAlignClass[align]
        )}
      >
        {children}
      </div>
    </section>
  )
}

export default Section
