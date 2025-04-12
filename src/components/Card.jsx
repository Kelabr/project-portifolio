import { Button } from "./ui/button";
import Link from "next/link";

export default function Card({name, descriptionn, localy}){
    return(
        <div className="p-4 max-h-58 rounded-lg shadow bg-[#29C558] ">
            <h1 className="text-2xl font-medium mb-2">{name}</h1>
            <span className="italic">{descriptionn}</span>
            <div className="flex justify-between items-center mt-4 font-medium"><span>{localy}</span><Link href="#"><Button>Apoiar</Button></Link></div>
        </div>
    )
}