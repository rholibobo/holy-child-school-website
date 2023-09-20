"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import styles from "./page.module.css";
import { FcExpand, FcCollapse } from "react-icons/fc";
import Header from "../components/Header/Header";
import imageUrl from "./data";

export default function Gallery() {
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
      <section>
        {imageUrl.map((image, index) => {
          <div className="grid grid-cols-2 gap-5">
            <Image key={index} src={image} alt={image + index} />
          </div>;
        })}
      </section>
    </main>
  );
}
