"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import styles from "./page.module.css";
import { FcExpand, FcCollapse } from "react-icons/fc";
import Header from "../components/Header/Header";

export default function Gallery() {
  const [morePictures, setmorePictures] = useState(false);

  const { ref, inView } = useInView();
  const animationCircle = useAnimation();
  const animationCircle2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animationCircle.start({
        x: 100,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.2,
        },
      }),
        animationCircle2.start({
          x: -50,
          transition: {
            type: "spring",
            duration: 5,
            bounce: 0.2,
          },
        });
    }
    if (!inView) {
      animationCircle.start({ x: 0 });
      animationCircle2.start({ x: 0 });
    }
  });

  return (
    <main className='justify-center items-center'>
      <section className='overflow-hidden'>
        <div className={`${styles.section1} after:hidden after:lg:block `}>
        <div className={styles.navbar}>
              <Header />
            </div>
          <div className={styles.section_container}>
            

            <div className='max-width  flex justify-between items-center  mt-[9rem]  '>
              <div>
                <h2 className='tex text-gray-100 text-4xl font-bold'>Gallery </h2>
                <p>Memories live forever in pictures</p>
              </div>
              <Image
                src='/images/DesignImages/gallery.png'
                className='w-80 h-80'
                width={100}
                height={100}
                quality={100}
                alt='red star'
              />
              {/* <span className='text-white'>I consider this temporary</span> */}
            </div>
          </div>
        </div>
      </section>

      <section className='bg bg-gradient-to-b from-white  via-sky-300  to-gray-100 py-10'>
        {/*  */}
        <div className='max-width relative'>
          <div ref={ref} className='space-y-3'>
            <motion.div
              className='h-20 w-20 bg-emerald-300 rounded-[50%] shadow-emerald-300 shadow-sm hover:skew-y-6 transition duration-1000'
              animate={animationCircle}
            ></motion.div>
            <div className='w-0 h-0   border-l-8 border-r-8 border-r-transparent border-l-transparent b border-b-6 border-b-[#1c1464] ' />
            <motion.div
              className='h-20 w-20 bg-emerald-300 rounded-[50%] shadow-emerald-300 shadow-sm'
              animate={animationCircle2}
            ></motion.div>
          </div>

          <div className='h-40 w-40 bg   bg-violet-500 absolute right-16 top-10 shadow-sm shadow-violet-300 hover:skew-x-12 transition duration-1000' />
        </div>
      </section>

      <section className='flex flex-col  relative  overflow-hidden bg-gray-100 '>
        <Image
          src='/images/DesignImages/colored_ring.png'
          className='w-fit absolute left-[90%] lg:left-[95%]  '
          width={100}
          height={100}
          
          aria-hidden='true'
          alt='red star'
        />
        <div className='my-14 before:absolute before:left-1/2 top-1/2'>
          <h2 className='text-center font-bold  text-2xl py-20 mb-7'>
            Our Gallery
          </h2>
          <div className='grid grid-cols-1 lg:grid-cols-4 max-width gap-5'>
            <div className='col-span-2 row-span-2'>
              <Image
                src='/images/Gallery/18341948_1394826867268795_6746496119913966168_n.jpg'
                className='w-fit h-fit rounded-lg hover:scale-105 transition duration-200 '
                width={100}
                height={100}
                alt='red star'
              />
            </div>

            {/* Second Image */}

            <div className='lg:-mt-20'>
              <Image
                src='/images/Gallery/46423704_2073305412754267_3481453017864077312_n.jpg'
                className=' w-full rounded-lg hover:scale-105 transition duration-200'
                width={100}
                height={100}
                alt='red star'
              />
            </div>
            <div className=' rounded-lg'>
              <Image
                src='/images/Gallery/46836767_2082542265163915_9105844298363961344_n-1.jpg'
                className=' w-full rounded-lg hover:scale-105 transition duration-200'
                width={100}
                height={100}
                alt='red star'
              />
            </div>
            <div className=''>
              <Image
                src='/images/Gallery/18341948_1394826867268795_6746496119913966168_n.jpg'
                className=' w-full rounded-lg hover:scale-105 transition duration-200'
                width={100}
                height={100}
                alt='red star'
              />
            </div>
            <div className='-mb-40'>
              <Image
                src='/images/Gallery/18341948_1394826867268795_6746496119913966168_n.jpg'
                className=' w-full rounded-lg hover:scale-105 transition duration-200'
                width={100}
                height={100}
                alt='red star'
              />
            </div>
          </div>
        </div>

        {/* Second */}

        <div
          className={`${
            morePictures ? "block" : "hidden"
          } lg:selection:my-14 lg:py-20`}
        >
          <Image
            src='/images/DesignImages/ballon.png'
            className=' absolute right-[93%] top-[80%] '
            aria-hidden='true'
            width={100}
            height={100}
            alt='red star'
          />
          {/*  */}
          <div className='grid grid-cols-1 grid-rows-4 lg:grid-cols-4  max-width gap-5'>
            <div className=''>
              <Image
                src='/images/Gallery/18341948_1394826867268795_6746496119913966168_n.jpg'
                className='w-full h-full  rounded-lg hover:scale-105 transition duration-200  '
                width={100}
                height={100}
                alt='red star'
              />
            </div>

            {/* Second Image */}

            <div className='lg:-mt-20'>
              <Image
                src='/images/Gallery/46423704_2073305412754267_3481453017864077312_n.jpg'
                className=' w-full rounded-lg hover:scale-105 transition duration-200'
                width={100}
                height={100}
                alt='red star'
              />
            </div>
            <div className=' rounded-lg'>
              <Image
                src='/images/Gallery/26055780_1638970229521123_8997904853880477713_n.jpg'
                className=' w-full rounded-lg hover:scale-105 transition duration-200'
                width={100}
                height={100}
                alt='red star'
              />
            </div>
            <div className=''>
              <Image
                src='/images/Gallery/18341948_1394826867268795_6746496119913966168_n.jpg'
                className=' w-full rounded-lg hover:scale-105 transition duration-200'
                width={100}
                height={100}
                alt='red star'
              />
            </div>
            <div className='-mb-40 col-span-2 row-span-2'>
              <Image
                src='/images/Gallery/18341948_1394826867268795_6746496119913966168_n.jpg'
                className=' w-full rounded-lg hover:scale-105 transition duration-200'
                width={100}
                height={100}
                alt='red star'
              />
            </div>
            <div className=''>
              <Image
                src='/images/Gallery/18341948_1394826867268795_6746496119913966168_n.jpg'
                className=' w-full rounded-lg hover:scale-105 transition duration-200'
                width={100}
                height={100}
                alt='red star'
              />
            </div>
            <div className=''>
              <Image
                src='/images/Gallery/18341948_1394826867268795_6746496119913966168_n.jpg'
                className=' w-full rounded-lg hover:scale-105 transition duration-200'
                width={100}
                height={100}
                alt='red star'
              />
            </div>
            <div className=''>
              <Image
                src='/images/Gallery/18341948_1394826867268795_6746496119913966168_n.jpg'
                className=' w-full rounded-lg hover:scale-105 transition duration-200'
                width={100}
                height={100}
                alt='red star'
              />
            </div>
            <div className=''>
              <Image
                src='/images/Gallery/18341948_1394826867268795_6746496119913966168_n.jpg'
                className=' w-full rounded-lg hover:scale-105 transition duration-200'
                width={100}
                height={100}
                alt='red star'
              />
            </div>
          </div>
        </div>
      </section>
      <div className='flex justify-center items-center my-3'>
        <button
          onClick={() => setmorePictures(!morePictures)}
          className='bg bg-gray-100 rounded-md p-2'
        >
          {morePictures ? (
            <FcCollapse className='text text-4xl transition duration-150' />
          ) : (
            <FcExpand className='text text-4xl transition duration-150' />
          )}
        </button>
      </div>
    </main>
  );
}
