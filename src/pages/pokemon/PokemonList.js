import React, { useEffect, useState } from "react";
import { FetchPokemonData, FetchPokemonList } from "../../utils/PokeApi";
import { Form } from "react-bootstrap";
import styles from "../../styles/PokemonList.module.css";
import Pokemon from "../../components/Pokemon";
import LoadingText from "../../components/LoadingText";
import Sobble from "../../assets/sobble.png";

const PokemonList = () => {
  const [loaded, setLoaded] = useState(false);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const pokemonList = await FetchPokemonList();
        const pokemonData = await FetchPokemonData(
          query,
          pokemonList,
          setNoResults
        );
        setResults(pokemonData);
        setLoaded(true);
      } catch (error) {}
    };

    setNoResults(false);
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
      {noResults && (
        <div className="d-flex flex-column align-items-center">
          <span className={styles.SearchError}>
            No Pokémon named <strong>{query}</strong> found!
          </span>
          <img src={Sobble} alt="sobble is sad" />
          <span className={`${styles.SearchJoke} text-muted`}>
            Sobble still has no friends.
          </span>
        </div>
      )}
    </>
  );
};

export default PokemonList;
