import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import MainScreen from "../../components/mainScreen/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { updateJob } from "../../features/jobs/jobSlice";

const UpdateForm = () => {
  const { jobs } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const job = jobs.find((j) => j._id === id);

  const [company, setCompany] = useState(job ? job.company : "");
  const [position, setPosition] = useState(job ? job.position : "");
  const [status, setStatus] = useState(job ? job.status : "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!company || !position || !status) return;
    dispatch(updateJob({ id, company, position, status }));

    setCompany("");
    setPosition("");
    setStatus("");

    navigate("/jobs");
  };

  return (
    <MainScreen title="Update a job application">
      <Card>
        <Card.Header>Update a job application</Card.Header>
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
              Update Job
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted">
          Updating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
};

export default UpdateForm;
