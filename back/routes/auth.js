// routes/auth.js
const express = require('express');
const router = express.Router();

// Dummy user (later you’ll replace with DB)
const dummyUser = {
  username: "student1",
  password: "password123"
};

// POST /auth/login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === dummyUser.username && password === dummyUser.password) {
    res.json({ message: "Login successful ✅" });
  } else {
    res.status(401).json({ message: "Invalid credentials ❌" });
  }
});

module.exports = router;
