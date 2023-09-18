"use client";

import { Box, Grid, Stack, Typography } from "@mui/material";

import styles from "./about.module.css";

import Header from "../components/Header/Header";

import FloatingBallons from "../../../public/images/DesignImages/ballons-unscreen.gif";
import Image from "next/image";
import { Campaign, Favorite, Tv } from "@mui/icons-material";
import {
  AchievementCarousel,
  GalleryCarousel,
  TeachersCarousel,
} from "../components/SwiperCarousels/Swiper";
import { ViewAllButton } from "../components/Buttons/AllButtons";

// SVG IMPORTS //
import values from "../../../public/svg/value.svg";
import Belief from "../../../public/svg/Belief.svg";
import vision from "../../../public/svg/vision.svg";

// Img Import //
import blueStar from "../../../public/images/DesignImages/blueStar.png";
import yellowStar from "../../../public/images/DesignImages/yellowStar.png";
import redStar from "../../../public/images/DesignImages/redStar.png";
import ballon from "../../../public/images/DesignImages/ballon.png";

import Link from "next/link";

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
                About Us
              </Typography>
              {/* <br /> */}

              <Typography
                variant="body1"
                sx={{ color: "#ffffff" }}
                gutterBottom
                textAlign={{ xs: "left", md: "center" }}
              >
                Holy Child Preparatory School was birthed out of a passion to
                improve the quality of basic Education in South Eastern Nigeria.
                Having taught English for more than two decades in several
                universities in South eastern Nigeria, we have discovered that
                the poor language proficiency among most present day secondary
                and university graduates is rooted in the low quality of
                education offered in the primary school schools. Holy Child
                Preparatory School, Enugu is positioned to improve the quality
                of basic education in South East Nigeria through helping
                children enjoy leisure reading, through emphasis on character
                development and through continuous teacher education programmes.
              </Typography>
            </Box>
          </Box>
          {/* <Image
            src={FloatingBallons}
            alt="floating ballons"
            className={styles.gif1}
          /> */}
        </div>
      </section>

      {/* ////////////////////// */}
      <section className={styles.values_section}>
        <Image src={blueStar} alt="star" className={styles.blueStar1} />
        <Image src={yellowStar} alt="star" className={styles.yellowStar} />
        <Image src={ballon} alt="star" className={styles.ballon} />
        <Image src={redStar} alt="star" className={styles.redStar} />
        <Box sx={{ marginTop: "3rem" }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            color="#1c1489"
            gutterBottom
          >
            More About Us
          </Typography>
        </Box>
        <br />

        <Box
          sx={{
            width: { xs: "95%", md: "80%" },
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "10px", md: "0" },
          }}
        >
          <Box sx={{ width: { xs: "95%", md: "30%" }, margin: "0 auto" }}>
            <Image src={values} alt="Values" className={styles.svg_width} />

            <Typography
              variant="h6"
              fontWeight="bold"
              textAlign={{ xs: "center", md: "left" }}
              gutterBottom
            >
              Our Core Value
            </Typography>

            <Typography
              variant="body1"
              textAlign={{ xs: "center", md: "left" }}
              gutterBottom
            >
              Good character and a love for leisure reading. Objectives: to
              raise children who not only fear God but are able to hold their
              own in any circumstance.
            </Typography>
          </Box>
          <Box sx={{ width: { xs: "95%", md: "30%" }, margin: "0 auto"  }}>
            <Image src={Belief} alt="Belief" className={styles.svg_width} />

            <Typography
              variant="h6"
              fontWeight="bold"
              textAlign={{ xs: "center", md: "left" }}
              gutterBottom
            >
              Our Belief
            </Typography>

            <Typography
              variant="body1"
              textAlign={{ xs: "center", md: "left" }}
              gutterBottom
            >
              Talent is not enough. Brilliance must be match by good character.
            </Typography>
          </Box>
          <Box sx={{ width: { xs: "95%", md: "30%" }, margin: "0 auto"  }}>
            <Image src={vision} alt="Values" className={styles.svg_width} />

            <Typography
              variant="h6"
              fontWeight="bold"
              textAlign={{ xs: "center", md: "left" }}
              gutterBottom
            >
              Our Vision
            </Typography>

            <Typography
              variant="body1"
              textAlign={{ xs: "center", md: "left" }}
              gutterBottom
            >
              To become a first rate educational institution with a reputation
              for excellent character and strong academic learning.
            </Typography>
          </Box>
          
        </Box>

        <br />
        <br />
          <Box sx={{width: {xs:"95%",md:"80%"}, margin: "0 auto"}} >
          <AchievementCarousel />
          </Box>
          

        
      </section>

      {/* ///////// Teachers Gallery /////////// */}
      <section className={styles.teachers_gallery}>
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            color="#1c1489"
            gutterBottom
          >
            Meet Our Teachers
          </Typography>
        </Box>
        <br />
        <Box sx={{ width: { xs: "95%", md: "80%" }, margin: "0 auto" }}>
          <TeachersCarousel />

          <br />
          <Link href="/teachers">
            <ViewAllButton />
          </Link>
        </Box>
      </section>
    </main>
  );
}
