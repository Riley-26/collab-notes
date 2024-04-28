"use server"

import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { createSession } from "@/app/lib/session";

export async function GET(request: Request){
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username");
    const password = searchParams.get("password");
    const loggedIn = 1; //true

    try{
        if (username && password){
            const result =
                await sql`SELECT * FROM userlogin WHERE username = ${username};`
            if (password !== result.rows[0].password) throw Error
            await createSession(result.rows[0].username)
            const setLoggedIn =
                await sql`UPDATE userlogin SET IsLoggedIn = ${loggedIn} WHERE username = ${username};`
            return NextResponse.json({ result, setLoggedIn }, { status:200 });
        } else {
            throw Error
        }
    } catch (error){
        console.log(error)
        return NextResponse.json({ error }, { status:500 });
    }
}