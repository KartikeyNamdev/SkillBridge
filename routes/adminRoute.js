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
const internSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
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
  const { title, description, duration, stipend, educator, students } =
    internSchema.parse(req.body);

  const internship = new Internship({
    title,
    description,
    duration,
    stipend,
    educator,
    students,
  });

  await internship.save();
  res.json({
    message: "Internship created successfully",
    internshipId: internship._id,
  });
});

//common route

module.exports = router;
