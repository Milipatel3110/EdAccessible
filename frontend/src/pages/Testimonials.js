import React, { useState } from 'react';
import '/Users/milipatel/Desktop/Desktopthings/Masters/Software Engineering/EdAccessible-Flask/frontend/src/css/Testimonials.css';

const initialTestimonialsData = [
  {
    name: "John Doe",
    testimonial: "The courses offered were excellent and provided me with in-depth knowledge about software engineering. I particularly enjoyed the hands-on projects.",
    courses: ["CSCE 5430 - Software Engineering", "CSCE 5215 - Machine Learning", "CSCE 5300 - Big Data and Data Science"],
  },
  {
    name: "Jane Smith",
    testimonial: "This learning experience has been transformative! The deep learning course helped me build real-world AI applications.",
    courses: ["CSCE 5218 - Deep Learning", "CSCE 5210 - Fundamentals of Artificial Intelligence"],
  },
  {
    name: "Alice Brown",
    testimonial: "I gained valuable insights into feature engineering and AI development that I can directly apply to my job. Highly recommend!",
    courses: ["CSCE 5214 - Software Development for AI", "CSCE 5222 - Feature Engineering"],
  },
];

function Testimonials() {
  const [testimonialsData, setTestimonialsData] = useState(initialTestimonialsData);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    testimonial: "",
    courses: "",
  });
  const [isFormVisible, setFormVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial({ ...newTestimonial, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const coursesArray = newTestimonial.courses.split(',').map(course => course.trim());
    setTestimonialsData([
      ...testimonialsData,
      { ...newTestimonial, courses: coursesArray }
    ]);
    setNewTestimonial({ name: "", testimonial: "", courses: "" });
    setFormVisible(false);
  };

  const handleAddTestimonialClick = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div className="testimonials-page">
      <h2 className="testimonials-title">Student Testimonials</h2>
      <div className="testimonials-container">
        {testimonialsData.map((student, index) => (
          <div className="testimonial-card" key={index}>
            <h3>{student.name}</h3>
            <p className="testimonial-text">"{student.testimonial}"</p>
            <h4>Courses Taken:</h4>
            <ul>
              {student.courses.map((course, idx) => (
                <li key={idx}>{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button className="add-testimonial-button" onClick={handleAddTestimonialClick}>
        {isFormVisible ? "Close Form" : "Add Testimonial"}
      </button>

      {isFormVisible && (
        <form className="add-testimonial-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={newTestimonial.name}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="testimonial"
            placeholder="Your Testimonial"
            value={newTestimonial.testimonial}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="courses"
            placeholder="Courses (comma-separated)"
            value={newTestimonial.courses}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Submit Testimonial</button>
        </form>
      )}
    </div>
  );
}

export default Testimonials;