import React from "react";

const Post = (props) => {
  const { id, owner, created, body, image, like_id, like_count } = props;

  return (
    <>
      <ul>
        <li>{id}</li>
        <li>{owner}</li>
        <li>{created}</li>
        <li>{body}</li>
        <li>{image}</li>
        <li>{like_id}</li>
        <li>{like_count}</li>
      </ul>
      --------------
    </>
  );
};

export default Post;
