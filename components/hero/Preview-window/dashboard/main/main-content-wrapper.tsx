import AnalyticsGrid from "./analytics-grid"
import Header from "../components/header"
import Toolbar from "../components/toolbar"
export default function MainWindow() {
    return (
        <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-neutral-100 p-4 text-[9px] leading-tight text-[#303030] md:text-[11px] overflow-y-auto">
            <div className="mb-4 flex shrink-0 flex-col items-start justify-start gap-2">
                <Header />
                <Toolbar />
            </div>
            <div className="min-h-0 flex-1">
                <AnalyticsGrid />
            </div>
        </div>
    )
}