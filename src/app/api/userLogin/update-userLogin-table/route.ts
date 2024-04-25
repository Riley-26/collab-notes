import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username");
    const email = searchParams.get("email");
    const password = searchParams.get("password");

    try {
        const result =
        await sql`INSERT INTO UserLogin (username, email, password) VALUES (${username}, ${email}, ${password})`;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}