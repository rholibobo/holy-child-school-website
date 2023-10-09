"use client";

import React from "react";
import styles from "./page.module.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import GifBackgroundSection from "../components/gifs/writing-video/vid";
import BlogPosts from "../components/blogPosts/blog";

const page = () => {
  return (
    <section className={styles.container}>
      <div className={styles.navbar}>
        <Header />
      </div>
      {/* ////////// SECTION 1 //////////// */}
      <div className={styles.section1}>
        <div className={styles.headerContainer}>
          <div className={styles.blogHeader}>
            <h1>Explore Holychild's Blog</h1>
            <h2>Discover More Beyond the Classroom</h2>
            <div className={styles.vidContainer}>
              <GifBackgroundSection />
            </div>
          </div>
        </div>
      </div>
      <BlogPosts />

      <Footer />
    </section>
  );
};

export default page;
