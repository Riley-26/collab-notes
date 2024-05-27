"use client"

export default function Page(){
    return (
        <div className="p-12 w-full">
            <h1 className="text-3xl">Notes</h1>
            <div className="flex flex-col justify-between w-[100%] h-[100%] py-8 px-2">
                <div className="grid grid-flow-row grid-cols-2 gap-4 h-[64%]">
                    <div className="card h-full">
                        <h2>My notes</h2>
                    </div>
                    <div className="card h-full">
                        <h2>Joined notes</h2>
                    </div>
                </div>
                <div className="grid grid-flow-row grid-cols-2 gap-4 h-[34%]">
                    <div className="card h-full">
                        <h2>Edits</h2>
                    </div>
                    <div className="card h-full">
                        <h2>Recent</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}