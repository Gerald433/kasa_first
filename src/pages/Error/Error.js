import React from "react";
import styles from "./Error.module.css";

const Error = function () {
  return (
    <div>
      <section>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <h3>
          <a className={styles.linkToAccueil} href="#">
            Retourner sur la page d'accueil
          </a>
        </h3>
      </section>
    </div>
  );
};

export default Error;
