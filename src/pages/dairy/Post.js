import React from "react";
import styles from "../../styles/Post.module.css";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { axiosRes } from "../../api/AxiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import PostCommentFooter from "../../components/PostCommentFooter";

const Post = (props) => {
  const {
    id,
    owner,
    created,
    body,
    image,
    like_id,
    like_count,
    profile_id,
    profile_avatar,
    setPosts,
  } = props;
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleLike = async () => {
    if (currentUser?.username === owner || !currentUser) {
      return;
    } else {
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
    }
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
          <div>
            {is_owner && (
              <OverlayTrigger overlay={<Tooltip>Edit post</Tooltip>}>
                <Link to={`/editpost/${id}`} className={styles.EditLink}>
                  <i className="fas fa-pen-to-square"></i>
                </Link>
              </OverlayTrigger>
            )}
            <Link to={`/post/${id}`} className={styles.Link}>
              {created}
            </Link>
          </div>
          <div className={styles.LikeContainer}>
            <span className={styles.LikeCount}>{like_count}</span>
            <OverlayTrigger
              overlay={
                <Tooltip>
                  {!currentUser && "Log in to like this post."}
                  {currentUser?.username === owner &&
                    "You can't like your own post."}
                  {currentUser && "Click to like this post!"}
                </Tooltip>
              }
            >
              {like_id ? (
                <i
                  className={`fas fa-heart ${styles.LikeHeart} ${styles.Liked}`}
                  onClick={handleUnlike}
                />
              ) : (
                <i
                  className={`far fa-heart ${styles.LikeHeart}`}
                  onClick={handleLike}
                />
              )}
            </OverlayTrigger>
          </div>
        </div>
        <hr />
        <Row>
          <Col xs={12} lg={image ? 6 : undefined}>
            <div className={styles.Body}>{body}</div>
            <PostCommentFooter
              profile_id={profile_id}
              profile_avatar={profile_avatar}
              owner={owner}
            />
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
