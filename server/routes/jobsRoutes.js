const express = require("express");
const { getJobs } = require("../controllers/jobsController");
const { createJob } = require("../controllers/jobsController");
const { getJobById } = require("../controllers/jobsController");
const { updateJob } = require("../controllers/jobsController");
const { deleteJob } = require("../controllers/jobsController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getJobs);
router.route("/create").post(protect, createJob);
router
  .route("/:id")
  .get(protect, getJobById)
  .put(protect, updateJob)
  .delete(protect, deleteJob);

module.exports = router;
