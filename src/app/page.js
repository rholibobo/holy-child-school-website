import Image from "next/image";
import styles from "./page.module.css";

import {EnrollNowButton,EnrollYourChildButton, ViewAllButton, ViewAllWhiteButton, CarouselLeftButton, CarouselRightButton} from "./components/Buttons/AllButtons";

export default function Home() {
  return (
    <main>
      <div>Home Page</div>
      <div style={{border: "2px solid pink"}}>
      <EnrollNowButton />
      <br />
      <EnrollYourChildButton />
      <br />
      <ViewAllButton />
      <br />
      <ViewAllWhiteButton />
      <br />
      <CarouselLeftButton />
      <br />
      <CarouselRightButton />
      </div>
      

      <div className={styles.div_1}>

      </div>
      <div className={styles.div_2}>

      </div>
      <div className={styles.div_1}>

      </div>
      <div className={styles.div_3}>

      </div>
      
    </main>

    
  );
}
