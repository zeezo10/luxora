// "use client";
import Link from "next/link";
import logo from "../../../public/Picsart_22-02-09_00-08-25-791.png";
import Image from "next/image";
// import { useEffect, useState } from "react";
import handleLogout from "../action/logout";
import { cookies } from "next/headers";

export default  function NavBar() {

  const token = cookies().has("_id")


  return (
    <div
      className={`navbar flex flex-row-reverse py-1 px-5 gap-10  top-0 w-full border-b-[1px] `}
    >
      {token ? (
        <form action={handleLogout} className="flex justify-center items-center">
          <button
            type="submit"
            className="flex justify-center items-center hover:bg-black hover:text-pink-700"
          >
          Logout
          </button>
        </form>
      ) : (
        <Link
          href={"/login"}
          className="text-white flex justify-center hover:text-pink-800"
        >
          <p>Login</p>
        </Link>
      )}
      <div
        className={ "text-white flex gap-5"}
      >
        <Link href={"/wishlist"} className="hover:text-[#c06f52] text-white">
          Wishlist
        </Link>
        <Link href={"/products"} className="hover:text-[#c06f52] text-white">
          Products
        </Link>
        
      </div>
  
        <Link href='/' className="text-white flex justify-center hover:text-[#c06f52] " >Home</Link>
      <div className="flex-1"></div>
      <Link className=" w-14 mr-[750px]" href={"/"}>
        {/* <Image className="" src={logo} alt="Logo" /> */}
        <h1 className="text-white text-2xl font-bold hover:text-[#c06f52]">Luxora</h1>
      </Link>
    </div>
  );
}
