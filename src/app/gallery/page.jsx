"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header/Header";
import "swiper/css";
import { useState } from "react";
import data from "./data";
import Nav from "./nav";
import { motion } from "framer-motion";
import "animate.css";

export default function Gallery() {
  const [value, setValue] = useState("student");

  const updateState = (val) => {
    setValue(val);
  };
  return (
    <main>
      <div className={styles.navbar}>
        <Header />
      </div>
      <div className={styles.section1}>
        <div className="flex justify-center items-center p-5 h-full flex-col text-center text-white w-full">
          <h11 className="font-bold uppercase text-[50px] mb-2 animate__backInLeft animate__slow">
            Gallery Section
          </h11>
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
        <motion.div
          layout
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {data[value].map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="rounded-sm hover:scale-90 cursor-pointer transition-all ease-in-out"
            />
          ))}
        </motion.div>
      </section>
    </main>
  );
}
