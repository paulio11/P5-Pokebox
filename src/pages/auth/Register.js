import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
// CSS
import styles from "../../styles/AuthForms.module.css";
// Hooks
import useTitle from "../../hooks/useTitle";
// Contexts
import { useSetCurrentNotification } from "../../contexts/NotificationContext";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Register = () => {
  // State variables.
  const [errors, setErrors] = useState({});
  const [registerData, setRegisterData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = registerData;

  const navigate = useNavigate();
  const currentUser = useCurrentUser();
  const setCurrentNotification = useSetCurrentNotification();

  useTitle("Register");

  const handleChange = (event) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  // Handles user registration, sends data to endpoint, user notified.
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("dj-rest-auth/registration/", registerData);
      navigate("/login");
      setCurrentNotification("Registration successfull.");
    } catch (error) {
      setErrors(error.response?.data);
    }
  };

  return (
    <>
      <h1>Register</h1>
      <hr />
      {currentUser ? (
        <>
          <p>You have already registered.</p>
          {/* Go back button */}
          <Button variant="danger" onClick={() => navigate(-1)}>
            <i className="fas fa-arrow-left" /> Go back
          </Button>
        </>
      ) : (
        <>
          <Form onSubmit={handleSubmit} className={styles.AuthForm}>
            <Form.Group>
              <Form.Label hidden htmlFor="username">
                Username
              </Form.Label>
              <Form.Control
                type="text"
                name="username"
                id="username"
                autoComplete="off"
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
              <Form.Label hidden htmlFor="password1">
                Password
              </Form.Label>
              <Form.Control
                type="password"
                name="password1"
                id="password1"
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
              <Form.Label hidden htmlFor="password2">
                Confirm Password
              </Form.Label>
              <Form.Control
                type="password"
                name="password2"
                id="password2"
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
        </>
      )}
      {!currentUser && (
        <div className={styles.Info}>
          If you already have an account you can{" "}
          <Link to="/login" className={styles.Link}>
            log in here
          </Link>
          .
        </div>
      )}
    </>
  );
};

export default Register;
