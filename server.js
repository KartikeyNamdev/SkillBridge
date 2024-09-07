// Import necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");


// Import routes
const routerAdmin = require("./routes/adminRoute"); // Assuming you have an auth route file
const routerUser = require("./routes/userRoute"); // Assuming you have an auth route file
const {
  register,
  login,
  getUserProfile,
  myCourse,
  myInternship,
} = require("./controller/authController");
const { protect } = require("./middlewares/authMiddleware");

// Initialize environment variables
require("dotenv").config();
// Initialize Express app
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON bodies

// Database connection
mongoose
  .connect("mongodb+srv://kartikeynamdev:vinayak2003@mycluster.hjnalxi.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Database connection error:", err));
// console.log(router);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

//common
app.post("/register", register);
app.post("/login", login);
app.get("/profile", protect, getUserProfile);
app.get("/courses", protect, myCourse);
app.get("/internships", protect, myInternship);

// Routes
app.use("/admin", protect, routerAdmin); // Authentication routes for admin
app.use("/user", protect, routerUser); // Authentication routes for user

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
