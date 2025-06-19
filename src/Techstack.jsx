import React, { useState } from 'react';

// Image Imports
import Python from './src/assets/Python.png';
import JS from './src/assets/JS.png';
import Java from './src/assets/Java.png';
import HTML from './src/assets/HTML.png';
import CSS from './src/assets/CSS.png';
import ReactLogo from './src/assets/React.png';
import Git from './src/assets/Git.png';
import GitHub from './src/assets/GitHub.png';
import Figma from './src/assets/Figma.png';

function Techstack() {
  const [techstack] = useState([
    {
      skill: "Programming Language",
      technologies: [
        { name: "Python", image: Python, alt: "Python" },
        { name: "JavaScript", image: JS, alt: "JavaScript" },
        { name: "Java", image: Java, alt: "Java" }
      ]
    },
    {
      skill: "Frontend Development",
      technologies: [
        { name: "HTML", image: HTML, alt: "HTML" },
        { name: "CSS", image: CSS, alt: "CSS" },
        { name: "React", image: ReactLogo, alt: "React" }
      ]
    },
    {
      skill: "Tools & Design",
      technologies: [
        { name: "Git", image: Git, alt: "Git" },
        { name: "GitHub", image: GitHub, alt: "GitHub" },
        { name: "Figma", image: Figma, alt: "Figma" }
      ]
    }
  ]);

  return (
    <div className="techstack-container">
      <h2 className="title">My Tech Stack</h2>
      {techstack.map((item, index) => (
        <div key={index} className="tech-category">
          <h3>{item.skill}</h3>
          <div className="tech-grid">
            {item.technologies.map((tech, idx) => (
              <div key={idx} className="tech-card">
                <img src={tech.image} alt={tech.alt} />
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
