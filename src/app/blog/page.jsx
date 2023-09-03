import React from "react";
import styles from "./page.module.css";

import Header from "../components/Header/Header";
import GifBackgroundSection from "../components/gifs/writing-video/vid";
import BusGif from "../components/gifs/bus/bus";

const data = [{}];

const page = () => {
  return (
    <section className={styles.container}>
      {/* ////////// SECTION 1 //////////// */}
      <div className={styles.section1}>
        <div className={styles.section_container}>
          <div className={styles.navbar}>
            <Header />
          </div>

          <section className={styles.headerContainer}>
            <div className={styles.blogHeader}>
              <h1>Welcome to Holychild's Blog</h1>
              <h2>Beyond the Books: Unveiling Our Blog</h2>
            </div>
            <div className={styles.vidContainer}>
              <GifBackgroundSection />
            </div>
            <div className={styles.busContainer}>
              <BusGif />
            </div>
          </section>
        </div>
      </div>
      <section className={styles.blogSection}>
        <h1 className={styles.latestBlog}>Latest Blogs</h1>
        <div className={styles.itemsContainer}>
          <div className={styles.item}>
            <h1>Discipleine a pupil</h1>
            <h2>
              Every student This 9 year old would grow up to tell his children
              about the supreme price some Nigerian youths paid in the wake of
              the #endsars protest of October 2020 because he was taught to pay
              attention to what the...
            </h2>
          </div>

          <div className={styles.item}>
            <h1>Discipleine a pupil</h1>
            <h2>
              Every student This 9 year old would grow up to tell his children
              about the supreme price some Nigerian youths paid in the wake of
              the #endsars protest of October 2020 because he was taught to pay
              attention to what the...
            </h2>
          </div>

          <div className={styles.item}>
            <h1>Discipleine a pupil</h1>
            <h2>
              Every student This 9 year old would grow up to tell his children
              about the supreme price some Nigerian youths paid in the wake of
              the #endsars protest of October 2020 because he was taught to pay
              attention to what the...
            </h2>
          </div>

          <div className={styles.item}>
            <h1>Discipleine a pupil</h1>
            <h2>
              Every student This 9 year old would grow up to tell his children
              about the supreme price some Nigerian youths paid in the wake of
              the #endsars protest of October 2020 because he was taught to pay
              attention to what the...
            </h2>
          </div>

          <div className={styles.item}>
            <h1>Discipleine a pupil</h1>
            <h2>
              Every student This 9 year old would grow up to tell his children
              about the supreme price some Nigerian youths paid in the wake of
              the #endsars protest of October 2020 because he was taught to pay
              attention to what the...
            </h2>
          </div>

          <div className={styles.item}>
            <h1>Discipleine a pupil</h1>
            <h2>
              Every student This 9 year old would grow up to tell his children
              about the supreme price some Nigerian youths paid in the wake of
              the #endsars protest of October 2020 because he was taught to pay
              attention to what the...
            </h2>
          </div>

          <div className={styles.item}>
            <h1>Discipleine a pupil</h1>
            <h2>
              Every student This 9 year old would grow up to tell his children
              about the supreme price some Nigerian youths paid in the wake of
              the #endsars protest of October 2020 because he was taught to pay
              attention to what the...
            </h2>
          </div>
        </div> 
      </section>
    </section>
  );
};

export default page;
