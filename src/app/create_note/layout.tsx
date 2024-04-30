export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="h-[calc(100vh)] flex pt-[5rem]">
                {children}
            </main>
        </>
    );
}