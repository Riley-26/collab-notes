"use client"

import BackImg from "@/app/ui/BackImg"
import {useEffect, useState} from "react"
import { sql } from "@vercel/postgres"

export default function Page(){

    const [signupData, setSignupData] = useState({
        username: undefined,
        email: undefined,
        password: undefined
    })

    const getFormData = (data:any) => {
        const username = data.target[0].value;
        const email = data.target[1].value;
        const password = data.target[2].value;

        //Error handling
        setSignupData({
            username: username,
            email: email,
            password: password
        })

        data.preventDefault()
    }

    const requestSignup = async () => {
        try{
            const handleSignup = await fetch(`/api/userLogin/update-userLogin-table?username=${signupData.username}&email=${signupData.email}&password=${signupData.password}`).then((data) => {
                console.log(data)
            })
        } catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        if (signupData.username !== undefined){
            requestSignup()
        }
    }, [signupData])

    return (
        <>
            <BackImg/>
            <main className="w-[600px]">
                <h2 className="h2Main text-center">Sign Up</h2>
                <form className="grid grid-flow-row grid-cols-1 bg-gradient-to-b from-transparent from-0% to-neutral-900 to-10% py-4" onSubmit={(data) => getFormData(data)}>
                    <div className="flex flex-col my-2">
                        <label className="text-xl my-2">Username</label>
                        <input className="text-xl bg-neutral-900 p-2 border border-neutral-700 rounded-lg outline-none focus:border-neutral-500 transition-all" type="" required />
                    </div>
                    <div className="flex flex-col my-2">
                        <label className="text-xl my-2">Email</label>
                        <input className="text-xl bg-neutral-900 p-2 border border-neutral-700 rounded-lg outline-none focus:border-neutral-500 transition-all" type="email" required />
                    </div>
                    <div className="flex flex-col my-2">
                        <label className="text-xl my-2">Password</label>
                        <input className="text-xl bg-neutral-900 p-2 border border-neutral-700 rounded-lg outline-none focus:border-neutral-500 transition-all" type="password" required />
                    </div>
                    <button className="button mx-auto my-8">
                        SUBMIT
                    </button>
                </form>
            </main>
        </>
    )
}