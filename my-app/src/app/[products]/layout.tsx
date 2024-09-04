import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
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
  return <main >{children}</main>;
}
