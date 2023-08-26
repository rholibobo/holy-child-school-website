"use client";
import Image from "next/image";
import styles from "./page.module.css";

import { motion } from "framer-motion";

import { Box, Grid, Stack, Typography } from "@mui/material";

/////// Components ////////////
import Header from "./components/Header/Header";
import {
  EnrollNowButton,
  ViewAllButton,
  ViewAllWhiteButton,
  ViewGallery,
} from "./components/Buttons/AllButtons";
import { MediaCard } from "./components/Carousels/Carousels";
import FloatingStars from "./components/FloatingStars/Stars";
import WovenImageList from "./components/HomeImageList/ImageList";

//////// Icons //////////
import { FcGraduationCap } from "react-icons/fc";
import { GiTrophyCup } from "react-icons/gi";
import { BiSolidBusSchool } from "react-icons/bi";
import { HiLightBulb } from "react-icons/hi";
import { BsPencilSquare } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import Link from "next/link";

/////////////// Image Styles ///////////////
const imageSection1 = {
  marginTop: "-4rem",
};
const imageSection4 = {
  border: "2px solid #1c1464",
  borderRadius: "20% 30%",
  // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
};

export default function Home() {
  return (
    <main>
      {/* ////////// SECTION 1 //////////// */}
      <div className={styles.section1}>
        <div className={styles.section_container}>
          <div className={styles.navbar}>
            <Header />
          </div>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ width: "80%", marginTop: "4rem" }}
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  height: "50vh",
                  // border: "1px solid red",
                  display: "flex",
                  alignItems: "center",
                }}
              >
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
                  <EnrollNowButton />
                </div>
              </Box>
              <br />
              <Image
                src="/images/DesignImages/globe.png"
                width={60}
                height={60}
                alt="globe"
                style={{ marginLeft: "-90px" }}
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: { xs: "none", md: "grid" } }}
            >
              <Box sx={{ width: "100%", height: "50vh", position: "relative" }}>
                <Image
                  src="/images/DesignImages/d5.png"
                  alt="School boy"
                  width={370}
                  height={530}
                  // layout="responsive"
                  quality={90}
                  style={imageSection1}
                />
                <div className={styles.info}>
                  <span style={{ fontWeight: "bold" }}>Best quality</span>
                  <Typography variant="body2" gutterBottom>
                    Education
                  </Typography>
                </div>
                <div className={styles.info2}>
                  <span style={{ fontWeight: "bold" }}>Best quality</span>
                  <Typography variant="body2" gutterBottom>
                    {" "}
                    Staff
                  </Typography>
                </div>
                <div className={styles.info3}>
                  <span style={{ fontWeight: "bold" }}>Best learning</span>
                  <Typography variant="body2" gutterBottom>
                    {" "}
                    Environment
                  </Typography>
                  <div className={styles.stars_div}>
                    <Image
                      src="/images/DesignImages/redStar.png"
                      width={20}
                      height={20}
                      alt="red star"
                      style={{ marginTop: "60px" }}
                    />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Image
                      src="/images/DesignImages/blueStar.png"
                      width={20}
                      height={20}
                      alt="red star"
                      style={{ marginTop: "-60px" }}
                    />
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>

      {/* /////// Section 2 /////////////// */}
      <div className={styles.section2}>
        <Box
          sx={{
            width: "60%",
            margin: "0 auto",
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "space-between",
            position: "relative",
          }}
        >
          <Box sx={{ width: "50%", marginTop: "4rem" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
              Why Holy Child?
            </Typography>
            <br />
            <Stack direction="row" spacing={4}>
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
            <Stack direction="row" spacing={4}>
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
            <Stack direction="row" spacing={4}>
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
        <Box sx={{ width: "80%", margin: "0 auto" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ marginTop: "10rem", width: "40%" }}>
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
                width: "40%",

                marginTop: "7rem",
              }}
            >
              <MediaCard />
            </Box>
          </Box>
        </Box>
      </div>

      {/* ////////////// Section 4 //////////// */}
      <div className={styles.section4}>
        <FloatingStars />
        <div className={styles.section4_div}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                width: "50%",
              }}
            >
              <Image
                src="/images/HomePage/kids1.jpg"
                width={500}
                height={400}
                layout="responsive"
                alt="students"
                style={imageSection4}
              />
            </Box>
            <Box sx={{ width: "40%" }}>
              <Box sx={{ borderRadius: "20% 40% 10%" }}>
                <Typography
                  variant="h4"
                  textAlign="center"
                  sx={{
                    fontWeight: "bold",
                    color: "#e130a7",
                    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
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
                  boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
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
          <WovenImageList />
          <br />
          <Link href="/gallery">
            <ViewGallery />
          </Link>
        </div>
      </div>
    </main>
  );
}
