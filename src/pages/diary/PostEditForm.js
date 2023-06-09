import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// API
import { axiosReq, axiosRes } from "../../api/AxiosDefaults";
// Contexts
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useSetCurrentNotification } from "../../contexts/NotificationContext";
// Bootstrap
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
// CSS
import styles from "../../styles/PostForm.module.css";
// Components
import PostCommentFooter from "../../components/PostCommentFooter";
import LoadingText from "../../components/LoadingText";
import CustomModal from "../../components/CustomModal";
import Error404 from "../../components/Error404";
// Hooks
import useTitle from "../../hooks/useTitle";

const PostEditForm = () => {
  // State variables.
  const [errors, setErrors] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [hideSpinner, setHideSpinner] = useState(true);
  const [noResults, setNoResults] = useState(false);
  const [postData, setPostData] = useState({
    owner: "",
    body: "",
    image: "",
  });
  const { body, image, owner } = postData;

  const { id } = useParams();
  const imageInput = useRef(null);
  const navigate = useNavigate();
  const setNotification = useSetCurrentNotification();
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === postData?.owner;

  useTitle("Editing Diary Entry");

  // Fetches post data.
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axiosReq.get(`posts/${id}`);
        setPostData(data);
        setLoaded(true);
      } catch (error) {
        if (error.response?.status === 404) {
          setNoResults(true);
        }
      }
    };

    setNoResults(false);
    setLoaded(false);
    fetchPost();
  }, [id]);

  // Handles changes in post body form.
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  // Handles changes to the post image.
  const handleImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  // Creates formData and sends PUT request to endpoint editing the post object.
  const handleSubmit = async (event) => {
    event.preventDefault();
    setHideSpinner(false);
    const formData = new FormData();
    formData.append("body", body);

    if (imageInput.current.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }

    try {
      await axiosReq.put(`posts/${id}`, formData);
      navigate(`/post/${id}`);
      setNotification("Diary entry edited successfully.");
    } catch (error) {
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
        setHideSpinner(true);
      }
    }
  };

  // Sends DELETE request to endpoint deleting the post object.
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`posts/${id}`);
      navigate(`/trainer/${currentUser?.profile_id}`);
      setNotification("Diary entry deleted.");
    } catch (error) {
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
      }
    }
  };

  // Returns a 404 error page if post with the ID provided is not found.
  if (noResults) {
    return <Error404 post query={id} />;
  }

  return (
    <>
      <h1>Editing Diary Entry</h1>
      <hr />
      {!loaded && <LoadingText />}
      {is_owner && loaded && (
        <>
          <Form
            onSubmit={handleSubmit}
            className={styles.Container}
            encType="multipart/form-data"
          >
            <div className={styles.Time}>{postData.created}</div>
            <hr />
            <Row>
              <Col xs={12} lg={6}>
                <Form.Group>
                  {/* Post body field */}
                  <Form.Label hidden htmlFor="body">
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
                    aria-label="Diary entry text"
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
                  {/* Post image input */}
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
                {errors.image?.map((message, idx) => (
                  <Alert key={idx} variant="warning">
                    {message}
                  </Alert>
                ))}
              </Col>
            </Row>
          </Form>
          <div className={styles.ButtonContainer}>
            <Button variant="secondary" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} variant="danger">
              Save changes{" "}
              <Spinner animation="border" size="sm" hidden={hideSpinner} />
            </Button>
            <CustomModal
              buttonText="Delete diary entry"
              heading="Delete Diary Entry"
            >
              <p>Are you sure you want to delete this diary entry?</p>
              <div className={styles.ModalButtons}>
                <Button variant="danger" onClick={handleDelete}>
                  Yes
                </Button>
              </div>
            </CustomModal>
          </div>
        </>
      )}
      {!is_owner && loaded && (
        <>
          {/* Alert for users who don't own the post object */}
          <Alert variant="dark">
            You do not have permission to edit <strong>{owner}&apos;s</strong>{" "}
            diary entry.
          </Alert>
          <Button variant="danger" onClick={() => navigate(-1)}>
            <i className="fas fa-arrow-left" /> Go back
          </Button>
        </>
      )}
    </>
  );
};

export default PostEditForm;
