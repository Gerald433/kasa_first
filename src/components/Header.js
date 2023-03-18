import React from "react";
import styles from "./Header.module.css";


 const Header =  function (){
  return <nav className = {styles.banner}>
        <h1>Salut</h1>
      <div className = "logo_header"></div>
      {/* <img src="../../public/.LOGO-1.png" alt="Logo de l'entreprise" /> */}
      
  </nav>;
}

export default Header
