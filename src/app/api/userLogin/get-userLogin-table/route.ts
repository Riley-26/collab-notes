import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request){
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username");
    const password = searchParams.get("password");

    try{
        const result =
        await sql`SELECT * FROM userlogin WHERE username = '${username}' AND password = '${password}';`
        return NextResponse.json({ result }, { status:200 });
    } catch (error){
        return NextResponse.json({ error }, { status:500 });
    }
}