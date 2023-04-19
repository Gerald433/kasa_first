import React from "react";
import logoFooter from "../../assets/images/logoWhite.svg"
import styles from "./Footer.module.css";

const Footer = function () {
  console.log("toto")
  return (
    <footer>
        <img
          className={styles.footerLogo}
          src={logoFooter}
          alt="logo kasa en noir et blanc"
        />
        <p className={styles.copyrightFooter}>© 2020 Kasa.All rights reserved</p>
      </footer>
  );
};

export default Footer;
