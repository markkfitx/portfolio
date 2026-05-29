import clsx from "clsx"
import type { SectionAlign } from "@/components/section-sub-heading"

interface SectionHeaderProps {
  kicker: string
  title?: React.ReactNode
  lead?: React.ReactNode
  align?: SectionAlign
  className?: string
  titleClassName?: string
}

const alignStyles: Record<SectionAlign, { root: string; text: string }> = {
  start: {
    root: "self-start items-start",
    text: "text-left",
  },
  center: {
    root: "self-center items-center mx-auto",
    text: "text-center",
  },
  end: {
    root: "self-end items-end ml-auto",
    text: "text-right",
  },
}

export default function SectionHeader({
  kicker,
  title,
  lead,
  align = "start",
  className,
  titleClassName,
}: SectionHeaderProps) {
  const styles = alignStyles[align]

  return (
    <header
      className={clsx(
        "mb-10 flex w-full max-w-3xl flex-col gap-3 md:mb-12",
        styles.root,
        className
      )}
    >
      <p
        className={clsx(
          "text-xs font-medium uppercase tracking-[0.28em] text-blue-500",
          styles.text
        )}
      >
        {kicker}
      </p>
      <h2
        className={clsx(
          "font-heading text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl lg:text-[2.5rem]",
          styles.text,
          titleClassName
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={clsx(
            "max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg",
            styles.text,
            align === "center" && "mx-auto"
          )}
        >
          {lead}
        </p>
      ) : null}
    </header>
  )
}
