import React from "react";
// Assets
import pokeball from "../assets/pokeball.webp";
import greatball from "../assets/greatball.webp";
import ultraball from "../assets/ultraball.webp";
import masterball from "../assets/masterball.webp";
// CSS
import styles from "../styles/Pokeball.module.css";

const Ball = (props) => {
  let ballImage;

  // Set ballImage based on the Pokémon collection size
  if (props.size <= 250) {
    ballImage = pokeball;
  } else if (props.size <= 500) {
    ballImage = greatball;
  } else if (props.size <= 750) {
    ballImage = ultraball;
  } else {
    ballImage = masterball;
  }

  // Return image
  return (
    <img
      src={ballImage}
      alt="ball"
      className={styles.Ball}
      width={40}
      height={40}
    />
  );
};

export default Ball;
