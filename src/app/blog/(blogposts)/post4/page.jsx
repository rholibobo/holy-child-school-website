import React from "react";
import styles from "./page.module.css";

import blogData from "../../../components/blogPosts/blogData.json";
import Image from "next/image";
import RecentsPosts from "@/app/components/recentPosts/recents";

const page = () => {
  const postIdToFetch = 4;
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
          <div className={styles.blogContent}>
            <p>
              Transitioning from home to preschool can be both exciting and
              challenging. Learn practical tips and strategies to ease this
              transition, ensuring a positive experience for both you and your
              child.
            </p>

            <h2>Addressing Separation Anxiety</h2>
            <p>
              Separation anxiety is a common concern when starting preschool.
              Here's how you can help your child overcome it:
            </p>
            <ul>
              <li>
                1. Gradual Separation: Start with short periods of separation
                and gradually extend the time as your child becomes more
                comfortable.
              </li>
              <li>
                2. Create a Goodbye Routine: Establish a consistent and
                reassuring farewell routine to provide comfort and
                predictability.
              </li>
              <li>
                3. Communicate Positively: Talk to your child about the fun
                experiences they will have at preschool and reassure them that
                you'll return to pick them up.
              </li>
            </ul>

            <h2>Establishing Daily Routines</h2>
            <p>
              Consistent routines can help your child feel secure in their new
              preschool environment:
            </p>
            <ul>
              <li>
                1. Morning Routine: Develop a predictable morning routine that
                includes getting dressed, having breakfast, and saying goodbye.
              </li>
              <li>
                2. Afternoon Debrief: After picking up your child, discuss their
                day and engage in quality bonding time.
              </li>
              <li>
                3. Bedtime Routine: Ensure your child gets enough sleep to stay
                refreshed and alert during preschool hours.
              </li>
            </ul>

            <h2>Building a Strong Parent-Teacher Relationship</h2>
            <p>
              Collaboration with your child's preschool teacher is essential for
              a successful transition:
            </p>
            <ul>
              <li>
                1. Attend Parent Meetings: Participate in parent-teacher
                meetings to stay informed about your child's progress and any
                concerns.
              </li>
              <li>
                2. Open Communication: Keep the lines of communication open with
                your child's teacher. Share important information and ask
                questions as needed.
              </li>
              <li>
                3. Get Involved: Consider volunteering or participating in
                school activities to support your child's educational journey.
              </li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              Preparing your child for preschool involves addressing separation
              anxiety, establishing routines, and building a strong
              parent-teacher relationship. By implementing these strategies, you
              can help ensure a smooth transition and create a positive
              preschool experience for your child, setting the stage for a happy
              start to their educational journey.
            </p>
          </div>
        </article>
      </section>
      <RecentsPosts />
    </main>
  );
};

export default page;
