import React from "react";
import styles from "./page.module.css";
import Header from "../Header/Header";

const BlogHero = () => {
  return (
    <div className={styles.section1}>
      <Header />
      <div className={styles.section_container}>
        <div className={styles.blogHeader}>
          <h1>Explore Holychild's Blog</h1>
          <h2>Discover More Beyond the Classroom</h2>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
