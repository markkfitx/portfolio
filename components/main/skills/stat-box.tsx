import { Card } from "@/components/ui/card"
import clsx from "clsx"
import { BadgeCheck } from "lucide-react"
interface contentProps{
    id: string,
    className?: string
}
export default function StatBox({id, className}: contentProps){
    return (
        <Card
            className={clsx(
                "",
                className
            )}
        >
            <div className="relative flex h-full flex-col items-center justify-start gap-6 p-6">
                <div className="flex items-center gap-2">
                    <span className="inline-flex size-8 items-center justify-center rounded-lg border border-emerald-300/25 bg-emeraldtheyre defined-400/10">
                        <BadgeCheck className="size-4 text-emerald-200" aria-hidden />
                    </span>
                    <h5 className="font-sans font-semibold tracking-wide text-white/85">
                        Experienced Developer
                    </h5>  
                </div>
                <div className="flex flex-col items-center justify-center gap-6">
                    <h3 className="text-5xl! font-heading font-light tracking-tight text-white leading-none">
                        8+
                    </h3>
                    <p className="font-sans text-sm text-white/60 text-center">
                        years in Front End Development
                    </p>
                </div>
            </div>
        </Card>
    )
}