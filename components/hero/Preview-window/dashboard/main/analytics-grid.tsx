import AnalyticCard from "../components/analytic-card"
import { AnimatedStat } from "../components/animated-stat"
import { ChartAreaInteractive } from "../components/large-graph"
import { DataTable } from "../components/data-table"

export default function AnalyticsGrid() {
    return (
        <div className="grid min-h-0 w-full grid-cols-12 gap-3">
            <AnalyticCard className="col-span-3" title="Gross Sales">
                <AnimatedStat prefix="$" value={3850} delay={0} />
            </AnalyticCard>
            <AnalyticCard className="col-span-3" title="Returning Customer Rate">
                <AnimatedStat value={0} suffix="%" delay={0.06} />
            </AnalyticCard>
            <AnalyticCard className="col-span-3" title="Orders Filled">
                <AnimatedStat value={34} delay={0.12} />
            </AnalyticCard>
            <AnalyticCard className="col-span-3 " title="Orders">
                <AnimatedStat value={34} delay={0.18} />
            </AnalyticCard>
            <ChartAreaInteractive  className="col-span-12 md:col-span-7" title="Sales Performance" />
            <DataTable className="col-span-12 md:col-span-5" title="Recent Orders" />
        </div>
    )
}