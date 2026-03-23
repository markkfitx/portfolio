"use client"
import { Copy, MinusIcon, PanelRight, PlusIcon, RotateCcw, ShareIcon, XIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
export default function Toolbar() {
    const [url, setUrl] = useState("https://www.admin.shopify.com/store/developmore/analystics")
    return (
        <div className="flex shrink-0 items-center justify-between gap-2 border-b-none border-white/10 bg-white/10 px-4 py-3">
            <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/60 relative hover:bg-red-500/90 transition-all duration-200 hover:cursor-pointer"><XIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-900" size={8} /></span>
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60 relative hover:bg-yellow-500/90 transition-all duration-200 hover:cursor-pointer"><MinusIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-900" size={8} /></span>
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/60 relative hover:bg-green-500/90 transition-all duration-200 hover:cursor-pointer"><PlusIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-900" size={8} /></span>
            </div>
            <Input type="text" placeholder="Search or enter web address" className="h-6 w-2/5 text-[9px]! bg-neutral-900/10 border-white/10 border rounded-sm hover:bg-neutral-700/40 transition-all duration-200 hover:cursor-pointer" onChange={(e) => setUrl(e.target.value)} value="https://www.admin.shopify.com/store/developmore/analystics"/>
            <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full relative"><ShareIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/50 hover:text-white/70 transition-all duration-200 hover:cursor-pointer" size={12} /></span>
                <span className="h-2.5 w-2.5 rounded-full relative"><PlusIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/50 hover:text-white/70 transition-all duration-200 hover:cursor-pointer" size={13} /></span>
                <span className="h-2.5 w-2.5 rounded-full relative"><Copy className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/50 hover:text-white/70 transition-all duration-200 hover:cursor-pointer" size={12} /></span>
            </div>
        </div>
    )
}