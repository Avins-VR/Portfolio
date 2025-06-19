import React, { useState } from 'react';

function Experience() {
  const [experiences] = useState([
    {
      Role: "UI/UX Intern – Srishti Innovative",
      duration: "1-week Internship",
      description:
        "Gained hands-on experience in user interface and user experience design by working on real-world layouts and interactive prototypes. I worked primarily with Figma, focusing on creating clean, user-friendly interfaces with strong attention to usability, visual hierarchy, and design consistency. This experience helped me understand practical design workflows and sharpened my skills in wireframing and user-centered design.",
      image: "./src/assets/Intern.png",
      Month: "December 2024"
    }
  ]);

  return (
    <div className="experience-wrapper">
      <h2 className="experience-heading">My Experience</h2>
      <p className="experience-subtext">
        The technologies and tools I use to build innovative and impactful digital solutions
      </p>
      {experiences.map((experience, index) => (
        <div className="experience-container" key={index}>
          <div className="experience-image">
            <img src={experience.image} alt={experience.Role} />
          </div>
          <div className="experience-text">
            <h4>{experience.Role}</h4>
            <i>{experience.duration}</i>
            <p>{experience.description}</p>
            <span className="month-pill">{experience.Month}</span>  {/* Moved to bottom */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
