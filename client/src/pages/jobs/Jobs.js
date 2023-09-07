import React from "react";
import "./Jobs.css";
import MainScreen from "../../components/mainScreen/MainScreen";
import { Link } from "react-router-dom";
import { Badge, Button, Card } from "react-bootstrap";
import { jobs } from "../..//data/jobs";

const Jobs = () => {
  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  return (
    <MainScreen title="Welcome back...">
      <Link to="createJob">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          New job application
        </Button>
      </Link>
      {jobs.map((job) => (
        <Card style={{ margin: 10 }}>
          <Card.Header style={{ display: "flex" }}>
            <span
              style={{
                color: "white",
                textDecoration: "none",
                flex: 1,
                cursor: "pointer",
                alignSelf: "center",
                fontSize: 18,
              }}
            >
              {job.company}
            </span>
            <div>
              <Button href={`/jobs/${job.id}`}>Edit</Button>
              <Button
                variant="danger"
                className="mx-2"
                onClick={() => handleDelete(job.id)}
              >
                Delete
              </Button>
            </div>
          </Card.Header>
          <Card.Body>
            <h4>
              <Badge bg="secondary">Category - {job.status}</Badge>
            </h4>
            <blockquote className="blockquote mb-0">
              <p>{job.position}</p>
              <footer className="blockquote-footer">
                Created On - {job.createdAt}
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      ))}
    </MainScreen>
  );
};

export default Jobs;
