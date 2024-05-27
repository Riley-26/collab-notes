"use client"

export default function Layout({children}: {children:React.ReactNode}){
    return (
        <main className="flex w-full">
            {children}
        </main>
    )
}