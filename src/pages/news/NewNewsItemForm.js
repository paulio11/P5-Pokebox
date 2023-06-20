import React, { useRef, useState } from "react";
// Contexts
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useSetCurrentNotification } from "../../contexts/NotificationContext";
// Hooks
import useTitle from "../../hooks/useTitle";
import { useNavigate } from "react-router-dom";
// API
import { axiosReq } from "../../api/AxiosDefaults";
// Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// CSS
import styles from "../../styles/NewsItem.module.css";

const NewNewsItemForm = () => {
  // State variables.
  const [errors, setErrors] = useState({});
  const [hideSpinner, setHideSpinner] = useState(true);
  const [newsData, setNewsData] = useState({
    title: "",
    category: "Anime",
    body: "",
    image: null,
  });

  const { title, category, body, image } = newsData;
  const imageInput = useRef();
  const currentUser = useCurrentUser();
  const is_staff = currentUser?.is_staff;
  const setCurrentNotification = useSetCurrentNotification();
  const navigate = useNavigate();

  useTitle("Add News Item");

  // Handles changes in news body, category and title data.
  const handleChange = (event) => {
    setNewsData({
      ...newsData,
      [event.target.name]: event.target.value,
    });
  };

  // Handles changes to news image.
  const handleImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setNewsData({
        ...newsData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  // Creates formData and sends POST request to endpoint creating a news object.
  const handleSumbit = async (event) => {
    event.preventDefault();
    setHideSpinner(false);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("category", category);
    if (imageInput.current.files.length > 0) {
      formData.append("image", imageInput.current.files[0]);
    }
    try {
      const { data } = await axiosReq.post("news/", formData);
      navigate(`/news/${data.id}`);
      setCurrentNotification("News item posted successfully.");
    } catch (error) {
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
        setHideSpinner(true);
      }
    }
  };

  return (
    <>
      <h1>Add News Item</h1>
      <hr />
      {is_staff ? (
        <>
          <Form onSubmit={handleSumbit}>
            <div className={styles.NewsItem}>
              {/* Title field */}
              <Form.Group>
                <Form.Label hidden htmlFor="title">
                  Title
                </Form.Label>
                <Form.Control
                  className={styles.TitleField}
                  placeholder="Title"
                  aria-label="title"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  maxLength={100}
                  required
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
            {/* Buttons */}
            <div className={styles.ButtonContainer}>
              <Button variant="secondary" onClick={() => navigate(-1)}>
                Cancel
              </Button>
              <Button variant="danger" type="submit">
                Submit news{" "}
                <Spinner animation="border" size="sm" hidden={hideSpinner} />
              </Button>
            </div>
          </Form>
        </>
      ) : (
        <>
          {/* Alert for normal user */}
          <Alert variant="dark">
            Only Pokébox administrators can create news posts.
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

export default NewNewsItemForm;
