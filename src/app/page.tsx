"use client"

import Link from "next/link";
import BackImg from "./ui/BackImg";

export default function Home() {

    return (
        <main className="flex flex-col items-center justify-between max-w-[1200px] mx-auto">
            <div className="flex flex-col justify-center items-center text-center min-h-[1000px]">
                <BackImg/>
                <h1 className="h1Main">DYNAMIC NOTE-TAKING</h1>
                <h2 className="h2Main">WITH D-TAILS</h2>
                <p className="text-xl my-8" style={{textShadow: "0px 0px 8px rgb(0,0,0)"}}>
                    The new way to collaborate with others, live, and share insights. The modern way to stay interconnected. Simply follow the instructions below to get started.
                </p>
                <a className="button" href="#start">
                    START NOW
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 animate-[bounce_1.5s_ease-in-out_infinite] animation-fill-initial my-4 z-[-1]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div id="start" className="flex flex-col justify-center items-center text-center min-h-[1000px] bg-gradient-to-b from-transparent from-0% to-neutral-900 to-20%">
                <h1 className="h1Main">HOW IT WORKS</h1>
                <div className="grid grid-flow-row grid-cols-2 gap-12 my-8 text-lg">
                    <div className="flex flex-col items-center">
                        <span className="rounded-[50%] border-2 border-neutral-500 w-[60px] h-[60px] flex items-center justify-center text-3xl">1</span>
                        <p className="my-4">
                            Create an account or log in by navigating to "LOG IN" in order to have your work saved and to add friends to your notes.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="rounded-[50%] border-2 border-neutral-500 w-[60px] h-[60px] flex items-center justify-center text-3xl">2</span>
                        <p className="my-4">
                            If you are planning on making the note collaborative, then add friends within the "SOCIAL" tab. Follow the steps after clicking the "ADD FRIEND" button. Add friends to the note after the next step when prompted.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="rounded-[50%] border-2 border-neutral-500 w-[60px] h-[60px] flex items-center justify-center text-3xl">3</span>
                        <p className="my-4">
                            Click the "NOTES" tab upon logging in to begin creating a note. Select whether or not you would like to make it a collaborative note. You may change this whenever.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="rounded-[50%] border-2 border-neutral-500 w-[60px] h-[60px] flex items-center justify-center text-3xl">4</span>
                        <p className="my-4">
                            Once created, start writing! Make sure to save often. If it is a collaborative note, you will see who can join and in "SOCIAL" you can set their permissions.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center min-h-[1000px] bg-gradient-to-b from-transparent from-0% to-neutral-900 to-20%">
                <h1 className="h1Main">WHY USE THIS?</h1>
                <p className="text-lg my-8">
                    Collaboration is the key to efficient team environments. This platform will unlock the ability to work together on demand, no matter the location. Share notes with your friends and co-workers without hassle, and 
                    see each other's actions live. No more sending notes through email, or sending blurry images to each other. Stay connected and share knowledge with each other in a simple, accessible format. Simply join a note together 
                    and work from there.
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 animate-[bounce_1.5s_ease-in-out_infinite] my-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className="flex flex-col justify-center items-center text-center min-h-[1000px] bg-gradient-to-b from-transparent from-0% to-neutral-900 to-20%">
                <h1 className="text-8xl my-16">GET STARTED NOW</h1>
                <div className="flex flex-col justify-center items-center">
                    <Link className="rounded-[50%] border-2 border-neutral-500 w-[150px] h-[150px] flex items-center justify-center text-[96px] transition-all hover:scale-105" href="/notes">
                        +
                    </Link>
                    <h2 className="text-2xl my-8">CREATE NEW NOTE</h2>
                </div>
                <div className="grid grid-flow-row grid-cols-4 gap-8 my-12">
                    <Link className="button" href="/about">
                        ABOUT
                    </Link>
                    <Link className="button" href="/notes">
                        NOTES
                    </Link>
                    <Link className="button" href="/social">
                        SOCIAL
                    </Link>
                    <Link className="button" href={ true ? "/user" : "/login" }>
                        ACCOUNT
                    </Link>
                </div>
            </div>
        </main>
    );
}
