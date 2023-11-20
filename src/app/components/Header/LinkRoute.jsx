"use client";
import { useState } from "react";

import {
  Box,
  Button,
  Menu,
  MenuItem,
  Popover,
  Typography,
} from "@mui/material";
import { ArrowRight, ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

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
          sx={{
            textTransform: "capitalize",
            color: "#ffffff",
            ":hover": { fontWeight: "bold", backgroundColor: "transparent" },
          }}
          color="inherit"
          className={pathname == "/" ? styles.active : ""}
        >
          Home
        </Button>
      </Link>

      <Link href="/about-us">
        <Button
          sx={{
            textTransform: "capitalize",
            color: "#ffffff",
            ":hover": { fontWeight: "bold", backgroundColor: "transparent" },
          }}
          color="inherit"
          className={pathname == "/about-us" ? styles.active : ""}
        >
          About Us
        </Button>
      </Link>

      <Link href="/services">
        <Button
          sx={{
            textTransform: "capitalize",
            color: "#ffffff",
            ":hover": { fontWeight: "bold", backgroundColor: "transparent" },
          }}
          color="inherit"
          className={pathname == "/services" ? styles.active : ""}
        >
          Services
        </Button>
      </Link>

      <Link href="/contact-us">
        <Button
          sx={{
            textTransform: "capitalize",
            color: "#ffffff",
            ":hover": { fontWeight: "bold", backgroundColor: "transparent" },
          }}
          color="inherit"
          disableFocusRipple={true}
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
        onMouseEnter={handleClick}
        
        sx={{
          textTransform: "capitalize",
          color: "#ffffff",
          ":hover": { fontWeight: "bold", backgroundColor: "transparent" },
        }}
        color="inherit"
        className={pathname == "/blog" ? styles.active : ""}
      >
        Learn More {!open ? <ArrowDropDown /> : <ArrowDropUp />}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // MenuListProps={{
        //   "aria-labelledby": "basic-button",
        // }}
        
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <Link href="/blog">
          <MenuItem
            sx={{ fontSize: "0.85rem" }}
            onClick={handleClose}
            divider={true}
          >
            <Typography
              gutterBottom
              sx={{
                textTransform: "capitalize",
                color: "#000000",
                fontSize: "0.85rem",
              }}
              color="inherit"
            >
              Blog
            </Typography>
          </MenuItem>
        </Link>
        <Link href="/teachers">
          <MenuItem
            sx={{ fontSize: "0.85rem" }}
            onClick={handleClose}
            divider={true}
          >
            <Typography
              gutterBottom
              sx={{
                textTransform: "capitalize",
                color: "#000000",
                fontSize: "0.85rem",
              }}
              color="inherit"
            >
              Meet Our Teachers
            </Typography>
          </MenuItem>
        </Link>
        <Link href="/gallery">
          <MenuItem
            sx={{ fontSize: "0.85rem" }}
            onClick={handleClose}
            divider={true}
          >
            <Typography
              gutterBottom
              sx={{
                textTransform: "capitalize",
                color: "#000000",
                fontSize: "0.85rem",
              }}
              color="inherit"
            >
              Gallery
            </Typography>
          </MenuItem>
        </Link>
      </Menu>
      <Link href="#">
        <Button
          sx={{ textTransform: "capitalize", color: "#ffffff" }}
          color="inherit"
          className={styles.portal_btn}
        >
          School Portal
        </Button>
      </Link>
    </Box>
  );
}
