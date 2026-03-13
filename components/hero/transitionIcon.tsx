import clsx from "clsx"
import {MoveDown} from "lucide-react"
interface propContext{
    className?: string
}

export default function TransitionIcon({className}: propContext){
    return (
        <div className={clsx("w-[2.15rem] h-16 border-2 border-white rounded-[50px] flex items-center justify-center",className)}>
            <MoveDown className="text-white" />
        </div>
    )
}