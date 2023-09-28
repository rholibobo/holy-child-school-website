"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";

import "swiper/css";
import { useState } from "react";
import data from "./data";
import Nav from "./nav";
import { motion } from "framer-motion";
import "animate.css";
import Modal from "./Modal";

export default function Gallery() {
  const [value, setValue] = useState("student");
  const [clickedImage, setClickedImage] = useState();
  const [currentIndex, setcurrentIndex] = useState();

  const handleClick = (imageSrc, index) => {
    setcurrentIndex(index);
    setClickedImage(imageSrc); //contains the src link to the clicked image
  };

  const handleCickRightNavigation = () => {
    const totalLength = data[value].length;
    if (currentIndex + 1 >= totalLength) {
      //if the index is greater than the number of images we have in the array of images, set the current index to be the index of the first image on the array
      setcurrentIndex(0);
      const newUrl = data[value][0];
      setClickedImage(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data[value].filter((item) => {
      return data[value].indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImage(newItem);
    setcurrentIndex(newIndex);
  };

  const updateState = (val) => {
    setValue(val);
    console.log(val);
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
      <section className="py-3 px-4 lg:px-8 bg-[#e7e7eb]">
        <Nav onclick={updateState} activeBtn = {value} />
        <motion.div
          layout
          transition={{ duration: 0.3 }}
          className="mt-2 grid sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white shadow-md p-2"
        >
          {data[value].map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="rounded-sm hover:scale-90 cursor-pointer transition-all ease-in-out"
              onClick={() => handleClick(image, index)}
            />
          ))}
        </motion.div>
        <Modal
          clickedImg={clickedImage}
          handleCickRightNavigation={handleCickRightNavigation}
          setClickedImg={setClickedImage}
        />
      </section>

      <Footer />
    </main>
  );
}
