import React, { useState } from 'react';

import Python from './assets/Python.png';
import JS from './assets/JS.png';
import Java from './assets/Java.png';
import HTML from './assets/HTML.png';
import CSS from './assets/CSS.png';
import ReactLogo from './assets/React.png';
import Git from './assets/git.png';
import GitHub from './assets/gitHub.png';
import Figma from './assets/Figma.png';

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
