// Import necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/routes"); // Assuming you have an auth route file

// Initialize environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON bodies

// Database connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Database connection error:", err));
// console.log(router);
// Routes
app.use("/api", router); // Authentication routes

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

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
