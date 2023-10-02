"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectFade,
  Autoplay,
  EffectCube,
  EffectCards,
  Grid,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

import styles from "./teach.module.css";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

export function Blob({ image, name, area_of_discipline }) {
  return (
    <div className="flex flex-col  justify-center items-center">
      <div
        className={`rounded-md bg-blue-500 border-s-4 flex justify-center items-center  w-[75%]  overflow-hidden `}
      >
        <Image
          src={image}
          className="w-full"
          width={100}
          height={100}
          alt="teacher"
        />
      </div>
      <p className="text-lg font-semibold">{name}</p>
      <p className=" text-gray-500 font-medium text-base">
        {area_of_discipline}
      </p>
    </div>
  );
}

// Quote starts here

const quotes = [
  {
    id: 1,
    quote: "Education is not preparation for life; education is life itself.",
    author: "John Dewey",
  },
  {
    id: 2,
    quote:
      "What sculpture is to a block of marble, education is to a human soul.",
    author: "Joseph Addison",
  },

  {
    id: 3,
    quote:
      "Education breeds confidence. Confidence breeds hope. Hope breeds peace.",
    author: "Confucius",
  },
  {
    id: 4,
    quote:
      "Better than a thousand days of diligent study is one day with a great teacher.",
    author: "Japanese Proverb",
  },
  {
    id: 5,
    quote:
      "A good teacher is like a candle—it consumes itself to light the way for others.",
    author: "Mustafa Kemal Atatürk",
  },
  {
    id: 6,
    quote: "Children must be taught how to think, not what to think.",
    author: "Margaret Mead",
  },
  // {
  //   id: 7,
  //   quote:
  //     "What we want is to see the child in pursuit of knowledge, and not knowledge in pursuit of the child.",
  //   author: "George Bernard Shaw",
  // },
  {
    id: 8,
    quote: "It takes a big heart to help shape little minds.",
    author: "Unknown",
  },
  {
    id: 9,
    quote:
      "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
  },
  {
    id: 10,
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin",
  },
];
export function Quote() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      lazy={true}
      autoplay={{
        delay: 6500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      // navigation={true}
    >
      {quotes.map((quote) => (
        <SwiperSlide>
          <BiSolidQuoteAltLeft className={styles.icon} />

          <BiSolidQuoteAltRight className={styles.icon1} />

          <div className={styles.container} key={quote.id}>
            <p className="text-[#000] text-center text-base font-medium mb-2">
              "{quote.quote}"
            </p>

            <p className="text-[#000] text-base text-center font-bold">{quote.author}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
