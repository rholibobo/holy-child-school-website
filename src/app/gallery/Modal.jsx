"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { AiFillCloseCircle } from 'react-icons/ai';

const Modal = (props) => {
  const { clickedImg, handleRightNavigation, setClickedImg, handleLeftNavigation } = props;

  const handleClick = () => {
    setClickedImg();
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <>
      {clickedImg && (
        <motion.div
          className="fixed top-0 left-0 w-full p-2 md:p-0 h-full flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm bg-opacity-50"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="bg-white p-2 rounded-lg text-center w-full sm:w-[65%] md:w-[75%] lg:w-[50%]">
            <Image src={clickedImg} className="dismiss" alt="Bigger Image" />
            <motion.span
              className="dismiss absolute top-8 md:top-5 lg:top-4 right-6 rounded-full text-[2.5rem] md:text-[2.5rem] cursor-pointer hover:bg-gray-300 transition-colors duration-300"
              onClick={handleClick}
              whileHover={{ scale: 1.1 }}
            >
              <AiFillCloseCircle className="dismiss" />
            </motion.span>
          </div>
          <motion.span
            className="p-2 text-[2.5rem] md:text-[3rem] right-2 bottom-[13rem] cursor-pointer absolute md:right-6 hover:bg-gray-300 transition-colors duration-300"
            onClick={handleRightNavigation}
            whileHover={{ scale: 1.1 }}
          >
            <FaArrowRightLong />
          </motion.span>
          <motion.span
            className="p-2 text-[2.5rem] md:text-[3rem] left-2 bottom-[13rem] cursor-pointer absolute md:left-6 hover:bg-gray-300 transition-colors duration-300"
            onClick={handleLeftNavigation}
            whileHover={{ scale: 1.1 }}
          >
            <FaArrowLeftLong />
          </motion.span>
        </motion.div>
      )}
    </>
  );
};

export default Modal;
