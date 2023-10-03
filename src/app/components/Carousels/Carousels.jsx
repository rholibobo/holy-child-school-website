"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

/////// iMAGE IMPORTs ////
import pix1 from "../../../../public/images/HomePage/port2.jpg";
import pix2 from "../../../../public/images/HomePage/port5.jpg";
import pix3 from "../../../../public/images/HomePage/port6.jpg";

// Teachers carousel imports
import Teacher1 from "../../../../public/images/Teachers/1d-2-transparentbg.png";
import Teacher2 from "../../../../public/images/Teachers/1a.jpeg";
import Teacher3 from "../../../../public/images/Teachers/1d.jpeg";
import Teacher4 from "../../../../public/images/Teachers/1f.jpeg";
import Teacher5 from "../../../../public/images/Teachers/1qs.jpeg";
import Teacher6 from "../../../../public/images/Teachers/1s.jpeg";
import Teacher7 from "../../../../public/images/Teachers/123.jpeg";
import Teacher8 from "../../../../public/images/Teachers/1234.jpeg";
import Teacher9 from "../../../../public/images/Teachers/12345.jpeg";
import Teacher10 from "../../../../public/images/Teachers/123456.jpeg";
import Teacher11 from "../../../../public/images/Teachers/wed.jpeg";

import { Blob } from "../TeachersComponents/TeachersComponents";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
// import { CarouselRightButton, CarouselLeftButton } from "../Carousels/";
import { CarouselLeftButton, CarouselRightButton } from "../Buttons/AllButtons";
import { Box } from "@mui/material";

export function MediaCard() {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=''
      containerClass='container'
      dotListClass=''
      draggable
      focusOnSelect={false}
      infinite={false}
      itemClass=''
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=''
      slidesToSlide={1}
      swipeable
    >
      <Card
        sx={{
          width: "93%",
          borderRadius: "10%",
        }}
      >
        <CardMedia
          sx={{ height: "55vh" }}
          image='/images/HomePage/prenursery-1.jpg'
          title='girl child'
        />

        <CardContent sx={{ backgroundColor: "#ffffff" }}>
          <Typography
            gutterBottom
            variant='body2'
            textAlign='center'
            component='div'
            // fontWeight="bold"
            // color="#ffffff"
          >
            Pre-Nursery
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          width: "93%",
          borderRadius: "10%",
        }}
      >
        <CardMedia
          sx={{ height: "55vh" }}
          image='/images/HomePage/nursery.jpg'
          title='girl child'
        />

        <CardContent sx={{ backgroundColor: "#ffffff" }}>
          <Typography
            gutterBottom
            variant='body2'
            textAlign='center'
            component='div'
            // fontWeight="bold"
            // color="#ffffff"
          >
            Nursery
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          width: "93%",
          borderRadius: "10%",
        }}
      >
        <CardMedia
          sx={{ height: "55vh" }}
          image='/images/HomePage/primary.jpg'
          title='girl child'
        />

        <CardContent sx={{ backgroundColor: "#ffffff" }}>
          <Typography
            gutterBottom
            variant='body2'
            textAlign='center'
            component='div'
            // fontWeight="bold"
            // color="#ffffff"
          >
            Primary
          </Typography>
        </CardContent>
      </Card>
    </Carousel>
  );
}
// <Carousel
//   additionalTransfrom={0}
//   arrows
//   autoPlay
//   autoPlaySpeed={1000}
//   centerMode={false}
//   className=""
//   containerClass="container-with-dots"
//   dotListClass=""
//   draggable
//   focusOnSelect={false}
//   infinite={false}
//   itemClass=""
//   keyBoardControl
//   minimumTouchDrag={80}
//   pauseOnHover
//   renderArrowsWhenDisabled={false}
//   renderButtonGroupOutside={false}
//   renderDotsOutside={false}
//   responsive={{
//     desktop: {
//       breakpoint: {
//         max: 3000,
//         min: 1024,
//       },
//       items: 1,
//       partialVisibilityGutter: 40,
//     },
//     mobile: {
//       breakpoint: {
//         max: 464,
//         min: 0,
//       },
//       items: 1,
//       partialVisibilityGutter: 30,
//     },
//     tablet: {
//       breakpoint: {
//         max: 1024,
//         min: 464,
//       },
//       items: 1,
//       partialVisibilityGutter: 30,
//     },
//   }}
//   rewind
//   rewindWithAnimation={false}
//   rtl={false}
//   shouldResetAutoplay
//   showDots={false}
//   sliderClass=""
//   slidesToSlide={2}
//   swipeable
// >
//   <Box sx={{borderRadius: "10%",}}>
//     <Image
//       src={pix1}
//       alt="Carousel Image"
//       style={{
//         width: "100%",
//         height: "auto",
//         borderRadius: "10%",
//       }}
//     />
//   </Box>
//   <Box sx={{borderRadius: "10%",}}>
//     <Image
//       src={pix2}
//       alt="Carousel Image"
//       style={{
//         width: "100%",
//         height: "auto",
//         borderRadius: "10%",
//       }}
//     />
//   </Box>
//   <Box sx={{borderRadius: "10%",}}>
//     <Image
//       src={pix2}
//       alt="Carousel Image"
//       style={{
//         width: "100%",
//         height: "auto",
//         borderRadius: "10%",
//       }}
//     />
//   </Box>
//   <Box sx={{borderRadius: "10%",}}>
//     <Image
//       src={pix3}
//       alt="Carousel Image"
//       style={{
//         width: "100%",
//         height: "auto",
//         borderRadius: "10%",
//       }}
//     />
//   </Box>
// </Carousel>
// Homepage Hero Section Carousel
export function HeroSectionCarousel() {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>
        {/* <Box>
          <Image
            src={pix1}
            alt="Carousel Image"
            style={{
              width: "100%",
              height: "100vh",
              borderRadius: "10%",
            }}
            // width={400}
            // height={400}
          />
        </Box> */}
        1
      </SwiperSlide>
      {/* <SwiperSlide>
        <Box>
          <Image
            src={pix2}
            alt="Carousel Image"
            // style={{
            //   // width: "100%",
            //   // height: "auto",
            //   borderRadius: "10%",
            // }}
            width={400}
            height={400}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box>
          <Image
            src={pix3}
            alt="Carousel Image"
            // style={{
            //   // width: "100%",
            //   // height: "auto",
            //   borderRadius: "10%",
            // }}
            width={400}
            height={400}
          />
        </Box>
      </SwiperSlide> */}
    </Swiper>
  );
}

