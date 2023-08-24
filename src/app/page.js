import Image from "next/image";
import styles from "./page.module.css";

import Header from "./components/Header/Header";
import {
  EnrollNowButton,
  ViewAllButton,
} from "./components/Buttons/AllButtons";

import { Box, Grid, Stack, Typography } from "@mui/material";

//////// Icons //////////
import { FcGraduationCap } from "react-icons/fc";
import { GiTrophyCup } from "react-icons/gi";
import { BiSolidBusSchool } from "react-icons/bi";
import { HiLightBulb } from "react-icons/hi";
import { BsPencilSquare } from "react-icons/bs";
import { FaBook } from "react-icons/fa";

/////////////// Image Styles ///////////////
const imageSection1 = {
  marginTop: "-4rem",
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
            <Grid item xs={6}>
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

            <Grid item xs={6}>
              <Box sx={{ width: "100%", height: "50vh", position: "relative" }}>
                <Image
                  src="/images/DesignImages/d5.png"
                  alt="School boy"
                  width={370}
                  height={530}
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
            position: "relative"
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
            <ViewAllButton />
          </Box>
          <div className={styles.section2_img}></div>
        </Box>
      </div>
    </main>
  );
}
