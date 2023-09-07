"use client";

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

import { Blob } from "../TeachersComponents/TeachersComponents";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import { teachersData } from "@/app/teachers/teachersData";

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
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={false}
      itemClass=""
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
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <Card
        sx={{
          width: "93%",
          border: "2px solid #ffffff",
          borderRadius: "30% 20% 40% 10%",
        }}
      >
        <CardMedia
          sx={{ height: "55vh" }}
          image="/images/HomePage/prenursery-1.jpg"
          title="girl child"
        />

        <CardContent sx={{ backgroundColor: "#1faded" }}>
          <Typography
            gutterBottom
            variant="h6"
            textAlign="center"
            component="div"
            fontWeight="bold"
            color="#ffffff"
          >
            Pre-Nursery
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          width: "93%",
          border: "2px solid #ffffff",
          borderRadius: "30% 20% 40% 10%",
        }}
      >
        <CardMedia
          sx={{ height: "55vh" }}
          image="/images/HomePage/nursery.jpg"
          title="girl child"
        />

        <CardContent sx={{ backgroundColor: "#bb56e2" }}>
          <Typography
            gutterBottom
            variant="h6"
            textAlign="center"
            component="div"
            fontWeight="bold"
            color="#ffffff"
          >
            Nursery
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          width: "93%",
          border: "2px solid #ffffff",
          borderRadius: "30% 20% 40% 10%",
        }}
      >
        <CardMedia
          sx={{ height: "55vh" }}
          image="/images/HomePage/primary.jpg"
          title="girl child"
        />

        <CardContent sx={{ backgroundColor: "#919497" }}>
          <Typography
            gutterBottom
            variant="h6"
            textAlign="center"
            component="div"
            fontWeight="bold"
            color="#ffffff"
          >
            Primary
          </Typography>
        </CardContent>
      </Card>
    </Carousel>
  );
}

// const CustomRightArrow = ({ onClick }) => {
//   return (
//     <button className='iconsDiv bg-pink-500 '>
//       <FcNext className='text-gray-200' onClick={() => onClick()} />
//     </button>
//   );
// };

// const CustomLeftArrow = ({ onClick }) => {
//   return (
//     <button className='iconsDiv bg-pink-500 '>
//       <FcPrevious className='text-gray-200' onClick={() => onClick()} />
//     </button>
//   );
// };

// Homepage Hero Section Carousel
export function HeroSectionCarousel() {
  return (
  <Carousel
    additionalTransfrom={0}
    arrows
    autoPlay
    autoPlaySpeed={4000}
    centerMode={false}
    className=""
    containerClass="container-with-dots"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite={false}
    itemClass=""
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
        items: 1,
        partialVisibilityGutter: 30,
      },
    }}
    rewind
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    showDots={false}
    sliderClass=""
    slidesToSlide={2}
    swipeable
  >
    <Box >
      <Image
        src={pix1}
        alt="Carousel Image"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "20% 10% 30% 20%",
          border: "2px solid #ffffff",
        }}
      />
    </Box>
    <Box >
      <Image
        src={pix2}
        alt="Carousel Image"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "20% 10% 30% 20%",
          border: "2px solid #ffffff",
        }}
      />
    </Box>
    <Box >
      <Image
        src={pix2}
        alt="Carousel Image"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "20% 10% 30% 20%",
          border: "2px solid #ffffff",
        }}
      />
    </Box>
    <Box>
      <Image
        src={pix3}
        alt="Carousel Image"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "20% 10% 30% 20%",
          border: "2px solid #ffffff",
        }}
      />
    </Box>
  </Carousel>
  );
}

// Teachers Carousel starts here

const ButtonGroup = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className='carousel-button-group absolute w-[80%] lg:w-full lg:top-1/2'>
      <button
        className={`${
          currentSlide === 0 ? "disable" : ""
        } iconsDiv bg-pink-500 active:bg-gray-400 transition  duration-100 absolute right-full `}
        onClick={() => previous()}
      >
        <FcPrevious className="text-gray-200" />
      </button>

      {/* Next button */}

      <button
        className="iconsDiv bg-pink-500  active:bg-gray-400 transition  duration-100 absolute left-full "
        onClick={() => next()}
      >
        <FcNext className="text-gray-200" />
      </button>
    </div>
  );
};

export function TeachersCarousel() {
  return (
    <div className="relative">
      <Carousel
        additionalTransfrom={0}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={true}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderDotsOutside={false}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 2,
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
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {/* {teachersData.map((teacher) => {
          <Blob key={teacher.id} {...teacher} />;
        })} */}

        <Blob />
        <Blob />
        <Blob />
        <Blob />
        <Blob />
        <Blob />
      </Carousel>
    </div>
  );
}
