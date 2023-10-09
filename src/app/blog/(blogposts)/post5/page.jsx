import React from "react";
import styles from "../posts.module.css";

import blogData from "../../../components/blogPosts/blogData.json";
import Image from "next/image";
import RecentsPosts from "@/app/components/recentPosts/recents";

const page = () => {
  const postIdToFetch = 5;
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
              <section>
                <p>
                  Preschool teachers play a pivotal role in your child's early
                  learning journey. In this post, we explore the importance of
                  skilled and caring teachers in creating a nurturing and
                  educational environment.
                </p>

                <h2>The Qualities of Exceptional Preschool Teachers</h2>
                <p>
                  Exceptional preschool teachers possess a unique set of
                  qualities that make them stand out:
                </p>
                <ul>
                  <li>
                    1. Patience: Preschoolers are at a stage of rapid
                    development, and patience is key to guiding them through
                    challenges and learning experiences.
                  </li>
                  <li>
                    2. Creativity: Creative teachers can design engaging lessons
                    and activities that capture a child's imagination and
                    stimulate their curiosity.
                  </li>
                  <li>
                    3. Empathy: Understanding and empathizing with young
                    children's emotions helps create a safe and supportive
                    classroom environment.
                  </li>
                  <li>
                    4. Adaptability: Effective teachers adapt their teaching
                    methods to cater to each child's unique learning style and
                    needs.
                  </li>
                  <li>
                    5. Communication Skills: Strong communication skills are
                    essential for building rapport with both children and
                    parents, fostering open and constructive dialogue.
                  </li>
                </ul>

                <h2>Training and Professional Development</h2>
                <p>
                  Our teachers undergo specialized training and continuous
                  professional development to excel in their roles:
                </p>
                <ul>
                  <li>
                    1. Classroom Management Training: Managing a preschool
                    classroom requires specific skills, and teachers receive
                    training in classroom management techniques.
                  </li>
                  <li>
                    2. Ongoing Learning: Our teachers stay updated with the
                    latest research and teaching strategies through workshops,
                    conferences, and ongoing education.
                  </li>
                  <li>
                    3. First Aid and Safety: Our teachers are trained in first
                    aid and safety procedures to ensure the well-being of the
                    children in their care.
                  </li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  Preschool teachers are not just educators; they are nurturing
                  guides who play a vital role in shaping young minds. Their
                  exceptional qualities and dedication, coupled with specialized
                  training, create a supportive and educational environment that
                  sets the stage for a child's lifelong learning journey.
                </p>
              </section>
            </div>
          </article>
        </section>
        <RecentsPosts />
      </section>
    </main>
  );
};

export default page;
