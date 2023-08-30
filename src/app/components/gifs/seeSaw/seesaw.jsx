import React from "react";
import styles from "./seesaw.module.css"; // Import the CSS module

const Seesaw = () => {
  return (
    <div className={styles.gifBackground}>
      <div className={styles.gif}></div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default Seesaw;
