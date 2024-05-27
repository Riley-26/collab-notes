"use client"

export default function Page(){
    return (
        <div className="p-12 w-full">
            <h1 className="text-3xl">Stats</h1>
            <div className="flex flex-col justify-between w-[100%] h-[100%] py-8">
                <div className="grid grid-flow-row grid-cols-1 px-2 gap-4 min-w-[65%] min-h-[49%]">
                    <div className="card h-full">
                        <h2>Recent activity</h2>
                    </div>
                </div>
                <div className="grid grid-flow-row grid-cols-3 px-2 gap-4 min-w-[35%] min-h-[49%]">
                    <div className="card h-full">
                        <h2>Edits in past month</h2>
                    </div>
                    <div className="card h-full">
                        <h2>New friends</h2>
                    </div>
                    <div className="card h-full">
                        <h2>Daily streak</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}