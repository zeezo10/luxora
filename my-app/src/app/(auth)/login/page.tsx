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
      <div className="flex justify-center items-center h-screen ">
        <div className="h-screen w-1/2 bg-lime-900 flex items-center justify-center">
          <h1 className="text-9xl text-white">Luxora</h1>
          <h3 className="text-2xl text-white ml-3">Welcome back </h3>
        </div>
        <div className="pt-10 w-1/2 space-y-10 bg flex-col flex items-center justify-center h-screen">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              name="email"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="password"
              name="password"
            />
          </label>
          <div className="flex gap-3  ">
            <p>Don't Have Acount </p>
            <Link href={"/register"} className="text-cyan-500">
              Register{" "}
            </Link>
          </div>
          <div className="flex justify-center">
            <button className="btn" type="submit">
              login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
