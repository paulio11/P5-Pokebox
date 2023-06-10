import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { FetchPokemonData, FetchSpeciesData } from "../../utils/PokeApi";
import { UpdateCollection } from "../../utils/Collection";
import { axiosReq } from "../../api/AxiosDefaults";
import styles from "../../styles/PokemonDexPage.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProgressBar from "react-bootstrap/ProgressBar";
import LoadingText from "../../components/LoadingText";
import Error404 from "../../components/Error404";
import useTitle from "../../hooks/useTitle";
import { useSetCurrentNotification } from "../../contexts/NotificationContext";

const PokemonDexPage = () => {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const [pData, setPData] = useState({});
  const [sData, setSData] = useState({});
  const [uData, setUData] = useState({});
  const [hasPokemon, setHasPokemon] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const setCurrentNotification = useSetCurrentNotification();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pResponse, sResponse] = await Promise.all([
          FetchPokemonData(id, null, setNoResults),
          FetchSpeciesData(id),
        ]);

        // Check if the response from FetchPokemonData is valid
        if (pResponse && pResponse[0]) {
          setPData(pResponse[0]);
          setSData(sResponse);

          if (currentUser) {
            const uResponse = await axiosReq.get(
              `profiles/${currentUser.profile_id}`
            );
            setUData(uResponse.data);
          }

          setLoaded(true);
        }
      } catch (error) {}
    };

    setNoResults(false);
    setLoaded(false);
    fetchData();
  }, [id, currentUser]);

  useTitle(
    `${
      sData.name
        ? sData.name.charAt(0).toUpperCase() +
          sData.name.slice(1).toLowerCase()
        : "Loading..."
    }`
  );

  useEffect(() => {
    setIsFav(uData.favorite === pData.name);
    if (uData.pokemon?.length) {
      setHasPokemon(uData.pokemon.includes(pData.id));
    }
  }, [uData.favorite, uData.pokemon, pData.name, pData.id]);

  const handleClick = () => {
    setHasPokemon(!hasPokemon);
    UpdateCollection(pData.id, uData, setUData);
    setCurrentNotification(
      hasPokemon
        ? `${sData.name} has been removed from your collection.`
        : `${sData.name} has been added to your collection.`
    );
  };

  const handleFavorite = async () => {
    try {
      const response = await axiosReq.patch(
        `profiles/${currentUser?.profile_id}`,
        {
          favorite: pData.name,
        }
      );
      setIsFav(true);
      setUData(response.data);
      setCurrentNotification(`${sData.name} is now your favorite Pokémon.`);
    } catch (error) {}
  };

  if (noResults) {
    return <Error404 pokemon query={id} />;
  }

  return (
    <>
      {loaded ? (
        <>
          <div className={styles.Header}>
            <div className={styles.Number}># {pData.id}</div>
            <h1 className={styles.FirstCap}>{sData.name}</h1>
          </div>
          <hr />
          <div className={styles.Container}>
            <Row>
              <Col xs={12} md={6}>
                {currentUser && (
                  <button
                    className={styles.CollectionBtn}
                    onClick={handleClick}
                  >
                    {hasPokemon ? (
                      <>
                        <i
                          className={`fas fa-square-check ${
                            hasPokemon && styles.GreenTick
                          }`}
                        ></i>{" "}
                        Remove{" "}
                        <span className={styles.FirstCap}>{sData.name}</span>{" "}
                        from your collection
                      </>
                    ) : (
                      <>
                        <i
                          className={`fas fa-square-xmark ${styles.RedCross}`}
                        ></i>{" "}
                        Add{" "}
                        <span className={styles.FirstCap}>{sData.name}</span>{" "}
                        to your collection
                      </>
                    )}
                  </button>
                )}
                <img
                  src={pData.sprites.other["official-artwork"].front_default}
                  alt={`${sData.name}'s official artwork`}
                  className={styles.Artwork}
                />
                <p className={styles.Genus}>
                  {
                    sData.genera.find((entry) => entry.language.name === "en")
                      ?.genus
                  }
                </p>
              </Col>
              <Col xs={12} md={6}>
                <div className={styles.Types}>
                  {pData.types.map(({ type }) => (
                    <span
                      key={type.name}
                      className={`${styles.TypeBadge} ${styles[type.name]}`}
                    >
                      {type.name}
                    </span>
                  ))}
                </div>
                <div className={styles.FlavorText}>
                  {sData.flavor_text_entries
                    .find((entry) => entry.language.name === "en")
                    ?.flavor_text.replace(/\n|\f/g, " ") ||
                    "This Pokémon is still a mystery!"}
                </div>
                <div className={styles.Stats}>
                  {pData.stats.map(({ stat, base_stat }) => (
                    <div key={stat.name}>
                      <div className="d-flex justify-content-between align-items-start">
                        <span className={styles.StatName}>{stat.name}</span>
                        <span>{base_stat}</span>
                      </div>
                      <ProgressBar
                        aria-label={`${stat.name} progress bar is at ${base_stat}`}
                        now={base_stat}
                        max={255}
                        className={styles.StatBar}
                      />
                    </div>
                  ))}
                </div>
                {!isFav && currentUser && (
                  <button
                    onClick={handleFavorite}
                    className={`${styles.CollectionBtn} ${styles.FavBtn}`}
                  >
                    Set <span className={styles.FirstCap}>{sData.name}</span>{" "}
                    as your favorite Pokémon
                  </button>
                )}
                {isFav && (
                  <div className={styles.FavInfo}>
                    <span className={styles.FirstCap}>{sData.name}</span> is
                    your favorite Pokémon <i className="fas fa-heart"></i>
                  </div>
                )}
              </Col>
            </Row>
          </div>
          <div
            className={`d-flex justify-content-between mt-3 ${
              pData.id === 1 && "flex-row-reverse"
            }`}
          >
            {pData.id !== 1 && (
              <Link
                className={styles.FooterLink}
                to={`/pokemon/${pData.id - 1}`}
              >
                <span>
                  <i className="fas fa-arrow-left" /> {pData.id - 1}
                </span>
              </Link>
            )}
            {pData.id !== 1010 && (
              <Link
                className={styles.FooterLink}
                to={`/pokemon/${pData.id + 1}`}
              >
                <span>
                  {pData.id + 1} <i className="fas fa-arrow-right" />
                </span>
              </Link>
            )}
          </div>
        </>
      ) : (
        <LoadingText />
      )}
    </>
  );
};

export default PokemonDexPage;
