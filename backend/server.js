const express = require("express");
const app = express();

const PORT = 3000;

// Middleware για JSON responses
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.send("OK");
});

// API endpoint
app.get("/api/message", (req, res) => {
  res.json({ message: "hello" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
