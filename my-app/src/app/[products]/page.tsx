/* eslint-disable */
"use client";
import Card from "@/app/component/Card";
import SearchBar from "@/app/component/SearchBar";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

type Product = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
};
export default function AllProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState<string>("")
  const [page , setPage] = useState<number>(2)
  const [hasMore , setHasMore] = useState<boolean>(true)
  
  

  async function fetchdata() {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL +`/api/products?page=${page}&limit=10&query=${query}`);

    const allProducts = await res.json();

    setProducts((prevProducts) => [...prevProducts, ...allProducts]);
    setHasMore(allProducts.length > 0)
  }

  useEffect(() => {
    setProducts([])
    setPage(1)
    setHasMore(true)
    fetchdata()
  }, [query]);

  useEffect(() => {

    fetchdata();
  }, [page ]);

  
 

  return (
    <div className=" flex flex-col items-center">
      <div className="bg-lime-950 shadow-xl fixed h-28 w-screen"></div>
<div className="relative bg-black h-96 w-[1300px] mt-32  overflow-hidden shadow-xl">
  <img
    src="https://loremflickr.com/400/400/abstract"
    alt=""
    className="w-full h-full object-cover bg-opacity-90"
  />
  <h1 className="absolute inset-0 flex justify-center items-center text-5xl font-bold text-white z-10" >
    Find What's in your mind
  </h1>
</div>


      <div className="h-40 flex justify-center items-center ">
        <div className=" w-[800px] h-10 flex justify-center items-center">
          <h2 className="text-3xl font-bold" >What are you looking for? </h2>
        </div>
      <div className="pt-2 relative mx-auto text-gray-600 ">
  <input
    className="shadow-md border-2 bg-white h-14 px-5 pr-16 rounded-md text-sm focus:outline-none w-[500px]"
    type="search"
    name="search"
    placeholder="Search"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
  <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
    <svg
      className="text-gray-600 h-4 w-4 fill-current mt-2"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 56.966 56.966"
      xmlSpace="preserve"
      width="512px"
      height="512px"
    >
      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
    </svg>
  </button>
</div>

      </div>
      <InfiniteScroll
        dataLength={products.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        endMessage={
          <p className="text-center m-10 text-4xl">the end</p>
        }
      >

      <div className="flex flex-wrap justify-center gap-2 ">
        {products.map((el , index) => (
          <Card product={el} key={el._id}
           />
        ))}
      </div>
      </InfiniteScroll>

      <footer className=" w-screen shadow bg-black text-white m-4 ">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <a
        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
      >
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Luxora
        </span>
      </a>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2023{" "}
      <a href="https://flowbite.com/" className="hover:underline">
      Luxora™
      </a>
      . All Rights Reserved.
    </span>
  </div>
</footer>


    </div>
  );
}
