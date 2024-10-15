import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import '/Users/milipatel/Desktop/Desktopthings/Masters/SoftwareEngineering/EdAccessible/frontend/src/css/Home.css'; // Import the CSS for styling the home page

const Home = () => {
  return (
    <div className="home-container">
    
      {/* Main Section */}
      <main>
        <section className="hero-section">
          <div className="text-container">
            <h1>Empowering Every Learner: Accessible Education for All</h1>
            <p>Our platform is designed to make every disability into accessible learning.</p>
            {/* Register Now Button */}
            <Link to="/signup">  {/* Link to the SignUp page */}
              <button className="register-btn">Register Now</button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="image-container">
            <img 
              src="/path-to-your-image.jpg" 
              alt="Visually impaired man" 
              className="main-image"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-box">
            <h2>Registered</h2>
            <p>34.87k</p>
          </div>
          <div className="stats-box">
            <h2>Courses</h2>
            <p>50+</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
