import React, { useRef, useState } from "react";
import { Modal, Button, Form, Alert, Spinner } from "react-bootstrap";
import styles from "../../styles/AvatarModal.module.css";
import { axiosReq } from "../../api/AxiosDefaults";
import { useSetCurrentNotification } from "../../contexts/NotificationContext";

const AvatarModal = (props) => {
  const { showAvatarModal, setShowAvatarModal, data, reload, value } = props;
  const { id, avatar } = data;
  const [newAvatar, setNewAvatar] = useState(null);
  const avatarInput = useRef(null);
  const [errors, setErrors] = useState({});
  const setCurrentNotification = useSetCurrentNotification();
  const [hideSpinner, setHideSpinner] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setHideSpinner(false);
    const formData = new FormData();
    formData.append("avatar", avatarInput.current.files[0]);
    try {
      await axiosReq.patch(`profiles/${id}`, formData);
      setShowAvatarModal(false);
      reload(value + 1);
      setCurrentNotification("Avatar successfully updated.");
    } catch (error) {
      setErrors(error.response?.data);
      setHideSpinner(true);
    }
  };

  const handleChange = (event) => {
    if (avatarInput.current.files.length) {
      URL.revokeObjectURL(newAvatar);
      setNewAvatar(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <Modal
      show={showAvatarModal}
      onHide={() => setShowAvatarModal(false)}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Change Avatar</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.Body}>
        <img
          src={newAvatar || avatar}
          alt="your avatar"
          className={styles.Avatar}
        />
        <Form onSubmit={handleSubmit} enctype="multipart/form-data">
          <Form.Group>
            <Form.Label hidden>Change your avatar:</Form.Label>
            <Form.File
              hidden
              ref={avatarInput}
              accept="images/*"
              onChange={handleChange}
            />
          </Form.Group>
          {errors.avatar?.map((message, index) => (
            <Alert key={index} variant="warning">
              {message}
            </Alert>
          ))}
          <p>Your image will be cropped to 300px by 300px.</p>
          <div className={styles.ButtonContainer}>
            <Button
              variant="secondary"
              onClick={() => setShowAvatarModal(false)}
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              onClick={() => avatarInput.current.click()}
            >
              Select image
            </Button>
            {newAvatar && (
              <Button variant="danger" type="submit">
                Save changes{" "}
                <Spinner animation="border" size="sm" hidden={hideSpinner} />
              </Button>
            )}
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AvatarModal;
