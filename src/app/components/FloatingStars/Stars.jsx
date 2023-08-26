import { motion } from "framer-motion";

import styles from "./stars.module.css"
import Image from "next/image";

export default function FloatingStars() {
    return (
        <div className={styles.designs}>
          <motion.div
            initial={{x: 0}}
            animate={{ x: 50 }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
          >
            <Image
              src="/images/HomePage/slider1.png"
              width={80}
              height={150}
              alt="animation"
            />
            <Image
              src="/images/HomePage/slider2.png"
              width={80}
              height={150}
              alt="animation"
            />
            <Image
              src="/images/HomePage/slider3.png"
              width={80}
              height={150}
              alt="animation"
            />
            <Image
              src="/images/HomePage/slider4.png"
              width={80}
              height={150}
              alt="animation"
            />
            
          </motion.div>
          <motion.div
            initial={{x: 0}}
            animate={{ x: 50 }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
          >
            <Image
              src="/images/HomePage/slider1.png"
              width={80}
              height={150}
              alt="animation"
            />
            <Image
              src="/images/HomePage/slider2.png"
              width={80}
              height={150}
              alt="animation"
            />
            <Image
              src="/images/HomePage/slider3.png"
              width={80}
              height={150}
              alt="animation"
            />
            <Image
              src="/images/HomePage/slider4.png"
              width={80}
              height={150}
              alt="animation"
            />
            
          </motion.div>
          <motion.div
            initial={{x: 0}}
            animate={{ x: 50 }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
          >
            <Image
              src="/images/HomePage/slider1.png"
              width={80}
              height={150}
              alt="animation"
            />
            <Image
              src="/images/HomePage/slider2.png"
              width={80}
              height={150}
              alt="animation"
            />
            <Image
              src="/images/HomePage/slider3.png"
              width={80}
              height={150}
              alt="animation"
            />
            <Image
              src="/images/HomePage/slider4.png"
              width={80}
              height={150}
              alt="animation"
            />
            
          </motion.div>
          
        </div>
    );
}