const express = require("express");
const {
  register,
  login,
  getUserProfile,
} = require("../controller/authController");

// import  {register,
//   login,
//   getUserProfile} from ("../controller/authController")

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", protect, getUserProfile);

module.exports = router;
