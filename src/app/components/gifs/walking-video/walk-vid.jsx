import React from "react";
import styles from "./walkvid.module.css"; // Import the CSS module

const WalkVid = () => {
  return (
    <div className={styles.gifBackground}>
      <div className={styles.gif}></div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default WalkVid;
