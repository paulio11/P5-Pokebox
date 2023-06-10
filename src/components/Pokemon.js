import React, { useEffect, useState } from "react";
import styles from "../styles/Pokemon.module.css";
import { UpdateCollection } from "../utils/Collection";
import { useNavigate } from "react-router-dom";
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

  useEffect(() => {
    if (profileData) {
      setCollected(profileData?.pokemon?.includes(id));
    }
  }, [profileData, id]);

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
