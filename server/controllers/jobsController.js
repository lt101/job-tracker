const Job = require("../models/jobModel");
const asyncHandler = require("express-async-handler");

const getJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find({ user: req.user._id });
  res.json(jobs);
});

const createJob = asyncHandler(async (req, res) => {
  const { company, position, status } = req.body;
  if (!company || !position || !status) {
    res.status(400);
    throw new Error("Please fill all the fields");
  } else {
    const job = new Job({ user: req.user._id, company, position, status });
    const createdJob = await job.save();
    res.status(201).json(createdJob);
  }
});

const getJobById = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (job) {
    res.json(job);
  } else {
    res.status(404).json({ message: "Job not found" });
  }
  res.json(job);
});

const updateJob = asyncHandler(async (req, res) => {
  const { company, position, status } = req.body;
  const job = await Job.findById(req.params.id);
  if (job.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You cannot perform this action");
  }
  if (job) {
    job.company = company;
    job.position = position;
    job.status = status;

    const updatedJob = await job.save();
    res.json(updatedJob);
  } else {
    res.status(404);
    throw new Error("Job not found");
  }
});

const deleteJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (job.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You cannot perform this action");
  }
  if (job) {
    await job.deleteOne();
    res.json({ id: req.params.id });
  } else {
    res.status(404);
    throw new Error("Job not found");
  }
});

module.exports = { getJobs, createJob, getJobById, updateJob, deleteJob };
