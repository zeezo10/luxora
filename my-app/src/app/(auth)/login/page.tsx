/* eslint-disable */
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { type } from "os";

export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export default function Login() {
  const handleLogin = async (formData: FormData) => {
    "use server";

    const form = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const result = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/users/login",
      {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (!result.ok) {
      console.log(result.statusText);
    }

    if (result.ok) {
      const responeBody = (await result.json()) as {
        access_token: string;
        _id: String;
      };

      cookies().set("Authorization", `Bearer ${responeBody.access_token}`);
      cookies().set("_id", `${responeBody._id}`);

      redirect("wishlist");
    }
  };
  return (
    <form action={handleLogin}>
      <div className="flex justify-center items-center h-screen bg-[#1d1c18] font-sans text-[#d8cdba]">
        <div className="h-screen w-1/2  flex items-center justify-center">
          <h1 className="text-9xl text-[#d8cdba]">Luxora</h1>
          <h3 className="text-2xl text-[#d8cdba] ml-3">Welcome back </h3>
        </div>
        <div className="pt-10 w-1/2 gap-1 bg flex-col flex items-center justify-center h-screen">

            <input
              type="text"
              className="border-[1px] px-5 py-2 flex items-center gap-2 bg-white w-96 border-[#d8cdba]"
              placeholder="Email"
              name="email"
            />
        
     
            <input
              type="password"
              className="border-[1px]  px-5 py-2 flex items-center gap-2 bg-white w-96 border-[#d8cdba]"
              placeholder="password"
              name="password"
            />
            
       
          <div className="flex justify-center w-96 h-10 m-4">
          <button className=" bg-[#d8cdba] w-full text-[#1d1c18] hover:bg-[#1d1c18] hover:[#d8cdba] border-[1px] border-[#d8cdba] hover:text-[#d8cdba] transition-all " type="submit">
              login
            </button>
          </div>
          <div className="flex gap-3  ">
            <p >Don't Have Acount</p>
            <Link href={"/register"} className="text-cyan-500">
              Register{" "}
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
