import React from "react";
import styles from "./AccordeonApropos.module.css";

const AccordeonApropos = function () {
  return (
    <article className={styles.containerGlobal}>
      <section className={styles.quality}>
        <details>
          <summary>Fiabilité</summary>
          <p className={styles.accordeonText}>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </details>
        <details>
          <summary>Respect</summary>
          <p className={styles.accordeonText}>
            La surveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </details>
        <details>
          <summary>Service</summary>
          <p className={styles.accordeonText}>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </details>
        <details>
          <summary>Sécurité</summary>
          <p className={styles.accordeonText}>
            La sécurité est la priorité de kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </details>
      </section>
    </article>
  );
};

export default AccordeonApropos;
