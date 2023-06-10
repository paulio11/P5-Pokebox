import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// API
import { axiosReq } from "../../api/AxiosDefaults";
// Components
import Post from "../../pages/diary/Post";
import Comment from "../../pages/diary/Comment";
import LoadingText from "../../components/LoadingText";
import Error404 from "../../components/Error404";
import InfiniteScroll from "react-infinite-scroll-component";
// Bootstrap
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CommentForm from "./CommentForm";
// Contexts
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// CSS
import styles from "../../styles/PostPage.module.css";
// Utils
import { fetchMoreData } from "../../utils/Utils";
// Hooks
import useTitle from "../../hooks/useTitle";

const PostPage = () => {
  // State variables.
  const [loaded, setLoaded] = useState(false);
  const [post, setPost] = useState({ results: [] });
  const [comments, setComments] = useState({ results: [] });
  const [noResults, setNoResults] = useState(false);

  const currentUser = useCurrentUser();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosReq.get(`posts/${id}`),
          axiosReq.get(`comments/?post=${id}`),
        ]);
        setPost({ results: [post] });
        setComments(comments);
        setLoaded(true);
      } catch (error) {
        if (error.response?.status === 404) {
          setNoResults(true);
        }
      }
    };

    setNoResults(false);
    setLoaded(false);
    fetchData();
  }, [id]);

  useTitle(`Diary Entry #${id}`);

  // Returns a 404 error page if post with the ID provided is not found.
  if (noResults) {
    return <Error404 post query={id} />;
  }

  return (
    <>
      {loaded ? (
        <>
          <h1>Diary entry by {post.results[0].owner}</h1>
          <hr />
          <Post {...post.results[0]} setPosts={setPost} />
          <h2 className={styles.CommentsHeading}>Comments</h2>
          <Row>
            <Col xs={12} lg={6} className="order-2 order-lg-1">
              {comments.results.length ? (
                <InfiniteScroll
                  children={comments.results.map((comment, index) => (
                    <Comment
                      key={index}
                      {...comment}
                      setComments={setComments}
                      setPost={setPost}
                    />
                  ))}
                  dataLength={comments.results.length}
                  loader={<LoadingText />}
                  hasMore={!!comments.next}
                  next={() => fetchMoreData(comments, setComments)}
                />
              ) : (
                <Alert variant="secondary">
                  This diary entry has no comments yet.
                </Alert>
              )}
            </Col>
            <Col xs={12} lg={6} className="order-1 order-lg-2">
              {currentUser ? (
                <CommentForm
                  post={id}
                  setPost={setPost}
                  setComments={setComments}
                  profile_id={currentUser.profile_id}
                  profile_avatar={currentUser.profile_avatar}
                />
              ) : (
                <Alert variant="secondary">
                  Log in to add a comment to this diary entry.
                </Alert>
              )}
            </Col>
          </Row>
        </>
      ) : (
        <LoadingText />
      )}
    </>
  );
};

export default PostPage;
