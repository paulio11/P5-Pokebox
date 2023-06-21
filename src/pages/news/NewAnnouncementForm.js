import React, { useState } from "react";
// Bootstrap
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
// Contexts
import { useSetCurrentNotification } from "../../contexts/NotificationContext";
// API
import { axiosRes } from "../../api/AxiosDefaults";

const NewAnnouncementForm = (props) => {
  const { show, setShow, setAnnouncements } = props;
  const setCurrentNotification = useSetCurrentNotification();

  // State variables.
  const [announcementBody, setAnnouncementBody] = useState("");
  const [errors, setErrors] = useState({});

  // Handles changes in body text.
  const handleChange = (event) => {
    setAnnouncementBody(event.target.value);
  };

  // Sends POST request to announcement endpoint, updates "announcements".
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("announcements/", {
        body: announcementBody,
      });
      setAnnouncements((prevAnnouncements) => ({
        ...prevAnnouncements,
        results: [data, ...prevAnnouncements.results],
      }));
      setShow(false);
      setAnnouncementBody("");
      setCurrentNotification("Announcement posted successfully.");
    } catch (error) {
      setErrors(error.response?.data);
    }
  };

  return (
    <Modal show={show} centered>
      {/* New announcement modal */}
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Announcement body field */}
          <Form.Group>
            <Form.Control
              name="body"
              as="textarea"
              rows={4}
              placeholder="Type the new announcement here."
              aria-label="Announcement body text"
              maxLength={1000}
              value={announcementBody}
              required
              onChange={handleChange}
            />
          </Form.Group>
          {errors.body?.map((message, index) => (
            <Alert key={index} variant="warning">
              {message}
            </Alert>
          ))}
          {/* Buttons */}
          <Button
            variant="secondary"
            onClick={() => setShow(false)}
            className="mr-3"
          >
            Cancel
          </Button>
          <Button type="submit" variant="danger">
            Post
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NewAnnouncementForm;
