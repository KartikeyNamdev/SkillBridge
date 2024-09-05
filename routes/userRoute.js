const express = require("express");
const zod = require("zod");

const router = express.Router();

//user features
router.post("/user/course/:courseId");
router.post("/user/course/purchasedCourses");

router.post("/user/internship/:internshipId");

router.post("/user/internship/myInternships");

module.exports = router;
