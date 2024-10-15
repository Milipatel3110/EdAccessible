import React, { useState } from 'react';
import '/Users/milipatel/Desktop/Desktopthings/Masters/SoftwareEngineering/EdAccessible/frontend/src/css/Login.css'; // Import the CSS for styling the login page

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [euid, setEuid] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the login logic here (e.g., call an authentication service)
    console.log({ email, password, euid });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {/* EUID Field */}
          <div className="form-group">
            <label htmlFor="euid">EUID</label>
            <input
              type="text"
              id="euid"
              value={euid}
              onChange={(e) => setEuid(e.target.value)}
              placeholder="Enter your EUID"
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
