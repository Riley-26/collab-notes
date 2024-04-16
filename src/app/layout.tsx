import type { Metadata } from "next";
import "./ui/globals.css";
import Navbar from "./ui/Navbar";
import { montserrat } from "./ui/fonts";

export const metadata: Metadata = {
  title: "D-Tails",
  description: "Collaborative note-taking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased tracking-wider`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
