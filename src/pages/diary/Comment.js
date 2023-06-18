import React, { useState } from "react";
// CSS
import styles from "../../styles/Comment.module.css";
// Components
import PostCommentFooter from "../../components/PostCommentFooter";
import CommentEditForm from "../diary/CommentEditForm";
// Bootstrap
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
// Contexts
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Comment = (props) => {
  const {
    id,
    owner,
    created,
    body,
    profile_id,
    profile_avatar,
    setComments,
    setPost,
  } = props;
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <>
      <div className={styles.CommentContainer}>
        <div className={styles.Header}>
          {is_owner && (
            <OverlayTrigger overlay={<Tooltip>Edit comment</Tooltip>}>
              {/* Edit comment button */}
              <i
                className={`fas fa-pen-to-square ${styles.EditLink}`}
                onClick={() => setShowEditForm(true)}
              ></i>
            </OverlayTrigger>
          )}
          {created}
        </div>
        <hr />
        {showEditForm ? (
          <CommentEditForm
            id={id}
            body={body}
            setShowEditForm={setShowEditForm}
            setComments={setComments}
            setPost={setPost}
          />
        ) : (
          <>
            {/* Comment text */}
            <p>{body}</p>
          </>
        )}
        <PostCommentFooter
          profile_id={profile_id}
          profile_avatar={profile_avatar}
          owner={owner}
        />
      </div>
    </>
  );
};

export default Comment;
