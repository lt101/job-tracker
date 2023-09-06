import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing__main">
      <Container>
        <Row>
          <div className="landing__intro">
            <div>
              <h1 className="landing__title" style={{ color: "white" }}>
                Welcome to Search Inn
              </h1>
              <p className="landing__subtitle" style={{ color: "white" }}>
                Your centralized job search tracker.
              </p>
              <div className="landing__buttons">
                <a href="/login">
                  <Button size="lg" className="landing-button">
                    Login
                  </Button>
                </a>
                <a href="/register">
                  <Button
                    size="lg"
                    className="landing-button"
                    variant="secondary"
                  >
                    Register
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
