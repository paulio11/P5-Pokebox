import React, { useEffect, useState } from "react";
// Utils
import { FetchPokemonData, FetchPokemonList } from "../../utils/PokeApi";
// Bootstrap
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import styles from "../../styles/PokemonList.module.css";
// Components
import Pokemon from "../../components/Pokemon";
import LoadingText from "../../components/LoadingText";
import CustomModal from "../../components/CustomModal";
// Assets
import Sobble from "../../assets/sobble.webp";
// Contexts
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// API
import { axiosReq } from "../../api/AxiosDefaults";
// Hooks
import useTitle from "../../hooks/useTitle";

const PokemonList = () => {
  const currentUser = useCurrentUser();

  // State variables.
  const [loaded, setLoaded] = useState(false);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [profileData, setProfileData] = useState(null);

  useTitle("Pokémon");

  // Fetches Pokémon list then the Pokémon data.
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

    // Fetch current user's profile data.
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

  // Handles search form change, converts query to lower case.
  const handleChange = (event) => {
    setQuery(event.target.value.toLowerCase());
    setLoaded(false);
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <h1>Pokémon</h1>
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
          {!query &&
            (results.length !== 1010 ? (
              <Alert variant="danger">
                Error fetching data for{" "}
                <strong>{1010 - results.length}</strong> Pokémon.
                <hr />
                There may be an issue with PokéAPI. Check{" "}
                <Alert.Link
                  href="https://pokeapi.statuspage.io/"
                  target="_blank"
                >
                  here
                </Alert.Link>{" "}
                for status updates or{" "}
                <Alert.Link href="/pokemon">reload the page</Alert.Link> to try
                again.
              </Alert>
            ) : (
              <Alert variant="success">
                Data fetched successfully for all <strong>1010</strong>{" "}
                Pokémon.
              </Alert>
            ))}
        </>
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
