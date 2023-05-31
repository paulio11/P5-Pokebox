import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Pokemon.module.css";
import { UpdateCollection } from "../utils/Collection";

const Pokemon = (props) => {
  const {
    id,
    species,
    sprites,
    trainerPage, // fix trainer page display
    profileData,
    setProfileData,
  } = props;
  const [collected, setCollected] = useState(false);

  useEffect(() => {
    setCollected(profileData?.pokemon.includes(id));
  }, [profileData, id]);

  const handleRightClick = (event) => {
    event.preventDefault();
    if (profileData) {
      UpdateCollection(id, profileData, setProfileData);
      setCollected(!collected);
    }
  };

  const className = collected
    ? styles.PokemonCard
    : `${styles.PokemonCard} ${styles.Greyscale}`;

  return (
    <Link to={`/pokemon/${id}`} className={styles.PokemonLink}>
      <div className={className} onContextMenu={handleRightClick}>
        <img src={sprites.front_default} alt={`${species.name}'s sprite`} />
        <span className={styles.Text}>[{id}]</span>
        <span className={styles.Text}>{species.name}</span>
      </div>
    </Link>
  );
};

export default Pokemon;
