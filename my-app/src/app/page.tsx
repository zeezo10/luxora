/* eslint-disable */
import Image from "next/image";
import Card from "./component/Card";
import Link from "next/link";
// import { ProductType } from "../db/models/products";
import promo from "../../public/noun-discount-4915570.png"
import logo from "../../public/Picsart_22-02-09_00-08-25-791.png";
export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'


export type ProductType = {
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

export default async function Home() {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL +"/api/products");

  const products = await res.json();

  return (
    <div className="flex flex-col">
      <div className="h-screen bg-lime-900 flex items-center  pt-20">
        {/* ----- photo  */}
        <div className="w-1/3 flex justify-center shadow-2xl  m-10 bg-blue rounded-xl">
          <div className="relative card bg-base-100 w-full h-full shadow-xl rounded-xl">
            <img
              src={products[0].images[0]}
              alt="Shoes"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col-reverse p-4 rounded-xl">
              <div className="flex flex-col">
              <Image className="pl-20 ml-[1000px] " src={promo} alt="Logo"  />
                <h2 className="text-white text-xl font-bold">ShutUp sjdjjd </h2>
                <p className="text-white truncate">
                  Hello Evrery oneddwdwdwddwwd d
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ----- photo ---    */}
        <div className=" w-2/3 h-screen">
          <div className="h-1/2 pt-10 w-full flex justify-center items-center">
            <h1 className="text-7xl text-white">
              Elevate Your Style with Our New Arrivals
            </h1>
          </div>
          <div className="h-1/2 space-y-6 p-10">
            <h1 className="text-5xl text-white">"Quality You Can Trust"</h1>
            <Link
              href={""}
              className="bg-white backdrop-blur-sm h-14 w-36  rounded-full flex justify-center items-center text-black font-bold hover:bg-black hover:text-white"
            >
              see more
            </Link>
          </div>
        </div>
      </div>

      <div className="h-screen pt-10 flex items-center justify-center">
        <div className="flex flex-wrap justify-center gap-5 m-20">
          {products.slice(0, 8).map((el: ProductType) => (
            <Card  key={el._id.toString()} product={el} />
          ))}
        </div>
      </div>
      <div className="h-screen flex justify-center pt-20">
        <Link className="btn shadow-xl" href={"/products"}>
          see more
        </Link>
      </div>

<footer className=" w-screen shadow bg-black text-white m-4 ">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <a
        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
      >
        <Image className="h-10 w-12" src={logo} alt="Logo" />
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
