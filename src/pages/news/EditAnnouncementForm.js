import React, { useState } from "react";
// Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
// CSS
import styles from "../../styles/News.module.css";
// Contexts
import { useSetCurrentNotification } from "../../contexts/NotificationContext";
// API
import { axiosRes } from "../../api/AxiosDefaults";

const EditAnnouncementForm = (props) => {
  const { id, body, setAnnouncements, setShowEditForm } = props;
  const setCurrentNotification = useSetCurrentNotification();

  // State variables
  const [errors, setErrors] = useState({});
  const [announcementBody, setAnnouncementBody] = useState(body);

  // Handles change in the value of the announcement form.
  const handleChange = (event) => {
    setAnnouncementBody(event.target.value);
  };

  // Sends announcement data to endpoint, updates "announcements".
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`announcements/${id}`, {
        body: announcementBody.trim(),
      });
      setAnnouncements((prevAnnouncements) => ({
        ...prevAnnouncements,
        results: prevAnnouncements.results.map((announcement) => {
          return announcement.id === id
            ? {
                ...announcement,
                body: announcementBody.trim(),
              }
            : announcement;
        }),
      }));
      setShowEditForm(false);
      setCurrentNotification("Announcement edited successfully.");
    } catch (error) {
      setErrors(error.response?.data);
    }
  };

  // Sends delete request to endpoint, updates "announcements" data.
  const handleDelete = async () => {
    setShowEditForm(false);
    try {
      await axiosRes.delete(`announcements/${id}`);
      setAnnouncements((prevAnnouncements) => ({
        ...prevAnnouncements,
        results: prevAnnouncements.results.filter(
          (announcement) => announcement.id !== id
        ),
      }));
      setCurrentNotification("Announcement deleted.");
    } catch (error) {
      setCurrentNotification(
        "An error occurred while attempting to delete the announcement. Please try again."
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-2">
      {/* Edit announcement form */}
      {/* Body text field */}
      <Form.Group>
        <Form.Control
          as="textarea"
          value={announcementBody}
          onChange={handleChange}
          rows={4}
          maxLength={1000}
          required
          aria-label="Announcement body text"
          name="Announcement body text"
        />
      </Form.Group>
      {errors.body?.map((message, index) => (
        <Alert key={index} variant="warning">
          {message}
        </Alert>
      ))}
      <div className={styles.Buttons}>
        {/* Buttons */}
        <Button variant="secondary" onClick={() => setShowEditForm(false)}>
          Cancel
        </Button>
        <Button variant="danger" type="submit">
          Save
        </Button>
        <Button variant="dark" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </Form>
  );
};

export default EditAnnouncementForm;
