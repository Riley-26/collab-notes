"use client"

export default function Page(){
    return (
        <div className="p-12 w-full">
            <h1 className="text-3xl">Latest</h1>
            <div className="flex justify-between w-[100%] h-[100%] py-8">
                <div className="grid grid-flow-row grid-cols-1 px-2 gap-4 min-w-[65%] min-h-[49%]">
                    <div className="card h-full">
                        <h2>Newest edits</h2>
                    </div>
                </div>
                <div className="grid grid-flow-col grid-rows-2 px-2 gap-4 min-w-[35%] min-h-[49%]">
                    <div className="card h-full">
                        <h2>Friend activity</h2>
                    </div>
                    <div className="card h-full">
                        <h2>Settings</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}