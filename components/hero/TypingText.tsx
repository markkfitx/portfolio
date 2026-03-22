import { TypingAnimation } from "../../components/ui/typing-animation"
import clsx from "clsx"

interface TypingTextProps {
  words: string[]
  className?: string
  typeSpeed?: number
  deleteSpeed?: number
  delay?: number
  pauseDelay?: number
  loop?: boolean
  blinkCursor?: boolean
}

export default function TypingText({
  words,
  className,
  typeSpeed,
  deleteSpeed,
  delay,
  pauseDelay,
  loop,
  blinkCursor,
}: TypingTextProps) {
  return (
    <TypingAnimation
      words={words}
      typeSpeed={typeSpeed}
      deleteSpeed={deleteSpeed}
      delay={delay}
      pauseDelay={pauseDelay ?? 1500}
      loop={loop}
      blinkCursor={blinkCursor ?? false}
      className={clsx("", className)}
    />
  )
}
