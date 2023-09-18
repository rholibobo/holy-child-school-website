"use client";

import { useState } from "react";
import { Box, Typography, Container } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";

import LinkRoute from "./LinkRoute";
import HamburgerMenu from "../MobileView/Hamburger";
import Image from "next/image";
import Logo from "../../../../public/HCLogo.png";

import styles from "./header.module.css";

export default function Header() {
  const isMobileView = useMediaQuery("(max-width:1000px)");

  return (
    <Box position="sticky" sx={{ boxShadow: "none", width: "100%" }}>
      <Container
        // maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: { xs: "0", md: "0.3rem" },
        }}
      >
        <Box
          sx={{
            width: { xs: "auto", md: "40%" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>{!isMobileView ? null : <HamburgerMenu />}</Box>

          <Box
            sx={{
              width: {xs: "50%", md:"100%"},
              display: "flex",
              alignItems: "center",
              justifyContent: {xs: "flex-end", md: "flex-start"},
              gap: { xs: "20px", md: "10px" },
              // border: "2px solid red"
            }}
          >
            <Image src={Logo} alt="logo" className={styles.logo} />
            <Typography
              
              sx={{display: {xs: "none", md: "block"}, color: "#ffffff" }}
              variant="subtitle2"
              // fontWeight="bold"
              gutterBottom
            >
              Holy Child Prep School
            </Typography>
          </Box>
        </Box>

        <Box sx={{ width: { xs: "", md: "65%" } }}>
          <Box
            sx={{
              // flexGrow: 1,
              // width: "100%",
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <LinkRoute />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// export default Navbar;
