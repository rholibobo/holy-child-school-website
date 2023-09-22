"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header/Header";
import imageUrls from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import imageUrl from "./data";

export default function Gallery() {
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // const updateScreenWidth = () => {
  //   setScreenWidth(window.innerWidth);
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", updateScreenWidth);
  //   return () => {
  //     window.removeEventListener("resize", updateScreenWidth);
  //   };
  // }, []);
  return (
    <main>
      <div className={styles.navbar}>
        <Header />
      </div>
      <div className={styles.section1}>
        <div className="flex justify-center items-center p-5 h-full flex-col text-center text-white w-full">
          <h1 className="font-bold uppercase text-[50px] mb-2">
            Gallery Section
          </h1>
          <p className="w-full md:w-1/2">
            Welcome to our school&apos;s Gallery section, where we proudly
            showcase the vibrant and creative spirit that defines our
            educational community. Our gallery serves as a window into the rich
            tapestry of experiences, achievements, and talents that make our
            school special. Here, you will find a captivating collection of
            images that capture the essence of our school life.
          </p>
        </div>
      </div>
      <section className="p-3 my-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imageUrls.map((image, index) => (
            <div key={index} className="w-full">
              <Image src={image} alt={image + index} className="rounded-md" />
            </div>
          ))}
        </div>
        <button>View More</button>
      </section>
    </main>
  );
}
