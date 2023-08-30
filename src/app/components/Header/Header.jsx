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

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box position="static" sx={{ boxShadow: "none", width: "100%" }}>
      <Container
        // maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "10%" },
            display: "flex",
            justifyContent: { xs: "space-between", md: "space-between" },
            alignItems: "center",
          }}
        >
          {!isMobileView ? null : <HamburgerMenu />}

          <Image
            src={Logo}
            alt="logo"
            // width={50}
            // height={50}
           className={styles.logo}
          />
        </Box>

        <Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <LinkRoute />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// export default Navbar;
