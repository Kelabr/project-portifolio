"use client"


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify, User, UserCog } from "lucide-react"
import Link from "next/link"

export default function Header(){
    return(
        <header className="px-4 py-4 bg-[#1A1A1D]">
            <nav className="flex justify-end">
                <Sheet>
                <SheetTrigger><AlignJustify size={40} color="#29C558"/></SheetTrigger>
                <SheetContent className="bg-[#29C558] border-0">
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col px-4 gap-4">
                        <Link href="#" className="flex items-center gap-1 border-2 border-[#1A1A1D] p-2 rounded-lg focus:bg-[#1A1A1D] focus:text-[#29C558]"><User size={30}/><span className="text-lg font-semibold">Perfil</span></Link>
                        <Link href="#" className="flex items-center gap-1 border-2 border-[#1A1A1D] p-2 rounded-lg focus:bg-[#1A1A1D] focus:text-[#29C558]"><UserCog size={30}/><span className="text-lg font-semibold">Config</span></Link>
                    </div>
                </SheetContent>
                </Sheet>
            </nav>            
        </header>
    )
}