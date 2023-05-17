import React, { useEffect, useState } from "react";
import { FetchPokemonData, FetchPokemonList } from "../../utils/PokeApi";
import { Form } from "react-bootstrap";
import styles from "../../styles/PokemonList.module.css";
import Pokemon from "../../components/Pokemon";
import LoadingText from "../../components/LoadingText";

const PokemonList = () => {
  const [loaded, setLoaded] = useState(false);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const pokemonList = await FetchPokemonList();
        const pokemonData = await FetchPokemonData(query, pokemonList);
        setResults(pokemonData);
        setLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };

    setLoaded(false);

    const queryTimer = setTimeout(() => {
      fetchResults();
    }, 1000);

    return () => {
      clearTimeout(queryTimer);
    };
  }, [query]);

  const handleChange = (event) => {
    setQuery(event.target.value.toLowerCase());
    setLoaded(false);
  };

  return (
    <>
      <h1>Pokemon</h1>
      <hr />
      <Form className={styles.SearchForm}>
        <Form.Label hidden>Search for a Pokémon</Form.Label>
        <Form.Control
          value={query}
          placeholder="Search"
          onChange={handleChange}
        />
      </Form>
      {loaded ? (
        <div className={styles.ResultsContainer}>
          {results.map((pokemon, index) => (
            <Pokemon key={index} {...pokemon} />
          ))}
        </div>
      ) : (
        <LoadingText />
      )}
    </>
  );
};

export default PokemonList;
