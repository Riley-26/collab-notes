"use client"

import { useState, useEffect } from "react";
import BackImg from "../ui/BackImg"
import { sql } from "@vercel/postgres"

export default function Page(){

    const [loginData, setLoginData] = useState({
        username: undefined,
        password: undefined
    })

    const getFormData = (data:any) => {
        const username = data.target[0].value;
        const password = data.target[1].value;

        setLoginData({
            username: username,
            password: password
        })

        data.preventDefault()
    }

    const requestLogin = async () => {
        try{
            const handleLogin = await fetch(`/api/userLogin/get-userLogin-table?username=${loginData.username}&password=${loginData.password}`).then((data) => {
                if (data.status === 500){
                    alert("Invalid password")
                    throw Error
                } else if (data.status === 200){
                    alert("Signed in")
                    window.location.href = "/"
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (loginData.username !== undefined){
            requestLogin()
        }
    }, [loginData])

    return (
        <>
            <BackImg/>
            <main className="w-[600px]">
                <h2 className="h2Main text-center">Log In</h2>
                <form className="grid grid-flow-row grid-cols-1 bg-gradient-to-b from-transparent from-0% to-neutral-900 to-10% py-4" onSubmit={(data) => getFormData(data)}>
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