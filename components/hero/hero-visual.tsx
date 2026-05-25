import clsx from "clsx"
import type { ReactNode } from "react"
import HeroCharacter from "./hero-character"

type HeroVisualProps = {
  className?: string
  /** Animated character (or static image via HeroCharacter props). */
  character?: ReactNode
  characterImageSrc?: string
  characterImageAlt?: string
  /** Optional second layer (e.g. PreviewWindow) behind or beside the character. */
  aside?: ReactNode
}

export default function HeroVisual({
  className,
  character,
  characterImageSrc,
  characterImageAlt,
  aside,
}: HeroVisualProps) {
  return (
    <div
      className={clsx(
        "relative flex w-full flex-col items-center justify-center gap-6",
        "lg:items-end lg:justify-center",
        className
      )}
    >
      {aside ? (
        <div
          className={clsx(
            "pointer-events-none absolute inset-0 z-0 flex items-center justify-center",
            "opacity-40 lg:opacity-50",
            "max-lg:hidden"
          )}
          aria-hidden
        >
          {aside}
        </div>
      ) : null}
      <div
        className={clsx(
          "relative z-10 w-full",
          "max-w-[min(100%,420px)] sm:max-w-[480px] lg:max-w-[520px]",
          "lg:translate-x-6 lg:-translate-y-4 xl:translate-x-8"
        )}
      >
        <HeroCharacter imageSrc={characterImageSrc} imageAlt={characterImageAlt}>
          {character}
        </HeroCharacter>
      </div>
    </div>
  )
}
