import React from "react";
import { useNavigate } from "react-router-dom";
// CSS
import styles from "../styles/HomePage.module.css";
// Assets
import brandLogo from "../assets/brandlogo.webp";
import useTitle from "../hooks/useTitle";
import trainers from "../assets/home-trainers.webp";
import diary from "../assets/home-diary.webp";
import logo from "../assets/home-news.webp";

const HomePage = () => {
  const navigate = useNavigate();

  useTitle("Home");

  // Generates random num between 1 and 1010.
  // Used in img src below to get a random Pokémon image.
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
        <img
          src={brandLogo}
          width={60}
          height={60}
          alt="Pokébox pokéball logo"
        />
        <h1>POKÉBOX</h1>
      </div>
      <div className={styles.ItemContainer}>
        {/* News section link */}
        <div className={styles.Item} onClick={() => navigate("/news")}>
          <div>
            <h2>News</h2>
            <p>The latest Pokémon news and Pokébox updates.</p>
          </div>
          <img src={logo} alt="news" />
        </div>
        {/* Pokémon section link */}
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
        {/* Trainers section link */}
        <div className={styles.Item} onClick={() => navigate("/trainers")}>
          <div>
            <h2>Trainers</h2>
            <p>Find out who has caught them all!</p>
          </div>
          <img src={trainers} alt="Pokémon trainers" />
        </div>
        {/* Diaries section link */}
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
