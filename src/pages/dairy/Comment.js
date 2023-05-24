import React from "react";
import styles from "../../styles/Comment.module.css";
import PostCommentFooter from "../../components/PostCommentFooter";

const Comment = (props) => {
  const { id, owner, created, body, profile_id, profile_avatar } = props;

  return (
    <>
      <div className={styles.CommentContainer}>
        <div className={styles.Header}>{created}</div>
        <hr />
        <p>{body}</p>
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
