const express = require("express");
const zod = require("zod");

const { protect } = require("../middlewares/authMiddleware");
const Course = require("../models/course");

const router = express.Router();

const courseSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
  price: zod.number(),
  duration: zod.string(),
  educator: zod.string(),
  students: zod.string([{}]),
});

//admin creation course
router.post("/course", async (req, res) => {
  // Implement course creation logic
  const { title, description, duration, price, educator, students } =
    courseSchema.parse(req.body);

  const course = new Course({
    title,
    description,
    duration,
    price,
    educator,
    students,
  });
  await course.save();
  res.json({
    message: "Course created successfully",
    courseId: course._id,
  });
});

//admin creation internship
router.post("/internship", async (req, res) => {
  // Implement internship creation logic
});

//common route

module.exports = router;
