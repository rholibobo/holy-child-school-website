"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header/Header";
import { staff } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import imageUrl from "./data";
import Nav from "./nav";

export default function Gallery() {
  const [student, setStudent] = useState(true);

  const updateState = (val) => {
    if (val === "student") {
      setStudent(true);
      console.log(val)
    } else {
      setStudent(false);
      console.log(val)
    }
  };
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
      <Nav onclick={updateState} />
      <section className="p-3 my-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {student
            ? imageUrl.map((image, index) => (
                <div key={index} className="w-full">
                  <Image
                    src={image}
                    alt={image + index}
                    className="rounded-sm"
                  />
                </div>
              ))
            : staff.map((image, index) => (
                <div key={index} className="w-full">
                  <Image
                    src={image}
                    alt={image + index}
                    className="rounded-sm"
                  />
                </div>
              ))}
        </div>
      </section>
    </main>
  );
}
