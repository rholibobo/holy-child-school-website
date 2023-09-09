import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import blogData from "../blogPosts/blogData.json";
import WalkVid from "../gifs/walking-video/walk-vid";

const RecentsPosts = () => {
  const firstThreePosts = blogData.slice(0, 3);

  return (
    <aside className={styles.aside}>
      <div className={styles.tagsContainer}>
        <h2 className={styles.recentPostsHeader}>Tags</h2>
        <div className={styles.tags}>
          <p>Education</p>
          <p>Explore</p>
          <p>Unity</p>
          <p>Awareness</p>
        </div>
      </div>
      <div className={styles.recentPostsContainer}>
        <h1 className={styles.recentPostsHeader}>Recent Posts</h1>
        <div className={styles.recents}>
          {firstThreePosts.map((post) => (
            <Link
              href={`/blog/${post.id}`}
              key={post.id}
              className={styles.recentBlog}
            >
              <Image
                src={post.imagePath}
                alt={post.title}
                width={300}
                height={300}
                className={styles.recentImage}
              />
              <div className={styles.recentText}>
                <h2>{post.title}</h2>
                <p>Author: {post.author}</p>
                <p>{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.walkContainer}>
        <WalkVid />
      </div>
    </aside>
  );
};

export default RecentsPosts;
