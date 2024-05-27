"use client"

export default function Page(){
    return (
        <div className="p-12 w-full">
            <h1 className="text-3xl">Friends</h1>
            <div className="flex justify-between w-[100%] h-[100%] py-8">
                <div className="grid grid-flow-row grid-cols-1 px-2 gap-4 min-w-[65%] min-h-[49%]">
                    <div className="card h-full">
                        <h2>List</h2>
                    </div>
                </div>
                <div className="grid grid-flow-col grid-rows-2 px-2 gap-4 min-w-[35%] min-h-[49%]">
                    <div className="card h-full">
                        <h2>Requests</h2>
                    </div>
                    <div className="card h-full">
                        <h2>Add friends</h2>
                        {/* by id code */}
                    </div>
                </div>
            </div>
        </div>
    )
}