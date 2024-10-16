import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as handpose from '@tensorflow-models/handpose';
import '@tensorflow/tfjs-backend-webgl';
import '../css/Home.css'; // Adjusted the path for the CSS

const Home = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [gestureDetected, setGestureDetected] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Function to start the audio guide
  const startAudioGuide = () => {
    if ('speechSynthesis' in window) {
      // Clear any ongoing speech
      window.speechSynthesis.cancel();

      // Text content to be read
      const speechText = `
        Welcome to EdAccessible. Empowering Every Learner with Accessible Education for All. 
        You can explore our courses, testimonials, blog, and more from the top navigation. 
        We have over 34,000 registered users and more than 50 courses available.
        Would you like to register? Please say 'yes' to register or click the Register Now button.
      `;

      // Create a new speech synthesis utterance
      const speech = new SpeechSynthesisUtterance(speechText);

      // Start reading the content
      window.speechSynthesis.speak(speech);

      // After the audio guide finishes, start listening for the user's response
      speech.onend = () => {
        startSpeechRecognition();
        startHandGestureRecognition();
      };
    } else {
      console.log('Speech Synthesis not supported in this browser.');
    }
  };

  // Function to start speech recognition
  const startSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US'; // Set the language to English

      recognition.start(); // Start listening

      recognition.onresult = (event) => {
        const userResponse = event.results[0][0].transcript.toLowerCase();

        // Handle the user's response
        if (userResponse.includes('yes')) {
          window.location.href = '/signup'; // Redirect to the registration page
        } else {
          // If the user says anything else, prompt them again
          const retrySpeech = new SpeechSynthesisUtterance();
          retrySpeech.text = "I didn't catch that. Please say 'yes' to register.";
          window.speechSynthesis.speak(retrySpeech);
          recognition.start(); // Restart listening
        }
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
      };
    } else {
      console.log('Speech Recognition not supported in this browser.');
    }
  };

  // Function to start hand gesture recognition using TensorFlow's Handpose model
  const startHandGestureRecognition = async () => {
    // Set up webcam and handpose model
    const video = document.getElementById('webcam');
    const handposeModel = await handpose.load();
    
    video.addEventListener('loadeddata', async () => {
      setInterval(async () => {
        const predictions = await handposeModel.estimateHands(video);

        if (predictions.length > 0) {
          // Logic to detect a thumbs-up gesture (very simplified)
          const landmarks = predictions[0].landmarks;
          const thumbTip = landmarks[4]; // Thumb tip
          const indexTip = landmarks[8]; // Index finger tip

          // If thumb tip is above the index finger tip, assume it's a thumbs-up
          if (thumbTip[1] < indexTip[1]) {
            setGestureDetected(true);
            window.location.href = '/signup'; // Redirect to registration
          }
        }
      }, 1000); // Check every 1 second
    });
  };

  // Use effect to run the audio guide once when the page loads
  useEffect(() => {
    startAudioGuide();
  }, []); // Empty dependency array ensures this runs only on component mount

  return (
    <div className="home-container">
      <main>
        <section className="hero-section">
          <div className="text-container">
            <h1>Empowering Every Learner: Accessible Education for All</h1>
            <p>Accessible Education for All</p>
            <Link to="/signup">
              <button className="register-btn">Register Now</button>
            </Link>
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

        {/* Button to replay the audio guide */}
        <button onClick={startAudioGuide} className="replay-audio-btn">
          Replay Audio Guide
        </button>

        {/* Hidden video element for webcam stream */}
        <video
          id="webcam"
          autoPlay
          playsInline
          style={{ display: 'none', position: 'absolute', top: 0 }}
          width="640"
          height="480"
        ></video>
      </main>
    </div>
  );
};

export default Home;
