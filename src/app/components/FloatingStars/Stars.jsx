import Image from "next/image";
import { Box } from "@mui/material";
import slider1 from "../../../../public/images/HomePage/slider1.png";
import slider2 from "../../../../public/images/HomePage/slider2.png";
import slider3 from "../../../../public/images/HomePage/slider3.png";
import slider4 from "../../../../public/images/HomePage/slider4.png";

import { motion } from "framer-motion";



import styles from "./stars.module.css";

export default function FloatingStars() {
  return (
    <Box className={styles.stars_designs}>
      <Box sx={{display: "flex"}}>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 50 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <Image
            src={slider1}
            alt="animation"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <Image
            src={slider2}
            alt="animation"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <Image
            src={slider3}
            alt="animation"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <Image
            src={slider4}
            alt="animation"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </motion.div>
      </Box>
    </Box>
  );
}
