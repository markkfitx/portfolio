import BrowserWindow from "./browser/browser-window"
import BrowserContentWrapper from "./browser/browser-content-wrapper"
import clsx from "clsx"

export default function PreviewWindow({className}: {className?: string}) {
    return (
        <BrowserWindow
            className={clsx(
                "w-full rounded-3xl ring-1 ring-white/10 shadow-2xl shadow-emerald-500/10 lg:min-w-[800px] lg:max-w-[1000px]",
                // Fluid height between min/max; middle term tracks viewport
                "min-h-min h-fit",
                className
            )}
        >
        <BrowserContentWrapper />
        </BrowserWindow>
    )
}