"use client"

import Image from "next/image"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar(){

    const currentTab:string = usePathname();

    const [loggedIn, setLoggedIn] = useState(true);

    useEffect(() => {
        const navTabs:any = document.getElementById("navTabs")
        for (let i=0; i<navTabs.children.length; i++){
            if (currentTab.split("/")[1] === navTabs.children[i].innerText.toLowerCase()){
                navTabs.children[i].classList.add("text-red-300")
                break
            }
        }
    }, [])

    return (
        <nav className="py-6 flex justify-between max-w-[1400px] mx-auto">
            <div className="max-w-[400px]">
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className="dark:invert"
                    width={140}
                    height={28}
                    priority
                />
            </div>
            <ul id="navTabs" className="flex justify-between min-w-[40%] text-lg">
                <li className="mx-2 hover:text-red-300 transition-all"><a href="/">HOME</a></li>
                <li className="mx-2 hover:text-red-300 transition-all"><a href="/about">ABOUT</a></li>
                <li className="mx-2 hover:text-red-300 transition-all"><a href="/notes">NOTES</a></li>
                <li className="mx-2 hover:text-red-300 transition-all"><a href="/social">SOCIAL</a></li>
                <li className="mx-2 hover:text-red-300 transition-all"><a href={ loggedIn ? "/user" : "/login" }>{ loggedIn ? "USER" : "LOG IN" }</a></li>
            </ul>
        </nav>
    )
}