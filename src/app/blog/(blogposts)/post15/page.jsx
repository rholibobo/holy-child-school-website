import React from "react";
import styles from "./page.module.css";

import blogData from "../../../components/blogPosts/blogData.json";
import Link from "next/link";
import Image from "next/image";
import { StyleTwoTone } from "@mui/icons-material";

const page = () => {
  const firstThreePosts = blogData.slice(0, 3);

  const postIdToFetch = 1;
  const desiredPost = blogData.find((post) => post.id === postIdToFetch);

  return (
    <main className={styles.main}>
      <section className={styles.blogPost}>
        <article>
          <h1 className={styles.blogTitle}>{desiredPost.title}</h1>
          <div className={styles.metaContainer}>
            <p>
              Author: <span>{desiredPost.author}</span>
            </p>
            <p>
              Date: <span>{desiredPost.date}</span>
            </p>
          </div>
          <Image
            src={desiredPost.imagePath}
            alt={desiredPost.title}
            width={800}
            height={800}
            className={styles.mainImage}
          />
          <p className={styles.blogContent}>
            In the vast tapestry of history, certain moments etch themselves
            into the collective memory of a nation, serving as poignant
            reminders of the power of unity, resilience, and the pursuit of
            justice. The #EndSARS protest of October 2020 stands as a testament
            to the unwavering determination of Nigerian youths to demand change
            and hold their leaders accountable. As we reflect on the impact of
            this movement, we are reminded of the vital role that education and
            awareness play in shaping the future.
            <br />
            <br />
            Picture a 9-year-old child in 2020, absorbing the world around them
            through curious eyes. Little did this child know that the events
            unfolding before them during the #EndSARS protest would leave an
            indelible mark on their consciousness. Fast forward to the future,
            this grown individual would recount the stories of the sacrifices
            and bravery of Nigerian youths who dared to challenge systemic
            injustice. Why? Because they were taught the value of paying
            attention to the news – to be active participants in the shaping of
            their nation's narrative.
            <br />
            <br />
            The significance of staying informed cannot be overstated. In a
            world inundated with information, distinguishing fact from fiction
            is paramount. The young child's parents or guardians recognized this
            and instilled the habit of reading newspapers and seeking reliable
            sources of information. This seemingly simple act planted the seeds
            of awareness that would later germinate into a profound
            understanding of the complexities of social issues.
            <br />
            <br />
            Education goes beyond textbooks and classrooms. It extends to the
            conversations we have at home, the awareness we cultivate, and the
            values we instill in the next generation. The story of the #EndSARS
            protest teaches us that raising conscientious citizens involves
            fostering a genuine understanding of the world around them. It
            reminds us that history is not just a subject in school; it is a
            living narrative that shapes our present and molds our future.
            <br />
            <br />
            In conclusion, the impact of the #EndSARS protest of 2020 resonates
            beyond the headlines and social media trends. It's a reminder that
            every individual, young or old, has a role to play in shaping the
            course of their nation's history. As we tell the stories of courage
            and sacrifice to future generations, let us also emphasize the
            importance of staying informed, critically analyzing information,
            and actively participating in the betterment of society. After all,
            it's the lessons we learn today that pave the way for a brighter
            tomorrow.
          </p>
        </article>
      </section>
      <aside className={styles.aside}>
        <div className={styles.tagsContainer}>
          <h2 className={styles.recentPostsHeader}>Tags</h2>
          <div className={styles.tags}>
            <p>Education</p>
            <p>Education</p>
            <p>Education</p>
            <p>Education</p>
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
      </aside>
    </main>
  );
};

export default page;
