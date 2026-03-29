import { XIcon } from "lucide-react";
export default function Tabs() {
    return (
        <div className="flex w-full shrink-0 items-center justify-between gap-0 border-b border-white/8 bg-zinc-900/25">
            <div className="h-full w-1/2  p-1 md:w-1/3">
                <div className="flex flex-row items-center justify-center relative">
                    <span className="h-2.5 w-2.5 rounded-full absolute left-1"><XIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/45 hover:text-white/65 transition-all duration-200 hover:cursor-pointer" size={10}  /></span>
                    <span className="text-white/55 md:text-[8px] sm:text-[7px] text-[6px] font-medium truncate">DevelopMore | Analytics</span>
                </div>
            </div>
            <div className="h-full w-1/2 border-l border-white/10 bg-zinc-950/80 p-1 md:w-1/3">
                <div className="flex flex-row items-center justify-center relative">
                    <span className="h-2.5 w-2.5 rounded-full absolute left-1"><XIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/30 hover:text-white/50 transition-all duration-200 hover:cursor-pointer" size={10}  /></span>
                    <span className="text-white/30  md:text-[8px] sm:text-[7px] text-[6px] font-medium truncate">DevelopMore | Home</span>
                </div>
            </div>
            <div className="hidden h-full w-1/2 border-l border-white/10 bg-zinc-950/80 p-1 md:block md:w-1/3">
                <div className="flex flex-row items-center justify-center relative">
                    <span className="h-2.5 w-2.5 rounded-full absolute left-1"><XIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/30 hover:text-white/50 transition-all duration-200 hover:cursor-pointer" size={10}  /></span>
                    <span className="text-white/30  md:text-[8px] sm:text-[7px] text-[6px] font-medium truncate">DevelopMore | Orders</span>
                </div>
            </div>
        </div>
    )
}