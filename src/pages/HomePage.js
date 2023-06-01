import React from "react";
import styles from "../styles/HomePage.module.css";
import brandLogo from "../assets/brandlogo.png";

const HomePage = () => {
  return (
    <>
      <div className={styles.Header}>
        <img src={brandLogo} width={60} />
        <h1>POKÉBOX</h1>
      </div>
      <div className={styles.ItemContainer}>
        <div className={styles.Item}>
          <h2>Pokémon</h2>
          <p>Rawr</p>
        </div>
        <div className={styles.Item}>
          <h2>Trainers</h2>
          <p>Rawr</p>
        </div>
        <div className={styles.Item}>
          <h2>Diaries</h2>
          <p>Rawr</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
