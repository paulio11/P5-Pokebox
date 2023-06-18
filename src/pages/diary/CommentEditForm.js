import React, { useState } from "react";
// API
import { axiosRes } from "../../api/AxiosDefaults";
// Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/CommentEditForm.module.css";
// Components
import CustomModal from "../../components/CustomModal";
// Contexts
import { useSetCurrentNotification } from "../../contexts/NotificationContext";

const CommentEditForm = (props) => {
  const { id, body, setShowEditForm, setComments, setPost } = props;
  const setCurrentNotification = useSetCurrentNotification();

  // State variables.
  const [commentBody, setCommentBody] = useState(body);
  const [errors, setErrors] = useState({});

  // Handles change in the value of the comment form.
  const handleChange = (event) => {
    setCommentBody(event.target.value);
  };

  // Sends comment data to endpoint, updates "comments".
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
      setCurrentNotification("Comment edited successfully.");
    } catch (error) {
      setErrors(error.response?.data);
    }
  };

  // Sends delete request to endpoint, updates "comments" data.
  // Updates "post data" and lowers comment_count.
  const handleDelete = async () => {
    setShowEditForm(false);
    try {
      await axiosRes.delete(`comments/${id}`);
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comment_count: prevPost.results[0].comment_count - 1,
          },
        ],
      }));
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
      setCurrentNotification("Comment deleted.");
    } catch (error) {
      setCurrentNotification(
        "An error occurred while attempting to delete your comment. Please try again."
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Comment body form */}
      <Form.Group>
        <Form.Control
          name={`comment ${id} body`}
          id={`comment ${id} body`}
          as="textarea"
          value={commentBody}
          onChange={handleChange}
          rows={4}
          maxLength={400}
          required
          aria-label="Comment body text"
        />
      </Form.Group>
      {errors.body?.map((message, index) => (
        <Alert key={index} variant="warning">
          {message}
        </Alert>
      ))}
      <div className={styles.ButtonContainer}>
        <Button onClick={() => setShowEditForm(false)} variant="secondary">
          Cancel
        </Button>
        <Button disabled={!body.trim()} type="submit" variant="danger">
          Save
        </Button>
        {/* Delete comment modal */}
        <CustomModal buttonText="Delete" heading="Delete Comment">
          <p>Are you sure you want to delete this comment?</p>
          <div className={styles.ModalButtons}>
            <Button variant="danger" onClick={handleDelete}>
              Yes
            </Button>
          </div>
        </CustomModal>
      </div>
    </Form>
  );
};

export default CommentEditForm;
