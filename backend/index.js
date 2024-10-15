const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault() // Ensure you have set up Firebase Admin SDK
});

// Create Express App
const app = express();
app.use(cors());
app.use(express.json());

// PostgreSQL Database Configuration
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'edaccessible',
  password: 'ypostgres',
  port: 5433,
});

// Check if the email or username already exists
app.post('/api/checkUser', async (req, res) => {
  const { email, username } = req.body;

  try {
    // Check if the username already exists in the database
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (result.rows.length > 0) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Check if the email already exists in Firebase Auth
    try {
      const user = await admin.auth().getUserByEmail(email);
      if (user) {
        return res.status(400).json({ message: 'Email is already registered' });
      }
    } catch (error) {
      // User does not exist, this is fine, proceed with registration
    }

    res.status(200).json({ message: 'Valid user' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Register user to PostgreSQL database
app.post('/api/registerUser', async (req, res) => {
  const { firstName, lastName, EUID, username, dob, gender, email, contact, disability, role } = req.body;

  try {
    await pool.query(
      'INSERT INTO users (first_name, last_name, euid, username, dob, gender, email, contact, disability, role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
      [firstName, lastName, EUID, username, dob, gender, email, contact, disability, role]
    );
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Database error' });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
