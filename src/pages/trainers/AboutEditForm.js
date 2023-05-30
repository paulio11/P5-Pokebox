import React, { useState } from "react";
import { axiosRes } from "../../api/AxiosDefaults";
import { Button, Form } from "react-bootstrap";

const AboutEditForm = (props) => {
  const { id, about, setShowAboutEdit, setData, data } = props;
  const [formAbout, setFormAbout] = useState(about);

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
    } catch (error) {}
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label hidden>About:</Form.Label>
        <Form.Control
          as="textarea"
          value={formAbout}
          onChange={handleChange}
          rows={4}
        />
      </Form.Group>
      <Button
        onClick={() => setShowAboutEdit(false)}
        variant="secondary"
        className="mr-3"
      >
        Cancel
      </Button>
      <Button disabled={!about.trim()} type="submit" variant="danger">
        Save
      </Button>
    </Form>
  );
};

export default AboutEditForm;
