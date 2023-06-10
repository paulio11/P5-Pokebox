import React from "react";
import pokeball from "../assets/pokeball.webp";
import greatball from "../assets/greatball.webp";
import ultraball from "../assets/ultraball.webp";
import masterball from "../assets/masterball.webp";
import styles from "../styles/Pokeball.module.css";

const Ball = (props) => {
  let ballImage;

  if (props.size <= 250) {
    ballImage = pokeball;
  } else if (props.size <= 500) {
    ballImage = greatball;
  } else if (props.size <= 750) {
    ballImage = ultraball;
  } else {
    ballImage = masterball;
  }

  return <img src={ballImage} alt="ball" className={styles.Ball} />;
};

export default Ball;
