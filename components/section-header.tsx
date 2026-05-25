import clsx from "clsx"

type SectionHeaderAlign = "start" | "center"

interface SectionHeaderProps {
  kicker: string
  title: string
  lead?: React.ReactNode
  align?: SectionHeaderAlign
  className?: string
  titleClassName?: string
}

const alignStyles: Record<
  SectionHeaderAlign,
  { root: string; text: string }
> = {
  start: {
    root: "items-start",
    text: "text-left",
  },
  center: {
    root: "items-center",
    text: "text-center",
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
        "section-header mb-10 flex w-full max-w-3xl flex-col gap-3 md:mb-12",
        styles.root,
        align === "center" && "mx-auto",
        className
      )}
    >
      <p className={clsx("section-kicker", styles.text)}>{kicker}</p>
      <h2
        className={clsx(
          "section-title font-heading text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.5rem]",
          styles.text,
          titleClassName
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={clsx(
            "section-lead max-w-2xl text-base leading-relaxed text-white/70 md:text-lg",
            styles.text
          )}
        >
          {lead}
        </p>
      ) : null}
    </header>
  )
}
