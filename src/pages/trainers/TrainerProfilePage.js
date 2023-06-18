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
import InfiniteScroll from "react-infinite-scroll-component";
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
import { useSetCurrentNotification } from "../../contexts/NotificationContext";
// Hooks
import useTitle from "../../hooks/useTitle";

const TrainerProfilePage = () => {
  const { id } = useParams();
  const currentUser = useCurrentUser();
  const setCurrentNotification = useSetCurrentNotification();
  const is_owner = currentUser?.profile_id.toString() === id;

  // State variables.
  const [loaded, setLoaded] = useState(false);
  const [colData, setColData] = useState([]); // Collection data
  const [favData, setFavData] = useState(null); // Favorite Pokémon data
  const [data, setData] = useState([]); // Profile data
  const [showAboutEdit, setShowAboutEdit] = useState(false); // Profile editing
  const [showAvatarModal, setShowAvatarModal] = useState(false); // Profile editing
  const [isHovered, setIsHovered] = useState(false); // For avatar
  const [avatarReload, setAvatarReload] = useState(0); // To force reload
  const [noResults, setNoResults] = useState(false); // If 404
  const [clicked, setClicked] = useState(false); // Tracking clicked status of collection

  // State variables for infinite scrolling
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

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

    // Reset infinite scroll collection loader
    setHasMore(true);
    setPage(1);
    setColData([]);

    setClicked(false);
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
      } catch (error) {
        setCurrentNotification(
          "An error occurred while attempting to load your information. Please try again."
        );
      }
    };
    getFavData();
  }, [favorite, setCurrentNotification]);

  // Fetches data for Pokémon in users collection when clicked.
  const loadCollection = async () => {
    if (pokemon?.length && !clicked) {
      setPage(1); // Reset the page number
      setColData([]); // Clear the collection data
      // If the initial data length is less than the maximum Pokémon that
      // can be displayed, set hasMore to false to hide loader.
      if (data.pokemon.length < 100) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
      fetchMoreData(); // Fetch the first page of data
      setClicked(true);
    }
  };

  // Fetches more data for infinite scrolling
  const fetchMoreData = async () => {
    if (!hasMore) return;
    try {
      const response = await FetchPokemonData(
        null,
        pokemon.slice((page - 1) * 100, page * 100)
      );
      if (response.length > 0) {
        setColData((prevData) => [...prevData, ...response]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      setCurrentNotification(
        "An error occurred while attempting load more Pokémon. Please try again."
      );
    }
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
              {/* Avatar */}
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
                {/* Avatar edit modal */}
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
                      {/* Edit tooltip */}
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
                  {/* About info and edit form */}
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
              {/* Favorite Pokémon information */}
              {favData && (
                <Col xs={12} md={2}>
                  <div className={styles.FavText}>My favorite Pokémon is:</div>
                  {favData && <Pokemon {...favData} trainerPage />}
                </Col>
              )}
            </Row>
            <Row>
              <Col>
                {/* Pokémon collection */}
                <div
                  className={styles.CollectionContainer}
                  onClick={loadCollection}
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
                              aria-hidden
                            />
                            <div className={styles.CollectionPercent}>
                              {((pokemon.length / 1010) * 100).toFixed(2)}%
                            </div>
                          </div>
                        </Accordion.Toggle>
                      </OverlayTrigger>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body
                          id="scrollableDiv"
                          className={styles.Scrollable}
                        >
                          {!pokemon.length && (
                            <Alert variant="dark">
                              {owner} has not collected any Pokémon yet
                            </Alert>
                          )}
                          <InfiniteScroll
                            dataLength={colData.length}
                            next={fetchMoreData}
                            hasMore={hasMore}
                            loader={<LoadingText />}
                            endMessage={`All of ${owner}'s collected Pokémon have loaded.`}
                            scrollableTarget="scrollableDiv"
                          >
                            <div className={styles.PokemonContainer}>
                              {colData.map((pokemon, index) => (
                                <Pokemon
                                  key={index}
                                  {...pokemon}
                                  profileData={data}
                                />
                              ))}
                            </div>
                          </InfiniteScroll>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </Col>
            </Row>
          </div>
          {/* Trainer's diary posts */}
          <TrainerDiary owner={owner} id={id.toString()} />
        </>
      ) : (
        <LoadingText />
      )}
    </>
  );
};

export default TrainerProfilePage;
