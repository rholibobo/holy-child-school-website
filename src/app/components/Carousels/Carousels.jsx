"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// import { CarouselRightButton, CarouselLeftButton } from "../Carousels/";
import { CarouselLeftButton, CarouselRightButton } from "../Buttons/AllButtons";

const CustomRightArrow = ({ onClick }) => {
  return <button onClick={() => onClick()}></button>;
};

const CustomLeftArrow = ({ onClick }) => {
  return <button onClick={() => onClick()}></button>;
};

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
