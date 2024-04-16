import Image from "next/image"

export default function Navbar(){
    return (
        <nav className="py-6 flex justify-between max-w-[1200px] mx-auto">
            <div className="max-w-[400px]">
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className="dark:invert"
                    width={140}
                    height={28}
                    priority
                />
            </div>
            <ul className="flex justify-between min-w-[40%] text-lg">
                <li className="mx-2"><a href="/">HOME</a></li>
                <li className="mx-2"><a href="/about">ABOUT</a></li>
                <li className="mx-2"><a href="/notes">NOTES</a></li>
                <li className="mx-2"><a href="/social">SOCIAL</a></li>
                <li className="mx-2"><a href="/user">USER</a></li>
            </ul>
        </nav>
    )
}