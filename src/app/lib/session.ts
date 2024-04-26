import 'server-only'
import { cookies } from 'next/headers'
 
export async function createSession(userId: string) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    
    cookies().set('session', userId, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    })
}

export function getSession(){
    return cookies().get("session")
}

export function deleteSession(){
    return cookies().delete("session")
}