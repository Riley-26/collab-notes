import type { Metadata } from "next";
import { inter } from '@/app/ui/fonts';
import "./ui/globals.css";
import Navbar from "./ui/Navbar";

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
      <body className={`${inter.className} antialiased`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
