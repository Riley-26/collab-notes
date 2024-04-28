"use server"

import { getSession, deleteSession } from "@/app/lib/session";
import { sql } from "@vercel/postgres"
import { NextResponse } from "next/server";

export async function GET(request: Request){
    const loggedIn = 0; //false

    try{
        const setLogout = 
            await sql`UPDATE userlogin SET isLoggedIn = ${loggedIn} WHERE username = ${getSession()?.value};`
        const result = deleteSession()
        return NextResponse.json({result, setLogout}, {status:200} )
    } catch (error){
        console.log(error)
        return NextResponse.json({error}, {status:500} )
    }
}