import React, { useRef, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import styles from "../../styles/AvatarModal.module.css";
import { axiosReq } from "../../api/AxiosDefaults";

const AvatarModal = (props) => {
  const { showAvatarModal, setShowAvatarModal, data, reload } = props;
  const { id, avatar } = data;
  const [newAvatar, setNewAvatar] = useState(null);
  const avatarInput = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("avatar", avatarInput.current.files[0]);
    try {
      await axiosReq.patch(`profiles/${id}`, formData);
      setShowAvatarModal(false);
      reload(true);
    } catch (error) {}
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
                Save changes
              </Button>
            )}
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AvatarModal;
