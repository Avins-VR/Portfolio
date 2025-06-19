import React from 'react';
import Techstack from './Techstack';
import Project from './Project';
import Experience from './Experience';
import Certificate from './Certificate';
import Gettouch from './Gettouch';

// Import images directly
import Adesign from './src/assets/Adesign.png';
import ProfileImage from './src/assets/Avins.jpg';

function App() {
  return (
    <div>
      <div className="app-wrapper">
        <div className="top-bar">
          <img className="logo" src={Adesign} alt="A Logo" />
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/avinsvr" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/Avins-VR" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://drive.google.com/file/d/11SQVKg2a4W40l6dl4jV4JxwkbJmaMpao/view" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-file-earmark-person-fill"></i>
            </a>
          </div>
        </div>

        <div className="app-container">
          <div className="text-section">
            <h1>Avins VR</h1>
            <h3>Software Engineer</h3>
            <p>
              I am an Artificial Intelligence and Data Science student with a strong passion for Machine Learning and emerging technologies.
              I am proficient in frontend development using HTML, CSS, JavaScript, and React, creating responsive and interactive user interfaces.
              I also have foundational skills in networking and programming with Python and Java. In addition, I am skilled in UI/UX design using Figma,
              with a focus on building user-centric digital experiences. Continuously learning and exploring, I stay up to date with the latest tools
              and technologies to enhance my development skills and drive innovation.
            </p>
          </div>
          <div className="image-section">
            <img src={ProfileImage} alt="Avins VR" />
          </div>
        </div>

        <button className="resume-button">
          <a
            href="https://drive.google.com/file/d/11SQVKg2a4W40l6dl4jV4JxwkbJmaMpao/view"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}
          >
            Resume <i className="bi bi-file-earmark-person-fill"></i>
          </a>
        </button>
      </div>

      <div>
        <Techstack />
        <Project />
        <Experience />
        <Certificate />
        <Gettouch />
        <footer className="footer">
          <p>© 2025 Avins VR. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
