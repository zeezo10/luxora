
'use client'
import { ProductType } from "@/db/models/products";
import { WishlistType } from "@/db/models/wishlist";
import { FormEvent } from "react";
export const dynamic = "force-dynamic";

interface ProductDetails {
  _id: string;
  name: string;
  thumbnail: string;
}

interface WishlistCardProps {
  props: {
    _id: string;
    userId: string;
    productId: string;
    productDetails: ProductDetails;  // Add productDetails here
    createdAt?: Date;
    updatedAt?: Date;
  };
}



export default function WishlistCard({props}:WishlistCardProps ) {
  const wishProduct = props ;
    console.log(wishProduct,"<<<<");
    

    const handleDelWishlst = async (_id :string) => {

      const form = {
          _id 
      }

      const response =  await fetch(process.env.NEXT_PUBLIC_BASE_URL +'/api/wishlist', {
          method: 'DELETE',
          body: JSON.stringify(form),
          headers: {
              'Content-Type': 'application/json'
          }
      })

      if (response.ok) {
        window.location.reload();
      } else {
        console.error('Failed to delete item from wishlist');
      }
    };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={`${wishProduct.productDetails.thumbnail}`} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {wishProduct.productDetails.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">
          {wishProduct.productDetails._id}
        </p>
       
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-red-400 text-white  rounded-lg  focus:ring-4 focus:outline-none "
          onClick={(e) => {
            e.preventDefault()
            handleDelWishlst(wishProduct._id)
        }}
        >
          delete
       
        </button>
      </div>
    </div>
  );
}
