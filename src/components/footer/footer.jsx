import React from "react";
import Styles from "./footer.module.css";
import Link from "next/link";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.linkContainer}>
        <Link href="/" className={Styles.link}>
          Home
        </Link>
        <Link href="/" className={Styles.link}>
          Administration
        </Link>
        <Link href="/" className={Styles.link}>
          Faculty
        </Link>
        <Link href="/" className={Styles.link}>
          parents & students
        </Link>
        <Link href="/" className={Styles.link}>
          Photo gallery
        </Link>
        <Link href="/" className={Styles.link}>
          bookmarks
        </Link>
        <Link href="/" className={Styles.link}>
          calender
        </Link>
      </div>
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
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={Styles.shape}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Footer;
