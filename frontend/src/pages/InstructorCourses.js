import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/milipatel/Desktop/Desktopthings/Masters/SoftwareEngineering/EdAccessible/frontend/src/css/Courses.css'; // Import the styling for the Instructor Courses page

const InstructorCourses = () => {
  return (
    <div className="courses-container">
      <div className="main-content">
        {/* Navbar */}
      

        {/* Welcome Section */}
        <section className="welcome-section">
          <div className="welcome-text">
            <h2>Welcome <span>Instructor</span></h2>
            <p>This course explores effective e-learning strategies tailored for individuals with disabilities. Participants will learn to create accessible content, utilize assistive technologies, and design inclusive learning experiences that foster engagement and achievement for all learners.</p>
          </div>
          <div className="welcome-image">
            <img src="/Users/milipatel/Desktop/Desktopthings/Masters/SoftwareEngineering/EdAccessible/frontend/src/Images/image (1).png" alt="Instructor" />
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
              <img src="/Users/milipatel/Desktop/Desktopthings/Masters/SoftwareEngineering/EdAccessible/frontend/src/Images/image (1).png" alt="IT Support Course" />
              <p>IT Support Course By Google</p>
            </div>
            <div className="class-card">
              <img src="/Users/milipatel/Desktop/Desktopthings/Masters/SoftwareEngineering/EdAccessible/frontend/src/Images/image (1).png" alt="AtoZ Software Engineering" />
              <p>AtoZ Software Engineering</p>
            </div>
            <div className="class-card">
              <img src="/Users/milipatel/Desktop/Desktopthings/Masters/SoftwareEngineering/EdAccessible/frontend/src/Images/image (1).png" alt="Software Engineering Blueprint" />
              <p>Software Engineering Blueprint</p>
            </div>
            <div className="class-card">
              <img src="/Users/milipatel/Desktop/Desktopthings/Masters/SoftwareEngineering/EdAccessible/frontend/src/Images/image (1).png" alt="Intro to Software Engineering" />
              <p>Intro. to Software Engineering</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default InstructorCourses;
