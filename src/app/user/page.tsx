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
        <div className="p-12">
            <h1 className="text-3xl">User</h1>
        </div>
    )
}