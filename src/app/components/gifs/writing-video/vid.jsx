import React from "react";
import styles from "./vid.module.css"; // Import the CSS module

const GifBackgroundSection = () => {
  return (
    <div className={styles.gifBackground}>
      <div className={styles.gif}></div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default GifBackgroundSection;
