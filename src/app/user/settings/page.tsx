"use client"

export default function Page(){

    const logout = async () => {
        if (window.confirm("Are you sure that you would like to log out?")){
            await fetch("/api/userLogin/logout").then(() => {
                window.location.href = "/"
            })
        }
    }

    return (
        <div className="p-12 w-full">
            <h1 className="text-3xl">Settings</h1>
            <div className="flex justify-between w-[100%] h-[100%] py-8">
                <div className="grid grid-flow-col grid-rows-2 px-2 gap-4 min-w-[calc(100%/3)] min-h-[49%]">
                    <div className="card h-full">
                        <h2>Set status</h2>
                    </div>
                    <div className="card h-full">
                        <h2>Get my ID</h2>
                    </div>
                </div>
                <div className="grid grid-flow-col grid-rows-2 px-2 gap-4 min-w-[calc(100%/3)] min-h-[49%]">
                    <div className="card h-full">
                        <h2>Delete notes</h2>
                    </div>
                    <div className="card h-full">
                        <h2>Edit permissions</h2>
                    </div>
                </div>
                <div className="grid grid-flow-col grid-rows-2 px-2 gap-4 min-w-[calc(100%/3)] min-h-[49%]">
                    <div className="card h-full">
                        <h2>Dark mode</h2>
                    </div>
                    <div className="card h-full">
                        <h2>Log out</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}