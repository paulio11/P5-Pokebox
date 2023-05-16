import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/AuthForms.module.css";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = registerData;
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send form data to api register endpoint
      await axios.post("dj-rest-auth/registration/", registerData);
      // If successful navigate to the login page
      navigate("/login");
    } catch (error) {
      // Catch any errors in the response
      setErrors(error.response?.data);
    }
  };
  return (
    <>
      <h1>Register</h1>
      <hr />
      <Form onSubmit={handleSubmit} className={styles.AuthForm}>
        <Form.Group>
          <Form.Label hidden>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.username?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group>
          <Form.Label hidden>Password</Form.Label>
          <Form.Control
            type="password"
            name="password1"
            placeholder="Password"
            value={password1}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.password1?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}
        <Form.Group>
          <Form.Label hidden>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="password2"
            placeholder="Confirm password"
            value={password2}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.password2?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}
        <Button type="submit" variant="danger">
          Register
        </Button>
        {errors.non_field_errors?.map((message, idx) => (
          <Alert key={idx} variant="warning" className="mt-3">
            {message}
          </Alert>
        ))}
      </Form>
      <div className={styles.Info}>
        If you already have an account you can{" "}
        <Link to="/login">log in here</Link>.
      </div>
    </>
  );
};

export default Register;
