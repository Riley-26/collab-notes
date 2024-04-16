export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="max-w-[1200px] mx-auto">
                {children}
            </main>
        </>
    );
}