import React from "react";
import styles from "../../styles/Post.module.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { axiosRes } from "../../api/AxiosDefaults";

const Post = (props) => {
  const { id, owner, created, body, image, like_id, like_count, setPosts } =
    props;

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, like_count: post.like_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (error) {}
  };
  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`likes/${like_id}`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, like_count: post.like_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (error) {}
  };

  return (
    <>
      <div className={styles.Post}>
        <div className={styles.Header}>
          <span className={styles.Created}>{created}</span>
          {like_id ? (
            <button onClick={handleUnlike}>Unlike</button>
          ) : (
            <button onClick={handleLike}>Like</button>
          )}
          <div>
            <span>{like_count}</span>
            <span>
              <FontAwesomeIcon
                icon={faHeart}
                className={styles.LikeHeart}
                onClick={handleLike}
              />
            </span>
          </div>
        </div>
        <hr />
        <Row>
          <Col xs={12} lg={image ? 6 : undefined}>
            <div className={styles.Body}>{body}</div>
            <div className={styles.Owner}>- {owner}</div>
          </Col>
          {image && (
            <Col xs={12} lg={6}>
              <img src={image} alt="post" className={styles.PostImage} />
            </Col>
          )}
        </Row>
      </div>
    </>
  );
};

export default Post;