// Teachers Carousel starts here

export function TeachersCarousel() {
  const TeachersData = [
    {
      id: 1,
      image: Teacher1,
      name: "Godwin Ikoughe",
      area_of_discipline: "School Head",
    },
    {
      id: 2,
      image: Teacher3,
      name: "Juliana Nwosu",
      area_of_discipline: "Deputy School Head",
    },
    {
      id: 3,
      image: Teacher4,
      name: "Marian Nebeife",
      area_of_discipline: "Math Teacher",
    },

    {
      id: 4,
      image: Teacher6,
      name: "Mrs. Yemisi Ajala",
      area_of_discipline: "Basic Science & Africa Teacher",
    },

    {
      id: 5,
      image: Teacher10,
      name: "Florence Ngene",
      area_of_discipline: "Social Studies Teacher",
    },

    {
      id: 6,
      image: Teacher2,
      name: "Oluebube Ike",
      area_of_discipline: "Classroom Teacher",
    },

    {
      id: 7,
      image: Teacher5,
      name: "Mrs. Peace Wilfred",
      area_of_discipline: "Pre-nursery Teacher",
    },
    {
      id: 8,
      image: Teacher9,
      name: "Uchechi Adiele",
      area_of_discipline: " Pre-nursery Teacher",
    },

    {
      id: 9,
      image: Teacher7,
      name: "Aninjoku Assumpta",
      area_of_discipline: "Nursery 2 Teacher",
    },
    {
      id: 10,
      image: Teacher8,
      name: "I Am A Nameless Teacher 1",
      area_of_discipline: "I Teach What hides in the belly of big fishes",
    },

    {
      id: 11,
      image: Teacher11,
      name: "I Am A Nameless Teacher 2",
      area_of_discipline: "I Teach Why politicians lie A lot ",
    },
  ];

  const content = TeachersData.map((teacher) => (
    <SwiperSlide>
      <Blob
        key={teacher.id}
        image={teacher.image}
        name={teacher.name}
        area_of_discipline={teacher.area_of_discipline}
      />
    </SwiperSlide>
  ));

  return (
    <Swiper
      spaceBetween={50}
      // slidesPerView={4}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
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
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {content}
    </Swiper>
  );
}
