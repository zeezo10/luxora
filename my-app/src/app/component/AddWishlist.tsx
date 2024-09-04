'use client'

import { cookies } from "next/headers";
import { FormEvent, useEffect, useState } from "react";
export const dynamic = "force-dynamic";


type AddWishlistProps = {
  product_Id: string;
};

export default function AddWishlist({product_Id} : AddWishlistProps) {

    const productId = product_Id
    console.log(productId);
    

    const [userId, setUser_id] = useState("")

    

    useEffect(() => {
        const getUserId = () => {
            const cookieValue = document.cookie
                .split('; ')
                .find(row => row.startsWith('_id='))
                ?.split('=')[1];
            
            setUser_id(cookieValue || "");
        }

        getUserId();
    },[]);


    
    const handleAddWishlst = async  (e:  React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();

        const result = await fetch(process.env.NEXT_PUBLIC_BASE_URL +"/api/wishlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({userId, productId})
          });      
          
          let res = await result.json()
         
    }

    return (
      <button className="btn btn-circle"
      onClick={handleAddWishlst}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 21C12 21 3 13.6429 3 7.5C3 4.46243 5.46243 2 8.5 2C10.5469 2 12 3.45703 12 5.5C12 3.45703 13.4531 2 15.5 2C18.5376 2 21 4.46243 21 7.5C21 13.6429 12 21 12 21Z" />
        </svg>
      </button>
    );
  }
  