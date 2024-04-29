import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from 'next/headers'

export async function middleware(request: NextRequest){
    const cookieSession = cookies().get("session");

    if (!cookieSession){
        if (request.nextUrl.pathname.startsWith("/user")){
            return NextResponse.redirect(new URL("/login", request.url))
        }
    } else if (cookieSession){
        if (request.nextUrl.pathname.startsWith("/login")){
            return NextResponse.redirect(new URL("/user", request.url))
        } else if (request.nextUrl.pathname.startsWith("/notes") || request.nextUrl.pathname.startsWith("/social") || request.nextUrl.pathname.startsWith("/user")){
            
        }
    }
}

export const config = {
    matcher: ["/user/:path", "/login/:path", "/notes/:path", "/social/:path"]
}