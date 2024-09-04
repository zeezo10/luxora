/* eslint-disable */
import { cookies } from "next/headers";
import Link from "next/link";
export const dynamic = "force-dynamic";


type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const authCookie = cookies().get("Authorization");

  if (!authCookie) {
    return (
      <main className="place-items-center h-screen bg-lime-900">
        <div className="bg-lime-900 h-28 shadow-xl " ></div>
        <div className="text-center pt-56">
          <div className=" w-screen h-40 flex flex-row justify-center items-center">
            <h1 className="mt-4 text-5xl text-white font-bold tracking-tight  ">
              "Unlock Exclusive Features: Sign in to Add to Wishlist !"
            </h1>
          </div>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <div className="bg-white h-14 w-28 rounded-full flex justify-center items-center text-2xl font-semibold hover:text-white hover:bg-black shadow-xl">
              <Link href="login">Sign in</Link>
            </div>
          </div>
        </div>
      </main>
    );
  }
  return children;
}
