"use client"

export default function Page(){
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex w-full h-2/3">
                <div className="w-1/3 p-4 flex flex-col m-1 rounded-lg bg-[rgb(35,35,35)]">
                    <h1 className="text-2xl">WELCOME, RILEY</h1>
                    <div className="w-full h-full bg-[rgb(45,45,45)] rounded-lg mt-2 p-4">
                        <h2 className="text-center">Lighting mode</h2>

                    </div>
                </div>
                <div className="w-2/3 p-4 flex flex-col m-1 rounded-lg bg-[rgb(35,35,35)]">
                    <h1 className="text-2xl">STATS</h1>
                    <div className="w-full h-full bg-[rgb(45,45,45)] rounded-lg mt-2 p-4">
                        
                    </div>
                </div>
            </div>
            <div className="flex w-full h-1/3">
                <div className="w-2/3 p-4 flex flex-col m-1 rounded-lg bg-[rgb(35,35,35)]">
                    <h1 className="text-2xl">MY RECENT</h1>
                    <div className="w-full h-full bg-[rgb(45,45,45)] rounded-lg mt-2 p-4">

                    </div>
                </div>
                <div className="w-1/3 p-4 flex flex-col m-1 rounded-lg bg-[rgb(35,35,35)] items-center justify-center text-center">
                    <h1 className="text-2xl hover:text-blue-300 transition-all my-4 cursor-pointer py-2 px-4 bg-[rgb(45,45,45)] rounded-lg max-w-[350px]">CHANGE USERNAME/PASSWORD</h1>
                    <h1 className="text-2xl hover:text-red-400 transition-all my-4 cursor-pointer py-2 px-4 bg-[rgb(45,45,45)] rounded-lg">LOG OUT</h1>
                </div>
            </div>
        </div>
    )
}