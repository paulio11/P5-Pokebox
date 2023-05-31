import React, { useState } from "react";
import { axiosRes } from "../../api/AxiosDefaults";
import { Button, Form } from "react-bootstrap";
import styles from "../../styles/CommentEditForm.module.css";
import CustomModal from "../../components/CustomModal";

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

  const handleDelete = async () => {
    setShowEditForm(false);
    try {
      await axiosRes.delete(`comments/${id}`);
      // reduce post comment count later
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (error) {}
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          as="textarea"
          value={commentBody}
          onChange={handleChange}
          rows={4}
          maxLength={400}
          required
        />
      </Form.Group>
      <div className={styles.ButtonContainer}>
        <Button onClick={() => setShowEditForm(false)} variant="secondary">
          Cancel
        </Button>
        <Button disabled={!body.trim()} type="submit" variant="danger">
          Save
        </Button>
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
