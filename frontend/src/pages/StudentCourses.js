import React from 'react';
import '/Users/milipatel/Desktop/Desktopthings/Masters/SoftwareEngineering/EdAccessible/frontend/src/css/Courses.css'; // Import the styling for the Student Courses page

const StudentCourses = () => {
  return (
    <div className="courses-container">
      <div className="main-content">
        {/* Navbar */}
      

        {/* Sidebar for Courses */}
        <aside className="sidebar">
          <h3 className="course-header">Courses</h3>
          <ul className="course-list">
            <li>CSCE 5430 Software Engineering Fall 2024</li>
            <li>CSCE 5300 Real-Time Operating Systems Fall 2024</li>
            <li>CSCE 5230 Big Data and Data Science Fall 2024</li>
          </ul>
        </aside>

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

        {/* Assignments Section */}
        <section className="assignments-section">
          <h2>Assignments</h2>
          <div className="assignments-container">
            <div className="assignment-card">
              <h3>Homework #1</h3>
              <p>Project Requirements - Sprint 1</p>
              <p><strong>Deadline: Oct 1st, 2024 11:59 PM</strong></p>
            </div>
            <div className="assignment-card">
              <h3>Homework #2</h3>
              <p>Product Design - Sprint 2</p>
              <p><strong>Deadline: Oct 15th, 2024 11:59 PM</strong></p>
            </div>
            <div className="assignment-card">
              <h3>Homework #3</h3>
              <p>Coding and Debugging - Sprint 3</p>
              <p><strong>Deadline: Oct 30th, 2024 11:59 PM</strong></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default StudentCourses;
