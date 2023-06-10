import React, { useState } from "react";
import { axiosRes } from "../../api/AxiosDefaults";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/CommentForm.module.css";
import { useSetCurrentNotification } from "../../contexts/NotificationContext";

const CommentForm = (props) => {
  const { post, setComments, setPost } = props;
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState({});
  const setCurrentNotification = useSetCurrentNotification();

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
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comment_count: prevPost.results[0].comment_count + 1,
          },
        ],
      }));
      setBody("");
      setCurrentNotification("Comment posted successfully.");
    } catch (error) {
      setErrors(error.response?.data);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.Form}>
      <Form.Group>
        <Form.Label hidden htmlFor="body">
          Comment:
        </Form.Label>
        <Form.Control
          placeholder="Add a comment"
          as="textarea"
          name="body"
          id="body"
          value={body}
          onChange={handleChange}
          rows={4}
          maxLength={400}
          required
        />
      </Form.Group>
      {errors.body?.map((message, index) => (
        <Alert key={index} variant="warning">
          {message}
        </Alert>
      ))}
      <div className={styles.Footer}>
        <Button type="submit" variant="danger">
          Post comment
        </Button>
      </div>
    </Form>
  );
};

export default CommentForm;
