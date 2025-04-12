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
        <header className="px-4 py-4">
            <nav className="flex justify-end">
                <Sheet>
                <SheetTrigger><AlignJustify size={40}/></SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                    </SheetHeader>
                    <ul className="flex flex-col px-4 gap-4">
                        <li><Link href="#" className="flex items-center gap-1"><User size={30}/><span className="text-lg font-semibold">Perfil</span></Link></li>
                        <li><Link href="#" className="flex items-center gap-1"><UserCog size={30}/><span className="text-lg font-semibold">Config</span></Link></li>
                    </ul>
                </SheetContent>
                </Sheet>
            </nav>            
        </header>
    )
}