import React, { useState, useEffect } from "react";
import { axiosReq } from "../../api/AxiosDefaults";
import LoadingText from "../../components/LoadingText";
import Post from "./Post";
import styles from "../../styles/TrainerDariy.module.css";
import { Alert } from "react-bootstrap";

const TrainerDairy = ({ owner }) => {
  const [loaded, setLoaded] = useState(false);
  const [posts, setPosts] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`posts/?owner=${owner}`);
        setPosts(data);
        setLoaded(true);
      } catch (error) {}
    };

    setLoaded(false);
    fetchPosts();
  }, [owner]);

  return (
    <>
      <h2 className={styles.Heading}>Trainer Dairy</h2>
      {loaded ? (
        <>
          {posts.results.length ? (
            <>
              {posts.results.map((post, index) => (
                <Post key={index} {...post} setPosts={setPosts} />
              ))}
            </>
          ) : (
            <Alert variant="dark">{owner} has no dairy entries</Alert>
          )}
        </>
      ) : (
        <LoadingText />
      )}
    </>
  );
};

export default TrainerDairy;
