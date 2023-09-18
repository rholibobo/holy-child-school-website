import React from "react";
import styles from "./error.module.css"; // Import the CSS module

const ErrorGif = () => {
  return (
    <div className={styles.gifBackground}>
      <div className={styles.gif}></div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default ErrorGif;
