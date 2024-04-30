"use client"

export default function Layout({children}: {children:React.ReactNode}){
    return (
        <main className="min-w-full min-h-full">
            {children}
        </main>
    )
}