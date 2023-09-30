import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../auth/authSlice";
import MainScreen from "../../components/mainScreen/MainScreen";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const RegisterPage = () => {
  const defaultUser = {
    name: "",
    email: "",
    password: "",
  };
  const [newUser, setNewUser] = useState(defaultUser);
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, loading, error, success, message } = useSelector(
    (state) => state.auth
  );

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser.password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
      };
      dispatch(register(userData));
      setConfirmPassword("");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(message);
    }
    if (success || user) {
      navigate("/jobs");
    }
    dispatch(reset());
  }, [user, error, success, message, navigate, dispatch]);

  return (
    <MainScreen title="Register">
      <div className="login_container">
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              name="name"
              value={newUser.name}
              placeholder="Enter name"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={newUser.email}
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={newUser.password}
              placeholder="Enter password"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button className="mt-3" variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Already have an account? <Link to="/login">Login Here</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default RegisterPage;
