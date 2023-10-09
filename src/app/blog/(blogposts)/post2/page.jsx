import React from "react";

import styles from "../posts.module.css";
import blogData from "../../../components/blogPosts/blogData.json";
import Image from "next/image";
import RecentsPosts from "@/app/components/recentPosts/recents";

const page = () => {
  const postIdToFetch = 2;
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
                In the world of early childhood education, fostering creativity
                is a cornerstone for enhancing learning outcomes. Creativity is
                not only an essential skill for children's personal development
                but also a key factor in their academic success. In this blog
                post, we will explore the importance of cultivating creativity
                in education and provide practical tips for parents and
                educators.
              </p>

              <h2>The Role of Creativity in Early Education</h2>
              <p>
                Creativity is the ability to think outside the box, solve
                problems innovatively, and express oneself in unique ways. In
                preschool, children are at a crucial stage of development, and
                nurturing their creativity can have a profound impact on their
                cognitive and emotional growth.
              </p>

              <h2>Benefits of Fostering Creativity</h2>
              <p>
                <ol>
                  <li>Enhanced problem-solving skills</li>
                  <li>Improved critical thinking abilities</li>
                  <li>Increased self-confidence and self-expression</li>
                  <li>Stimulated imagination and curiosity</li>
                  <li>Positive attitude towards learning</li>
                </ol>
              </p>

              <h2>Practical Tips for Encouraging Creativity</h2>
              <p>
                Here are some practical strategies for parents and educators to
                nurture creativity in young learners:
              </p>
              <ol>
                <li>Provide open-ended materials for play and exploration.</li>
                <li>Encourage imaginative storytelling and pretend play.</li>
                <li>
                  Support artistic activities like drawing, painting, and
                  sculpting.
                </li>
                <li>Embrace curiosity and ask open-ended questions.</li>
                <li>
                  Create a safe and non-judgmental environment for creative
                  expression.
                </li>
              </ol>

              <h2>Conclusion</h2>
              <p>
                Cultivating creativity in education is a powerful tool for
                enhancing learning outcomes and preparing children for a bright
                future. By embracing and nurturing creativity in the early
                years, we can help children develop essential life skills that
                will benefit them throughout their educational journey and
                beyond.
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
