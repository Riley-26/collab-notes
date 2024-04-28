import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from 'next/headers'

export async function middleware(request: NextRequest){
    if (request.nextUrl.pathname.startsWith("/user")){
        if (!cookies().get("session")){
            return NextResponse.redirect(new URL("/login", request.url))
        }
    } else if (request.nextUrl.pathname.startsWith("/login")){
        if (cookies().get("session")){
            return NextResponse.redirect(new URL("/user", request.url))
        }
    }
    
    if (request.nextUrl.pathname.startsWith("/notes") || request.nextUrl.pathname.startsWith("/social") || request.nextUrl.pathname.startsWith("/user")){
        if (cookies().get("session")){
            
        }
    }
}

export const config = {
    matcher: ["/user/:path", "/login/:path", "/notes/:path", "/social/:path"]
}