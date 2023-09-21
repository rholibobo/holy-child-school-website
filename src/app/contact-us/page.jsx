"use client";
import styles from "./contact-us.module.css";
import Header from "../components/Header/Header";
import Image from "next/image"; 
import Link from "next/link"                         
import { LocationOn, LocalPhone, Fax, Email } from "@mui/icons-material";
import { Box, Grid, Stack, Typography } from "@mui/material";
import {useMediaQuery} from "@mui/material";

export default function ContactUs() {
  return (
    <main>
      <div className={styles.navbar}>
          <Header />
        </div>
      <div className={styles.section1}>
        
        <section className={styles.section}>
          <div className={styles.contents}>
            <h1 className={styles.h1}>Contact us</h1>
            <p className={styles.contact_info}>
            Feel free to reach out to us using the contact form below, Your inquiries, feedback, and ideas are valuable to us as we continue to provide a nurturing and enriching educational environment for our students.
            </p>
            </div>
            {/* image */}
            <div className={styles.parent_container}>
              <img src="/images/DesignImages/phone.png" alt="My Contact Image" />
            </div>
        </section>
           
      </div>

       {/* get in touch */}
       {/* <div className={styles.wrapper}> */}
           <div className={styles.get_in_touch}>
                 <h2 className={styles.touch}>Get in Touch</h2>
                    <div className={styles.get_us}>
       
                    <div className={styles.get_address}>
                    <h3 className={styles.text} > < LocationOn /> Address </h3> 
                       <p> For inquiries, or to reach us in person, visit us at Nza Street, Independence Layout Enugu, Nigeria</p>
                    </div>

                      <div className={styles.get_email}>
                        <h3 className={styles.text_em}> < Email /> Email </h3>
                       <p> We're here to assist you. Share your thoughts, questions, or feedback at
                       </p>
                       <Link href="mailto:info@holychildpreparatory.org" className={styles.email_link}>
                       info@holychildpreparatory.org
                       </Link> 
                    
                      </div>

                      <div className={styles.get_number}>
                      <h4 className={styles.text_ph}> < LocalPhone /> Phone Number </h4>
                        <p>To call or chat with our team, contact us with +234 803 740 8466 or +234 701 790 7896   </p>
                      </div>
                     
                    </div>
            </div>
            {/* </div> */}
        {/* map location */}
     <div className={styles.map_contacts}>
                <div className={styles.section7}>
          <Box sx={{}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15858.205064690168!2d7.531379!3d6.451606!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a5aae5e5b3d1%3A0xb1a3fb1573962ad7!2sHoly%20Child%20Preparatory%20School!5e0!3m2!1sen!2sus!4v1693227391900!5m2!1sen!2sus"
            style={{ width: "100%", height: "100vh", border: "0"}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </div> 

                </div>

     {/* contact-form  */}

     <div className={styles.know_about}>

       <div className={styles.assist_you}>
        <h1>How Can We Assist You?</h1>
       </div>
       {/* contact form */}
           <div className={styles.container}>

         <h3 className={styles.about}>Contact Us</h3>

           <form action="" className={styles.form}>
          <input type="text" className={styles.input} placeholder="First Name"/>
          <br /> <br />
          <input type="text" className={styles.input} placeholder="Last Name"/>
          <br /> <br />
          <input type="email" required  className={styles.input} placeholder="Email Address" />
        <br /> <br />
          <textarea className={styles.input} placeholder="Message" name="" id="" cols="30" rows="10"></textarea>

          <main className={styles.btn}> 
           <button type="button" className={styles.view_all_btn}>Submit</button> 
        </main>
         
         
          
           </form>
         
        </div> 
    
     </div>
          

      
    </main>
  );
}
