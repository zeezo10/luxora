/* eslint-disable */
"use client";

import Link from "next/link";
import AddWishlist from "./AddWishlist";
import { ObjectId } from "mongodb";
import { toRupiah } from "../../helper/toRupiah";
// import AddWishlist from "./addWishlist";

type Props = {
  product: {
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
    <Link href={``}>
      <div className="w-[400px] h-[500px] bg-white hover:bg-lime-100 shadow-xl font-sans font-thin">
        {/* <AddWishlist/> */}
        {/* see */}
        <div
          style={{
            backgroundImage: `url(${props.product.thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-full w-full overflow-hidden bg-[#d5c5a1]"
        >
          
          <div className="h-full w-full flex flex-col-reverse opacity-0 hover:opacity-100 backdrop-blur-sm translate-y-20 hover:translate-y-0 transition-transform duration-300">
            <div className="h-12 w-full bg-[#d8cdba] flex justify-center items-center">
              <h1 className="text-md text-white">VIEW</h1>
            </div>
          </div>

          {/* <img
          src={`https://zohobrand.com/cdn/shop/files/29_640x640_crop_center.jpg?v=1719774723`}
          className="h-[500px] w-full  bg-cover rounded-md"
          /> */}
        </div>
        <div className="h-20 flex flex-col justify-center ">
          <p className="text-lg text-[#d8cdba]">{props.product.name}</p>
          <p className="text-[#d8cdba] font-thin">
            {toRupiah(props.product.price)}
          </p>
        </div>
      </div>
    </Link>
  );
}
