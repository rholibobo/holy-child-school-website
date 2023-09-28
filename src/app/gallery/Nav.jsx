"use client";
import { motion } from "framer-motion";

const Nav = ({ onclick, activeBtn }) => {
  return (
    <nav className="mx-auto md:mx-0 flex w-11/12 md:ml-4 md:w-1/4 justify-between items-center p-2 mt-2">
      <motion.button
        className={`md:mr-4 lg:mr-0 border ${
          activeBtn === "student"
            ? "bg-blue-700 text-white"
            : "bg-white text-blue-700"
        } font-medium rounded-lg text-[16px] px-4 py-2.5 text-center`}
        onClick={() => onclick("student")}
      >
        Students
      </motion.button>
      <motion.button
        className={`border ${
          activeBtn === "staff"
            ? "bg-blue-700 text-white"
            : "bg-white text-blue-700"
        } font-medium rounded-lg text-[16px] px-4 py-2.5 text-center`}
        onClick={() => onclick("staff")}
      >
        Teachers
      </motion.button>
    </nav>
  );
};

export default Nav;
