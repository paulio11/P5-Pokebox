import React from "react";
import { Link, useNavigate } from "react-router-dom";
// CSS
import styles from "../../styles/Post.module.css";
// Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
// API
import { axiosRes } from "../../api/AxiosDefaults";
// Contexts
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useSetCurrentNotification } from "../../contexts/NotificationContext";
// Components
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
    comment_count,
    setPosts,
  } = props;
  const setCurrentNotification = useSetCurrentNotification();
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const navigate = useNavigate();

  // Sets post request to likes endpoint creating a new like object.
  // Modifies post data to increment the like count and add the like ID
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
        setCurrentNotification("Diary entry liked.");
      } catch (error) {
        setCurrentNotification(
          "An error occurred while attempting to like. Please try again."
        );
      }
    }
  };

  // Sends a delete request to remove the like.
  // Modifies post data to lower the like count and set like ID to null.
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
      setCurrentNotification("Diary entry unliked.");
    } catch (error) {
      setCurrentNotification(
        "An error occurred while attempting to unlike. Please try again."
      );
    }
  };

  return (
    <>
      <div className={styles.Post}>
        <div className={styles.Header}>
          <div>
            {is_owner && (
              <OverlayTrigger overlay={<Tooltip>Edit diary entry</Tooltip>}>
                {/* Edit post button */}
                <Link
                  to={`/editpost/${id}`}
                  className={styles.EditLink}
                  aria-label={`Edit diary entry ${id}`}
                >
                  <i className="fas fa-pen-to-square"></i>
                </Link>
              </OverlayTrigger>
            )}
            {/* Link to post page */}
            <Link to={`/post/${id}`} className={styles.Link}>
              {created}
            </Link>
          </div>
          {/* Comment and like count */}
          <div className={styles.HeaderIcons}>
            <div
              className={styles.CommentInfo}
              onClick={() => navigate(`/post/${id}`)}
            >
              <span className={styles.Count}>{comment_count}</span>
              <i className={`far fa-comment ${styles.CommentIcon}`}></i>
            </div>
            <div className={styles.LikeContainer}>
              <span className={styles.Count}>{like_count}</span>
              <OverlayTrigger
                overlay={
                  <Tooltip>
                    {!currentUser && "Log in to like this post."}
                    {currentUser &&
                      currentUser?.username !== owner &&
                      !like_id &&
                      "Click to like this post!"}
                    {currentUser &&
                      currentUser?.username !== owner &&
                      like_id &&
                      "Click to unlike this post!"}
                    {currentUser &&
                      currentUser?.username === owner &&
                      "You can't like your own post."}
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
        </div>
        <hr />
        <Row>
          <Col xs={12} lg={image ? 6 : undefined}>
            {/* Post body text */}
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
