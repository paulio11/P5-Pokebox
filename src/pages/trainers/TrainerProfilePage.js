import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/AxiosDefaults";
import LoadingText from "../../components/LoadingText";
import styles from "../../styles/TrainerProfilePage.module.css";
import { Col, ProgressBar, Row, Accordion, Card } from "react-bootstrap";
import { FetchPokemonData } from "../../utils/PokeApi";
import Pokemon from "../../components/Pokemon";
import Ball from "../../components/Ball";

const TrainerProfilePage = () => {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [pokemonLoaded, setPokemonLoaded] = useState(false);
  const [data, setData] = useState([]);
  const { owner, created, avatar, about, favorite, pokemon } = data;
  const [colData, setColData] = useState([]);
  const [favData, setFavData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosReq(`profiles/${id}`);
        setData(data);
      } catch (error) {}
    };

    const getFavData = async () => {
      try {
        const response = await FetchPokemonData(favorite, null);
        setFavData(response[0]);
      } catch (error) {}
    };

    const fetchAll = async () => {
      setLoaded(false);
      await fetchData();
      if (favorite) {
        await getFavData();
      }
      setLoaded(true);
    };

    fetchAll();
  }, [id, favorite]);

  useEffect(() => {
    const getColData = async () => {
      if (pokemon?.length) {
        try {
          const response = await FetchPokemonData(null, pokemon);
          setColData(response);
          setPokemonLoaded(true);
        } catch (error) {}
      }
    };

    setPokemonLoaded(false);
    getColData();
  }, [pokemon]);

  return (
    <>
      {loaded ? (
        <>
          <div className={styles.Header}>
            <div className={styles.ID}># {id}</div>
            <h1>{owner}</h1>
          </div>
          <hr />
          <div className={styles.ProfileContainer}>
            <Row>
              <Col xs={12} md={2} className={styles.AvatarCol}>
                <img
                  src={avatar}
                  alt={`${owner}'s avatar`}
                  className={styles.Avatar}
                />
              </Col>
              <Col xs={12} md={favorite ? 8 : 10}>
                <h2>{owner}</h2>
                <div className={styles.Date}>Joined: {created}</div>
                <div>{about}</div>
                <div className={styles.Length}>
                  I have collected {pokemon.length} Pokémon!
                </div>
              </Col>
              {favorite && (
                <Col xs={12} md={2}>
                  <div className={styles.FavText}>My favorite Pokémon is:</div>
                  {favData && <Pokemon {...favData} trainerPage />}
                </Col>
              )}
            </Row>
            <Row>
              <Col>
                <div className={styles.CollectionContainer}>
                  <Accordion defaultActiveKey="0">
                    <Card className={styles.Card}>
                      <Accordion.Toggle as={Card.Header} eventKey="1">
                        <div className={styles.CollectionInfo}>
                          <Ball size={pokemon.length} />
                          <ProgressBar
                            variant="danger"
                            now={pokemon.length}
                            max={1010}
                            className={styles.CollectionBar}
                          />
                          <div className={styles.CollectionPercent}>
                            {((pokemon.length / 1010) * 100).toFixed(2)}%
                          </div>
                        </div>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          {pokemonLoaded ? (
                            <div className={styles.PokemonContainer}>
                              {colData.map((pokemon, index) => (
                                <Pokemon key={index} {...pokemon} />
                              ))}
                            </div>
                          ) : (
                            <LoadingText />
                          )}
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </Col>
            </Row>
          </div>
        </>
      ) : (
        <LoadingText />
      )}
    </>
  );
};

export default TrainerProfilePage;
