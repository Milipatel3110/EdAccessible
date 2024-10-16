import React from 'react';
import '/Users/milipatel/Desktop/Desktopthings/Masters/Software Engineering/EdAccessible-Flask/frontend/src/css/AddClass.css'; // Import the styling for Add Class page

const AddClass = () => {
  return (
    <div className="add-class-container">
      {/* Navbar */}
     
      {/* Add Class Form */}
      <section className="add-class-section">
        <h2>Add New Class</h2>
        <form className="add-class-form">
          <label htmlFor="className">Name</label>
          <input type="text" id="className" placeholder="Enter Class Name" />

          <label htmlFor="section">Section</label>
          <input type="text" id="section" placeholder="Enter Section" />

          <label htmlFor="session">Session</label>
          <input type="text" id="session" placeholder="Enter Session" />

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default AddClass;
