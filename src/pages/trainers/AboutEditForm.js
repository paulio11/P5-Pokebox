import React, { useState } from "react";
import { axiosRes } from "../../api/AxiosDefaults";
import { Button, Form, Alert } from "react-bootstrap";
import { useSetCurrentNotification } from "../../contexts/NotificationContext";

const AboutEditForm = (props) => {
  const { id, about, setShowAboutEdit, setData, data } = props;
  const [formAbout, setFormAbout] = useState(about);
  const [errors, setErrors] = useState({});
  const setCurrentNotification = useSetCurrentNotification();

  const handleChange = (event) => {
    setFormAbout(event.target.value);
  };

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
          <Form.Label hidden>About:</Form.Label>
          <Form.Control
            as="textarea"
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
