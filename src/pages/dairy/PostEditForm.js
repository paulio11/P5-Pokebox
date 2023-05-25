import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosReq } from "../../api/AxiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Col, Form, Row, Button } from "react-bootstrap";
import styles from "../../styles/PostForm.module.css";
import PostCommentFooter from "../../components/PostCommentFooter";
import LoadingText from "../../components/LoadingText";

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
    console.log("cklicked");
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
      console.log(error);
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
              </Col>
            </Row>
          </Form>
          <Button onClick={handleSubmit} variant="danger">
            Save changes
          </Button>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default PostEditForm;
