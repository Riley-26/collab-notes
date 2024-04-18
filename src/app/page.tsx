"use client"

import BackImg from "./ui/BackImg";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between max-w-[1200px] mx-auto">
            <div className="flex flex-col justify-center items-center text-center min-h-[800px]">
                <BackImg/>
                <h1 className="text-8xl my-8">DYNAMIC NOTE-TAKING</h1>
                <h2 className="text-5xl my-8">WITH D-TAILS</h2>
                <p className="text-lg my-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, esse. Accusamus, dolorum odit, ullam, saepe cupiditate quibusdam molestiae ex adipisci deleniti recusandae tenetur 
                    consequuntur praesentium. Unde repellendus rem doloremque velit architecto? Accusantium quia, quisquam qui inventore aliquam ut odio minima!
                </p>
            </div>
        </main>
    );
}
