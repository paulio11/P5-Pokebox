import React, { useState } from "react";
import { axiosRes } from "../../api/AxiosDefaults";
import { Button, Form } from "react-bootstrap";
import styles from "../../styles/CommentEditForm.module.css";

const CommentEditForm = (props) => {
  const { id, body, setShowEditForm, setComments } = props;
  const [commentBody, setCommentBody] = useState(body);

  const handleChange = (event) => {
    setCommentBody(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`comments/${id}`, {
        body: commentBody.trim(),
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                body: commentBody.trim(),
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          as="textarea"
          value={commentBody}
          onChange={handleChange}
          rows={4}
        />
      </Form.Group>
      <div className={styles.ButtonContainer}>
        <Button onClick={() => setShowEditForm(false)} variant="secondary">
          Cancel
        </Button>
        <Button disabled={!body.trim()} type="submit" variant="danger">
          Save
        </Button>
        <Button variant="dark">Delete</Button>
      </div>
    </Form>
  );
};

export default CommentEditForm;
