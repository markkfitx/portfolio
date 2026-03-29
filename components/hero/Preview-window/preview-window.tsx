import BrowserWindow from "./browser/browser-window"
import BrowserContentWrapper from "./browser/browser-content-wrapper"
import clsx from "clsx"

export default function PreviewWindow({className}: {className?: string}) {
    return (
        <div className={clsx("relative", className)}>
          <div className="pointer-events-none absolute -inset-px rounded-3xl bg-linear-to-br from-white/10 via-white/4 to-transparent" />
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
          <BrowserWindow
              className={clsx(
                  "w-full",
                  "rounded-3xl",
                  "shadow-[0_32px_120px_-72px_rgba(16,185,129,0.55)]",
                  "lg:min-w-[720px] lg:max-w-[920px]",
                  "md:min-h-min md:h-fit max-h-[400px] h-[calc(100svh-100px)]"
              )}
          >
            <BrowserContentWrapper />
          </BrowserWindow>
        </div>
    )
}