
import Image from "next/image";
import styles from "./page.module.css";

import {
  EnrollNowButton,
  EnrollYourChildButton,
  ViewAllButton,
  ViewAllWhiteButton,
  CarouselLeftButton,
  CarouselRightButton,
} from "./components/Buttons/AllButtons";
import Footer from "@/components/footer/footer";
import {
  EnrollNowButton,
  EnrollYourChildButton,
  ViewAllButton,
  ViewAllWhiteButton,
  CarouselLeftButton,
  CarouselRightButton,
} from "./components/Buttons/AllButtons";

import Header from "./components/Header/Header";

export default function Home() {
  return (
    <main>
      <div>Home Page</div>
      <div style={{ border: "2px solid pink" }}>
        <EnrollNowButton />
        <br />
        <EnrollYourChildButton />
        <br />
        <ViewAllButton />
        <br />
        <ViewAllWhiteButton />
        <br />
        <CarouselLeftButton />
        <br />
        <CarouselRightButton />
      </div>

      <div className={styles.div_1}></div>
      <div className={styles.div_2}></div>
      <div className={styles.div_1}></div>
      <div className={styles.div_3}></div>
      <div className={styles.section1}>
        <div className={styles.navbar}>
        <Header />

        </div>
      </div>
      
    </main>
  );
}
