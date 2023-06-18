import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// CSS
import styles from "../styles/Pokemon.module.css";
// Utils
import { UpdateCollection } from "../utils/Collection";
// Contexts
import { useSetCurrentNotification } from "../contexts/NotificationContext";

const Pokemon = (props) => {
  const {
    id,
    species,
    sprites,
    trainerPage,
    listPage,
    profileData,
    setProfileData,
  } = props;
  const [collected, setCollected] = useState(false);
  const navigate = useNavigate();
  const setCurrentNotification = useSetCurrentNotification();

  // Set collected state if Pokémon ID in pokemon array.
  useEffect(() => {
    if (profileData) {
      setCollected(profileData?.pokemon?.includes(id));
    }
  }, [profileData, id]);

  // Override right click to manage collection.
  const handleRightClick = (event) => {
    event.preventDefault();
    if (profileData && listPage) {
      UpdateCollection(id, profileData, setProfileData);
      setCollected(!collected);
      setCurrentNotification(
        collected
          ? `${species.name} has been removed from your collection.`
          : `${species.name} has been added to your collection.`
      );
    }
  };

  // Define className depending on props and state.
  const className = `${styles.PokemonCard} ${
    trainerPage
      ? styles.TrainerPage
      : listPage && !collected
      ? styles.Greyscale
      : ""
  }`;

  return (
    <div
      className={className}
      onContextMenu={handleRightClick}
      onClick={() => navigate(`/pokemon/${id}`)}
    >
      {/* Pokémon sprite, ID and name */}
      <img
        src={sprites.front_default}
        alt={`${species.name}'s sprite`}
        width={96}
        height={96}
      />
      <span className={styles.Text}>[{id}]</span>
      <span className={styles.Text}>{species.name}</span>
    </div>
  );
};

export default Pokemon;
