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

  const updateState = (val) => {
    setValue(val);
    console.log(val);
  };

  const handleRightNavigation = () => {
    const totalLength = data[value].length;
    const newIndex = (currentIndex + 1) % totalLength;
    const newItem = data[value][newIndex];
    setClickedImage(newItem);
    setcurrentIndex(newIndex);
  };
  /*
 `totalLength` represents the total number of items in the array of images.

`handleRightNavigation`
    - `currentIndex + 1`: This calculates the next index by adding 1 to the current index.
     - `% totalLength`: The modulo operator is used to ensure that the index remains within the valid range (0 to `totalLength - 1`).
     - If the result of `(currentIndex + 1)` is greater than or equal to `totalLength`, the modulo operation wraps it back to 0, effectively creating a circular navigation. This means that if you reach the end of the array, it wraps around to the beginning.

`handleLeftNavigation`
     - `currentIndex - 1`: This calculates the previous index by subtracting 1 from the current index.
     - `+ totalLength`: This is added to ensure that the result is a non-negative number. When `currentIndex` is 0, subtracting 1 would make it -1. Adding `totalLength` ensures it becomes `totalLength - 1`, which is the last valid index.
     - `% totalLength`: Similar to the right navigation, the modulo operator ensures the index stays within the valid range.
     - If the result of `(currentIndex - 1 + totalLength)` is negative (e.g., when at the beginning of the array), the modulo operation wraps it to the last index, creating circular navigation.
 While the modulo operator is typically used to calculate remainders, in this context, it's used to create a looping effect when navigating through an array, ensuring that the index always stays within the valid range
  */
  const handleLeftNavigation = () => {
    const totalLength = data[value].length;
    const newIndex = (currentIndex - 1 + totalLength) % totalLength;
    const newItem = data[value][newIndex];
    setClickedImage(newItem);
    setcurrentIndex(newIndex);
  };

  return (
    <main>
      <div className={styles.navbar}>
        <Header />
      </div>
      <div className={styles.section1}>
        <div className="flex justify-center items-start p-5 h-full flex-col  text-white w-full bg-black bg-opacity-50">
          <h1 className="font-bold uppercase text-[35px] mb-2 animate__backInLeft animate__slow">
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
      <section className="py-3 px-4 lg:px-8 bg-[#e7e7eb]">
        <Nav onclick={updateState} activeBtn={value} />
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
        <div>
          <button className="border-black border mx-auto my-4 p-2 text-center">
            Load More
          </button>
        </div>
        <Modal
          clickedImg={clickedImage}
          handleRightNavigation={handleRightNavigation}
          setClickedImg={setClickedImage}
          handleLeftNavigation={handleLeftNavigation}
        />
      </section>

      <Footer />
    </main>
  );
}
