/* eslint-disable */
"use client";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export default function Register() {
  const [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const hadleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handelSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/users/register",
      {
        method: "POST",
        body: JSON.stringify(input),
      }
    );
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#1d1c18] text-[#d8cdba] font-sans">
      <div className="h-screen w-1/2  flex items-center justify-center">
        <h1 className="text-9xl text-[#d8cdba]">Luxora</h1>
        <h3 className="text-2xl text-[#d8cdba] ml-3">JOIN NOW</h3>
      </div>
      <div className="w-1/2 space-y-2 bg flex-col  flex items-center justify-center h-screen ">
        <form
          onSubmit={handelSubmit}
          className="w-1/2 flex flex-col gap-2 justify-center"
        >
          <input
            type="text"
            className={`border-[1px] border-[#d8cdba] px-5 py-2 flex items-center gap-2 ${
              input.name ? "bg-[#1d1c18]" : "bg-[#1d1c18]"
            } w-96`}
            placeholder="name"
            name="name"
            value={input.name}
            onChange={hadleChange}
          />

          <input
            type="text"
            className={`border-[1px] border-[#d8cdba] px-5 py-2 flex items-center gap-2 ${
              input.username ? "bg-[#1d1c18]" : "bg-[#1d1c18]"
            } w-96`}
            placeholder="Username"
            name="username"
            value={input.username}
            onChange={hadleChange}
          />

          <input
            type="email"
            className={`border-[1px] border-[#d8cdba] px-5 py-2 flex items-center gap-2 ${
              input.email ? "bg-[#1d1c18]" : "bg-[#1d1c18]"
            } w-96`}
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={hadleChange}
          />

          <input
            type="password"
            className={`border-[1px] border-[#d8cdba] px-5 py-2 flex items-center gap-2 ${
              input.password ? "bg-[#1d1c18]" : "bg-[#1d1c18]"
            } w-96`}
            placeholder="password"
            name="password"
            value={input.password}
            onChange={hadleChange}
          />

          <div className="flex justify-center w-96 h-10 mt-4 ">
            <button className=" bg-[#d8cdba] w-full text-[#1d1c18] hover:bg-[#1d1c18] hover:[#d8cdba] border-[1px] border-[#d8cdba] hover:text-[#d8cdba] transition-all" type="submit">
              Register
            </button>
          </div>
          <div className="flex gap-3  ">
            <p>Already Have Acount </p>
            <Link href={"/login"} className="text-cyan-500">
              Login{" "}
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
}
