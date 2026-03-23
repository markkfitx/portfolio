import { XIcon } from "lucide-react";
export default function Tabs() {
    return (
        <div className="flex shrink-0 items-center justify-between gap-0 border-b border-white/10 bg-white/10 w-full">
            <div className="p-1 md:w-1/3 w-1/2 h-full">
                <div className="flex flex-row items-center justify-center relative">
                    <span className="h-2.5 w-2.5 rounded-full absolute left-1"><XIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/60 hover:text-white/80 transition-all duration-200 hover:cursor-pointer" size={10}  /></span>
                    <span className="text-white/60 md:text-[8px] sm:text-[7px] text-[6px] font-medium truncate">DevelopMore | Home - Shopify</span>
                </div>
            </div>
            <div className="p-1 md:w-1/3 w-1/2 h-full border-l border-white/10 bg-neutral-900/60">
                <div className="flex flex-row items-center justify-center relative">
                    <span className="h-2.5 w-2.5 rounded-full absolute left-1"><XIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition-all duration-200 hover:cursor-pointer" size={10}  /></span>
                    <span className="text-white/40  md:text-[8px] sm:text-[7px] text-[6px] font-medium truncate">DevelopMore | Home - Shopify</span>
                </div>
            </div>
            <div className="p-1 md:w-1/3 w-1/2h-full border-l border-white/10 bg-neutral-900/60 hidden md:block">
                <div className="flex flex-row items-center justify-center relative">
                    <span className="h-2.5 w-2.5 rounded-full absolute left-1"><XIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition-all duration-200 hover:cursor-pointer" size={10}  /></span>
                    <span className="text-white/40  md:text-[8px] sm:text-[7px] text-[6px] font-medium truncate">DevelopMore | Home - Shopify</span>
                </div>
            </div>
        </div>
    )
}