import React from "react";
import styles from "../styles/HomePage.module.css";
import brandLogo from "../assets/brandlogo.png";
import useTitle from "../hooks/useTitle";
import trainers from "../assets/home-trainers.png";
import diary from "../assets/home-diary.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  useTitle("Home");

  const generateRandomNumber = () => {
    var min = 1;
    var max = 1010;
    var randomDecimal = Math.random();
    var randomNumber = Math.floor(randomDecimal * (max - min + 1)) + min;
    return randomNumber;
  };

  return (
    <>
      <div className={styles.Header}>
        <img src={brandLogo} width={60} alt="Pokébox pokéball logo" />
        <h1>POKÉBOX</h1>
      </div>
      <div className={styles.ItemContainer}>
        <div className={styles.Item} onClick={() => navigate("/pokemon")}>
          <div>
            <h2>Pokémon</h2>
            <p>Learn about Pokémon and manage your collection.</p>
          </div>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${generateRandomNumber()}.png`}
            alt="Pokémon"
          />
        </div>
        <div className={styles.Item} onClick={() => navigate("/trainers")}>
          <div>
            <h2>Trainers</h2>
            <p>Discover our trainers and see who has the biggest collection!</p>
          </div>
          <img src={trainers} alt="Pokémon trainers" />
        </div>
        <div className={styles.Item} onClick={() => navigate("/posts")}>
          <div>
            <h2>Diaries</h2>
            <p>Read about the adventures of our trainers.</p>
          </div>
          <img src={diary} alt="Trainer diary" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
