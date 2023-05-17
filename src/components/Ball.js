import React from "react";
import pokeball from "../assets/pokeball.png";
import greatball from "../assets/greatball.png";
import ultraball from "../assets/ultraball.png";
import masterball from "../assets/masterball.png";
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
