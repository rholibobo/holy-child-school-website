import React from "react";
import styles from "./page.module.css"; // Import the CSS module

const LoadingGif = () => {
  return (
    <div className={styles.gifBackground}>
      <div className={styles.gif}></div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default LoadingGif;
