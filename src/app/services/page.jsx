"use client";

import { Box,Typography } from "@mui/material";

import styles from "./services.module.css";

import Header from "../components/Header/Header";

export default function AboutUs() {
  return (
    <main>
        <div className={styles.navbar}>
          <Header />
        </div>
      <section className={styles.section1}>
        
        <div className={styles.section_container}>

          <Box sx={{ marginTop: { xs: "1rem", md: "4rem" } }}>
            <Box>
              <Typography
                variant="h2"
                sx={{ fontWeight: "bold", color: "#ffffff" }}
                textAlign="center"
                gutterBottom
              >
                Our Services
              </Typography>
              {/* <br /> */}

              <Typography
                variant="body1"
                sx={{ color: "#ffffff" }}
                gutterBottom
                textAlign={{ xs: "left", md: "center" }}
              >
                At Holy Child, we're dedicated to nurturing student potential. Our core values of excellence, inclusivity, innovation, and community shape our approach to education. With passionate educators, modern facilities, diverse extracurriculars, and a global perspective, we offer a comprehensive learning experience. Explore our website to discover more about Holy Child Preparatory School and join our vibrant school community.
              </Typography>
            </Box>
          </Box>
  
        </div>
      </section>

         {/* our services info */}
      

    <div className={styles.wrapper}>
         <div className={styles.service}>
           <p className={styles.text_one}>Some of the teaching techniques we use in   Holy Child are ” Read to Discover”, Inquiry based teaching & Play based learning. We discovered that often primary & secondary school children do not read their textbooks. Teachers write notes on the board and that’s all the learners read. To help children harness the treasures hidden in the well- written textbooks their parents paid for, our teachers make pupils read the textbook aloud in the class. In the  process, the pupils identify the main points and underline them. The main ideas are discussed in class . Thereafter the children guided by the guideline written on the board makes their notes by themselves. These notes are short & easy to be read, In  using “Read to Discover ” technique to teach capital letters, for instance, children are asked to underline capital letters used in story books. As they observe that always,   every sentence begins  with a capital letter and place names always start with a capital letter, the lesson sinks deeper than when teachers keep telling the pupils when to used capital letters.</p>
           <div className={styles.image}>
            <img src="/images/Gallery/service.jpg" alt="services image" />
           </div>
         </div>


         {/* service two */}

         <div className={styles.service_one}>
             <div className={styles.image_one}>
                 <img src="/images/Gallery/service1.jpg" alt="services image" />
              </div>

    
              <p className={styles.text_two}>Another teaching teachers employ in Holy Child is the inquiry teaching technique. We discovered children are often absent-minded. So doing all the talking & telling does not give us the results we desire. By constantly asking children questions and patiently waiting for the answers, we are able to help our children think.Play based learning occupies a central place in our nursery classes. Twice a week, Pre nursery & Nursery 1 children spend about 2 hours on the playground. Teachers prepare the playground. As children engage in different activities, they learn how to interact with each other. They learn what works and what does not. Teachers never disrupt  but allow the children to achieve ” flow”. Play learning equally plays out when teachers use balls to teach colours or counting. Kids are having fun & at the same time learning.</p>

                </div>

   {/* service three */}

         <div className={styles.service_two}>
            <p className={styles.text_three}>Differentiated teaching is yet another teaching technique employed in Holy Child. Often children in the same class have different abilities. Some are quick to understand while others are slow. To assist the slow learners without slowing down the high flyers, teachers in Holy Child are trained to administer other activities to the fast learners. Thus while learner A is attempting her 5 activity, learner B is on his 2nd activity. Because, we realize  that every child is unique, teachers are trained not to make the slow learners bad. And to encourage each child to have a good self esteem, positions are not written on report sheets.  Again because we realize that present – day Nigerian graduates leave much to be desired, the school organizes weekly training on English grammar, writing, teaching techniques. Discipline, Early Child Development & teacher – parent relationship among others.</p>
         
              <div className={styles.image_two}>
                 <img src="/images/Gallery/service2.jpg" alt="services image" />
              </div>
           </div>
</div>
      </main>


  )
      }