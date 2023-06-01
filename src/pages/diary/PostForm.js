import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosReq } from "../../api/AxiosDefaults";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import styles from "../../styles/PostForm.module.css";
import PostCommentFooter from "../../components/PostCommentFooter";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import useTitle from "../../hooks/useTitle";

const PostForm = () => {
  const [postData, setPostData] = useState({
    body: "",
    image: "",
  });
  const { body, image } = postData;
  const imageInput = useRef();
  const navigate = useNavigate();
  const currentUser = useCurrentUser();
  const [errors, setErrors] = useState({});

  useTitle("New Diary Entry");

  const getCurrentTime = () => {
    const now = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const formattedTime = now.toLocaleString("en-GB", options);
    return formattedTime;
  };
  const currentTime = getCurrentTime();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("body", body);
    if (imageInput.current.files.length > 0) {
      formData.append("image", imageInput.current.files[0]);
    }
    try {
      const { data } = await axiosReq.post("posts/", formData);
      navigate(`/post/${data.id}`);
    } catch (error) {
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
      }
    }
  };

  return (
    <>
      <h1>New Diary Entry</h1>
      <hr />
      <Form className={styles.Container}>
        <div className={styles.Time}>{currentTime}</div>
        <hr />
        <Row>
          <Col xs={12} lg={6}>
            <Form.Group>
              <Form.Label hidden>Diary Entry Text:</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                name="body"
                value={body}
                onChange={handleChange}
                maxLength={400}
                placeholder="Write your new diary entry here."
              />
            </Form.Group>
            {errors.body?.map((message, index) => (
              <Alert key={index} variant="warning">
                {message}
              </Alert>
            ))}
            <PostCommentFooter
              profile_id={currentUser?.profile_id}
              profile_avatar={currentUser?.profile_avatar}
              owner={currentUser?.username}
            />
          </Col>
          <Col xs={12} lg={6}>
            <Form.Group>
              {image ? (
                <>
                  <img
                    src={image}
                    className={styles.PostImage}
                    alt="uploaded file"
                  />
                  <Form.Label>
                    <Button
                      variant="danger"
                      onClick={() => imageInput.current.click()}
                    >
                      Change image
                    </Button>
                  </Form.Label>
                </>
              ) : (
                <Form.Label>
                  <Button
                    variant="danger"
                    onClick={() => imageInput.current.click()}
                  >
                    Select image (optional)
                  </Button>
                </Form.Label>
              )}
              <Form.File
                accept="image/*"
                onChange={handleImage}
                ref={imageInput}
                style={{ display: "none" }}
              />
            </Form.Group>
            {errors.image?.map((message, index) => (
              <Alert key={index} variant="warning">
                {message}
              </Alert>
            ))}
          </Col>
        </Row>
      </Form>
      <Button onClick={handleSubmit} variant="danger">
        Post diary entry
      </Button>
    </>
  );
};

export default PostForm;
