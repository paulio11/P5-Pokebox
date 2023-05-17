import React, { useState, useEffect } from "react";
import { axiosReq } from "../../api/AxiosDefaults";
import LoadingText from "../../components/LoadingText";
import Post from "./Post";

const TrainerDairy = ({ owner }) => {
  const [loaded, setLoaded] = useState(false);
  const [posts, setPosts] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosReq.get(`posts/?owner=${owner}`);
        setPosts(response.data.results);
        setLoaded(true);
      } catch (error) {}
    };

    setLoaded(false);
    fetchPosts();
  }, [owner]);

  return (
    <>
      <h2>{owner}'s Trainer Dairy</h2>
      {loaded ? (
        <>
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </>
      ) : (
        <LoadingText />
      )}
    </>
  );
};

export default TrainerDairy;
