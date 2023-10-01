import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../auth/authSlice";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/mainScreen/MainScreen";
import Loading from "../../components/Loading";

import "./LoginPage.css";

const LoginPage = () => {
  const [userForm, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, loading, error, success, message } = useSelector(
    (state) => state.auth
  );

  const handleChange = (e) => {
    setUser({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: userForm.email,
      password: userForm.password,
    };
    dispatch(login(userData));
  };

  useEffect(() => {
    if (error) {
      toast.error(message, { theme: "dark" });
    }
    if (success || user) {
      navigate("/jobs");
    }
    dispatch(reset());
  }, [user, error, success, message, navigate, dispatch]);

  return (
    <MainScreen title="Login">
      <div className="login_container">
        {loading && <Loading />}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>

          <Button className="mt-3" variant="primary" type="submit">
            Submit
          </Button>
          <Row className="py-3">
            <Col>
              Don't have an account yet?{" "}
              <Link to="/register">Register Here</Link>
            </Col>
          </Row>
        </Form>
      </div>
    </MainScreen>
  );
};

export default LoginPage;
