/* eslint-disable */
"use client";

import Card from "@/app/component/Card";
import NavBar from "@/app/component/NavBar";
import WishlistCard from "@/app/component/WishlistCard";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export default function Wishlist() {
  const [user_id, setUser_id] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const res = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/wishlist",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      const allProducts = await res.json();

      setProducts(allProducts);
    }
    fetchdata();
  }, [user_id]);

  return (
    <>
      <main className="bg-[#1d1c18] min-h-screen">
        <div className=" ">
          {/* <div className=" pt-28"></div> */}
          <div className="">
            <div className="h-20 border-b-[1px] mx-20 border-[#504e46] flex justify-between items-center">
              <h1 className="text-xl text-[#d8cdba] stroke-red-800">0</h1>
              <h1 className="text-xl text-[#d8cdba] stroke-red-800 ">
                Wishlist
              </h1>
            </div>

            <div className="flex flex-col gap-10 p-20 w-full">
              {products.map((el, index) => (
                <WishlistCard key={index} props={el} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
