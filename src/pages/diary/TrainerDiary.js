import React, { useState, useEffect } from "react";
// API
import { axiosReq } from "../../api/AxiosDefaults";
// Components
import LoadingText from "../../components/LoadingText";
import Post from "./Post";
import InfiniteScroll from "react-infinite-scroll-component";
// CSS
import styles from "../../styles/TrainerDariy.module.css";
// Bootstrap
import Alert from "react-bootstrap/Alert";
// Utils
import { fetchMoreData } from "../../utils/Utils";
// Contexts
import { useSetCurrentNotification } from "../../contexts/NotificationContext";

const TrainerDiary = (props) => {
  const { id, owner } = props;
  const [loaded, setLoaded] = useState(false);
  const [posts, setPosts] = useState({});
  const setCurrentNotification = useSetCurrentNotification();

  // Fetch post data for post with owner matching ID
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`posts/?owner__profile=${id}`);
        setPosts(data);
        setLoaded(true);
      } catch (error) {
        setCurrentNotification(error.message, "API Error");
      }
    };

    setLoaded(false);
    fetchPosts();
  }, [id]);

  return (
    <>
      <h2 className={styles.Heading}>Trainer Diary</h2>
      {loaded ? (
        <>
          {posts.results.length ? (
            <InfiniteScroll
              children={posts.results.map((post, index) => (
                <Post key={index} {...post} setPosts={setPosts} />
              ))}
              dataLength={posts.results.length}
              loader={<LoadingText />}
              hasMore={!!posts.next}
              next={() => fetchMoreData(posts, setPosts)}
            />
          ) : (
            <Alert variant="dark">{owner} has no diary entries</Alert>
          )}
        </>
      ) : (
        <LoadingText />
      )}
    </>
  );
};

export default TrainerDiary;
