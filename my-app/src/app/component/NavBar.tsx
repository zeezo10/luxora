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
      className={`navbar flex flex-row-reverse p-6 gap-10 fixed top-0 w-full z-50 backdrop-blur-sm shadow-md`}
    >
      {token ? (
        <form action={handleLogout} className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-white backdrop-blur-sm h-14 w-14 rounded-full flex justify-center items-center hover:bg-black hover:text-white"
          >
          logout
          </button>
        </form>
      ) : (
        <Link
          href={"/login"}
          className="bg-white backdrop-blur-sm h-14 w-14 rounded-full flex justify-center hover:bg-black hover:text-white"
        >
          <p>login</p>
        </Link>
      )}
      <div
        className={ "text-black bg-white  h-14 w-[400px] rounded-full flex justify-around"}
      >
        <Link href={"/wishlist"} className="hover:text-lime-900">
          Wishlist
        </Link>
        <Link href={"/products"} className="hover:text-lime-900">
          Products
        </Link>
        <Link href={"/about"} className="hover:text-lime-900">
          About Us
        </Link>
      </div>
  
        <Link href='/' className="bg-white backdrop-blur-sm h-14 w-28 rounded-full flex justify-center hover:bg-black hover:text-white " >Home</Link>

      <Link className="h-14 w-14 mr-[750px]" href={"/"}>
        <Image className="" src={logo} alt="Logo" />
      </Link>
    </div>
  );
}
