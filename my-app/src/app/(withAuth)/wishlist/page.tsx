/* eslint-disable */
"use client";

import Card from "@/app/component/Card";
import WishlistCard from "@/app/component/WishlistCard";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'


export default function Wishlist() {
  const [user_id, setUser_id] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const res = await fetch( process.env.NEXT_PUBLIC_BASE_URL +"/api/wishlist", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      const allProducts = await res.json();

      setProducts(allProducts);
    }
    fetchdata();
  }, [user_id]);

  return (
    <main className="bg-gray-300 w-screen">
      <div className=" w-screen">
        <div className=" pt-28"></div>
        <div className="w-screen flex justify-between">

          <div className="fixed w-52">
            <h1 className="text-9xl m-10 font-bold text-white">My Wishlist</h1>
            <h1 className="m-10 font-bold text-white text-4xl">sometimes you want what you can't get    T_T</h1>
          </div>

          <div className="flex flex-wrap gap-10 ml-[500px]  bg-lime-200 p-20 mr-20 w-full mt-40 justify-center mb-36">
            {products.map((el , index) => (
              <WishlistCard key={index} props={el} />
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}


