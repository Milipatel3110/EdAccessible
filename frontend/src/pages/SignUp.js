import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Firebase auth
import { auth } from '../firebase'; // Import Firebase auth
import '/Users/milipatel/Desktop/Desktopthings/Masters/SoftwareEngineering/EdAccessible/frontend/src/css/Signup.css';

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    euid: '',
    username: '',
    dob: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact: '',
    disability: '',
    role: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match!");
      return;
    }

    try {
      // Step 1: Register the user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      console.log("Firebase User Registered:", user);

      // Step 2: Store the additional user data in PostgreSQL
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          euid: formData.euid,
          username: formData.username,
          contact: formData.contact,
          role: formData.role,
        }),
      });

      const result = await response.json();
      console.log("User Data Saved in PostgreSQL:", result);

      setSuccess('User registered successfully!');
      setError(''); // Clear errors if any
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Register | Signup</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter Your First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Your Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* EUID and Username */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="euid">EUID</label>
            <input
              type="text"
              name="euid"
              placeholder="EUID"
              value={formData.euid}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Create Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* DOB and Gender */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Transgender">Transgender</option>
            </select>
          </div>
        </div>

        {/* Email and Password */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email ID"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Contact */}
        <div className="form-group">
          <label htmlFor="contact">Contact No.</label>
          <input
            type="text"
            name="contact"
            placeholder="Enter 10 digits of Contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        {/* Role */}
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="Instructor">Instructor</option>
            <option value="Student">Student</option>
          </select>
        </div>

        {/* Error or Success Message */}
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
