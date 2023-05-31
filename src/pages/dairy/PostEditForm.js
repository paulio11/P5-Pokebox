import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosReq, axiosRes } from "../../api/AxiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Col, Form, Row, Button, Alert } from "react-bootstrap";
import styles from "../../styles/PostForm.module.css";
import PostCommentFooter from "../../components/PostCommentFooter";
import LoadingText from "../../components/LoadingText";
import CustomModal from "../../components/CustomModal";

const PostEditForm = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState({
    body: "",
    image: "",
  });
  const { body, image } = postData;
  const [loaded, setLoaded] = useState(false);
  const imageInput = useRef(null);
  const navigate = useNavigate();
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === postData?.owner;
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axiosReq.get(`posts/${id}`);
        setPostData(data);
        setLoaded(true);
      } catch (error) {}
    };
    setLoaded(false);
    fetchPost();
  }, [id]);

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

  // const handleRemoveImage = () => {
  //   URL.revokeObjectURL(image);
  //   imageInput.current.value = null;
  //   setPostData({
  //     ...postData,
  //     image: null,
  //   });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("body", body);

    if (imageInput.current.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }
    // else {
    //   formData.append("image", null);
    // }
    try {
      await axiosReq.put(`posts/${id}`, formData);
      navigate(`/post/${id}`);
    } catch (error) {
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
      }
    }
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`posts/${id}`);
      navigate(`/trainer/${currentUser?.profile_id}`);
    } catch (error) {
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
      }
    }
  };

  return (
    <>
      <h1>Editing Dairy Entry</h1>
      <hr />
      {loaded ? "" : <LoadingText />}
      {is_owner ? (
        <>
          <Form
            onSubmit={handleSubmit}
            className={styles.Container}
            enctype="multipart/form-data"
          >
            <div className={styles.Time}>{postData.created}</div>
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
                    maxLength={400}
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
                        {/* <Button variant="danger" onClick={handleRemoveImage}>
                          Remove image
                        </Button> */}
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
              Save changes
            </Button>
            <CustomModal
              buttonText="Delete dairy entry"
              heading="Delete Dairy Entry"
            >
              <p>Are you sure you want to delete this dairy entry?</p>
              <div className={styles.ModalButtons}>
                <Button variant="danger" onClick={handleDelete}>
                  Yes
                </Button>
              </div>
            </CustomModal>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default PostEditForm;
