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

const PostPage = () => {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [post, setPost] = useState({ results: [] });
  const [comments, setComments] = useState({ results: [] });
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchData = async () => {
      const [{ data: post }, { data: comments }] = await Promise.all([
        axiosReq.get(`posts/${id}`),
        axiosReq.get(`comments/?post=${id}`),
      ]);
      setPost({ results: [post] });
      setComments(comments);
      setLoaded(true);
    };

    setLoaded(false);
    fetchData();
  }, [id]);

  return (
    <>
      <h1>Dairy entry by {post?.results[0]?.owner}</h1>
      <hr />
      {loaded ? (
        <>
          <Post {...post.results[0]} setPosts={setPost} />
          <h2 className={styles.CommentsHeading}>Comments</h2>
          <Row>
            <Col xs={12} lg={6} className="order-2 order-lg-1">
              {comments.results.length ? (
                <>
                  {comments.results.map((comment, index) => (
                    <Comment key={index} {...comment} />
                  ))}
                </>
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
