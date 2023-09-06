import styles from "./contact.module.css"

export default function ContactUs() {
    return (    
        <div className={styles.container}>

         <h3 className={styles.about}>Ask About Kids Acts</h3>

           <form action="" className={styles.form}>
          <input type="text" className={styles.input} placeholder="Your Name"/>
          <br /> <br />
          <input type="email" required  className={styles.input} placeholder="Email Address" />
        <br /> <br />
          <input type="telephone" className={styles.input} placeholder="Phone Number"/>
          <br /> <br />
          <input type="text" className={styles.input} placeholder="Studying Class"/>
        
          <main className={styles.btn}>
           <button type="button" className={styles.view_all_btn}>View All</button> 
        </main>
          
           </form>
         
        </div>
    );
}