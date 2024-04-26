"use server"

import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { createSession } from "@/app/lib/session";

export async function GET(request: Request){
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username");
    const password = searchParams.get("password");

    try{
        const result =
        await sql`SELECT * FROM userlogin WHERE username = ${username};`
        if (password !== result.rows[0].password) throw Error
        await createSession(result.rows[0].username)
        return NextResponse.json({ result }, { status:200 });
    } catch (error){
        console.log(error)
        return NextResponse.json({ error }, { status:500 });
    }
}