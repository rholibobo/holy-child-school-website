import React from "react";
import styles from "./layout.module.css";
import Header from "../../components/Header/Header";

export const metadata = {
  title: "Holy Child School",
  description: "Holy Child School Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.section1}>
          <Header />
          <div className={styles.section_container}>
            <div className={styles.blogHeader}>
              <h1>Explore Holychild's Blog</h1>
              <h2>Discover More Beyond the Classroom</h2>
            </div>
          </div>
        </div>
        <div className={styles.children}>{children}</div>
      </body>
    </html>
  );
}
