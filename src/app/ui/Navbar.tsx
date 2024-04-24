"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar({loggedIn}: {loggedIn:boolean}){

    const currentTab:string = usePathname();

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
                    <li><Link className="hover:text-blue-300 transition-all" href="/about">ABOUT</Link></li>
                    <span className="w-[2px] h-full bg-neutral-700 bg-opacity-60"/>
                    <li><Link className="hover:text-blue-300 transition-all" href="/notes">NOTES</Link></li>
                    <li><Link className="hover:text-blue-300 transition-all" href="/social">SOCIAL</Link></li>
                    <li><Link className="hover:text-blue-300 transition-all" href={ loggedIn ? "/user" : "/login" }>{ loggedIn ? "USER" : "LOG IN" }</Link></li>
                </ul>
            </nav>
            <hr className="hrShadow" />
        </div>
    )
}