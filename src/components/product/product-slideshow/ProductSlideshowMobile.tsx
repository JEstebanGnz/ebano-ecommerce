"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./slideshow.css";

import { Autoplay, FreeMode, Navigation} from "swiper/modules";
import Image from "next/image";

interface Props {
  title: string;
  images: string[];
  className?: string
}

export const ProductSlideshowMobile = ({ title, images, className }: Props) => {

  return (
    <div className = {className}>
      <Swiper
        style={
          {width: '100vw',
            height: '500px'
          }
        }
        pagination
        spaceBetween={10}
        modules={[FreeMode, Navigation, Autoplay ]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              width={600}
              height={500}
              src={`/products/${image}`}
              alt={title}
              className="object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
