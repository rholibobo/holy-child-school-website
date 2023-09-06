"use client";
import { useState } from "react";

import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { ArrowRight, ArrowDropDown } from "@mui/icons-material";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./header.module.css";

export default function ({ handleCloseNavMenu }) {
  const pathname = usePathname();

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: "1rem 0",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "1.2rem",
      }}
    >
      <Link href="/">
        <Button
          sx={{ textTransform: "capitalize", color: "#ffffff" }}
          color="inherit"
          className={pathname == "/" ? styles.active : ""}
        >
          Home
        </Button>
      </Link>

      <Link href="/about-us">
        <Button
          sx={{ textTransform: "capitalize", color: "#ffffff" }}
          color="inherit"
          className={pathname == "/about-us" ? styles.active : ""}
        >
          About Us
        </Button>
      </Link>

      <Link href="/services">
        <Button
          sx={{ textTransform: "capitalize", color: "#ffffff" }}
          color="inherit"
          className={pathname == "/services" ? styles.active : ""}
        >
          Services
        </Button>
      </Link>

      <Link href="/contact-us">
        <Button
          sx={{ textTransform: "capitalize", color: "#ffffff" }}
          color="inherit"
          className={pathname == "/contact-us" ? styles.active : ""}
        >
          Contact Us
        </Button>
      </Link>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ textTransform: "capitalize", color: "#ffffff" }}
        color="inherit"
        className={pathname == "/blog" ? styles.active : ""}
      >
        Learn More {!open ? <ArrowRight /> : <ArrowDropDown />}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem sx={{fontSize: "0.85rem"}} onClick={handleClose} divider="true">
          <Link href="/blog">
            <Typography gutterBottom
              sx={{
                textTransform: "capitalize",
                color: "#000000",
                fontSize: "0.85rem",
              }}
              color="inherit"
              className={pathname == "/about-us" ? styles.active : ""}
            >
              Blog
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem sx={{fontSize: "0.85rem"}} onClick={handleClose} divider="true">
          <Link href="/teachers">
            <Typography gutterBottom
              sx={{
                textTransform: "capitalize",
                color: "#000000",
                fontSize: "0.85rem",
              }}
              color="inherit"
              className={pathname == "/teachers" ? styles.active : ""}
            >
              Meet Our Teachers
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem sx={{fontSize: "0.85rem"}} onClick={handleClose} divider="true">
          <Link href="/gallery">
            <Typography gutterBottom
              sx={{
                textTransform: "capitalize",
                color: "#000000",
                fontSize: "0.85rem",
              }}
              color="inherit"
              className={pathname == "/gallery" ? styles.active : ""}
            >
              Gallery
            </Typography>
          </Link>
        </MenuItem>
      </Menu>
      <Link href="#">
        <Button
          sx={{ textTransform: "capitalize", color: "#ffffff" }}
          color="inherit"
        >
          School Portal
        </Button>
      </Link>
    </Box>
  );
}
