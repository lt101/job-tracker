import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainScreen from "../../components/mainScreen/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { createJob } from "../../features/jobs/jobSlice";

const JobForm = () => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!company || !position || !status) return;
    dispatch(createJob({ company, position, status }));

    setCompany("");
    setPosition("");
    setStatus("");

    navigate("/jobs");
  };

  return (
    <MainScreen title="Create a job application">
      <Card>
        <Card.Header>Create a new job application</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                value={company}
                placeholder="Enter the company name"
                onChange={(e) => setCompany(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="position">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                value={position}
                placeholder="Enter the job position"
                rows={4}
                onChange={(e) => setPosition(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                value={status}
                placeholder="Enter the status of the application"
                onChange={(e) => setStatus(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" variant="primary">
              Create Job
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
};

export default JobForm;
