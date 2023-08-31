// import styles from "./contact-us.module.css";
// import Header from "../components/Header/Header";
// import Image from "next/image";

// export default function ContactUs() {
//     return (
//         <main>
//             <div className={styles.section1}>
//         <div className={styles.navbar}>
//           <Header />
//         </div>
//         <section className={styles.section}>
//             <div className={styles.contents}>
//             <h1 className={styles.h1}>Contact us</h1>
//             <p className={styles.contact_info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
//          Quas tempore eos illum dolores possimus maxime similique <br /> commodi 
//          consequuntur esse officia.</p>
//             </div>
//             <Image
//                src="/"
//                 width={500}
//                 height={500}
//             alt="Picture of the author"
//                />

//         </section>
//     </div>
//         </main>
//     );
// }
import styles from "./contact-us.module.css";
import Header from "../components/Header/Header";
import Image from "next/image"; // Use lowercase "image" here

export default function ContactUs() {
  return (
    <main>
      <div className={styles.section1}>
        <div className={styles.navbar}>
          <Header />
        </div>
        <section className={styles.section}>
          <div className={styles.contents}>
            <h1 className={styles.h1}>Contact us</h1>
            <p className={styles.contact_info}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Quas tempore eos illum dolores possimus maxime similique <br /> commodi consequuntur esse officia.
            </p>
            </div>
            <div className={styles.img}>
            <Image
            src="/images/DesignImages/book2.png" // Make sure the path is correct
            width={420}
            height={480}
            alt="image of a book"
            
          />
            </div>
        </section>
      </div>
    </main>
  );
}
