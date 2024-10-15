const express = require('express');
const pool = require('../db'); // Make sure you've set up a PostgreSQL pool connection
const bcrypt = require('bcrypt');
const router = express.Router();

// API to handle signup
router.post('/signup', async (req, res) => {
  const { firstName, lastName, username, euid, dateOfBirth, gender, email, password, contactNo, disability, role } = req.body;
  
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into database
    const newUser = await pool.query(
      "INSERT INTO users (first_name, last_name, username, euid, dob, gender, email, password, contact_no, disability, role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *",
      [firstName, lastName, username, euid, dateOfBirth, gender, email, hashedPassword, contactNo, disability, role]
    );

    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
