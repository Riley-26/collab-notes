"use client"

import BackImg from "../ui/BackImg";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Page(){

    return (
        <main className="flex flex-col items-center justify-between max-w-[1200px] mx-auto">
            <div className="flex flex-col justify-center items-center text-center min-h-[1000px] bg-gradient-to-t from-transparent from-0% to-neutral-900 to-20%">
                <BackImg/>
                <h6 className="text-lg">ABOUT</h6>
                <h1 className="h1Main">CREATING A NOTE</h1>
                <p className="text-xl my-8" style={{textShadow: "0px 0px 8px rgb(0,0,0)"}}>
                    Press the button below to begin creating your note. You may also navigate to the same area by choosing "NOTES", then clicking this same button in the grid.
                </p>
                <div className="flex flex-col justify-center items-center bg-neutral-900 border-2 border-neutral-500 w-[400px] h-[300px] rounded-xl">
                    <a className="rounded-[50%] border-2 border-neutral-500 w-[150px] h-[150px] flex items-center justify-center text-[96px] transition-all hover:scale-105" href="/notes">
                        +
                    </a>
                    <h2 className="text-2xl my-8">CREATE NEW NOTE</h2>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 my-4 animate-[bounce_1.5s_ease-in-out_infinite]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className="flex flex-col justify-center items-center text-center min-h-[1000px] bg-gradient-to-b from-transparent from-0% to-neutral-900 to-20%">
                <BackImg/>
                <h6 className="text-lg">ABOUT</h6>
                <h1 className="h1Main">SOLO NOTE</h1>
                <p className="text-xl my-8" style={{textShadow: "0px 0px 8px rgb(0,0,0)"}}>
                    You may want to create a note for just your own eyes. Upon creating a new note, choose the "SOLO" option when prompted. You may change this whenever, and add friends to the note later on if you wish.
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 my-4 animate-[bounce_1.5s_ease-in-out_infinite]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className="flex flex-col justify-center items-center text-center min-h-[1000px] bg-gradient-to-b from-transparent from-0% to-neutral-900 to-20%">
                <BackImg/>
                <h6 className="text-lg">ABOUT</h6>
                <h1 className="h1Main">COLLABORATIVE NOTE</h1>
                <p className="text-xl my-8" style={{textShadow: "0px 0px 8px rgb(0,0,0)"}}>
                    Designed for collaborative note-taking, this platform allows for real-time note taking with others. Simply choose "COLLABORATIVE" when creating the note, and add your friends to the note. You will see who has joined 
                    and is currently typing. You can also customise their permissions to prevent deletion and tampering. When another person has finished their edits, the new note will await confirmation from you, the author, before saving the note.
                    <br/>
                    <br/>
                    If not done already, you can add people to your friends list in the "SOCIAL" tab.
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 my-4 animate-[bounce_1.5s_ease-in-out_infinite]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className="flex flex-col justify-center items-center text-center min-h-[1000px] bg-gradient-to-b from-transparent from-0% to-neutral-900 to-20%">
                <BackImg/>
                <h6 className="text-lg">ABOUT</h6>
                <h1 className="h1Main">PERMISSIONS</h1>
                <p className="text-xl my-8" style={{textShadow: "0px 0px 8px rgb(0,0,0)"}}>
                    Navigate to "SOCIAL" to view your friends and the notes that you are part of. To join a friends note, they must add you to it on their end. You will be made aware of your permissions, which will be one of:
                </p>
                <div className="text-xl flex justify-around min-w-full my-4">
                    <span className="bg-gradient-to-r from-neutral-700 via-sky-300 to-neutral-700 p-[0.15rem] rounded-md"><p className="p-4 bg-neutral-900 rounded-md">AUTHOR</p></span>
                    <span className="bg-gradient-to-r from-neutral-700 via-green-300 to-neutral-700 p-[0.15rem] rounded-md"><p className="p-4 bg-neutral-900 rounded-md">JOINT-OWNER</p></span>
                    <span className="bg-gradient-to-r from-neutral-700 via-orange-300 to-neutral-700 p-[0.15rem] rounded-md"><p className="p-4 bg-neutral-900 rounded-md">READ AND WRITE</p></span>
                    <span className="bg-gradient-to-r from-neutral-700 via-red-500 to-neutral-700 p-[0.15rem] rounded-md"><p className="p-4 bg-neutral-900 rounded-md">READ ONLY</p></span>

                </div>
                <p className="text-xl my-8" style={{textShadow: "0px 0px 8px rgb(0,0,0)"}}>
                    Authors and Joint-Owners can instantly save the note after editing. Users with "Read and Write" permissions can edit the note, but it will have to be confirmed by an Author/Joint-Owner to be saved. "Read Only" 
                    users may only read the note.
                </p>
            </div>
        </main>
    )
}