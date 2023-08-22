"use client";

import { Box, Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./header.module.css"

export default function ({ handleCloseNavMenu }) {

    const pathname = usePathname();

    console.log(pathname)

    
  return (
    <Box sx={{padding: "1rem 0"}}>
      <Link href="/">
        <Button
          sx={{ textTransform: "capitalize", color: "black"}}
          color="inherit"
          onClick={handleCloseNavMenu}
          className={pathname == "/" ? styles.active : ""}
        >
          Home
        </Button>
      </Link>

      <Link href="/blog">
        <Button
          sx={{ textTransform: "capitalize", color: "black" }}
          color="inherit"
          onClick={handleCloseNavMenu}
          className={pathname == "/blog" ? styles.active : ""}
        >
          Blog
        </Button>
      </Link>
      <Link href="/about-us">
        <Button
          sx={{ textTransform: "capitalize", color: "black" }}
          color="inherit"
          onClick={handleCloseNavMenu}
          className={pathname == "/about-us" ? styles.active : ""}
        >
          About Us
        </Button>
      </Link>
      <Link href="/teachers">
        <Button
          sx={{ textTransform: "capitalize", color: "black" }}
          color="inherit"
          onClick={handleCloseNavMenu}
          className={pathname == "/teachers" ? styles.active : ""}
        >
          Meet Our Teachers
        </Button>
      </Link>
      <Link href="/services">
        <Button
          sx={{ textTransform: "capitalize", color: "black" }}
          color="inherit"
          onClick={handleCloseNavMenu}
          className={pathname == "/services" ? styles.active : ""}
        >
          Services
        </Button>
      </Link>
      <Link href="/gallery">
        <Button
          sx={{ textTransform: "capitalize", color: "black" }}
          color="inherit"
          onClick={handleCloseNavMenu}
          className={pathname == "/gallery" ? styles.active : ""}
        >
          Gallery
        </Button>
      </Link>
      <Link href="/contact-us">
        <Button
          sx={{ textTransform: "capitalize", color: "black" }}
          color="inherit"
          onClick={handleCloseNavMenu}
          className={pathname == "/contact-us" ? styles.active : ""}
        >
          Contact Us
        </Button>
      </Link>
      <Link href="#">
        <Button
          sx={{ textTransform: "capitalize", color: "black" }}
          color="inherit"
          onClick={handleCloseNavMenu}
        >
          School Portal
        </Button>
      </Link>
    </Box>
  );
}
