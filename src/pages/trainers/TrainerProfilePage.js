import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/AxiosDefaults";
import LoadingText from "../../components/LoadingText";
import styles from "../../styles/TrainerProfilePage.module.css";
import {
  Col,
  ProgressBar,
  Row,
  Accordion,
  Card,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { FetchPokemonData } from "../../utils/PokeApi";
import Pokemon from "../../components/Pokemon";
import Ball from "../../components/Ball";
import avataroverlay from "../../assets/avataroverlay.png";
import TrainerDairy from "../dairy/TrainerDairy";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import AboutEditForm from "./AboutEditForm";
import AvatarModal from "./AvatarModal";

const TrainerProfilePage = () => {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [collectionLoaded, setCollectionLoaded] = useState(false);
  const [data, setData] = useState([]); // Profile data
  const { owner, created, avatar, about, favorite, pokemon } = data;
  const [colData, setColData] = useState([]); // Collection data
  const [favData, setFavData] = useState(null); // Favorite Pokémon data
  const [clicked, setClicked] = useState(false);
  const [showAboutEdit, setShowAboutEdit] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // For avatar
  const [newAvatar, setNewAvatar] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.profile_id.toString() === id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosReq(`profiles/${id}`);
        setData(data);
        setLoaded(true);
      } catch (error) {}
    };

    setLoaded(false);
    fetchData();
  }, [id, newAvatar]);

  useEffect(() => {
    const getFavData = async () => {
      try {
        const response = await FetchPokemonData(favorite, null);
        setFavData(response[0]);
      } catch (error) {}
    };

    getFavData();
  }, [favorite]);

  const handleClick = async () => {
    if (!clicked && pokemon?.length) {
      try {
        const response = await FetchPokemonData(null, pokemon);
        setColData(response);
        setCollectionLoaded(true);
        setClicked(true);
      } catch (error) {}
    }
  };

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

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
                <div
                  className={`${styles.AvatarContainer} ${
                    is_owner && styles.AvatarOwner
                  }`}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
                  onClick={() => {
                    if (is_owner) {
                      setShowAvatarModal(!showAvatarModal);
                    }
                  }}
                >
                  <img
                    src={avatar}
                    alt={`${owner}'s avatar`}
                    className={styles.Avatar}
                  />
                  {isHovered && is_owner && (
                    <img
                      src={avataroverlay}
                      alt="edit avatar overlay"
                      className={styles.AvatarOverlay}
                    />
                  )}
                </div>
                <AvatarModal
                  showAvatarModal={showAvatarModal}
                  setShowAvatarModal={setShowAvatarModal}
                  data={data}
                  reload={setNewAvatar}
                />
              </Col>
              <Col xs={12} md={favorite ? 8 : 10}>
                <h2>{owner}</h2>
                <div className={styles.Date}>Joined: {created}</div>
                <div>
                  {is_owner && !showAboutEdit && (
                    <>
                      <OverlayTrigger
                        overlay={<Tooltip>Edit your description</Tooltip>}
                      >
                        <i
                          className={`fas fa-pen-to-square ${styles.EditLink}`}
                          onClick={() => setShowAboutEdit(true)}
                        ></i>
                      </OverlayTrigger>
                    </>
                  )}
                  {showAboutEdit ? (
                    <AboutEditForm
                      id={id}
                      about={about}
                      setShowAboutEdit={setShowAboutEdit}
                      setData={setData}
                      data={data}
                    />
                  ) : (
                    <>{about}</>
                  )}
                </div>
                <div className={styles.Length}>
                  I have collected {pokemon.length} Pokémon!
                </div>
              </Col>
              {favData && (
                <Col xs={12} md={2}>
                  <div className={styles.FavText}>My favorite Pokémon is:</div>
                  {favData && <Pokemon {...favData} trainerPage />}
                </Col>
              )}
            </Row>
            <Row>
              <Col>
                <div
                  className={styles.CollectionContainer}
                  onClick={handleClick}
                >
                  <Accordion defaultActiveKey="0">
                    <Card className={styles.Card}>
                      <OverlayTrigger
                        overlay={
                          <Tooltip>
                            Click to show/hide my Pokémon collection!
                          </Tooltip>
                        }
                      >
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey="1"
                          className={styles.AccordianHeader}
                        >
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
                      </OverlayTrigger>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          {collectionLoaded ? (
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
          <TrainerDairy owner={owner} />
        </>
      ) : (
        <LoadingText />
      )}
    </>
  );
};

export default TrainerProfilePage;
