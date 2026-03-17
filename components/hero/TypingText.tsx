import { TypingAnimation } from "../../components/ui/typing-animation"
import clsx from "clsx"
export default function TypingText({words, className}: {words: string[], className?: string}) {
  return (
    <TypingAnimation
          words={words}
          blinkCursor={false}
          pauseDelay={2500}
          loop
          className={clsx("", className)}
        >
    </TypingAnimation>
  )
}
