import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosReq } from "../../api/AxiosDefaults";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import styles from "../../styles/PostForm.module.css";
import PostCommentFooter from "../../components/PostCommentFooter";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useSetCurrentNotification } from "../../contexts/NotificationContext";
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
  const setCurrentNotification = useSetCurrentNotification();
  const [hideSpinner, setHideSpinner] = useState(true);

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
    setHideSpinner(false);
    const formData = new FormData();
    formData.append("body", body);
    if (imageInput.current.files.length > 0) {
      formData.append("image", imageInput.current.files[0]);
    }
    try {
      const { data } = await axiosReq.post("posts/", formData);
      navigate(`/post/${data.id}`);
      setCurrentNotification("Diary entry posted successfully.");
    } catch (error) {
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
        setHideSpinner(true);
      }
    }
  };

  return (
    <>
      <h1>New Diary Entry</h1>
      <hr />
      {currentUser ? (
        <>
          <Form className={styles.Container}>
            <div className={styles.Time}>{currentTime}</div>
            <hr />
            <Row>
              <Col xs={12} lg={6}>
                <Form.Group>
                  <Form.Label htmlFor="body" hidden>
                    Diary Entry Text:
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    name="body"
                    id="body"
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
            Post diary entry{" "}
            <Spinner animation="border" size="sm" hidden={hideSpinner} />
          </Button>
        </>
      ) : (
        <>
          <Alert variant="dark">
            You must be logged in to create a new diary entry.
          </Alert>
          <Button variant="danger" onClick={() => navigate(-1)}>
            <i className="fas fa-arrow-left" /> Go back
          </Button>
          <Button
            variant="danger"
            onClick={() => navigate("/login")}
            className="ml-3"
          >
            Log in
          </Button>
        </>
      )}
    </>
  );
};

export default PostForm;
