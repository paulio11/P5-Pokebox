import React from "react";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useNavigate } from "react-router-dom";
import { Button, Form, Alert } from "react-bootstrap";

const LogIn = () => {
  const setCurrentUser = useSetCurrentUser();
  const [logInData, setLogInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = logInData;
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send login data to server and get response
      const { data } = await axios.post("dj-rest-auth/login", logInData);
      setCurrentUser(data.user);
      // Navigate to user profile when implemented
      navigate("/");
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
      <Form onSubmit={handleSubmit}>
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
          <Form.Label hiddne>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="password"
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
  );
};

export default LogIn;
