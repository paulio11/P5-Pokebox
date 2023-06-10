import React from "react";
import styles from "../styles/PostCommentFooter.module.css";
import { Link } from "react-router-dom";

const PostCommentFooter = (props) => {
  const { profile_id, profile_avatar, owner } = props;

  return (
    <div>
      <Link
        to={`/trainer/${profile_id}`}
        className={`${styles.Link} ${styles.Owner}`}
      >
        {owner}
        <img
          src={profile_avatar}
          alt={`${owner}'s avatar`}
          className={styles.Avatar}
          width={60}
          height={60}
        />
      </Link>
    </div>
  );
};

export default PostCommentFooter;
