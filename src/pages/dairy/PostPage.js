import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/AxiosDefaults";
import Post from "../../pages/dairy/Post";
import Comment from "../../pages/dairy/Comment";
import LoadingText from "../../components/LoadingText";
import { Alert, Col, Row } from "react-bootstrap";
import CommentForm from "./CommentForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/PostPage.module.css";
import Error404 from "../../components/Error404";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/Utils";

const PostPage = () => {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [post, setPost] = useState({ results: [] });
  const [comments, setComments] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const [noResults, setNoResults] = useState(false);

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

  if (noResults) {
    return <Error404 post query={id} />;
  }

  return (
    <>
      {loaded ? (
        <>
          <h1>Dairy entry by {post.results[0].owner}</h1>
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
                  Log in to add a comment to this dairy entry.
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
