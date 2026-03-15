import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import clsx from "clsx"

interface contentProps{
    title: string,
    className?: string
}

export default function FilterForm({title, className}: contentProps){
    return (
        <form className={clsx("flex flex-col items-start justify-start gap-2", className)}>
            <DropdownMenu>
                <DropdownMenuTrigger className="text-white hover:bg-transparent hover:text-cyan-700 hover:cursor-pointer underline underline-offset-8">
                    {title}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-mist-900 text-white border-none">
                    <DropdownMenuItem>All</DropdownMenuItem>
                    <DropdownMenuItem>Web Apps</DropdownMenuItem>
                    <DropdownMenuItem>Marketing</DropdownMenuItem>
                    <DropdownMenuItem>Database & Backend</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </form>
    )
}