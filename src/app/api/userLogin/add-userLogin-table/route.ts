import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    let userId = String(Math.random()).substring(2, 8);
    const username = searchParams.get("username");
    const email = searchParams.get("email");
    const password = searchParams.get("password");
    const loggedIn = 1; //true

    const checkIds = (ids:any) => {
        for (let i=0; i<ids.length; i++){
            if (userId === ids[i].userid){
                userId = String(Math.random()).substring(2, 8);
            }
        }
    }

    try {
        if (username && email && password){
            const userIds = 
                await sql`SELECT userId FROM UserLogin;`
            checkIds(userIds.rows)
            const result =
                await sql`INSERT INTO UserLogin (userId, username, email, password, IsLoggedIn) VALUES (${userId}, ${username}, ${email}, ${password}, ${loggedIn})`;
            return NextResponse.json({ result }, { status: 200 });
        } else{
            throw Error
        }
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}