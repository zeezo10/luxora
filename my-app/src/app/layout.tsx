import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/component/NavBar";
import LoginNav from "@/app/component/LoginNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxora",
  description: "Luxora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full fixed top-0 z-50">
        <NavBar />

        </div>
        {children}
      </body>
    </html>
  );
}
