import React, { useState } from "react";
// API
import { axiosRes } from "../../api/AxiosDefaults";
// Components
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
// Contexts
import { useSetCurrentNotification } from "../../contexts/NotificationContext";

const AboutEditForm = (props) => {
  const { id, about, setShowAboutEdit, setData, data } = props;
  const setCurrentNotification = useSetCurrentNotification();

  // State variables.
  const [formAbout, setFormAbout] = useState(about);
  const [errors, setErrors] = useState({});

  // Handles changes in about form.
  const handleChange = (event) => {
    setFormAbout(event.target.value);
  };

  // Sends PATCH request to endpoint with updated profile data.
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.patch(`profiles/${id}`, {
        about: formAbout,
      });
      setData({
        ...data,
        about: formAbout,
      });
      setShowAboutEdit(false);
      setCurrentNotification("Profile updated successfully.");
    } catch (error) {
      setErrors(error.response?.data);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label hidden htmlFor="about">
            About:
          </Form.Label>
          <Form.Control
            as="textarea"
            name="about"
            id="about"
            value={formAbout}
            onChange={handleChange}
            rows={4}
            maxLength={400}
          />
        </Form.Group>
        {errors.about?.map((message, index) => (
          <Alert key={index} variant="warning">
            {message}
          </Alert>
        ))}
        <Button
          onClick={() => setShowAboutEdit(false)}
          variant="secondary"
          className="mr-3"
        >
          Cancel
        </Button>
        <Button type="submit" variant="danger">
          Save
        </Button>
      </Form>
    </>
  );
};

export default AboutEditForm;
