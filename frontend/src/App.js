import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import InstructorCourses from './pages/InstructorCourses';// For Instructor
import StudentCourses from './pages/StudentCourses'; // For Student
import Blog from './pages/Blog';
import Testimonials from './pages/Testimonials';
import AboutUs from './pages/Aboutus';
import SignUp from './pages/SignUp';
import AddClass from './pages/AddClass';
import Login from './pages/login';
import './App.css'; // Importing the global styles

function App() {
  const [role, setRole] = useState(''); // Define the role state

  // Simulate role fetching (replace this with your actual authentication logic)
  useEffect(() => {
    // Example role fetching, this could be from an API or authentication service
    const userRole = 'Student'; // Replace this with actual logic to fetch role
    setRole(userRole);
  }, []);
  return (
    <Router>
      <div>
        {/* Updated navbar structure */}
        <nav className="navbar">
          <div className="logo">EdAccessible</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
          <div className="nav-icons">
            {/* Login Button in Navbar */}
            <Link to="/login" className="signin-btn">Login</Link> {/* Link to the Login page */}
          </div>
        </nav>
        

        {/* Routing for pages */}
        <Routes>
          <Route path="/" element={<Home />} />
           {/* Route based on role */}
           {role === 'Instructor' ? (
            <Route path="/courses" element={<InstructorCourses />} />
          ) : (
            <Route path="/courses" element={<StudentCourses />} />
          )}
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} /> {/* Route for Login Page */}
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/add-class" element={<AddClass />} /> {/* Add Class route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
