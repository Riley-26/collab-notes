import Sidebar from "../ui/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Sidebar
                currentTab={"user"}
                sideLinks={[]}
            />
            <main className="h-[calc(100vh)] flex pt-[5rem] ml-[400px]">
                {children}
            </main>
        </>
    );
}