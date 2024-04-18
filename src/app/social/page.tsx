"use client"

export default function Page(){
    return (
        <div className="flex w-full h-full">
            <div className="flex flex-col h-full w-1/3 m-1">
                <div className="h-1/3 w-full p-4 flex flex-col m-1 rounded-lg bg-[rgb(35,35,35)]">
                    <div className="w-full h-full bg-[rgb(45,45,45)] rounded-lg p-4">
                        <h1>Friend count</h1>
                    </div>
                </div>
                <div className="h-2/3 w-full p-4 flex flex-col m-1 rounded-lg bg-[rgb(35,35,35)]">
                    <h1 className="text-2xl">FRIEND LIST</h1>
                    <div className="w-full h-full bg-[rgb(45,45,45)] rounded-lg p-4">
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-full w-1/3 m-1">
                <div className="h-2/3 w-full p-4 flex flex-col m-1 rounded-lg bg-[rgb(35,35,35)]">
                    <h1 className="text-2xl">MY SHARED NOTES</h1>
                    <div className="w-full h-full bg-[rgb(45,45,45)] rounded-lg mt-2 p-4">

                    </div>
                </div>
                <div className="h-1/3 w-full p-4 flex flex-col m-1 rounded-lg bg-[rgb(35,35,35)]">
                    <h1 className="text-2xl">FRIEND REQUESTS</h1>
                    <div className="w-full h-full bg-[rgb(45,45,45)] rounded-lg mt-2 p-4">

                    </div>
                </div>
            </div>
            <div className="flex flex-col h-full w-1/3 m-1">
                <div className="h-2/3 w-full p-4 flex flex-col m-1 rounded-lg bg-[rgb(35,35,35)]">
                    <h1 className="text-2xl">JOINED NOTES</h1>
                    <div className="w-full h-full bg-[rgb(45,45,45)] rounded-lg mt-2 p-4">

                    </div>
                </div>
                <div className="h-1/3 w-full p-4 flex flex-col m-1 rounded-lg bg-[rgb(35,35,35)]">
                    <h1 className="text-2xl">RECENTLY ADDED</h1>
                    <div className="w-full h-full bg-[rgb(45,45,45)] rounded-lg mt-2 p-4">

                    </div>
                </div>
            </div>
        </div>
    )
}