"use client";
import Image from "next/image";

import ProprietorImage from "../../public/images/HomePage/pp.jpg";
import BlueStar from "../../public/images/DesignImages/blueStar.png";
import Ballon from "../../public/images/DesignImages/ballon.png";
import RedStar from "../../public/images/DesignImages/redStar.png";
import YellowStar from "../../public/images/DesignImages/yellowStar.png";
import Globe from "../../public/images/DesignImages/globe.png";
import Kids from "../../public/images/HomePage/kids1.jpg";

import styles from "./page.module.css";

import { motion } from "framer-motion";

import { Box, Grid, Stack, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

/////// Components ////////////
import Header from "./components/Header/Header";
import {
  EnrollNowButton,
  ViewAllButton,
  ViewAllWhiteButton,
  ViewGallery,
} from "./components/Buttons/AllButtons";
import {
  MediaCard,
  HeroSectionCarousel,
} from "./components/Carousels/Carousels";
import FloatingStars from "./components/FloatingStars/Stars";
import {
  WovenImageList,
  WovenImageListMobileView,
} from "./components/HomeImageList/ImageList";
import Earth from "./components/gifs/earth/earth";

//////// Icons //////////
import { FcGraduationCap } from "react-icons/fc";
import { GiTrophyCup } from "react-icons/gi";
import { BiSolidBusSchool } from "react-icons/bi";
import { HiLightBulb } from "react-icons/hi";
import { BsPencilSquare } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import Link from "next/link";
import {
  HomeHero,
  MediaCardCarousel,
  GalleryCarousel,
} from "./components/SwiperCarousels/Swiper";

export default function Home() {
  const isMobileView = useMediaQuery("(max-width:850px)");

  return (
    <main>
      {/* ////////// SECTION 1 //////////// */}
      <div className={styles.section1}>
        <div className={styles.navbar}>
          <Header />
        </div>
        <div className={styles.section_container}>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                marginTop: "4rem",
                position: "relative",
              }}
            >
              <Box>
                <div>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#fff200" }}
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
                    sx={{ color: "#ffffff" }}
                    gutterBottom
                  >
                    An Institution with a strong reputation for academic
                    Learning
                  </Typography>
                  <br />
                  <Link href="#">
                    <EnrollNowButton />
                  </Link>
                </div>
              </Box>
              <br />
              <div className={styles.earthContainer}>
                <Earth />
              </div>
            </Box>

            <Box
              sx={{
                width: "50%",
                maxWidth: "50%",
                maxHeight: "auto",
                minHeight: "0",
                minWidth: "0",
                display: { xs: "none", md: "block" },
                marginTop: "3rem",
              }}
            >
              <HomeHero />
            </Box>
          </Box>
        </div>
      </div>

      {/* /////// Section 2 /////////////// */}
      <div className={styles.section2}>
        <Box
          sx={{
            width: { xs: "90%", md: "70%" },
            margin: "0 auto",
            display: "flex",
            // alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            // position: "relative",
          }}
        >
          <Box
            sx={{
              width: { xs: "90%", md: "50%" },
              marginTop: { xs: "2rem", md: "5rem" },
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Why Holy Child?
            </Typography>
            <br />
            <Stack direction="row" spacing={3}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  width: "100%",
                }}
              >
                <div className={styles.icons_div}>
                  <FcGraduationCap style={{ fontSize: "30px" }} />
                </div>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  Education
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  width: "100%",
                }}
              >
                <div className={styles.icons_div2}>
                  <GiTrophyCup style={{ fontSize: "30px" }} />
                </div>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  Pre Nursery
                </Typography>
              </Box>
            </Stack>
            <br />
            <Stack direction="row" spacing={3}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  width: "100%",
                  // justifyContent: "space-between",
                }}
              >
                <div className={styles.icons_div3}>
                  <BiSolidBusSchool style={{ fontSize: "30px" }} />
                </div>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  Nursery
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  width: "100%",
                }}
              >
                <div className={styles.icons_div4}>
                  <HiLightBulb style={{ fontSize: "30px" }} />
                </div>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  Primary
                </Typography>
              </Box>
            </Stack>
            <br />
            <Stack direction="row" spacing={3}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  width: "100%",
                }}
              >
                <div className={styles.icons_div5}>
                  <BsPencilSquare style={{ fontSize: "30px" }} />
                </div>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", wordWrap: "none" }}
                  gutterBottom
                >
                  Teacher Training
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  width: "100%",
                }}
              >
                <div className={styles.icons_div6}>
                  <FaBook style={{ fontSize: "30px" }} />
                </div>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  Updated Curriculum
                </Typography>
              </Box>
            </Stack>
            <br />
            <Link href="/">
              <ViewAllButton />
            </Link>
          </Box>
          <div className={styles.section2_img}></div>
        </Box>
      </div>

      {/* ////////// Section 3 //////////////// */}
      <div className={styles.section3}>
        <Box sx={{ width: { xs: "90%", md: "80%" }, margin: "0 auto" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                marginTop: { xs: "4rem", md: "7rem" },
                width: { xs: "90%", md: "40%" },
              }}
            >
              <Typography variant="h3" sx={{ color: "#ffffff" }} gutterBottom>
                Kids Centered Activities
              </Typography>
              <br />
              <Typography sx={{ color: "#ffffff" }} gutterBottom>
                {" "}
                Play based learning occupies a central place in our nursery
                classes. Twice a week, Pre nursery & Nursery 1 children spend
                about 2 hours on the playground. Teachers prepare the
                playground. As children engage in different activities, they
                learn how to interact with each other.{" "}
              </Typography>
              <br />
              <Link href="/teachers">
                <ViewAllWhiteButton />
              </Link>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "40%" },
                maxWidth: "100%",
                maxHeight: "auto",
                // minHeight: "0",
                // minWidth: "0",
                marginTop: { xs: "2rem", md: "7rem" },
                padding: "0 1rem",
              }}
            >
              <MediaCardCarousel />
            </Box>
          </Box>
        </Box>
      </div>

      {/* ////////////// Section 4 //////////// */}
      <div className={styles.section4}>
        <div className={styles.section4_div}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: "2rem", md: "0" },
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                height: "100%",
                order: { xs: "1", md: "2" },
              }}
            >
              <Image
                src={Kids}
                alt="students"
                className={styles.section4_img}
              />
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "40%" },
                marginTop: { xs: "2rem", md: "" },
                position: "inherit",
                zIndex: "1",
              }}
            >
              <Box sx={{ borderRadius: "20% 40% 10%" }}>
                <Typography
                  variant="h4"
                  textAlign="center"
                  sx={{
                    fontWeight: "bold",
                    color: "#e130a7",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    backgroundColor: "#ffffff",
                  }}
                  gutterBottom
                >
                  SCHOOL DAYS{" "}
                  <Typography className={styles.section4_text}>
                    Mondays - Fridays
                  </Typography>
                </Typography>
              </Box>
              <br />
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  padding: "1.5rem",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  position: "inherit",
                  zIndex: "4",
                }}
              >
                <Typography gutterBottom>
                  Holy Child Preparatory School was birthed out of a passion to
                  improve the quality of basic Education in South Eastern
                  Nigeria.
                </Typography>
                <Typography gutterBottom>
                  Holy Child Preparatory School, Enugu is positioned to improve
                  the quality of basic education in South East Nigeria through
                  helping children enjoy leisure reading, through emphasis on
                  character development and through continuous teacher education
                  programmes.{" "}
                </Typography>
              </Box>
            </Box>
          </Box>
        </div>
      </div>

      {/* ///////////// Section 5 ///////////// */}
      <div className={styles.section5}>
        <div className={styles.section5_div}>
          <Typography
            variant="h2"
            fontWeight="bold"
            textAlign="center"
            sx={{ color: "#1c1464" }}
            gutterBottom
          >
            GALLERY
          </Typography>

          <Box>
            <GalleryCarousel />
          </Box>

          <br />
          <Link href="/gallery">
            <ViewGallery />
          </Link>
        </div>
      </div>

      {/* /////////////// Section 6 ///////////// */}
      <div className={styles.section6}>
        <Box
          sx={{
            width: "90%",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "35%" },
                height: { xs: "auto", sm: "auto", md: "70vh" },
                backgroundColor: "#ffffff",
                borderRadius: "60px",
                border: "2px solid #ffffff",
                marginTop: { xs: "2rem", md: "6rem" },
                color: "#1c1469",
                padding: { xs: "2rem", sm: "3rem", md: "2rem" },
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  textAlign="center"
                  gutterBottom
                >
                  Our Core Value
                </Typography>
                <Typography variant="subtitle2" textAlign="center" gutterBottom>
                  Good character and a love for leisure reading. Objectives: to
                  raise children who not only fear God but are able to hold
                  their own in any circumstance.
                </Typography>
              </Box>
              <br />
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  textAlign="center"
                  gutterBottom
                >
                  Our Belief
                </Typography>
                <Typography variant="subtitle2" textAlign="center" gutterBottom>
                  Because “talent is not enough,”brilliance must be matched by
                  good charater.
                </Typography>
              </Box>
              <br />
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  textAlign="center"
                  gutterBottom
                >
                  Our Vision
                </Typography>
                <Typography variant="subtitle2" textAlign="center" gutterBottom>
                  To become a first rate educational institution with a
                  reputation for excellent character and strong academic
                  learning.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "30%" },
                height: { sm: "auto", md: "70vh" },
                backgroundColor: "#ffffff",
                borderRadius: "60px",
                border: "2px solid #1c1464",
                marginTop: { xs: "2rem", md: "6rem" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                color: "#1c1464",
                padding: "2rem",
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  textAlign="center"
                  gutterBottom
                >
                  Meet our Educational Consultant
                </Typography>

                <Typography
                  variant="h6"
                  textAlign="center"
                  fontWeight="bold"
                  gutterBottom
                >
                  Dr. Mrs. O. Nnamani
                </Typography>
              </Box>
              <Typography variant="subtitle2" gutterBottom>
                B.A English, U.N.N; M.A English, U.N.N, best Graduating Student
                85/ 86 session; Ph.d English, Ebonyi State University,
                Abakaliki. Founder, Holy Child Preparatory School. Senior
                Lecturer, Enugu State University of Sciene & Technology, Enugu.
                1990- Date.
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "30%" },
                height: { sm: "auto", md: "50vh" },
                // backgroundColor: "#81d742",
                marginTop: { xs: "2rem", md: "4rem" },
              }}
            >
              <Image
                src={ProprietorImage}
                alt="Proprietor"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </Box>
        </Box>
      </div>

      {/* ////////// Section 7 /////////////// */}
      <div className={styles.section7}>
        <Box sx={{}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15858.205064690168!2d7.531379!3d6.451606!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a5aae5e5b3d1%3A0xb1a3fb1573962ad7!2sHoly%20Child%20Preparatory%20School!5e0!3m2!1sen!2sus!4v1693227391900!5m2!1sen!2sus"
            style={{
              width: "100%",
              height: "100vh",
              border: "0",
              marginTop: "1rem",
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </div>

      {/* ////// Section 8 //////////// */}
      <div className={styles.section8}></div>
    </main>
  );
}
