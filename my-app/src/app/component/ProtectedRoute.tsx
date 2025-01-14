/* eslint-disable */
import { cookies } from "next/headers";
import Link from "next/link";
import NavBar from "./NavBar";
export const dynamic = "force-dynamic";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const authCookie = cookies().get("Authorization");

  if (!authCookie) {
    return (
      <main className="place-items-center h-screen bg-[#1d1c18] font-sans">
        <NavBar/>
       
        <div className="text-center pt-56">
          <div className="  h-40 flex flex-row justify-center items-center">
            <h1 className="mt-4 text-5xl text-[#d8cdba] font-bold tracking-tight  ">
              "Sign in to Add Wishlist !"
            </h1>
          </div>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <div className=" px-5 py-2 flex justify-center items-center text-xl border-[1px] text-[#d8cdba] hover:text-white hover:bg-black shadow-xl">
              <Link href="login">Sign in</Link>
            </div>
          </div>
        </div>
      </main>
    );
  }
  return children;
}
