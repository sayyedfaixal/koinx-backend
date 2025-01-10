const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors package
const app = express();
require("dotenv").config();

// Use CORS middleware to allow requests from your frontend
app.use(
  cors({
    origin: "http://localhost:5174", // Allow requests from this origin (frontend)
    methods: ["GET", "POST"], // Allow GET and POST requests
  })
);

app.use(express.json());

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Routes
app.use("/api", require("./routes/api"));

module.exports = app;
