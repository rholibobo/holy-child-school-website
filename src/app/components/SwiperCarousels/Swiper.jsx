"use client";

// //// SWIPER IMPORTS /////// //
import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectFade,
  Autoplay,
  EffectCube,
  EffectCards,
  Grid,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

import styles from "./swiper.module.css";

import imageData from "./image-data";

import Image from "next/image";

import port3 from "../../../../public/images/Homepage/port3.jpg";
import port4 from "../../../../public/images/Homepage/port4.jpg";
import port5 from "../../../../public/images/Homepage/port8.jpg";
import port6 from "../../../../public/images/Homepage/portfolio1.jpg";
import port7 from "../../../../public/images/Homepage/port7.jpg";

// SVG IMPORTS //
import love from "../../../../public/svg/love.svg";
import trophy from "../../../../public/svg/trophy.svg";
import student from "../../../../public/svg/student.svg";
import fteacher from "../../../../public/svg/fteacher.svg";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";

export function HomeHero() {
  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        Autoplay,
        EffectCube,
        EffectFade,
      ]}
      effect={"fade"}
      grabCursor={true}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      // navigation={true}
    >
      {imageData["homeHero"].map((image, i) => (
        <SwiperSlide key={i}>
          <Image
            src={image}
            alt="Carousel Image"
            style={{
              width: "100%",
              height: "100vh",
              
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const SwiperClass = () => {
  return (
    <div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      {/* <!-- Your content goes here --> */}
    </div>
    {/* <!-- Add more slides as needed --> */}
  </div>
  {/* <!-- Add Pagination --> */}
  <div class="swiper-pagination"></div>
</div>
  )
}
  



// var swiper = new Swiper('.swiper-container', {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

export function MediaCardCarousel() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Autoplay, Navigation, Pagination]}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      navigation={true}
      spaceBetween={50}
      slidesPerView={1}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Card
          sx={{
            width: { xs: "95%", md: "80%" },
            borderRadius: "10%",
          }}
        >
          <CardMedia
            sx={{ height: "55vh" }}
            image="/images/HomePage/prenursery-1.jpg"
            title="girl child"
          />

          <CardContent sx={{ backgroundColor: "#ffffff" }}>
            <Typography
              gutterBottom
              variant="body"
              textAlign="center"
              component="div"
              fontWeight="bold"
              color="#1c1486"
            >
              Pre-Nursery
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          sx={{
            width: { xs: "95%", md: "80%" },
            borderRadius: "10%",
          }}
        >
          <CardMedia
            sx={{ height: "55vh" }}
            image="/images/HomePage/nursery.jpg"
            title="girl child"
          />

          <CardContent sx={{ backgroundColor: "#ffffff" }}>
            <Typography
              gutterBottom
              variant="body"
              textAlign="center"
              component="div"
              fontWeight="bold"
              color="#1c1486"
            >
              Nursery
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          sx={{
            width: { xs: "95%", md: "80%" },
            borderRadius: "10%",
          }}
        >
          <CardMedia
            sx={{ height: "55vh" }}
            image="/images/HomePage/primary.jpg"
            title="girl child"
          />

          <CardContent sx={{ backgroundColor: "#ffffff" }}>
            <Typography
              gutterBottom
              variant="body"
              textAlign="center"
              component="div"
              fontWeight="bold"
              color="#1c1486"
            >
              Primary
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
}

export function GalleryCarousel() {
  return (
    <Swiper
      modules={[Pagination, Grid, Autoplay]}
      grid={{
        rows: 2,
        fill: "row",
      }}
      // slidesPerView={3}

      spaceBetween={30}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      lazy="true"
      className="mySwiper"
      // slidesPerView={2}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      {imageData["homeGallery"].map((image, i) => (
        <SwiperSlide key={i}>
          <Image
            src={image}
            alt="Gallery Image1"
            loading="lazy"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function TeachersCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      pagination={{ clickable: true }}
      navigation={true}
      lazy={true}
      // spaceBetween={50}
      // slidesPerView={3}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      <SwiperSlide>
        <Card
          sx={{
            width: "100%",
            borderRadius: "10%",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
          }}
        >
          <CardMedia
            sx={{ height: "55vh" }}
            image="/images/Teachers/1d-2.jpg"
            title="girl child"
          />

          <CardContent sx={{ backgroundColor: "#ffffff" }}>
            <Typography
              gutterBottom
              variant="body1"
              textAlign="center"
              component="div"
              fontWeight="bold"
              // color="#ffffff"
            >
              GODWIN IKOUGHE
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              textAlign="center"
              component="div"
              fontWeight="bold"
              // color="#ffffff"
            >
              School Head
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          sx={{
            width: "100%",
            borderRadius: "10%",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
          }}
        >
          <CardMedia
            sx={{ height: "55vh" }}
            image="/images/Teachers/1d.jpeg"
            title="girl child"
          />

          <CardContent sx={{ backgroundColor: "#ffffff" }}>
            <Typography
              gutterBottom
              variant="body1"
              textAlign="center"
              component="div"
              fontWeight="bold"
              // color="#ffffff"
            >
              JULIANA NWOSU
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              textAlign="center"
              component="div"
              fontWeight="bold"
              // color="#ffffff"
            >
              Deputy School Head
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          sx={{
            width: "100%",
            borderRadius: "10%",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
          }}
        >
          <CardMedia
            sx={{ height: "55vh" }}
            image="/images/Teachers/1f.jpeg"
            title="girl child"
          />

          <CardContent sx={{ backgroundColor: "#ffffff" }}>
            <Typography
              gutterBottom
              variant="body1"
              textAlign="center"
              component="div"
              fontWeight="bold"
              // color="#ffffff"
            >
              MARIAN NEBEIFE
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              textAlign="center"
              component="div"
              fontWeight="bold"
              // color="#ffffff"
            >
              MATH TEACHER
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          sx={{
            width: "100%",
            borderRadius: "10%",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
          }}
        >
          <CardMedia
            sx={{ height: "55vh" }}
            image="/images/Teachers/1s.jpeg"
            title="girl child"
          />

          <CardContent sx={{ backgroundColor: "#ffffff" }}>
            <Typography
              gutterBottom
              variant="body1"
              textAlign="center"
              component="div"
              fontWeight="bold"
              // color="#ffffff"
            >
              MRS. YEMISI AJALA
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              textAlign="center"
              component="div"
              fontWeight="bold"
              // color="#ffffff"
            >
              BASIC SCIENCE & AFRICA TEACHER
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
}

export function AchievementCarousel() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: "15px", md: "0" },
      }}
    >
      <Paper
        // elevation={1}
        sx={{
          width: { xs: "95%", md: "20%" },
          margin: { xs: "0 auto", md: "0" },
          height: "40vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
        className={styles.paper}
      >
        <Image src={love} alt="love" className={styles.card_svg} />
        <Typography variant="body1" fontWeight="bold" gutterBottom>
          150+
        </Typography>
        <Typography variant="body2" fontWeight="bold" gutterBottom>
          FRANCHISES
        </Typography>
      </Paper>

      <Paper
        // elevation={1}
        sx={{
          width: { xs: "95%", md: "20%" },
          margin: { xs: "0 auto", md: "0" },
          height: "40vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
        className={styles.paper}
      >
        <Image src={trophy} alt="trophy" className={styles.card_svg} />
        <Typography variant="body1" fontWeight="bold" gutterBottom>
          50+
        </Typography>
        <Typography variant="body2" fontWeight="bold" gutterBottom>
          CHILDREN TAKEN
        </Typography>
      </Paper>

      <Paper
        // elevation={1}
        sx={{
          width: { xs: "95%", md: "20%" },
          margin: { xs: "0 auto", md: "0" },
          height: "40vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
        className={styles.paper}
      >
        <Image src={student} alt="love" className={styles.card_svg} />
        <Typography variant="body1" fontWeight="bold" gutterBottom>
          120+
        </Typography>
        <Typography variant="body2" fontWeight="bold" gutterBottom>
          CHILDREN
        </Typography>
      </Paper>

      <Paper
        // elevation={1}
        sx={{
          width: { xs: "95%", md: "20%" },
          margin: { xs: "0 auto", md: "0" },
          height: "40vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
        className={styles.paper}
      >
        <Image src={fteacher} alt="trophy" className={styles.card_svg} />
        <Typography variant="body1" fontWeight="bold" gutterBottom>
          50+
        </Typography>
        <Typography variant="body2" fontWeight="bold" gutterBottom>
          STAFF & TEACHERS
        </Typography>
      </Paper>
    </Box>
  );
}
