import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request){
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    try{
        if (userId && cookies().get("session")){
            const result = 
                await sql`SELECT * FROM UserInfo WHERE userId = ${userId}`
            return NextResponse.json({result}, {status:200})
        } else{
            throw Error
        }
    } catch (error){
        return NextResponse.json({error}, {status:500})
    }
}