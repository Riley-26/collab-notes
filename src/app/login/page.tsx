"use client"

import BackImg from "../ui/BackImg"

export default function Page(){
    return (
        <>
            <BackImg/>
            <main className="w-[600px]">
                <h2 className="h2Main text-center">Log In</h2>
                <form className="grid grid-flow-row grid-cols-1 bg-gradient-to-b from-transparent from-0% to-neutral-900 to-10% py-4">
                    <div className="flex flex-col my-4">
                        <label className="text-xl my-2">Username</label>
                        <input className="text-xl bg-neutral-900 p-2 border border-neutral-700 rounded-lg outline-none focus:border-neutral-500 transition-all" type="" required />
                    </div>
                    <div className="flex flex-col my-4">
                        <label className="text-xl my-2">Password</label>
                        <input className="text-xl bg-neutral-900 p-2 border border-neutral-700 rounded-lg outline-none focus:border-neutral-500 transition-all" type="password" required />
                    </div>
                    <div className="my-8 flex justify-around">
                        <a className="hover:underline" href="/login/signup">
                            Create New User
                        </a>
                        <a className="hover:underline">
                            Forgot Password
                        </a>
                    </div>
                    <button className="button mx-auto my-8">
                        SUBMIT
                    </button>
                </form>
            </main>
        </>
    )
}