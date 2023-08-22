
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

import Header from "./components/Header/Header";

export default function Home() {
  return (
    <main>
      <div className={styles.section1}>
        <div className={styles.navbar}>
        <Header />

        </div>
      </div>
      
    </main>
  );
}
