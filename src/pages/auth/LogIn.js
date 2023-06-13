import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// Contexts
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
// Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/AuthForms.module.css";
// Hooks
import useTitle from "../../hooks/useTitle";
// Contexts
import { useSetCurrentNotification } from "../../contexts/NotificationContext";
// Utils
import { setTokenTimestamp } from "../../utils/Utils";

const LogIn = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const setCurrentNotification = useSetCurrentNotification();
  const navigate = useNavigate();

  // State variables.
  const [logInData, setLogInData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const { username, password } = logInData;

  useTitle("Log In");

  // Handles login, sends data to login endpoint, sets currentUser and notifies user.
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", logInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      navigate(`/trainer/${data.user.profile_id}`);
      setCurrentNotification(`You have logged in as ${data.user.username}.`);
    } catch (error) {
      setErrors(error.response?.data);
    }
  };

  // Handles form change.
  const handleChange = (event) => {
    setLogInData({
      ...logInData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <h1>Log in</h1>
      <hr />
      {currentUser ? (
        <>
          <p>You are already logged in.</p>
          {/* Go back button */}
          <Button variant="danger" onClick={() => navigate(-1)}>
            <i className="fas fa-arrow-left" /> Go back
          </Button>
        </>
      ) : (
        <>
          <Form onSubmit={handleSubmit} className={styles.AuthForm}>
            <Form.Group controlId="username">
              <Form.Label hidden htmlFor="username">
                Username
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                id="username"
                name="username"
                value={username}
                onChange={handleChange}
                autoComplete="off"
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Form.Group>
              <Form.Label hidden htmlFor="password">
                Password
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button variant="danger" type="submit">
              Log in
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
          If you don't have an account you can{" "}
          <Link to="/register" className={styles.Link}>
            register here
          </Link>
          .
        </div>
      )}
    </>
  );
};

export default LogIn;
