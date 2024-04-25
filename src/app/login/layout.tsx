export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="max-w-[1400px] h-[calc(94vh)] mx-auto flex justify-center items-center pt-[8rem]">
                {children}
            </main>
        </>
    );
}