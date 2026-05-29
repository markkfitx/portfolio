"use client"

import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import clsx from "clsx"
import type { ReactNode } from "react"

export type HeroCharacterProps = {
  className?: string
  /** Drop in Lottie, Rive, canvas, or video — anything that fills the stage. */
  children?: ReactNode
  /** Optional static image while the animated asset is in progress. */
  imageSrc?: string
  imageAlt?: string
  /** Accessible label when the visual is decorative (no image alt). */
  ariaLabel?: string
}

export default function HeroCharacter({
  className,
  children,
  imageSrc,
  imageAlt = "",
  ariaLabel = "Illustrated character",
}: HeroCharacterProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={clsx("hero-character-stage relative mx-auto w-full", className)}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden={!imageSrc && !children ? true : undefined}
      aria-label={!imageSrc && children ? ariaLabel : undefined}
      role={!imageSrc && children ? "img" : undefined}
    >
      <div
        className="pointer-events-none absolute inset-[8%] rounded-[40%] bg-blue-400/10 blur-3xl"
        aria-hidden
      />
      <div
        className={clsx(
          "hero-character-float relative z-10 flex w-full items-end justify-center",
          "aspect-[4/5] max-h-[min(72svh,960px)] min-h-[420px]",
          "sm:aspect-[5/6] sm:min-h-[480px]",
          "lg:aspect-auto lg:min-h-[630px] lg:max-h-[min(85svh,1080px)]"
        )}
      >
        {children ? (
          <div className="relative h-full w-full max-w-[min(100%,630px)] [&>*]:h-full [&>*]:w-full">
            {children}
          </div>
        ) : imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={560}
            height={700}
            priority
            className="h-full w-auto max-w-full object-contain object-bottom"
          />
        ) : (
          <div
            className={clsx(
              "flex h-full w-full max-w-[360px] flex-col items-center justify-end",
              "rounded-3xl border border-dashed border-neutral-200 bg-white/[0.02]",
              "px-6 pb-8 pt-10 text-center"
            )}
          >
            <span className="text-xs font-medium uppercase tracking-wider text-blue-400/80">
              Character slot
            </span>
            <p className="mt-2 text-sm text-balance text-neutral-500">
              Pass your animation as <code className="text-neutral-500">children</code> or set{" "}
              <code className="text-neutral-500">imageSrc</code> on{" "}
              <code className="text-neutral-500">HeroCharacter</code>.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )
}
