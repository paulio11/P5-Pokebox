import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSetCurrentNotification } from "../../contexts/NotificationContext";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import useTitle from "../../hooks/useTitle";
import { axiosReq, axiosRes } from "../../api/AxiosDefaults";
import Error404 from "../../components/Error404";
import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import styles from "../../styles/NewsItem.module.css";
import CustomModal from "../../components/CustomModal";

const EditNewsItemForm = () => {
  // State Variables.
  const [errors, setErrors] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [hideSpinner, setHideSpinner] = useState(true);
  const [noResults, setNoResults] = useState(false);
  const [newsData, setNewsData] = useState({
    title: "",
    body: "",
    category: "",
    image: "",
  });

  const { title, body, category, image } = newsData;
  const { id } = useParams();
  const imageInput = useRef(null);
  const navigate = useNavigate();
  const setCurrentNotification = useSetCurrentNotification();
  const currentUser = useCurrentUser();
  const is_staff = currentUser?.is_staff;

  useTitle("Editing News");

  // Fetches news data.
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data } = await axiosReq.get(`news/${id}`);
        setNewsData(data);
        setLoaded(true);
      } catch (error) {
        if (error.response?.status === 404) {
          setNoResults(true);
        }
      }
    };

    setNoResults(false);
    setLoaded(false);
    fetchNews();
  }, [id]);

  // Handles changes in news body, category and title data.
  const handleChange = (event) => {
    setNewsData({
      ...newsData,
      [event.target.name]: event.target.value,
    });
  };

  // Handles changes to the news image.
  const handleImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setNewsData({
        ...newsData,
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
    formData.append("title", title);
    formData.append("category", category);

    if (imageInput.current.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }

    try {
      await axiosReq.put(`news/${id}`, formData);
      navigate(`/news/${id}`);
      setCurrentNotification("News item entry edited successfully.");
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
      await axiosRes.delete(`news/${id}`);
      navigate("/news");
      setCurrentNotification("News item deleted.");
    } catch (error) {
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
      }
    }
  };

  // Returns a 404 error page if post with the ID provided is not found.
  if (noResults) {
    return <Error404 news query={id} />;
  }

  return (
    <>
      <h1>Editing News Item</h1>
      <hr />
      {is_staff && loaded && (
        <Form onSubmit={handleSubmit}>
          {/* Edit news item form */}
          <div className={styles.NewsItem}>
            {/* Title field */}
            <Form.Group>
              <Form.Label hidden htmlFor="title">
                Title
              </Form.Label>
              <Form.Control
                name="title"
                placeholder="Title"
                value={title}
                className={styles.TitleField}
                onChange={handleChange}
                aria-label="title"
                required
                maxLength={100}
              />
            </Form.Group>
            {errors.title?.map((message, index) => (
              <Alert key={index} variant="warning">
                {message}
              </Alert>
            ))}
            <hr />
            <Row>
              <Col xs={12} lg={6}>
                {/* Body text field */}
                <Form.Group>
                  <Form.Label hidden htmlFor="body">
                    Body text
                  </Form.Label>
                  <Form.Control
                    placeholder="Body text"
                    required
                    maxLength={1000}
                    as="textarea"
                    rows={10}
                    name="body"
                    value={body}
                    onChange={handleChange}
                    aria-label="body"
                  />
                </Form.Group>
                {errors.body?.map((message, index) => (
                  <Alert key={index} variant="warning">
                    {message}
                  </Alert>
                ))}
                {/* Category Selection */}
                <Form.Group>
                  <Form.Label htmlFor="category">
                    <strong>Category:</strong>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    value={category}
                    name="category"
                    onChange={handleChange}
                    required
                    aria-label="category"
                    defaultValue="Anime"
                  >
                    <option value="Anime">Anime</option>
                    <option value="Games">Games</option>
                    <option value="TCG">TCG</option>
                    <option value="Other">Other</option>
                  </Form.Control>
                </Form.Group>
                {errors.category?.map((message, index) => (
                  <Alert key={index} variant="warning">
                    {message}
                  </Alert>
                ))}
              </Col>
              <Col xs={12} lg={6}>
                {/* Image input */}
                <Form.Group>
                  {image ? (
                    <>
                      <img
                        src={image}
                        alt="uploaded file"
                        className={`${styles.NewsImage} mb-3`}
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
                        Add image (optional)
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
          </div>
          {/* Button row */}
          <div className={styles.ButtonContainer}>
            <Button variant="secondary" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <CustomModal buttonText="Delete" heading="Delete News Item">
              <p>Are you sure you want to delete this news item?</p>
              <div className={styles.ModalButtons}>
                <Button variant="danger" onClick={handleDelete}>
                  Yes
                </Button>
              </div>
            </CustomModal>
            <Button variant="danger" type="submit">
              Save changes{" "}
              <Spinner animation="border" size="sm" hidden={hideSpinner} />
            </Button>
          </div>
        </Form>
      )}
      {!is_staff && (
        <>
          {/* Alert for normal user */}
          <Alert variant="dark">
            Only Pokébox administrators can edit news posts.
          </Alert>
          <Button
            variant="danger"
            onClick={() => navigate(-1)}
            className="mr-3"
          >
            <i className="fas fa-arrow-left" /> Go back
          </Button>
        </>
      )}
    </>
  );
};

export default EditNewsItemForm;
