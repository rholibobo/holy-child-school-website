import Image from "next/image";
import styles from "./page.module.css";

import Header from "./components/Header/Header";

export default function Home() {
  return (
    <main>
      <div className={styles.section1}>
        <div className={styles.navbar}>
          <Header />
        </div>
        {/* <div className={styles.test}>
          <div className={styles.testd}></div>
        </div> */}
      </div>
      <div className={styles.section2}></div>
    </main>
  );
}
