export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="max-w-[1400px] h-[calc(100vh-80px)] mx-auto flex justify-center items-center py-12">
                {children}
            </main>
        </>
    );
}