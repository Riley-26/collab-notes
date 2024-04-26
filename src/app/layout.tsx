import type { Metadata } from "next";
import {useEffect} from "react";
import "./ui/globals.css";
import Navbar from "./ui/Navbar";
import { montserrat } from "./ui/fonts";
import { getSession } from "@/app/lib/session";

export const metadata: Metadata = {
    title: "D-Tails",
    description: "Collaborative note-taking",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const session = () => {
        if (getSession()?.name === "session"){
            return true
        } else{
            return false
        }
    }

    return (
        <html lang="en">
            <body className={`${montserrat.className} antialiased tracking-wider`}>
                <Navbar loggedIn={session()}/>
                {children}
            </body>
        </html>
    );
}
