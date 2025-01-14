"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import cards from "../../data/data.json";
import "../styles.css"; // Assuming the custom styles are in this file
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Include Pagination module

export default function Slider_2() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0); // Assuming we want to slide to the first slide initially
    }
  }, []);

  return (
    <Swiper
    
      centeredSlides={true}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
    }} // Include Pagination module
    modules={[Autoplay, Pagination, Navigation]} // Assuming the custom styles are applied to this class
      className="mySwiper"
    >
      {cards.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="rounded-md overflow-hidden items-center"
        >
          <div
            className={`card w-[400px] h-[500px] overflow-hidden rounded-md flex flex-col items-center  justify-center transition-transform duration-500 shadow-xl`}
          >

            <div className="bg-gradient-to-t from-black opacity-50 absolute h-full w-full"></div>
            <div>
              <img src={slide.photo} alt="" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
