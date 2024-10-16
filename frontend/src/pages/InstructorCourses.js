import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/milipatel/Desktop/Desktopthings/Masters/Software Engineering/EdAccessible-Flask/frontend/src/css/Courses.css'; // Corrected the relative path for CSS

const InstructorCourses = () => {
  return (
    <div className="courses-container">
      <div className="main-content">
        {/* Welcome Section */}
        <section className="welcome-section">
          <div className="welcome-text">
            <h2>Welcome <span>Instructor</span></h2>
            <p>Learn to create accessible content for all learners.</p>
          </div>
          <div className="welcome-image">
            <img src="/path-to-your-image.png" alt="Instructor" />
          </div>
        </section>

        {/* Add Class Button */}
        <div className="add-class-btn-container">
          <Link to="/add-class">
            <button className="add-class-btn">+ Add Class</button>
          </Link>
        </div>

        {/* Classes Section */}
        <section className="classes-section">
          <h2>Classes</h2>
          <div className="classes-container">
            <div className="class-card">
              <img src="/path-to-your-image.png" alt="Course" />
              <p>Course Name</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default InstructorCourses;
