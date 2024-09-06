const express = require("express");
const zod = require("zod");

const { protect } = require("../middlewares/authMiddleware");
const Course = require("../models/course");
const internship = require("../models/internship");

const adminRouter = express.Router();

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
adminRouter.post("/course", async (req, res) => {
  // Implement course creation logic
  console.log("adminRouter working");
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
  console.log(course);
  await course.save();
  res.json({
    message: "Course created successfully",
    courseId: course._id,
  });
});

//admin creation internship
adminRouter.post("/internship", async (req, res) => {
  // Implement internship creation logic
  const { title, description, duration, educator, students } =
    internSchema.parse(req.body);

  const internship = new internship({
    title,
    description,
    duration,
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

module.exports = adminRouter;
