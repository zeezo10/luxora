
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
    <div className="border-t-[1px] border-b-[1px] w-full flex h-36 justify-between items-center p-5">
      <div className="bg-slate-500 h-full w-20"
      
      style={{ backgroundImage: `url(${wishProduct.productDetails.thumbnail})`, backgroundSize: 'cover' }}
      >
        {/* <img className="h-full bg-cover" src={`${wishProduct.productDetails.thumbnail}`} alt="" /> */}
      </div>

    
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {wishProduct.productDetails.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">
          {wishProduct.productDetails._id}
        </p>
       
        <button
          className="inline-flex h-1/2 items-center text-sm px-5 font-medium text-center bg-red-400 text-white  rounded-lg"
          onClick={(e) => {
            e.preventDefault()
            handleDelWishlst(wishProduct._id)
        }}
        >
          Delete
       
        </button>
      </div>
  );
}
