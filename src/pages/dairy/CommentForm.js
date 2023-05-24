import React, { useState } from "react";
import { axiosRes } from "../../api/AxiosDefaults";
import { Button, Form } from "react-bootstrap";
import styles from "../../styles/CommentForm.module.css";

const CommentForm = (props) => {
  const { post, setComments } = props;
  const [body, setBody] = useState("");

  const handleChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("comments/", {
        body,
        post,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      // increase post comment count here later
      setBody("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.Form}>
      <Form.Group>
        <Form.Label hidden>Comment:</Form.Label>
        <Form.Control
          placeholder="Add a comment"
          as="textarea"
          value={body}
          onChange={handleChange}
          rows={4}
        />
      </Form.Group>
      <div className={styles.Footer}>
        <Button type="submit" variant="danger">
          Post comment
        </Button>
      </div>
    </Form>
  );
};

export default CommentForm;
