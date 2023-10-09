import React from "react";
import styles from "../posts.module.css";

import blogData from "../../../components/blogPosts/blogData.json";
import Image from "next/image";
import RecentsPosts from "@/app/components/recentPosts/recents";

const page = () => {
  const postIdToFetch = 6;
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
                  Extend your child's learning beyond the classroom by setting
                  up a home environment that encourages exploration and
                  creativity. Discover practical ideas and activities to make
                  learning at home fun.
                </p>

                <h2>Creating a Home Learning Space</h2>
                <p>
                  Designating a specific learning space at home can make a big
                  difference in your child's educational experience:
                </p>
                <ul>
                  <li>
                    1. Choose a Quiet Area: Select a quiet corner or room with
                    minimal distractions for focused learning.
                  </li>
                  <li>
                    2. Organize Supplies: Keep age-appropriate books, art
                    materials, and educational toys accessible and organized.
                  </li>
                  <li>
                    3. Personalize the Space: Let your child decorate the space
                    with their artwork and creations to create a sense of
                    ownership.
                  </li>
                  <li>
                    4. Establish a Routine: Set a consistent schedule for
                    learning sessions to create a sense of structure.
                  </li>
                </ul>

                <h2>Incorporating Educational Games</h2>
                <p>
                  Educational games can make learning engaging and enjoyable for
                  preschoolers:
                </p>
                <ul>
                  <li>
                    1. Board Games: Choose board games that teach counting,
                    matching, and problem-solving skills.
                  </li>
                  <li>
                    2. Puzzles: Age-appropriate puzzles can enhance spatial
                    awareness and critical thinking.
                  </li>
                  <li>
                    3. Learning Apps: Explore educational apps and online
                    resources that align with your child's interests and
                    curriculum.
                  </li>
                  <li>
                    4. DIY Science Experiments: Conduct simple science
                    experiments at home to nurture curiosity and discovery.
                  </li>
                </ul>

                <h2>Fostering a Love for Learning</h2>
                <p>
                  Instill a lifelong love for learning in your child with these
                  strategies:
                </p>
                <ul>
                  <li>
                    1. Be a Role Model: Show enthusiasm for learning and explore
                    new things together.
                  </li>
                  <li>
                    2. Encourage Questions: Welcome your child's questions and
                    help them find answers through exploration and research.
                  </li>
                  <li>
                    3. Celebrate Achievements: Acknowledge and celebrate your
                    child's accomplishments, no matter how small.
                  </li>
                  <li>
                    4. Make Learning Fun: Incorporate storytelling, creative
                    arts, and hands-on activities into their daily routine.
                  </li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  Creating a preschool learning environment at home is a
                  wonderful way to extend the classroom experience and foster a
                  love for learning in your child. By providing a dedicated
                  learning space, incorporating educational games, and nurturing
                  their curiosity, you can make learning a fun and enriching
                  part of everyday life.
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
