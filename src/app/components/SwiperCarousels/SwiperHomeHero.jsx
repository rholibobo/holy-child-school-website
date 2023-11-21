// import React, { useEffect } from "react";

import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";

import styles from "./swiper.module.css";

import { Typography } from "@mui/material";
import Link from "next/link";
import { EnrollNowButton } from "../Buttons/AllButtons";
import { useEffect } from "react";

// SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

const SwiperHomeHeroComponent = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={styles.swiper_container}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        // className="mySwiper"
      >
        <SwiperSlide>
          <div className={`${styles.bg} ${styles.bg1}`}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 1 }}
              className={styles.hero_text}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#1faded" }}
                gutterBottom
              >
                {" "}
                WELCOME TO{" "}
                <span>
                  <Typography
                    variant="h2"
                    sx={{ fontWeight: "bold", color: "#ffffff" }}
                    gutterBottom
                  >
                    {" "}
                    HOLY CHILD ACADEMY{" "}
                  </Typography>
                </span>{" "}
              </Typography>
              <Typography
                variant="body1"
                sx={{width: {xs:"90%", md: "40%"}, color: "#ffffff" }}
                gutterBottom
              >
                An Institution with a strong reputation for academic Learning
              </Typography>
              <br />
              <div className={styles.btn}>
                <Link href="#">
                  <EnrollNowButton />
                </Link>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.bg} ${styles.bg2}`}>
            <motion.div className={styles.hero_text}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#1faded" }}
                gutterBottom
              >
                {" "}
                WELCOME TO{" "}
                <span>
                  <Typography
                    variant="h2"
                    sx={{ fontWeight: "bold", color: "#ffffff" }}
                    gutterBottom
                  >
                    {" "}
                    HOLY CHILD ACADEMY{" "}
                  </Typography>
                </span>{" "}
              </Typography>
              <Typography
                variant="body1"
                sx={{width: {xs:"90%", md: "40%"}, color: "#ffffff" }}
                gutterBottom
              >
                We unlock the potential in your child and unleash the brilliance in them.
              </Typography>
              <br />
              <div className={styles.btn}>
                <Link href="#">
                  <EnrollNowButton />
                </Link>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.bg} ${styles.bg3}`}>
            <div className={styles.hero_text}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#1faded" }}
                gutterBottom
              >
                {" "}
                WELCOME TO{" "}
                <span>
                  <Typography
                    variant="h2"
                    sx={{ fontWeight: "bold", color: "#ffffff" }}
                    gutterBottom
                  >
                    {" "}
                    HOLY CHILD ACADEMY{" "}
                  </Typography>
                </span>{" "}
              </Typography>
              <Typography
                variant="body1"
                sx={{width: {xs:"90%", md: "40%"}, color: "#ffffff" }}
                gutterBottom
              >
                An institution famous for nuturing young minds and raising leaders for the future
              </Typography>
              <br />
              <div className={styles.btn}>
                <Link href="#">
                  <EnrollNowButton />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.bg} ${styles.bg4}`}>
            <div className={styles.hero_text}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#1faded" }}
                gutterBottom
              >
                {" "}
                WELCOME TO{" "}
                <span>
                  <Typography
                    variant="h2"
                    sx={{ fontWeight: "bold", color: "#ffffff" }}
                    gutterBottom
                  >
                    {" "}
                    HOLY CHILD ACADEMY{" "}
                  </Typography>
                </span>{" "}
              </Typography>
              <Typography
                variant="body1"
                sx={{ width: {xs:"90%", md: "40%"}, color: "#ffffff" }}
                gutterBottom
              >
                We inspire a life long love for learning and development in every child.
              </Typography>
              <br />
              <div className={styles.btn}>
                <Link href="#">
                  <EnrollNowButton />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.bg} ${styles.bg5}`}>
            <div className={styles.hero_text}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#1faded" }}
                gutterBottom
              >
                {" "}
                WELCOME TO{" "}
                <span>
                  <Typography
                    variant="h2"
                    sx={{ fontWeight: "bold", color: "#ffffff" }}
                    gutterBottom
                  >
                    {" "}
                    HOLY CHILD ACADEMY{" "}
                  </Typography>
                </span>{" "}
              </Typography>
              <Typography
                variant="body1"
                sx={{width: {xs:"90%", md: "40%"}, color: "#ffffff" }}
                gutterBottom
              >
                We offer quality and excellent education to your child and ward making them the best among their peers.
              </Typography>
              <br />
              <div className={styles.btn}>
                <Link href="#">
                  <EnrollNowButton />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.bg} ${styles.bg6}`}>
            <div className={styles.hero_text}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#1faded" }}
                gutterBottom
              >
                {" "}
                WELCOME TO{" "}
                <span>
                  <Typography
                    variant="h2"
                    sx={{ fontWeight: "bold", color: "#ffffff" }}
                    gutterBottom
                  >
                    {" "}
                    HOLY CHILD ACADEMY{" "}
                  </Typography>
                </span>{" "}
              </Typography>
              <Typography
                variant="body1"
                sx={{width: {xs:"90%", md: "40%"}, color: "#ffffff" }}
                gutterBottom
              >
                Our curriculum is up to date to ensure your child receives the best in a serene and absolutely lovable environment
              </Typography>
              <br />
              <div className={styles.btn}>
                <Link href="#">
                  <EnrollNowButton />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperHomeHeroComponent;
