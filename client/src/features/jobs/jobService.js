import axios from "axios";

const API_URL = "https://nextep-api.cyclic.app/api/jobs/";

const createJob = async (jobData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + "create", jobData, config);

  return response.data;
};

const getJobs = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const updateJob = async (jobData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const jobId = jobData.id;
  const updatedInfo = {
    company: jobData.company,
    position: jobData.position,
    status: jobData.status,
  };

  const response = await axios.put(API_URL + jobId, updatedInfo, config);

  return response.data;
};

const deleteJob = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + id, config);

  return response.data;
};

const jobService = {
  createJob,
  getJobs,
  updateJob,
  deleteJob,
};

export default jobService;
