import React, { useState } from "react";
import styles from "../../styles/Comment.module.css";
import PostCommentFooter from "../../components/PostCommentFooter";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import CommentEditForm from "../diary/CommentEditForm";

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
          <p>{body}</p>
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
