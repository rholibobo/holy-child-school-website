import React from "react";

import styles from "../posts.module.css";
import blogData from "../../../components/blogPosts/blogData.json";
import Image from "next/image";
import RecentsPosts from "@/app/components/recentPosts/recents";

const page = () => {
  const postIdToFetch = 3;
  const desiredPost = blogData.find((post) => post.id === postIdToFetch);

  return (
    <main className="max-w-[1000px] mx-auto">
      <div className="px-5 pt-10">
        <h1 className={styles.blogTitle}>{desiredPost.title}</h1>
        <div className="flex flex-col pt-4 lg:flex-row justify-between">
          <p className={styles.description}>{desiredPost.description}</p>
          <div className="flex pt-3 lg:pt-0 gap-10">
            <p>
              Author:
              <span className="text-[#1faded]">{desiredPost.author}</span>
            </p>
            <p>
              Date: <span className="text-[#1faded]">{desiredPost.date}</span>
            </p>
          </div>
        </div>
      </div>
      <section className={styles.main}>
        <section className={styles.blogPost}>
          <article>
            <Image
              src={desiredPost.imagePath}
              alt={desiredPost.title}
              width={800}
              height={800}
              className={styles.mainImage}
            />
            <div className={styles.blogContent}>
              <p>
                Play is more than just fun; it's a crucial component of early
                childhood education. This post explores the significance of
                play-based learning in preschool and how it fosters creativity,
                critical thinking, and problem-solving skills.
              </p>

              <h2>The Importance of Play-Based Learning</h2>
              <p>
                Play-based learning is a cornerstone of preschool education. It
                goes beyond entertainment and serves as a powerful educational
                tool. Here's why it's essential:
              </p>
              <ul>
                <li>
                  1. Fosters Creativity: Play encourages children to use their
                  imagination and creativity, allowing them to explore new ideas
                  and concepts in a safe and enjoyable environment.
                </li>
                <li>
                  2. Enhances Problem-Solving Skills: Through various play
                  activities, children learn to navigate challenges, make
                  decisions, and find solutions, building valuable
                  problem-solving skills.
                </li>
                <li>
                  3. Supports Social and Emotional Development: Play promotes
                  cooperation, empathy, and emotional regulation as children
                  interact with peers and navigate social situations.
                </li>
                <li>
                  4. Develops Language and Communication: Engaging in
                  imaginative play and storytelling helps children develop their
                  language and communication skills.
                </li>
              </ul>

              <h2>Types of Play-Based Activities</h2>
              <p>
                There are various types of play-based activities that can
                benefit a child's development:
              </p>
              <ul>
                <li>
                  1. Imaginative Play: Pretend play, role-playing, and using
                  props like costumes or dolls allow children to explore
                  different scenarios and roles.
                </li>
                <li>
                  2. Constructive Play: Building with blocks, puzzles, and other
                  manipulative materials enhances spatial awareness and
                  problem-solving abilities.
                </li>
                <li>
                  3. Outdoor Play: Outdoor activities promote physical
                  development, encourage exploration of the natural world, and
                  provide sensory experiences.
                </li>
                <li>
                  4. Creative Arts: Drawing, painting, and crafting encourage
                  self-expression and fine motor skill development.
                </li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Play-based learning is not just about having fun; it's a
                fundamental approach to preschool education that nurtures
                creativity, critical thinking, and problem-solving skills. By
                providing opportunities for play-based activities, educators and
                parents can help children develop the essential skills they need
                for a successful educational journey and beyond.
              </p>
            </div>
          </article>
        </section>
        <RecentsPosts />
      </section>
    </main>
  );
};

export default page;
