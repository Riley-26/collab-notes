import { serialize } from "cookie"
import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse){
    const sessionData = req.body

    const cookie = serialize("session", sessionData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/"
    })

    res.setHeader("Set-Cookie", cookie)
    res.status(200).json({message: "Set cookie"})
}