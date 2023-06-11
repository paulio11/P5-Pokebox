import React, { useEffect, useState } from "react";
// Bootstrap
import Form from "react-bootstrap/Form";
// CSS
import styles from "../../styles/PokemonList.module.css";
// Components
import Pokemon from "../../components/Pokemon";
import LoadingText from "../../components/LoadingText";
import CustomModal from "../../components/CustomModal";
import InfiniteScroll from "react-infinite-scroll-component";
// Assets
import Sobble from "../../assets/sobble.webp";
// Contexts
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// API
import { axiosReq } from "../../api/AxiosDefaults";
// Hooks
import useTitle from "../../hooks/useTitle";
import { FetchPokemonList, FetchPokemonData } from "../../utils/PokeApi";
import { Link } from "react-router-dom";

const PokemonList = () => {
  const currentUser = useCurrentUser();

  // State variables.
  const [loaded, setLoaded] = useState(false);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);

  useTitle("Pokémon");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const pokemonList = await FetchPokemonList(0, 100);
        setPokemonList(pokemonList);
        const pokemonData = await FetchPokemonData(
          query,
          pokemonList,
          setNoResults
        );
        setResults(pokemonData);
        setLoaded(true);
      } catch (error) {}
    };
    const fetchProfile = async () => {
      if (currentUser) {
        const response = await axiosReq.get(
          `profiles/${currentUser.profile_id}`
        );
        setProfileData(response.data);
      }
    };
    setNoResults(false);
    setLoaded(false);
    const queryTimer = setTimeout(() => {
      fetchResults();
    }, 1000);
    fetchProfile();
    return () => {
      clearTimeout(queryTimer);
    };
  }, [query, currentUser]);

  // React Infinite Scroll component next function.
  const loadMoreData = async () => {
    const offset = pokemonList.length;
    const limit = 100;
    const moreData = await FetchPokemonList(offset, limit);

    // Filter out entries with "url" containing a number equal to or greater than 10001
    const filteredData = moreData.filter((item) => {
      const url = item.url;
      const match = url.match(/\/(\d+)\//);
      const number = match ? parseInt(match[1]) : null;
      return number !== null && number < 10001;
    });

    // Add new data to results.
    const updatedResults = await FetchPokemonData(
      query,
      [...results, ...filteredData],
      setNoResults
    );
    setResults(updatedResults);
    setPokemonList([...pokemonList, ...filteredData]);
  };

  // Defines and updates query as value of search form.
  const handleChange = (event) => {
    setQuery(event.target.value.toLowerCase());
    setLoaded(false);
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <h1>Pokémon</h1>
        {/* Help modal */}
        <CustomModal buttonText="Help" heading="Instructions">
          <h5>Search</h5>
          <p>
            Use the search box to search for a Pokémon by their name or pokédex
            number.
          </p>
          <h5>Pokémon Information</h5>
          <p>Click or tap on a Pokémon to go to their pokédex page.</p>
          <h5>Manage Collection</h5>
          <p>
            Right click or long tap on a Pokémon to add or remove it from your
            collection. Requires you to be logged in.
          </p>
        </CustomModal>
      </div>
      <hr />
      {/* Search form */}
      <Form className={styles.SearchForm}>
        <Form.Label hidden htmlFor="search">
          Search for a Pokémon
        </Form.Label>
        <Form.Control
          value={query}
          name="search"
          id="search"
          placeholder="Search"
          onChange={handleChange}
        />
      </Form>
      {loaded ? (
        <>
          {/* Infinite Scroll Pokémon data */}
          <InfiniteScroll
            dataLength={!query ? results.length : 1}
            next={loadMoreData}
            hasMore={!query ? pokemonList.length < 1010 : false}
            loader={<LoadingText />}
          >
            <div className={styles.ResultsContainer}>
              {results.map((pokemon, index) => (
                <Pokemon
                  key={index}
                  {...pokemon}
                  profileData={profileData}
                  setProfileData={setProfileData}
                  listPage
                />
              ))}
            </div>
          </InfiniteScroll>
        </>
      ) : (
        <LoadingText />
      )}
      {loaded && !query && (
        <>
          {/* Loading progress */}
          <div className={styles.LoadingProgress}>
            Sucessfully loaded {results.length} out of 1010 Pokémon
          </div>
          {pokemonList.length === 1010 &&
            results.length !== pokemonList.length && (
              <div className={styles.FailedToLoad}>
                <p>Failed to load {1010 - results.length} Pokémon</p>
                <p className={styles.FailedDescription}>
                  There may be an issue with PokéAPI. Check for{" "}
                  <Link to="https://pokeapi.statuspage.io/" target="_blank">
                    status updates
                  </Link>{" "}
                  or <Link to="/pokemon">reload this page</Link> to try again.
                </p>
              </div>
            )}
        </>
      )}
      {noResults && (
        <>
          {/* 404 no results display */}
          <div className="d-flex flex-column align-items-center">
            <span className={styles.SearchError}>
              No Pokémon named <strong>{query}</strong> found!
            </span>
            <img src={Sobble} alt="sobble is sad" />
            <span className={`${styles.SearchJoke} text-muted`}>
              Sobble still has no friends.
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default PokemonList;
