import { Card } from "@/components/ui/card"
import clsx from "clsx"
import { BadgeCheck } from "lucide-react"
import CountUp from "@/components/animations/CountUp"
interface contentProps{
    id: string,
    className?: string
}
export default function StatBox({id, className}: contentProps){
    return (
        <Card
            className={clsx(
                "h-full",
                className
            )}
        >
            <div className="relative flex h-full flex-col items-center justify-start gap-6 p-6">
                <div className="flex items-center justify-center gap-2">
                    <span className="inline-flex size-8 items-center justify-center rounded-lg border border-blue-300/25 bg-blue-400/10">
                        <BadgeCheck className="size-4 text-blue-600" aria-hidden />
                    </span>
                    <h5 className="skill-card-title  text-balance font-semibold relative text-neutral-900">
                        Experienced
                    </h5>  
                </div>
                <div className="flex flex-col items-center justify-center gap-6">
                    <h3 className="text-5xl! font-heading font-light tracking-tight text-neutral-900 leading-none">
                    <CountUp
                        from={0}
                        to={8}
                        separator=""
                        direction="up"
                        duration={1.25}
                        className="count-up-text"
                    />+
                    </h3>
                    <p className="font-sans text-sm text-neutral-500 text-center">
                        Years In Front End Development
                    </p>
                </div>
            </div>
        </Card>
    )
}