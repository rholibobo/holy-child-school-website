import React from "react";
import styles from "./earth.module.css"; // Import the CSS module

const Earth = () => {
  return (
    <div className={styles.gifBackground}>
      <div className={styles.gif}></div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default Earth;
