"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar(){

    const currentTab:string = usePathname();
    const [loggedIn, setLoggedIn] = useState(true);

    useEffect(() => {
        const navTabs:any = document.getElementById("navTabs")
        for (let i=0; i<navTabs.children.length; i++){
            if (currentTab.split("/")[1] === navTabs.children[i].innerText.toLowerCase()){
                console.log(navTabs.children[i])
                navTabs.children[i].classList.add("text-blue-300")
                break
            }
        }
    }, [])

    return (
        <div className="fixed min-w-full z-100 backdrop-blur-md">
            <nav className="py-6 px-12 flex justify-between max-w-[1400px] mx-auto">
                <div className="max-w-[400px]">
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className="dark:invert cursor-pointer"
                        width={140}
                        height={28}
                        priority
                        onClick={() => {window.location.href = "/"}}
                    />
                </div>
                <ul id="navTabs" className="flex justify-between xl:min-w-[35%] min-w-[50%] text-lg">
                    <li><a className="hover:text-blue-300 transition-all" href="/about">ABOUT</a></li>
                    <li><a className="hover:text-blue-300 transition-all" href="/notes">NOTES</a></li>
                    <li><a className="hover:text-blue-300 transition-all" href="/social">SOCIAL</a></li>
                    <li><a className="hover:text-blue-300 transition-all" href={ loggedIn ? "/user" : "/login" }>{ loggedIn ? "USER" : "LOG IN" }</a></li>
                </ul>
            </nav>
            <hr className="hrShadow" />
        </div>
    )
}