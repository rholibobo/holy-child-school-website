"use client";

import React from "react";
import styles from "./page.module.css";

import Header from "../components/Header/Header";
import GifBackgroundSection from "../components/gifs/writing-video/vid";
import BusGif from "../components/gifs/bus/bus";
import BlogPosts from "../components/blogPosts/blog";

const page = () => {
  return (
    <section className={styles.container}>
      {/* ////////// SECTION 1 //////////// */}
      <div className={styles.section1}>
        <div className={styles.navbar}>
          <Header />
        </div>
        <section className={styles.headerContainer}>
          <div className={styles.blogHeader}>
            <h1>Welcome to Holychild's Blog</h1>
            <h2>Beyond the Books: Unveiling Our Blog</h2>
          </div>
          <div className={styles.vidContainer}>
            <GifBackgroundSection />
          </div>
          <div className={styles.busContainer}>
            <BusGif />
          </div>
        </section>
      </div>
      <BlogPosts />
    </section>
  );
};

export default page;
