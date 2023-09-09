import React from "react";
import styles from "./layout.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";

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
              <h1>Welcome to Holychild's Blog</h1>
              <h2>Beyond the Books: Unveiling Our Blog</h2>
            </div>
          </div>
        </div>
        <div className={styles.children}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
