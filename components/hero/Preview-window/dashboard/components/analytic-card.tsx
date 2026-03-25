import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function AnalyticCard({title, children, className}: {title: string, children: React.ReactNode, className?: string}) {
    return (
        <Card className={cn("gap-y-2 rounded-xl border border-white/10 bg-zinc-900/80 p-3 py-3 text-zinc-100 shadow-none", className)}>
            <CardHeader className="p-0">
                <CardTitle className="text-[9px] font-semibold md:text-[11px]">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-[9px] font-medium tabular-nums md:text-[11px]">
                {children}
            </CardContent>
        </Card>
    )
}