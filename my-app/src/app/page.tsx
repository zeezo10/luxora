/* eslint-disable */
import Image from "next/image";
import Card from "./component/Card";
import Link from "next/link";
// import { ProductType } from "../db/models/products";
import promo from "../../public/noun-discount-4915570.png";
import logo from "../../public/Picsart_22-02-09_00-08-25-791.png";
export const dynamic = "force-dynamic";
import model from "../assets/model/IMG_3597_4000x3000_crop_center.webp"
import NavBar from "./component/NavBar";
import arrow from '../assets/icons/8666713_arrow_up_right_icon.svg'
// import Slider from "../app/component/Slider_2"
import Slider_2 from "../app/component/Slider_2";
import baner2 from "../assets/model/KocnKoog.webp"
import './styles/fonts.css'
import { useEffect } from "react";

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
  const res = await fetch(   process.env.NEXT_PUBLIC_BASE_URL +
    `/api/products?page=2&limit=10&query=`
);

  const products = await res.json();



  return (
    <div className="bg-[#1d1c18] ">

      <div 
      style={{ backgroundImage: `url(${model.src})`, backgroundSize: 'cover' }}
      className="flex flex-col h-screen">

        <div className="h-full w-full bg-gradient-to-t from-black absolute opacity-50"></div>
        <div className="flex flex-col flex-1 z-10">
        <NavBar/>
          <div className="flex h-full">
          
          <div className=" w-2/3  p-20 flex flex-col justify-between font-sans">
          <p className="text-white"><span className="text-[#c06f52]">A</span> B C D <span className="text-[#c06f52]">E</span> F G H I J K <span className="text-[#c06f52]">L</span> M N <span className="text-[#c06f52]">O</span> P Q <span className="text-[#c06f52]">R</span> S T U V W <span className="text-[#c06f52]">X</span> Y Z</p>
            <div className="flex-1 ">
              <h1 className="text-5xl text-white  flex flex-col w-1/2 font-bold">
                <span>Elevate Your Style </span ><span className="self-end">with Our -</span> <span>New Arrivals.</span>
              </h1>
            </div>
            <div className="flex flex-col flex-1 justify-center space-y-10">
              <h1 className="text-3xl text-white font-light">
                "Quality You Can Trust"
              </h1>
              <div className="flex gap-2" >
                <div 
                className="h-10 w-10 rounded-full bg-[#c06f52]"
                ></div>
                <Link
                  href={""}
                  className="h-10 w-36 flex justify-center items-center border-2 border-white text-white backdrop-blur-sm hover:w-40 transition-all  hover:text-white"
                >
                  
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
          {/* <div className=" absolute w-full ">
            
          <img src={model.src} alt="" className=" mix-blend-darken w-full  absolute z-40"  />

          </div> */}

        <div className="w-1/3 z-40" >

          <Slider_2/>
        </div>



          {/* ----- photo  */}
          {/* <div className="w-1/3 flex justify-center shadow-2xl  m-10 bg-blue rounded-xl">
            <div className="relative card bg-base-100 w-full h-full shadow-xl rounded-xl">
              <img
                src={products[0].images[0]}
                alt="Shoes"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col-reverse p-4 rounded-xl">
                <div className="flex flex-col">
                  <h2 className="text-white text-xl font-bold">
                    ShutUp sjdjjd{" "}
                  </h2>
                  <p className="text-white truncate">
                    Hello Evrery oneddwdwdwddwwd d
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          </div>
          {/* ----- photo ---    */}
        </div>
      </div>



            <div className="h-72 border-b-[1px] mx-20 border-[#504e46] flex justify-center items-center">
              <h1 className="text-5xl text-[#d8cdba] stroke-red-800 font-semibold">"Because every detail matters."</h1>
            </div>

            


        <div className="w-full pb-40 border-b-[1px]  border-[#504e46]">

          <div className="h-40 flex justify-between px-36">
            <div className="flex-1">
              <h2 className="flex flex-col text-4xl font-light h-full justify-center text-[#d8cdba]">
                <span>FEATURED</span>
                <span className="ml-16">OUTFITS -</span>
              </h2>
            </div>

            <div className="flex-1 flex flex-row-reverse items-center gap-5">
      <div className="text-[#d8cdba]">SEE MORE</div>
            <button className="bg-[#d8cdba] hover:bg-[#c06f52] hover:border-4 hover:border-[#d8cdba] h-16 w-16 rounded-full flex justify-center items-center hover:w-20 hover:h-20 transition-all  duration-500  ">
        <Link className="" href={"/products"}>

            <img src={arrow.src} alt="" className="h-10 w-10" />
        </Link>
      </button>

            </div>

          </div>

      <div className="flex items-center px-36">
        <div className="flex gap-1 justify-center w-full ">
          {products.slice(0, 3).map((el: ProductType) => (
            <Card  key={el._id.toString()} product={el} />
          ))}
        </div>
      </div>

        </div>


        <div className="h-screen  border-b-[1px]  border-[#504e46] px-20 flex items-center justify-center">
            <div className="flex-1 h-3/4 overflow-hidden flex flex-col justify-center items-center space-y-5"
              style={{ backgroundImage: `url(${baner2.src})`, backgroundSize: 'cover' }}

            >
           
            <div className="flex items-center justify-center">
              <h1 className="text-6xl text-center flex flex-col text-[#d8cdba] bg-black p-5 bg-opacity-50"><span>MADE WITH LOVE</span> <span>MEN&WOMAN HOODIES</span></h1>
            </div>
            <div>

            <Link
                  href={""}
                  className="h-14 w-36 text-md flex justify-center items-center border-[1px] border-white text-white backdrop-blur-sm hover:w-40 transition-all  hover:text-white"
                >
                  
                  SHOP NOW
                </Link>

            </div>
            </div>
        </div>


        <div className="h-[500px] bg-[#21201c] flex ">

          <div className="flex-1 gap-4 p-10 flex">

          <div className="w-40 space-y-3">
            <h1 className="text-xl text-[#d8cdba]">Navigation</h1>
            <div className="text-[#d8cdba] font-thin text-lg">
              <p className=" cursor-pointer hover:text-white underline">HOME</p>
              <p className=" cursor-pointer hover:text-white underline">ABOUT US</p>
              <p className=" cursor-pointer hover:text-white underline">SHIPING POLICY</p>
              <p className=" cursor-pointer hover:text-white underline">REFUND POLICY</p>
             
            </div>
          </div>
          
          <div className="w-40 space-y-3">
            <h1 className="text-xl text-[#d8cdba]">Catalog</h1>
            <div className="text-[#d8cdba] font-thin text-lg">
              <p className=" cursor-pointer hover:text-white underline">NEW ARRIVALS</p>
              <p className=" cursor-pointer hover:text-white underline">BEST SELLING</p>
              <p className=" cursor-pointer hover:text-white underline">HOODIE</p>
              <p className=" cursor-pointer hover:text-white underline">T-SHIRTS</p>
              <p className=" cursor-pointer hover:text-white underline">SHORTS</p>
              <p className=" cursor-pointer hover:text-white underline">TROUSERS</p>
              <p className=" cursor-pointer hover:text-white underline">ACCESSORIES</p>
             
            </div>
          </div>
          
        

          </div>
          
          <div className="flex-1  p-10 flex flex-col h-full space-y-3">
            <div>

            <h1 className="text-7xl  text-[#d8cdba] font-sans font-bold">GET IN <span className="text-black ">TOUCH</span></h1>
            </div>

          <div className="flex flex-col space-y-2 text-[#d8cdba]">

            <div className="h-20 w-full flex border-t-[0.5px]">
              <div className="h-full w-16 p-2 font-thin text-xs">01</div>           
              <div className="p-2 space-y-1">
                <div className="font-thin font-custom3">phone</div>
               
                <div>+99 000 000 00</div>
                </div>           
            </div>

            <div className="h-20 w-full flex border-t-[0.5px]">
              <div className="h-full w-16 p-2 font-thin font-custom3 text-xs">02</div>           
              <div className="p-2 space-y-1">
                <div className="font-thin font-custom3">Email</div>
                <div>notrealemail@gmail.com</div>
                </div>           
            </div>

            <div className="h-20 w-full flex border-t-[0.5px]">
              <div className="h-full w-16 p-2 font-thin font-custom3 text-xs">03</div>           
              <div className="p-2 space-y-1">
                <div className="font-thin font-custom3">Address</div>
                <div>somewhere in earth</div>
                </div>           
            </div>
          

            <div className="h-20 w-full flex border-t-[0.5px]">
              <div className="h-full w-16 p-2 font-thin font-custom3 text-xs">04</div>           
              <div className="p-2 space-y-1">
                <div className="font-thin font-custom3">Socials</div>
                <div></div>
                </div>           
            </div>
          


          </div>
          </div>

        </div>

      
     
      <footer className="  shadow bg-black text-white  ">
        <div className="w-full mx-auto p-4 md:py-8">
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
