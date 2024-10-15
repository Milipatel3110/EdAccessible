import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import axios from 'axios';
import './Signup.css'; // Import the CSS file

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    EUID: '',
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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }
    try {
      const response = await fetch('http://localhost:5001/api/registerUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          EUID: formData.euid,
          username: formData.username,
          dob: formData.dob,
          gender: formData.gender,
          email: formData.email,
          contact: formData.contact,
          disability: formData.disability,
          role: formData.role,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to register user');
      }
  
      const result = await response.json();
      console.log("User registered successfully:", result);
    } catch (error) {
      console.error('Error during registration:', error);
      alert(error.message);
    }

    try {
      // Check if the username and email are valid
      const checkResponse = await axios.post('http://localhost:5001/api/checkUser', {
        email: formData.email,
        username: formData.username
      });

      if (checkResponse.status === 200) {
        // Create a new user with Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;

        // Add the user to the PostgreSQL database
        await axios.post('http://localhost:5001/api/registerUser', formData);
        alert('User registered successfully!');
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('An error occurred during registration');
      }
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h2>Register | Signup</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="column">
            <label>First Name</label>
            <input type="text" name="firstName" placeholder="Enter Your First Name" onChange={handleChange} required />
          </div>
          <div className="column">
            <label>Last Name</label>
            <input type="text" name="lastName" placeholder="Enter Your Last Name" onChange={handleChange} required />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label>EUID</label>
            <input type="text" name="EUID" placeholder="EUID" onChange={handleChange} required />
          </div>
          <div className="column">
            <label>Username</label>
            <input type="text" name="username" placeholder="Create Username" onChange={handleChange} required />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label>Date of Birth</label>
            <input type="date" name="dob" onChange={handleChange} required />
          </div>
          <div className="column">
            <label>Gender</label>
            <select name="gender" onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Transgender">Transgender</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter Your Email ID" onChange={handleChange} required />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          </div>
          <div className="column">
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label>Contact No.</label>
            <input type="tel" name="contact" placeholder="Enter 10 digits of Contact" onChange={handleChange} required />
          </div>
          <div className="column">
            <label>Disability</label>
            <input type="text" name="disability" placeholder="Deaf / Blind / Mute" onChange={handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label>Role</label>
            <select name="role" onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Instructor">Instructor</option>
              <option value="Student">Student</option>
            </select>
          </div>
        </div>
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Registering...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Register;
