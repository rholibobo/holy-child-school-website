"use client";

import { Box, Grid, Stack, Typography } from "@mui/material";

import styles from "./about.module.css";

import Header from "../components/Header/Header";

import FloatingBallons from "../../../public/images/DesignImages/ballons-unscreen.gif";
import Image from "next/image";
import { Campaign, Favorite, Tv } from "@mui/icons-material";
import {
  GalleryCarousel,
  TeachersCarousel,
} from "../components/SwiperCarousels/Swiper";
import { ViewAllButton } from "../components/Buttons/AllButtons";
import Link from "next/link";

export default function AboutUs() {
  return (
    <main>
      <section className={styles.section1}>
        <div className={styles.navbar}>
          <Header />
        </div>
        <div className={styles.section_container}>
          <Image
            src={FloatingBallons}
            alt="floating ballons"
            className={styles.gif}
          />

          <Box sx={{ marginTop: "4rem" }}>
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
          <Image
            src={FloatingBallons}
            alt="floating ballons"
            className={styles.gif1}
          />
        </div>
      </section>

      {/* ////////////////////// */}
      <section className={styles.values_section}>
        <Box sx={{ marginTop: "3rem" }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            textAlign="center"
            color="#1c1489"
            gutterBottom
          >
            What Are We About?
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", md: "80%" },
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              marginTop: { xs: "2rem", md: "7rem" },
              width: { xs: "100%", md: "30%" },
              position: "relative",
              padding: "2rem",
              boxShadow: "#e130a7 0px 2px 4px 0px, #e130a7 0px 2px 16px 0px",
              backgroundColor: "#ffffff",
            }}
          >
            <div className={styles.icons_div}>
              <Campaign />
            </div>
            <br />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#e130a7" }}
              textAlign="center"
              gutterBottom
            >
              Core Values
            </Typography>
            <br />
            <Typography textAlign="center" gutterBottom>
              Good character and a love for leisure reading. Objectives: to
              raise children who not only fear God but are able to hold their
              own in any circumstance.
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: { xs: "2rem", md: "6rem" },
              width: { xs: "100%", md: "30%" },
              position: "relative",
              padding: "2rem",
              boxShadow: "#1faded 0px 2px 4px 0px, #1faded 0px 2px 16px 0px",
              // zIndex: 2,
              backgroundColor: "#ffffff",
            }}
          >
            <div className={styles.icons_div2}>
              <Favorite />
            </div>
            <br />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#1faded" }}
              textAlign="center"
              gutterBottom
            >
              Belief
            </Typography>
            <br />
            <Typography textAlign="center" gutterBottom>
              Talent is not enough. Brilliance must be match by good character.
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: { xs: "2rem", md: "7rem" },
              width: { xs: "100%", md: "30%" },
              position: "relative",
              padding: "2rem",
              boxShadow: "#81d742 0px 2px 4px 0px, #81d742 0px 2px 16px 0px",
              backgroundColor: "#ffffff",
            }}
          >
            <div className={styles.icons_div3}>
              <Tv />
            </div>
            <br />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#81d742" }}
              textAlign="center"
              gutterBottom
            >
              Vision
            </Typography>
            <br />
            <Typography textAlign="center" gutterBottom>
              To become a first rate educational institution with a reputation
              for excellent character and strong academic learning.
            </Typography>
          </Box>
        </Box>
      </section>

      {/* ///////// Teachers Gallery /////////// */}
      <section className={styles.teachers_gallery}>
        <Box>
          <Typography
            variant="h3"
            fontWeight="bold"
            textAlign="center"
            color="#1c1489"
            gutterBottom
          >
            Meet Our Teachers
          </Typography>
        </Box>
            <br />
        <Box sx={{width: {xs: "95%",md:"80%"},margin: "0 auto"}}>
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
