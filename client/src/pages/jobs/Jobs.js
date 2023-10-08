import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Badge, Button, Card } from "react-bootstrap";
import "./Jobs.css";
import MainScreen from "../../components/mainScreen/MainScreen";
import Loading from "../../components/Loading";
import { getJobs, deleteJob, reset } from "../../features/jobs/jobSlice";

const Jobs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { jobs, loading, error, message } = useSelector((state) => state.jobs);

  useEffect(() => {
    if (error) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getJobs());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, error, message, dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <MainScreen title="Welcome back">
      <Link to="/createJob">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          New job application
        </Button>
      </Link>
      {jobs.length === 0 && (
        <h3>
          You are not tracking any job applications yet. Create a new job
          application to start!
        </h3>
      )}
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
              <Link to={`/jobs/${job._id}`}>
                <Button>Edit</Button>
              </Link>
              <Button
                variant="danger"
                className="mx-2"
                onClick={() => dispatch(deleteJob(job._id))}
              >
                Delete
              </Button>
            </div>
          </Card.Header>
          <Card.Body>
            <h4>
              <Badge bg="secondary">Status - {job.status}</Badge>
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
