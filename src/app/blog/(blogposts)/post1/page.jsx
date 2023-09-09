import React from "react";
import styles from "./page.module.css";

import blogData from "../../../components/blogPosts/blogData.json";
import Image from "next/image";
import RecentsPosts from "@/app/components/recentPosts/recents";

const page = () => {
  const postIdToFetch = 1;
  const desiredPost = blogData.find((post) => post.id === postIdToFetch);

  return (
    <main className={styles.main}>
      <section className={styles.blogPost}>
        <article>
          <h1 className={styles.blogTitle}>{desiredPost.title}</h1>
          <div className={styles.metaContainer}>
            <p className={styles.description}>{desiredPost.description}</p>
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
            <p>
              Early childhood education, often referred to as preschool, is more
              than just a convenient option for working parents. It's a critical
              stage in a child's development that sets the stage for lifelong
              learning. In this blog post, we will delve deeper into the
              multitude of benefits that enrolling your child in preschool can
              bring. From enhanced social skills to improved cognitive
              development and school readiness, the advantages are profound.
            </p>
            <br />
            <h2>Enhanced Socialization</h2>

            <p>
              One of the primary benefits of early childhood education is the
              opportunity for your child to interact with peers and experienced
              educators. Here, they learn valuable social skills that will serve
              as the building blocks for future relationships. Preschool
              provides a safe and structured environment where children can:
            </p>

            <ol>
              <li>
                <strong>Develop Communication Skills:</strong> Through play and
                group activities, children learn to express themselves,
                articulate thoughts, and listen actively to others.
              </li>
              <li>
                <strong>Practice Sharing and Cooperation:</strong> Sharing toys,
                taking turns, and working together on projects teach children
                important lessons about collaboration and teamwork.
              </li>
              <li>
                <strong>Build Confidence and Independence:</strong> Preschool
                encourages children to explore and make choices independently,
                fostering a sense of self-confidence and decision-making skills.
              </li>
            </ol>
            <br />
            <h2>Cognitive Development</h2>

            <p>
              Preschool is not just about playtime; it's an essential phase for
              cognitive growth. Children's brains are highly receptive during
              these formative years, and early childhood education can stimulate
              intellectual development in various ways:
            </p>

            <ol>
              <li>
                <strong>Language and Literacy:</strong> Exposure to a rich
                vocabulary and storytelling helps children build language
                skills, which are fundamental for reading and writing.
              </li>
              <li>
                <strong>Math and Problem Solving:</strong> Preschool activities
                introduce basic math concepts through counting, sorting, and
                pattern recognition, promoting problem-solving abilities.
              </li>
              <li>
                <strong>Creativity and Imagination:</strong> Art projects and
                creative play foster imagination, innovation, and critical
                thinking.
              </li>
            </ol>
            <br />
            <h2>School Readiness</h2>

            <p>
              Enrolling your child in preschool can significantly enhance their
              preparedness for formal education. It equips them with the
              necessary skills and behaviors to succeed in school, such as:
            </p>

            <ol>
              <li>
                <strong>Following Instructions:</strong> Preschool teaches
                children to listen and follow directions from teachers, a
                crucial skill for classroom learning.
              </li>
              <li>
                <strong>Early Literacy and Numeracy Skills:</strong> Exposure to
                letters, numbers, and early academic concepts gives children a
                head start in kindergarten.
              </li>
              <li>
                <strong>Routine and Structure:</strong> Preschool establishes
                routines that mirror school schedules, making the transition to
                kindergarten smoother.
              </li>
            </ol>

            <p>
              In conclusion, early childhood education is an investment in your
              child's future. It lays the foundation for their social,
              emotional, and cognitive development, preparing them for a
              lifetime of learning. By enrolling your child in preschool, you
              provide them with a solid start on their educational journey,
              setting them up for success in school and beyond.
            </p>
          </p>
        </article>
      </section>
      <RecentsPosts />
    </main>
  );
};

export default page;
