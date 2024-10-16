import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Courses.css'; // Make sure this CSS path is correct

function Courses() {
  const courseData = [
    {
      name: "CSCE 5430 Software Engineering",
      title: "Introduction to Software Engineering",
      videoId: "sB2iQSvrcG0", // YouTube video ID
    },
    {
      name: "CSCE 5300 Real Time Operating Systems",
      title: "Real Time Operating Systems",
      videoId: "F321087yYy4", // YouTube video ID
    },
    {
      name: "CSCE 5230 Big Data and Data Science",
      title: "Big Data and Data Science",
      videoId: "yR2wWQYiVKM", // YouTube video ID
    },
    {
      name: "CSCE 5500 Advanced Algorithms",
      title: "Advanced Algorithm Design",
      videoId: "TXYZ", // Example YouTube video ID
    },
  ];

  const handleAssignmentsClick = (courseName) => {
    // Logic to handle assignment button click
    alert(`Opening assignments for ${courseName}`);
  };

  const handleViewCourseClick = (courseName) => {
    // Logic to handle view course button click
    alert(`Opening course details for ${courseName}`);
  };

  return (
    <div className="courses-container">
      <h2 className="courses-section-title">COURSES</h2>
      <div className="courses-grid">
        {courseData.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-name highlight">{course.name}</div>
            <div className="course-title">{course.title}</div>
            <div className="video-section">
              <iframe 
                width="300" 
                height="200" 
                src={`https://www.youtube.com/embed/${course.videoId}`} 
                title={course.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="course-actions">
              <button onClick={() => handleAssignmentsClick(course.name)} className="signup-button">
                Assignments
              </button>
              <button onClick={() => handleViewCourseClick(course.name)} className="signup-button">
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
