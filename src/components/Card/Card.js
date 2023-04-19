import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Card.module.css";
import Tags from "../Tags/Tags";
import AccordeonCArd from "../AccordeonCard/AccordeonCard";

const Card = function () {
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
    <React.Fragment>
      <section className={styles.presentation}>
        <p>
          <img
            src={card?.cover}
            className={styles.photo}
            alt="photo d'un appartement bien décoré"
          />
        </p>

        <div className={styles.global}>
          <div className={styles.renseignements}>
            <div className={styles.title}>
              <h1 className={styles.titlePrincipal}>{card?.title}</h1>
              <h2 className={styles.city}>{card?.location}</h2>
              <Tags tags={card?.tags || []} />
            </div>
          </div>

          <div className={styles.localisation}>
            <div className={styles.greyPoint}>
              <p className={styles.autor}>{card?.host.name}</p>
              <img
                className={styles.disc}
                src={card?.host.picture}
                alt="disque gris plein"
              />
            </div>

            <div className={styles.listStarOff}>
              <img
                className={styles.starOff}
                src={card?.rating}
                alt="étoile de vote non sélectionnée"
              />
              <img
                className={styles.starOff}
                src="/src/assets/greyStar.svg"
                alt="étoile de vote non sélectionnée"
              />
              <img
                className={styles.starOff}
                src="/src/assets/greyStar.svg"
                alt="étoile de vote non sélectionnée"
              />
              <img
                className={styles.starOff}
                src="/src/assets/greyStar.svg"
                alt="étoile de vote non sélectionnée"
              />
              <img
                className={styles.starOff}
                src="/src/assets/greyStar.svg"
                alt="étoile de vote non sélectionnée"
                
              />
            </div>
          </div>
        </div>
      </section>

      <AccordeonCArd />
    </React.Fragment>
  );
};

export default Card;
