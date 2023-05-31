import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/AxiosDefaults";

const Settings = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const [newUsername, setNewUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");

  const handleUpdateUsername = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.patch("dj-rest-auth/user", {
        username: newUsername,
      });
      setCurrentUser({ ...currentUser, username: newUsername });
      // navigate somewhere
    } catch (error) {}
  };

  const handleUpdatePassword = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.post("dj-rest-auth/password/change/", {
        old_password: oldPassword,
        new_password1: newPassword1,
        new_password2: newPassword2,
      });
      // navigate somewhere
    } catch (error) {}
  };

  return (
    <>
      <h1>Settings</h1>
      <hr />
      <Form onSubmit={handleUpdateUsername}>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            placeholder={currentUser.username}
            type="text"
            value={newUsername}
            onChange={(event) => setNewUsername(event.target.value)}
            required={true}
          />
        </Form.Group>
        <Button type="submit">Change username</Button>
      </Form>
      <Form onSubmit={handleUpdatePassword}>
        <Form.Group>
          <Form.Label>Old Password:</Form.Label>
          <Form.Control
            placeholder="Old password"
            type="password"
            value={oldPassword}
            onChange={(event) => setOldPassword(event.target.value)}
            required={true}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>New Password:</Form.Label>
          <Form.Control
            placeholder="New password"
            type="password"
            value={newPassword1}
            onChange={(event) => setNewPassword1(event.target.value)}
            required={true}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm New Password:</Form.Label>
          <Form.Control
            placeholder="Confirm new password"
            type="password"
            value={newPassword2}
            onChange={(event) => setNewPassword2(event.target.value)}
            required={true}
          />
        </Form.Group>
        <Button type="submit">Change password</Button>
      </Form>
    </>
  );
};

export default Settings;
