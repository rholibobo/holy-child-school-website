import React from "react";
import styles from "./bus.module.css"; // Import the CSS module

const BusGif = () => {
  return (
    <div className={styles.gifBackground}>
      <div className={styles.gif}></div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default BusGif;
