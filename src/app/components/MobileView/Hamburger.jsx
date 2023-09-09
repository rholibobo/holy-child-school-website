"use client";

import Link from "next/link";
import styles from "./hamburger.module.css";

import { useState } from "react";

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

/////////// MUI ICONS /////////////////////
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import InfoIcon from "@mui/icons-material/Info";
import PeopleIcon from "@mui/icons-material/People";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import CollectionsIcon from "@mui/icons-material/Collections";
import PhoneIcon from "@mui/icons-material/Phone";
import RouteIcon from "@mui/icons-material/Route";

import { motion } from "framer-motion";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <GiHamburgerMenu
        onClick={toggleDrawer}
        style={{
          color: "black",
          fontSize: "30px",
          marginTop: "1rem",
          color: "#ffffff",
        }}
      />
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <Box sx={{ width: { xs: "250px", sm: "400px" } }}>
          <div styles={{ posiiton: "relative" }}>
            <IconButton
              onClick={() => setOpen(!open)}
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "40px",
                color: "#FC2F32",
              }}
            >
              <MdClose />
            </IconButton>
          </div>
          <br />
          <List sx={{ marginTop: "3rem" }}>
            <br />
            <motion.div
              whileTap={{ scale: 0.9 }}
              whileHover={{ backgroundColor: "#1c1465" }}
            >
              <Link href="/" className={styles.link_tag}>
                <ListItemButton className={styles.buttonHover}>
                  <ListItemIcon>
                    <HomeIcon className={styles.iconHover} />
                  </ListItemIcon>

                  <ListItemText primary="Home" />
                </ListItemButton>
              </Link>
            </motion.div>
            <br />
            <motion.div whileTap={{ scale: 0.9 }}>
              <Link href="/blog" className={styles.link_tag}>
                <ListItemButton className={styles.buttonHover}>
                  <ListItemIcon>
                    <BookIcon className={styles.iconHover} />
                  </ListItemIcon>

                  <ListItemText primary="Blog" />
                </ListItemButton>
              </Link>
            </motion.div>
            <br />
            <motion.div whileTap={{ scale: 0.9 }}>
              <Link href="/about-us" className={styles.link_tag}>
                <ListItemButton className={styles.buttonHover}>
                  <ListItemIcon>
                    <InfoIcon className={styles.iconHover} />
                  </ListItemIcon>

                  <ListItemText primary="About Us" />
                </ListItemButton>
              </Link>
            </motion.div>
            <br />
            <motion.div whileTap={{ scale: 0.9 }}>
              <Link href="/teachers" className={styles.link_tag}>
                <ListItemButton className={styles.buttonHover}>
                  <ListItemIcon>
                    <PeopleIcon className={styles.iconHover} />
                  </ListItemIcon>

                  <ListItemText primary="Meet Our Teachers" />
                </ListItemButton>
              </Link>
            </motion.div>
            <br />
            <motion.div whileTap={{ scale: 0.9 }}>
              <Link href="/services" className={styles.link_tag}>
                <ListItemButton className={styles.buttonHover}>
                  <ListItemIcon>
                    <MiscellaneousServicesIcon className={styles.iconHover} />
                  </ListItemIcon>

                  <ListItemText primary="Services" />
                </ListItemButton>
              </Link>
            </motion.div>
            <br />
            <motion.div whileTap={{ scale: 0.9 }}>
              <Link href="/gallery" className={styles.link_tag}>
                <ListItemButton className={styles.buttonHover}>
                  <ListItemIcon>
                    <CollectionsIcon className={styles.iconHover} />
                  </ListItemIcon>

                  <ListItemText primary="Gallery" />
                </ListItemButton>
              </Link>
            </motion.div>
            <br />
            <motion.div whileTap={{ scale: 0.9 }}>
              <Link href="/contact-us" className={styles.link_tag}>
                <ListItemButton className={styles.buttonHover}>
                  <ListItemIcon>
                    <PhoneIcon className={styles.iconHover} />
                  </ListItemIcon>

                  <ListItemText primary="Contact Us" />
                </ListItemButton>
              </Link>
            </motion.div>
            <br />
            <motion.div whileTap={{ scale: 0.9 }}>
              <Link href="#" className={styles.link_tag}>
                <ListItemButton className={styles.buttonHover}>
                  <ListItemIcon>
                    <RouteIcon className={styles.iconHover} />
                  </ListItemIcon>

                  <ListItemText primary="School Portal" />
                </ListItemButton>
              </Link>
            </motion.div>
            <br />
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
