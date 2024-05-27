"use client"

export default function Page(){
    return (
        <div className="p-12 w-full">
            <h1 className="text-3xl">User</h1>
            <div className="flex flex-col justify-between w-[100%] h-[100%] py-8 px-2">
                <div className="grid grid-flow-col grid-rows-1 gap-4 h-[49%]">
                    <div className="card h-full">
                        <h2>Stats</h2>
                    </div>
                </div>
                <div className="grid grid-flow-row grid-cols-2 gap-4 h-[49%]">
                    <div className="card h-full">
                        <h2>Latest</h2>
                    </div>
                    <div className="card">
                        <h2>Settings</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}