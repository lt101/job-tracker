import React from "react";
import "./MainScreen.css";
import { Container, Row } from "react-bootstrap";

const MainScreen = ({ title, children }) => {
  return (
    <div className="main-screen">
      <Container>
        <Row>
          <div className="main-page">
            {title && (
              <>
                <h1 className="main-heading">{title}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
