"use server"

import { getSession, deleteSession } from "@/app/lib/session";
import { NextResponse } from "next/server";

export async function GET(request: Request){
    try{
        const result = deleteSession()
        return NextResponse.json({result}, {status:200} )
    } catch (error){
        console.log(error)
        return NextResponse.json({error}, {status:500} )
    }
}