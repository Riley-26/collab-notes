"use client"

import { useEffect, useState } from "react";

export default function Page(){
    const [noteData, setNoteData]:any = useState({
        isCollab: false,
        friends: [],
        name: ""
    })
    const [savedData, setSavedData]:any = useState(false)

    const isCollab = (res:boolean) => {
        let newValue = {}
        newValue = {isCollab: res}
        setNoteData((noteData:any) => ({
            ...noteData,
            ...newValue
        }))
    }

    const loadFriends = () => {

    }

    const addName = () => {
        const noteName = (document.getElementById("noteInput") as HTMLInputElement).value;
        let newValue = {}
        newValue = {name: noteName}
        setNoteData((noteData:any) => ({
            ...noteData,
            ...newValue
        }))
        setSavedData(true)
    }

    const createNote = () => {

    }

    useEffect(() => {
        console.log(noteData)
    }, [noteData])

    return (
        <main className="flex flex-col max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center justify-center max-w-[1200px] mx-auto min-h-[900px]">
                <h6 className="text-lg">NOTES - CREATE NEW NOTE</h6>
                <h1 className="text-8xl my-4">CREATING YOUR NOTE</h1>
                <h2 className="text-3xl my-12">Here we will create the template for your note</h2>
                <a className="button my-4" href="#collab">
                    START NOW
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 animate-[bounce_1.5s_ease-in-out_infinite] animation-fill-initial my-4 z-[-1]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div id="collab" className="flex flex-col items-center justify-center max-w-[1200px] mx-auto min-h-[900px]">
                <h6 className="text-lg">NOTES - CREATE NEW NOTE</h6>
                <h1 className="text-5xl my-4">Will this note be collaborative or solo?</h1>
                <h2 className="text-3xl my-4 text-white text-opacity-40">You may change this later</h2>
                <div className="flex items-center justify-between my-12">
                    <a href="#add" className="w-[250px] h-[200px] rounded-xl transition-all hover:bg-neutral-800 border-2 border-neutral-800 flex flex-col justify-between items-center p-4 mx-4" onClick={() => isCollab(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-max h-max p-3">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>
                        <h2 className="text-xl">SOLO</h2>
                    </a>
                    <a href="#add" className="w-[250px] h-[200px] rounded-xl transition-all hover:bg-neutral-800 border-2 border-neutral-800 flex flex-col justify-between items-center p-4 mx-4" onClick={() => isCollab(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-max h-max">
                            <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                            <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                        </svg>
                        <h2 className="text-xl">COLLABORATIVE</h2>
                    </a>
                </div>
            </div>
            <div id="add" className="flex flex-col items-center justify-center max-w-[1200px] mx-auto min-h-[900px]">
                <h6 className="text-lg">NOTES - CREATE NEW NOTE</h6>
                <h1 className="text-5xl my-4">Would you like to add anyone to the note now?</h1>
                <h2 className="text-3xl my-4 text-white text-opacity-40">Press NEXT if this is a solo note, or if you are finished adding</h2>
                <div className="flex flex-col items-center justify-between">
                    <div id="" className="w-[800px] h-[200px] rounded-xl border-2 border-neutral-800 flex flex-col justify-between items-center p-4 my-4">
                        { false ? <h1 className="text-xl">FRIENDS LOADED</h1>
                            : <h2 className="text-xl">NO FRIENDS LOADED</h2>
                        }
                    </div>
                    <button className="w-max h-max rounded-xl transition-all hover:bg-neutral-800 border-2 border-neutral-800 flex flex-col justify-between items-center p-4" onClick={() => loadFriends()}>
                        <h2 className="text-xl">LOAD FRIENDS</h2>
                    </button>
                    <a href="#name" className="w-max h-max rounded-xl transition-all hover:bg-neutral-800 border-2 border-neutral-800 flex flex-col justify-between items-center p-4 my-8">
                        <h2 className="text-xl">NEXT</h2>
                    </a>
                </div>
            </div>
            <div id="name" className="flex flex-col items-center justify-center max-w-[1200px] mx-auto min-h-[900px]">
                <h6 className="text-lg">NOTES - CREATE NEW NOTE</h6>
                <h1 className="text-5xl my-4">Please provide a name for your note</h1>
                <input id="noteInput" className="my-12 text-3xl w-[800px] h-[100px] rounded-xl bg-transparent border-2 border-neutral-800 flex flex-col justify-between items-center p-4 outline-none transition-all focus:border-neutral-700" placeholder="Type name here..."/>
                <a href="#create" className="w-max h-max rounded-xl transition-all hover:bg-neutral-800 border-2 border-neutral-800 flex flex-col justify-between items-center p-4" onClick={() => addName()}>
                    <h2 className="text-xl">SAVE NAME</h2>
                </a>
            </div>
            <div id="create" className="flex flex-col items-center justify-center max-w-[1200px] mx-auto min-h-[900px]">
                <h6 className="text-lg">NOTES - CREATE NEW NOTE</h6>
                <h1 className="text-5xl my-4">Create note now</h1>
                <h2 className="text-3xl my-4 text-white text-opacity-40">Or you can go back and edit the preferences if needed</h2>
                <div className="text-xl text-white">
                    {
                        savedData && Object.values(noteData).map((key:any, item:any) => {
                            return (
                                <h1 key={key}>{noteData[item]}</h1>
                            )
                        })
                    }
                </div>
                <button className="rounded-[50%] cursor-pointer border-2 border-neutral-500 w-[160px] h-[160px] flex items-center justify-center text-[120px] transition-all hover:scale-105 my-4" onClick={() => createNote()}>
                    +
                </button>
            </div>
        </main>
    )
}