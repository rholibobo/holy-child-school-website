"use client";

import Styles from "./footer.module.css";
import Link from "next/link";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Box, Typography } from "@mui/material";
import { LocationOn, LocalPhone, Fax, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer>
      <div className={Styles.container}>
        <Box
          sx={{
            width: {xs: "90%",md: "80%"},
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: {xs: "column", md: "row"}
          }}
        >
          <Box sx={{ width: {xs: "90%", md:"30%"}, color: "#ffffff", marginTop: "8rem" }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              Holy Child Preparatory School is a learning Community. Because of
              our strong background in reading, our practice is research –
              driven. We are constantly adopting new ideas & questioning our
              practices. We are also open to suggestions & criticisms.
            </Typography>
          </Box>
          <Box sx={{ width: {xs: "90%", md:"30%"}, color: "#ffffff", marginTop: {xs: "1rem", md: "8rem"} }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <LocationOn fontSize="small" />
              <Typography variant="body2" gutterBottom>
                Nza Street Independence layout Enugu
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <LocalPhone fontSize="small" />
              <Typography variant="body2" gutterBottom>
                Phone: +234 (701) 790 7896
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Fax fontSize="small" />
              <Typography variant="body2" gutterBottom>
                fax: +234 (80) 345 6789
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Email fontSize="small" />
              <Typography variant="body2" gutterBottom>
                contact@holychildpreparatory.org
              </Typography>
            </Box>
          </Box>

          <div className={Styles.linkContainer}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Links
            </Typography>
            <Link href="/" className={Styles.link}>
              Home
            </Link>
            <Link href="/blog" className={Styles.link}>
              Blog
            </Link>
            <Link href="/about-us" className={Styles.link}>
              About Us
            </Link>
            <Link href="/teachers" className={Styles.link}>
              Meet Our Teachers
            </Link>
            <Link href="/services" className={Styles.link}>
              Services
            </Link>
            <Link href="/gallery" className={Styles.link}>
              Gallery
            </Link>
            <Link href="/contact-us" className={Styles.link}>
              Contact Us
            </Link>
            <Link href="#" className={Styles.link}>
              School Portal
            </Link>
          </div>
        </Box>
        <div className={Styles.iconContainer}>
          <p className={Styles.iconHeader}>Follow Us:</p>
          <Link href="/">
            <AiFillInstagram className={Styles.icons} />
          </Link>
          <Link href="/">
            {" "}
            <BsFacebook className={Styles.icons} />
          </Link>
          <Link href="/">
            <AiOutlineTwitter className={Styles.icons} />
          </Link>
        </div>

        {/* svg */}
        <div className={Styles.custom}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            // viewBox="0 100 1200 500"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={Styles.shape}
            ></path>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
