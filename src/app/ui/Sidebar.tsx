"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

type SidebarProps = {
    currentTab: string;
    sideLinks: string[];
}

export default function Sidebar({currentTab, sideLinks}: SidebarProps){
    const [newLinks, setNewLinks] = useState<string[]>([])

    const formatLinks = () => {
        const linksList:string[] = [];
        for (let i=0; i<sideLinks.length; i++){
            linksList.push(sideLinks[i].substring(1, sideLinks[i].length).replace("_", " "))
        }
        setNewLinks(linksList)
    }

    useEffect(() => {
        formatLinks()
    }, [])

    return (
        <div className="mt-[5rem] w-[400px] h-full border-r-2 border-neutral-700 border-opacity-40 p-8 text-center bg-gradient-to-r from-neutral-900 fixed to-neutral-800">
            <h2 className="text-5xl capitalize"><Link href={`/${currentTab}`}>{currentTab}</Link></h2>
            <hr className="border border-neutral-700 my-4"/>
            <div className="h-[80%] flex flex-col justify-between">
                <ul className="flex flex-col justify-around">
                    { sideLinks && sideLinks.map((key, index) => {
                        return (
                                <Link key={key} href={`/${currentTab}/${sideLinks[index]}`}><li className="py-4 text-xl capitalize transition-all hover:bg-neutral-900">{newLinks[index]}</li></Link>
                            )
                        })
                    }
                </ul>
                <div className="flex flex-col justify-center items-center border-2 border-neutral-600 py-4 rounded-xl">
                    <a className="rounded-[50%] border-2 border-neutral-500 w-[100px] h-[100px] flex items-center justify-center text-[88px] transition-all hover:scale-105 my-4" href="/create_note">
                        +
                    </a>
                    <h2 className="text-xl my-4 px-4">CREATE NEW NOTE</h2>
                </div>
            </div>
        </div>
    )
}