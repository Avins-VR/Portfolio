import React, { useState } from 'react';
function Techstack() {
  const [techstack] = useState([
    {
      skill: "Programming Language",
      technologies: [
        {
          name: "Python",
          image: "./src/assets/Python.png",
          alt: "Python"
        },
        {
          name: "JavaScript",
          image: "./src/assets/JS.png",
          alt: "JavaScript"
        },
        {
          name: "Java",
          image: "./src/assets/Java.png",
          alt: "Java"
        }
      ]
    },
    {
      skill: "Frontend Development",
      technologies: [
        {
          name: "HTML",
          image: "./src/assets/HTML.png",
          alt: "HTML"
        },
        {
          name: "CSS",
          image: "./src/assets/CSS.png",
          alt: "CSS"
        },
        {
          name: "React",
          image: "./src/assets/React.png",
          alt: "React"
        }
      ]
    },
    {
      skill: "Tools & Design",
      technologies: [
        {
          name: "Git",
          image: "./src/assets/Git.png",
          alt: "Git"
        },
        {
          name: "GitHub",
          image: "./src/assets/GitHub.png",
          alt: "GitHub"
        },
        {
          name: "Figma",
          image: "./src/assets/Figma.png",
          alt: "Figma"
        }
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
