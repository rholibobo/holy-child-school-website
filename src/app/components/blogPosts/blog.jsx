import React, { useState } from "react";
import styles from "./blog.module.css";

import blogPostsData from "./blogData.json";
import Link from "next/link";
import Image from "next/image";
import Seesaw from "../gifs/seeSaw/seesaw";
import Earth from "../gifs/earth/earth";

const BlogPosts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Calculate the starting and ending indices for the current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  // Filter the blog posts based on the current page
  const currentPosts = blogPostsData.slice(startIndex, endIndex);

  // Total number of pages
  const totalPages = Math.ceil(blogPostsData.length / postsPerPage);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
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
          {currentPosts.map((post) => (
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
                <Link href={`/blog/${post.post_id}`} className={styles.seeMore}>
                  see more
                </Link>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.rainbow}></div>
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? styles.activePage : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className={styles.earthContainer}>
          <Earth />
        </div>
        <div className={styles.rainbow}></div>
      </section>
    </main>
  );
};

export default BlogPosts;
