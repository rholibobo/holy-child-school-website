"use client";
import { motion } from "framer-motion";

const Nav = ({ onclick }) => {
  return (
    <nav className="mx-auto md:mx-0 flex w-11/12 md:ml-4 md:w-1/4 justify-between items-center p-2 mt-2">
      <motion.button
        whileTap="tap"
        className="md:mr-4 lg:mr-0 bg-blue-700 text-white hover:text-blue-700 border border-blue-700 hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[16px] px-4 py-2.5 text-center"
        onClick={() => onclick("student")}
      >
        Students
      </motion.button>
      <motion.button
        whileTap="tap"
        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[16px] px-4 py-2.5 text-center active:bg-blue-700"
        onClick={() => onclick("staff")}
      >
        Teachers
      </motion.button>
    </nav>
  );
};

export default Nav;
