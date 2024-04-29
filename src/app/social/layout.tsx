import Sidebar from "../ui/Sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Sidebar
                currentTab={"social"}
                sideLinks={["/friends", "/collaborative_notes"]}
            />
            <main className="h-[calc(100vh)] flex pt-[5rem] ml-[400px]">
                {children}
            </main>
        </>
    );
}