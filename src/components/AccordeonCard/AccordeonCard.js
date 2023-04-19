import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./AccordeonCard.module.css";
import { Simulate } from "react-dom/test-utils";

const AccordeonCArd = function () {
  const [card, setCard] = useState(null);
  const { cardId } = useParams();
  console.log(cardId);

  useEffect(() => {
    console.log("tata");
    async function fetchCard() {
      try {
        const _cards = await (await fetch("/data/logements.json")).json();
        console.log(_cards);
        const cardFound = _cards.find((_card) => _card.id === cardId);
        setCard(cardFound);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCard();
  }, []);

  return (
    <section className={styles.descriptionEquipements}>
      <details className={styles.detailsCard}>
        <summary className={styles.summaryDescription}>Description</summary>
        <p className={styles.accordeonText}>{card?.description}</p>
      </details>

      <details className={styles.detailsCard}>
        <summary>Équipements</summary>
        <ul className={styles.equipementList}>
          <li className={styles.equipements}>{card?.equipments}</li>
          <li className={styles.equipement}>Wi-Fi</li>
          <li className={styles.equipement}>Cuisine</li>
          <li className={styles.equipement}>Espace de travail</li>
          <li className={styles.equipement}>Fer à repasser</li>
          <li className={styles.equipement}>Sèche-cheveux</li>
          <li className={styles.equipement}>Cintres</li>
        </ul>
      </details>
    </section>
  );
};

export default AccordeonCArd;
