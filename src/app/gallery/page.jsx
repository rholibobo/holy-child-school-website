"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import styles from "./page.module.css";
import { FcExpand, FcCollapse } from "react-icons/fc";
import Header from "../components/Header/Header";

export default function Gallery() {
  

  return (
    <main>
      <div className={styles.navbar}>
          <Header />
      </div>
      <div className={styles.section1}></div>
    </main>
  );
}
