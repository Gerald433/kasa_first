import React from "react";
import background from "../../assets/images/photoBackgroundIndex.jpg";
import styles from "./BannerHome.module.css";

const BannerHome = function () {
  console.log("toto");

  return (
    <main>
      {/* <div className={styles.cards-container}></div> */}

      <section className={styles.pubSiteSection}>
        <img
          className={styles.photoPubSite}
          src={background}
          alt="Photo publicitaire représentant un décors de chaines de montagnes"
        />
        <h1 className={styles.titlePubSite}>Chez vous, partout et ailleurs</h1>
      </section>
    </main>
  )}     

export default BannerHome;
