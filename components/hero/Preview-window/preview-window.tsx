import BrowserWindow from "./browser/browser-window"
import BrowserContentWrapper from "./browser/browser-content-wrapper"
import clsx from "clsx"

export default function PreviewWindow({className}: {className?: string}) {
    return (
        <BrowserWindow
            className={clsx(
                "w-full shadow-2xl shadow-emerald-500/10 rounded-b-3xl",
                // Fluid height between min/max; middle term tracks viewport
                "h-[clamp(18rem,70dvh,30rem)] sm:h-[clamp(20rem,60dvh,32rem)] md:h-[clamp(22rem,65dvh,40rem)] lg:h-[clamp(25rem,70dvh,43.75rem)]",
                className
            )}
        >
            <BrowserContentWrapper />
        </BrowserWindow>
    )
}