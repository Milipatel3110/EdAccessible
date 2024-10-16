import React, { useState } from 'react';
import '../css/Signup.css'; // Ensure the path is correct

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match!");
      return;
    }
    setSuccess('User registered successfully!');
    setError('');
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Register | Signup</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        
        {/* First Name and Last Name */}
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
              placeholder="Enter Your EUID"
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
              placeholder="Create a Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Date of Birth and Gender */}
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
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password and Confirm Password */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
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
              placeholder="Confirm Your Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Contact and Disability */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact">Contact No.</label>
            <input
              type="text"
              name="contact"
              placeholder="Enter Your Contact No."
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="disability">Disability</label>
            <input
              type="text"
              name="disability"
              placeholder="Specify Any Disability"
              value={formData.disability}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Role (Instructor or Student) */}
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
