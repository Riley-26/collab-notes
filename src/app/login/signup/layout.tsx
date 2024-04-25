export default function Layout({ children }: { children: React.ReactNode }){
    return (
        <main className="mx-auto flex justify-center items-center ">
            {children}
        </main>
    )
}