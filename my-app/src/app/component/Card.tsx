/* eslint-disable */
"use client";

import Link from "next/link";
import AddWishlist from "./AddWishlist";
import { ObjectId } from "mongodb";
// import AddWishlist from "./addWishlist";

type Props = {
   product : {
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
};

export default function Card(props: Props) {
  

  return (
  

      <Link href={`/products/${props.product.slug}`}>
    <div className="w-80 bg-white rounded-2xl p-2 hover:bg-lime-100  hover:-translate-y-2 transition-all relative shadow-xl ">
       {/* <AddWishlist/> */}
       {/* see */}
      <div className="rounded-xl w-full h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
        <img
          src={`${props.product.images[0]}`}
          className="h-full w-96 bg-cover rounded-md"
        />
      </div>
      <div>
        {props.product.name}
        <h3 className="text-lg font-extrabold text-gray-800"></h3>
        <p className="text-gray-600 text-sm mt-2 truncate">
        {props.product.description}
        </p>
        <h4 className="text-lg text-gray-800 font-bold mt-4">{props.product.price}</h4>
      </div>
    </div>
    </Link>

  );
}
