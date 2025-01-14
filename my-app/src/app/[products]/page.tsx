/* eslint-disable */
"use client";
import Card from "@/app/component/Card";
import SearchBar from "@/app/component/SearchBar";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ProductType } from "../page";
import baner2 from "../../assets/model/KocnKoog.webp"

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
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(2);
  const [hasMore, setHasMore] = useState<boolean>(true);

  async function fetchdata() {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL +
        `/api/products?page=${page}&limit=10&query=${query}`
    );

    const allProducts = await res.json();

    setProducts((prevProducts) => [...prevProducts, ...allProducts]);
    setHasMore(allProducts.length > 0);
  }

  useEffect(() => {
    setProducts([]);
    setPage(1);
    setHasMore(true);
    fetchdata();
  }, [query]);

  useEffect(() => {
    fetchdata();
  }, [page]);

  return (
    <div className=" flex flex-col items-center bg-[#1d1c18] font-sans ">

<div className="h-96 w-full border-b-[1px] border-[#504e46] px-20 flex items-center justify-center">
            <div className="flex-1 h-3/4 overflow-hidden flex flex-col justify-center items-center space-y-5"
              style={{ backgroundImage: `url(${baner2.src})`, backgroundSize: 'cover' }}

            >
           
            <div className="flex items-center justify-center">
              <h1 className="text-6xl text-center flex flex-col text-[#d8cdba] bg-black p-5 bg-opacity-50"><span>MADE WITH LOVE</span> <span>MEN&WOMAN HOODIES</span></h1>
            </div>
           
            </div>
        </div>

      <div className="h-40 flex w-full px-20 justify-between items-center gap-10">
        <div className=" h-10 flex items-center">
          <h2 className="text-3xl text-[#d8cdba]">What are you looking for? </h2>
        </div>
          <div className="border-[1px] border-[#504e46] flex-1"></div>
        <div className="pt-2 relative  text-gray-600 ">
          <input
            className="shadow-md border-2 bg-white h-10 px-5 pr-16  text-sm focus:outline-none w-[400px] flex items-center"
            type="search"
            name="search"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
       
        </div>
      </div>
      <InfiniteScroll
        dataLength={products.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        endMessage={<p className="text-center m-10 text-4xl">THE END</p>}
        className="min-h-screen"
      >
        <div className="flex flex-wrap justify-center gap-2 overflow-hidden">
          {products.map((el, index) => (
            <div className="mb-20">
              <Card product={el} key={el._id.toString()}  />
            </div>
          ))}
        </div>
      </InfiniteScroll>

      <footer className="w-full  shadow bg-black text-white m-4 ">
        <div className="w-full max--xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
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
            <a href="" className="hover:underline">
              Luxora™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
