"use client"

export default function Page(){
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex w-full h-2/3">
                <div className="w-1/3 p-4 flex flex-col m-1 rounded-lg bg-[rgb(35,35,35)]">
                    <h1 className="text-2xl">CREATE NEW NOTE</h1>
                    <div className="w-full h-full bg-[rgb(45,45,45)] rounded-lg mt-2 p-4">

                    </div>
                </div>
                <div className="w-2/3 flex flex-col">
                    <div className="w-2/2 h-1/2 p-4 flex flex-col m-1 rounded-lg bg-[rgb(35,35,35)]">
                        <h1 className="text-2xl">MY NOTES</h1>
                        <div className="w-full h-full bg-[rgb(45,45,45)] rounded-lg mt-2 p-4">
                            Hello
                        </div>
                    </div>
                    <div className="w-2/2 h-1/2 p-4 flex flex-col m-1 rounded-lg bg-[rgb(35,35,35)]">
                        <h1 className="text-2xl">JOINED NOTES</h1>
                        <div className="w-full h-full bg-[rgb(45,45,45)] rounded-lg mt-2 p-4">

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full h-1/3">
                <div className="w-2/3 p-4 flex flex-col m-1 rounded-lg bg-[rgb(35,35,35)]">
                    <h1 className="text-2xl">LATEST EDITS</h1>
                    <div className="w-full h-full bg-[rgb(45,45,45)] rounded-lg mt-2 p-4">

                    </div>
                </div>
                <div className="w-1/3 p-4 flex flex-col m-1 rounded-lg bg-[rgb(35,35,35)]">
                    <h1 className="text-2xl">RECENT</h1>
                    <div className="w-full h-full bg-[rgb(45,45,45)] rounded-lg mt-2 p-4">

                    </div>
                </div>
            </div>
        </div>
    )
}