import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FetchPokemonData, FetchSpeciesData } from "../../utils/PokeApi";
import LoadingText from "../../components/LoadingText";
import styles from "../../styles/PokemonDexPage.module.css";
import { Col, ProgressBar, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const PokemonDexPage = () => {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [pData, setPData] = useState([]); // Pokemon (P) data
  const [sData, setSData] = useState([]); // Pokemon (S) species data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pResponse, sResponse] = await Promise.all([
          FetchPokemonData(id, null),
          FetchSpeciesData(id),
        ]);
        setPData(pResponse[0]);
        setSData(sResponse);
        setLoaded(true);
      } catch (error) {}
    };

    setLoaded(false);
    fetchData();
  }, [id]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {loaded ? (
        <>
          <div className={styles.Header}>
            <div className={styles.Number}># {pData.id}</div>
            <h1>{sData.name}</h1>
          </div>
          <hr />
          <div className={styles.Container}>
            <Row>
              <Col xs={12} md={6}>
                <button className={styles.CollectionBtn}>
                  Add {sData.name} NYI
                </button>
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
                    ?.flavor_text.replace(/\n/g, " ") ||
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
                        now={base_stat}
                        max={255}
                        className={styles.StatBar}
                      />
                    </div>
                  ))}
                </div>
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
                onClick={scrollUp}
              >
                <span>
                  <FontAwesomeIcon icon={faArrowLeft} /> {pData.id - 1}
                </span>
              </Link>
            )}
            {pData.id !== 1010 && (
              <Link
                className={styles.FooterLink}
                to={`/pokemon/${pData.id + 1}`}
                onClick={scrollUp}
              >
                <span>
                  {pData.id + 1} <FontAwesomeIcon icon={faArrowRight} />
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
