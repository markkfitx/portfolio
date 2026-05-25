import clsx from "clsx"

export type SectionAlign = "start" | "center" | "end"

interface SectionSubHeadingProps {
  id: string
  alignment: SectionAlign
  className?: string
  flex?: "row" | "col"
  children?: React.ReactNode
}

const colAlign: Record<
  SectionAlign,
  { root: string; text: string }
> = {
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

const rowAlign: Record<SectionAlign, { root: string; text: string }> = {
  start: {
    root: "self-stretch justify-start",
    text: "text-left",
  },
  center: {
    root: "self-stretch justify-center",
    text: "text-center",
  },
  end: {
    root: "self-stretch justify-end",
    text: "text-right",
  },
}

export default function SectionSubHeading({
  id,
  alignment,
  className,
  flex = "col",
  children,
}: SectionSubHeadingProps) {
  const styles = flex === "row" ? rowAlign[alignment] : colAlign[alignment]

  return (
    <div
      id={id}
      className={clsx(
        "mb-12 flex w-full max-w-[650px] flex-col gap-0 z-10",
        flex === "row" && "max-w-none flex-row",
        styles.root,
        className
      )}
    >
      <h3
        className={clsx(
          "text-balance font-medium text-white/90 md:text-lg",
          styles.text
        )}
      >
        {children}
      </h3>
    </div>
  )
}
