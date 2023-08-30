import React from "react";
import styles from "./baloon.module.css"; // Import the CSS module

const Baloon = () => {
  return (
    <div className={styles.gifBackground}>
      <div className={styles.gif}></div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default Baloon;
