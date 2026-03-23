import Toolbar from "./components/toolbar"
import Tabs from "./components/tabs"
import clsx from "clsx"
export default function BrowserWindow({children, className}: {children: React.ReactNode, className?: string}) {
    return (
        <div className={clsx("relative w-full", className)}>
          <div className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-3xl border border-white/20 bg-neutral-950 shadow-2xl">
            <Toolbar />
            <Tabs />
            <div className="flex min-h-0 flex-1 flex-col p-0">
              {children}
            </div>
          </div>
        </div>
    )
}