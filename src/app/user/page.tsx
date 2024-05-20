"use client"

export default function Page(){
    return (
        <div className="p-12 w-full">
            <h1 className="text-3xl">User</h1>
            <div className="flex justify-between w-[100%] h-[100%]">
                <div className="grid grid-flow-col grid-rows-2 py-8 px-2 gap-4 min-w-[65%]">
                    <div className="card h-full">
                        <h2>Stats</h2>
                    </div>
                    <div className="card h-full">
                        <h2>Latest</h2>
                    </div>
                </div>
                <div className="grid grid-flow-col grid-rows-2 py-8 px-2 gap-4 min-w-[35%]">
                    <div className="card">
                        <h2>Settings</h2>
                    </div>
                    <div className="card">
                        <h2>Settings</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}