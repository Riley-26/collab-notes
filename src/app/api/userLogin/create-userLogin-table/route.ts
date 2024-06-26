"use server"

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
    try {
        const result =
            await sql`CREATE TABLE UserLogin ( UserId char(6), Username varchar(255), Email varchar(255), Password varchar(255), IsLoggedIn bit(1) );`;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}