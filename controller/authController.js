const User = require("../models/user");
const Course = require("../models/course");
const Internship = require("../models/internship");
const jwt = require("jsonwebtoken");
const zod = require("zod");

//The userSchema in the authentication controller serves a crucial role in ensuring that the data
//being handled during user registration or login is valid, consistent, and secure
const userSchema = zod.object({
  name: zod.string().min(2),
  email: zod.string().email(),
  password: zod.string().min(6),
  role: zod.enum(["student", "admin"]),
});

const register = async (req, res) => {
  try {
    const { name, password, email, role } = userSchema.parse(req.body);

    let user = await User.findOne({ name });
    if (user) {
      return res.status(401).json({ message: "User already exists" });
    }
    user = new User({ name, password, email, role });

    await user.save();

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET
    );
    res.json({ token, msg: "User created successfully" }).status(201);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    // if (!user) return res.status(404).json({ msg: "User not found" });
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET
    );
    res.json({ token, message: "User login successfully" }).status(200);
    return;
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getUserProfile = async (req, res) => {
  try {
    // console.log("User profile error");
    console.log(req.body.id);
    const user = await User.findById(req.body.id);
    console.log(user);
    res.status(200).json(user);

    return;
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const myCourse = async (req, res) => {
  try {
    const myCourse = await Course.find({});
    res.json(myCourse);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
};

const myInternship = async (req, res) => {
  try {
    const myInternship = await Internship.find({});
    res.json(myInternship);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
};

// Authentication Controller:
// Implement registration and login logic in authController.js.
// Validate input using Zod.
//login view courses,post courses, view internship and add internship
module.exports = { register, login, getUserProfile, myCourse, myInternship };
