import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Pokemon.module.css";

const Pokemon = (props) => {
  const { id, species, sprites, trainerPage } = props;

  return (
    <Link to={`/pokemon/${id}`} className={styles.PokemonLink}>
      <div
        className={`${styles.PokemonCard} ${
          trainerPage && `${styles.TrainerPage}`
        }`}
      >
        <img src={sprites.front_default} alt={`${species.name}'s sprite`} />
        <span className={styles.Text}>[{id}]</span>
        <span className={styles.Text}>{species.name}</span>
      </div>
    </Link>
  );
};

export default Pokemon;
