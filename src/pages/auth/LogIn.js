import React, { useState } from "react";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/AuthForms.module.css";
import useTitle from "../../hooks/useTitle";
import { useSetCurrentNotification } from "../../contexts/NotificationContext";
import { setTokenTimestamp } from "../../utils/Utils";

const LogIn = () => {
  const setCurrentUser = useSetCurrentUser();
  const [logInData, setLogInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = logInData;
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const setCurrentNotification = useSetCurrentNotification();

  useTitle("Log In");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send login data to server and get response
      const { data } = await axios.post("/dj-rest-auth/login/", logInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      navigate(`/trainer/${data.user.profile_id}`);
      setCurrentNotification(`You have logged in as ${data.user.username}.`);
    } catch (error) {
      // Catch any errors in the response
      setErrors(error.response?.data);
    }
  };

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
      <Form onSubmit={handleSubmit} className={styles.AuthForm}>
        <Form.Group controlId="username">
          <Form.Label hidden>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.username?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}
        <Form.Group>
          <Form.Label hidden>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
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
      <div className={styles.Info}>
        If you don't have an account you can{" "}
        <Link to="/register" className={styles.Link}>
          register here
        </Link>
        .
      </div>
    </>
  );
};

export default LogIn;
