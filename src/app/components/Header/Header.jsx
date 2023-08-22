"use client";

import { useState } from "react";
import { Box, Typography, Container } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";

import LinkRoute from "./LinkRoute";
import HamburgerMenu from "../MobileView/Hamburger";

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
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {!isMobileView ? null : <HamburgerMenu />}
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>

        <Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <LinkRoute  />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// export default Navbar;
