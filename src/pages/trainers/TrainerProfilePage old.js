import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// API
import { axiosReq } from "../../api/AxiosDefaults";
// Components
import LoadingText from "../../components/LoadingText";
import Pokemon from "../../components/Pokemon";
import Ball from "../../components/Ball";
import avataroverlay from "../../assets/avataroverlay.webp";
import TrainerDiary from "../diary/TrainerDiary";
import AboutEditForm from "./AboutEditForm";
import AvatarModal from "./AvatarModal";
import Error404 from "../../components/Error404";
// CSS
import styles from "../../styles/TrainerProfilePage.module.css";
// Bootstrap
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Alert from "react-bootstrap/Alert";
// Utils
import { FetchPokemonData } from "../../utils/PokeApi";
// Contexts
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// Hooks
import useTitle from "../../hooks/useTitle";

const TrainerProfilePage = () => {
  const { id } = useParams();
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.profile_id.toString() === id;

  // State variables.
  const [loaded, setLoaded] = useState(false);
  const [collectionLoaded, setCollectionLoaded] = useState(false);
  const [colData, setColData] = useState([]); // Collection data
  const [favData, setFavData] = useState(null); // Favorite Pokémon data
  const [showAboutEdit, setShowAboutEdit] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // For avatar
  const [noResults, setNoResults] = useState(false);
  const [avatarReload, setAvatarReload] = useState(0);
  const [data, setData] = useState([]); // Profile data
  const { owner, created, avatar, about, favorite, pokemon } = data;

  // Fetch profile data.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosReq(`profiles/${id}`);
        setData(data);
        setLoaded(true);
      } catch (error) {
        if (error.response?.status === 404) {
          setNoResults(true);
        }
      }
    };

    setCollectionLoaded(false);
    setNoResults(false);
    setLoaded(false);
    fetchData();
  }, [id, avatarReload]);

  useTitle(`${owner ? owner : "Loading..."}`);

  // Fetch data for profile's favorite Pokémon.
  useEffect(() => {
    const getFavData = async () => {
      try {
        const response = await FetchPokemonData(favorite, null);
        setFavData(response[0]);
      } catch (error) {}
    };

    getFavData();
  }, [favorite]);

  // Fetches data for Pokémon in users collection when clicked.
  const handleClick = async () => {
    if (pokemon?.length && !collectionLoaded) {
      try {
        const response = await FetchPokemonData(null, pokemon);
        setColData(response);
      } catch (error) {}
    }
    setCollectionLoaded(true);
  };

  // Toggles display of "Change avatar" graphic overlay.
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  // Returns a 404 error page if trainer/user with the ID provided is not found.
  if (noResults) {
    return <Error404 trainer query={id} />;
  }

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
                {showAboutEdit && (
                  <div className={styles.AvatarText}>
                    <i className="fas fa-arrow-up d-block"></i> Click to change
                    your avatar
                  </div>
                )}
                <AvatarModal
                  showAvatarModal={showAvatarModal}
                  setShowAvatarModal={setShowAvatarModal}
                  data={data}
                  reload={setAvatarReload}
                  value={avatarReload}
                />
              </Col>
              <Col xs={12} md={favorite ? 8 : 10}>
                <h2>{owner}</h2>
                <div className={styles.Date}>Joined: {created}</div>
                <div>
                  {is_owner && !showAboutEdit && (
                    <>
                      <OverlayTrigger
                        overlay={<Tooltip>Edit your profile</Tooltip>}
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
                          {!pokemon.length && (
                            <Alert variant="dark">
                              {owner} has not collected any Pokémon yet
                            </Alert>
                          )}
                          {collectionLoaded ? (
                            <div className={styles.PokemonContainer}>
                              {colData.map((pokemon, index) => (
                                <Pokemon
                                  key={index}
                                  {...pokemon}
                                  profileData={data}
                                  // setProfileData={setData}
                                />
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
          <TrainerDiary owner={owner} id={id.toString()} />
        </>
      ) : (
        <LoadingText />
      )}
    </>
  );
};

export default TrainerProfilePage;
