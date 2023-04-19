import React from "react";
import "./BannerApropos.module.css"
import background2 from "../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2 (1).jpg"
import styles from "./BannerApropos.module.css";

const BannerApropos = function () {
  return (
    <main>
    <section className={styles.pubSiteSection}>
        <img
        className={styles.photoPubSite}
        src={background2}
        alt="photo de chaine de montagne et de forets."
        />
    </section>
    </main>
      
  );
};

export default BannerApropos;