import React, { useState } from "react";
import { axiosRes } from "../../api/AxiosDefaults";
import { useNavigate } from "react-router-dom";
// Bootstrap
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// Contexts
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import { useSetCurrentNotification } from "../../contexts/NotificationContext";
// CSS
import styles from "../../styles/Settings.module.css";
// Hooks
import useTitle from "../../hooks/useTitle";

const Settings = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const setCurrentNotification = useSetCurrentNotification();
  const navigate = useNavigate();

  // State variables.
  const [newUsername, setNewUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [errors, setErrors] = useState({});

  useTitle("Account Settings");

  // Sends a PATCH request to update the username.
  const handleUpdateUsername = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.patch("dj-rest-auth/user", {
        username: newUsername,
      });
      setCurrentUser({ ...currentUser, username: newUsername });
      setCurrentNotification("Username changed successfully");
      setNewUsername("");
    } catch (error) {
      setErrors(error.response?.data);
    }
  };

  // Sends a POST request to update password.
  const handleUpdatePassword = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.post("dj-rest-auth/password/change/", {
        old_password: oldPassword,
        new_password1: newPassword1,
        new_password2: newPassword2,
      });
      setCurrentNotification("Password changed successfully");
      setOldPassword("");
      setNewPassword1("");
      setNewPassword2("");
    } catch (error) {
      setErrors(error.response?.data);
    }
  };

  return (
    <>
      <h1>Account Settings</h1>
      <hr />
      {currentUser ? (
        <>
          <div className={styles.FormContainer}>
            <Row>
              <Col xs={12} lg={6}>
                <h2>Username</h2>
                <hr />
                {/* Username form */}
                <Form
                  onSubmit={handleUpdateUsername}
                  className={styles.UsernameForm}
                >
                  <Form.Group>
                    <Form.Label hidden>Username:</Form.Label>
                    <Form.Control
                      placeholder={currentUser?.username || "Username"}
                      type="text"
                      value={newUsername}
                      onChange={(event) => setNewUsername(event.target.value)}
                      required={true}
                    />
                  </Form.Group>
                  {errors.username && (
                    <Alert variant="warning">{errors.username}</Alert>
                  )}
                  <Button type="submit" variant="danger">
                    Change username
                  </Button>
                </Form>
              </Col>
              <Col xs={12} lg={6}>
                <h2>Password</h2>
                <hr />
                {/* Password form */}
                <Form onSubmit={handleUpdatePassword}>
                  <Form.Group>
                    <Form.Label hidden>Old Password:</Form.Label>
                    <Form.Control
                      placeholder="Old password"
                      type="password"
                      value={oldPassword}
                      onChange={(event) => setOldPassword(event.target.value)}
                      required={true}
                    />
                  </Form.Group>
                  {errors.old_password && (
                    <Alert variant="warning">{errors.old_password}</Alert>
                  )}
                  <Form.Group>
                    <Form.Label hidden>New Password:</Form.Label>
                    <Form.Control
                      placeholder="New password"
                      type="password"
                      value={newPassword1}
                      onChange={(event) => setNewPassword1(event.target.value)}
                      required={true}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label hidden>Confirm New Password:</Form.Label>
                    <Form.Control
                      placeholder="Confirm new password"
                      type="password"
                      value={newPassword2}
                      onChange={(event) => setNewPassword2(event.target.value)}
                      required={true}
                    />
                  </Form.Group>
                  {errors.new_password2 && (
                    <Alert variant="warning">{errors.new_password2}</Alert>
                  )}
                  <Button type="submit" variant="danger">
                    Change password
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        </>
      ) : (
        <>
          {/* Alert for logged out users */}
          <Alert variant="dark">
            You must be logged in to change your account settings.
          </Alert>
          <Button variant="danger" onClick={() => navigate(-1)}>
            <i className="fas fa-arrow-left" /> Go back
          </Button>
          <Button
            variant="danger"
            onClick={() => navigate("/login")}
            className="ml-3"
          >
            Log in
          </Button>
        </>
      )}
    </>
  );
};

export default Settings;
