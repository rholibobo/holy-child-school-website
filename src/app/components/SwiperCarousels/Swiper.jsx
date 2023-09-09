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
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

import Image from "next/image";

/////// iMAGE IMPORTs ////
import pix1 from "../../../../public/images/HomePage/port2.jpg";
import pix2 from "../../../../public/images/HomePage/port5.jpg";
import pix3 from "../../../../public/images/HomePage/port6.jpg";


import port3 from "../../../../public/images/Homepage/port3.jpg";
import port4 from "../../../../public/images/Homepage/port4.jpg";
import port5 from "../../../../public/images/Homepage/port8.jpg";
import port6 from "../../../../public/images/Homepage/portfolio1.jpg";
import port7 from "../../../../public/images/Homepage/port7.jpg";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export function HomeHero() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectCube]}
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      // effect={"fade"}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={true}
    >
      <SwiperSlide>
        <Image
          src={pix1}
          alt="Carousel Image"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={pix2}
          alt="Carousel Image"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={pix3}
          alt="Carousel Image"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
}

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
            width: "80%",
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
              variant="body2"
              textAlign="center"
              component="div"
              // fontWeight="bold"
              // color="#ffffff"
            >
              Pre-Nursery
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          sx={{
            width: "80%",
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
              variant="body2"
              textAlign="center"
              component="div"
              // fontWeight="bold"
              // color="#ffffff"
            >
              Nursery
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          sx={{
            width: "80%",
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
              variant="body2"
              textAlign="center"
              component="div"
              // fontWeight="bold"
              // color="#ffffff"
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
      modules={[Navigation, Pagination, Scrollbar]}
      pagination={{ clickable: true }}
      navigation={true}
      spaceBetween={50}
      slidesPerView={2}
     
    >
      <SwiperSlide>
        <Image
          src={port3}
          alt="Gallery Image1"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={port4}
          alt="Gallery Image1"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={port5}
          alt="Gallery Image1"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={port6}
          alt="Gallery Image1"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={port7}
          alt="Gallery Image1"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
}
