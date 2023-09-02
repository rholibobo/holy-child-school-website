import React from "react";
import styles from "./page.module.css";

import Header from "../components/Header/Header";
import GifBackgroundSection from "../components/gifs/writing-video/vid";
import BusGif from "../components/gifs/bus/bus";

import blogPostsData from "./blogData.json";
import Link from "next/link";
import Image from "next/image";
import Seesaw from "../components/gifs/seeSaw/seesaw";
import Earth from "../components/gifs/earth/earth";

const page = () => {
  return (
    <section className={styles.container}>
      {/* ////////// SECTION 1 //////////// */}
      <div className={styles.section1}>
        <div className={styles.section_container}>
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
      </div>
      <main className={styles.blogContainer}>
        <section className={styles.blogSection}>
          <div className={styles.seeSawContainer}>
            <div className={styles.latestContainer}>
              <h1 className={styles.latestBlog}>Latest Blogs</h1>
            </div>

            <div className={styles.seeSaw}>
              <Seesaw />
            </div>
          </div>
          <div className={styles.itemsContainer}>
            {blogPostsData.map((post) => (
              <Link
                href={`/blog/${post.post_id}`}
                key={post.id}
                className={styles.item}
              >
                <Image
                  src={post.imagePath}
                  alt={post.title}
                  width={500}
                  height={200}
                />

                <div className={styles.blogtext}>
                  <h2 className={styles.title}>{post.title}</h2>
                  <p className={styles.desc}>{post.description}</p>
                  <div className={styles.author}>
                    <p>Author: {post.author}</p>
                    <p>{post.date}</p>
                  </div>
                  <Link
                    href={`/blog/${post.post_id}`}
                    className={styles.seeMore}
                  >
                    see more
                  </Link>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.earthContainer}>
            <Earth />
          </div>
          <div className={styles.rainbow}></div>
        </section>
      </main>
    </section>
  );
};

export default page;
