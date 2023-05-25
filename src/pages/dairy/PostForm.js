import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosReq } from "../../api/AxiosDefaults";
import { Form, Button, Row, Col } from "react-bootstrap";
import styles from "../../styles/PostForm.module.css";
import PostCommentFooter from "../../components/PostCommentFooter";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const PostForm = () => {
  const [postData, setPostData] = useState({
    body: "",
    image: "",
  });
  const { body, image } = postData;
  const imageInput = useRef();
  const navigate = useNavigate();
  const currentUser = useCurrentUser();

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
    } catch (error) {}
  };

  return (
    <>
      <h1>New Dairy Entry</h1>
      <hr />
      <Form className={styles.Container}>
        <div className={styles.Time}>{currentTime}</div>
        <hr />
        <Row>
          <Col xs={12} lg={6}>
            <Form.Group>
              <Form.Label hidden>Dairy Entry Text:</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                name="body"
                value={body}
                onChange={handleChange}
                placeholder="Write your new dairy entry here."
              />
            </Form.Group>
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
                  <img src={image} className={styles.PostImage} />
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
          </Col>
        </Row>
      </Form>
      <Button onClick={handleSubmit} variant="danger">
        Post dairy entry
      </Button>
    </>
  );
};

export default PostForm;
