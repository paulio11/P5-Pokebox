import React, { useEffect, useState } from "react";
import LoadingText from "../../components/LoadingText";
import { axiosReq } from "../../api/AxiosDefaults";
import { Alert } from "react-bootstrap";
import Post from "./Post";

const AllPosts = () => {
  const [loaded, setLoaded] = useState(false);
  const [posts, setPosts] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get("posts/");
        setPosts(data);
        setLoaded(true);
      } catch (error) {}
    };

    setLoaded(false);
    fetchPosts();
  }, []);

  return (
    <>
      <h1>All Dairy Entries</h1>
      <hr />
      {loaded ? (
        <>
          {posts.results.length ? (
            <>
              {posts.results.map((post, index) => (
                <Post key={index} {...post} setPosts={setPosts} />
              ))}
            </>
          ) : (
            <Alert variant="dark">There are no dairy entries yet!</Alert>
          )}
        </>
      ) : (
        <LoadingText />
      )}
    </>
  );
};

export default AllPosts;
