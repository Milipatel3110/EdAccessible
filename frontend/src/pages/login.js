import React, { useState } from 'react';
import '../css/Login.css'; // Ensure the path is correct

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [euid, setEuid] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, euid }); // You can replace this with your authentication logic
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
