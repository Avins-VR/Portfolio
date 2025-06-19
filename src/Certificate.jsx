import React from 'react'
import { useState } from 'react';

function Certificate() {
    const [certificates,setCertificates] =useState([
        {
            title: "HTML5",
            issuer: "Infosys Springboard",
            image: "./src/assets/HTML5certificate.jpg"
        },
        {
            title: "CSS3",
            issuer: "Infosys Springboard",
            image: "./src/assets/CSS3certificate.jpg"
        },
        {
            title: "JavaScript",
            issuer: "Infosys Springboard",
            image: "./src/assets/JScertificate.jpg"
        },
        {
            title: "Python For Data Science",
            issuer: "NPTEL",
            image: "./src/assets/Datasciencenptl.jpg"
        },
        {
            title: "Linguaskill",
            issuer: "Cambridge University",
            image: "./src/assets/Linguaskill.jpg"
        },
        {
            title: "Campus Ambassador",
            issuer: "My Gov",
            image: "./src/assets/mygov.jpg"
        },
        {
            title: "Introduction to Data Science",
            issuer: "Cisco Networking Academy",
            image: "./src/assets/ciscodatascience.jpg"
        },
        {
            title: "Networking Basics",
            issuer: "Cisco Networking Academy",
            image: "./src/assets/cisconetworking.jpg"
        },
        {
            title: "Introduction to Cybersecurity",
            issuer: "Cisco Networking Academy",
            image: "./src/assets/cybersecurity.jpg"
        },
        {
            title: "React JS",
            issuer: "Infosys Springboard",
            image: "./src/assets/Reactcertificate.jpg"
        },
    ]);
  return (
    <div className="certificate-section">
  <h2>My Certificates</h2>
  <p>
    Each certificate reflects a step in my continuous learning journey — from mastering the basics to exploring new technologies
  </p>
  <div className="certificate-grid">
    {certificates.map((certificate, index) => (
      <div className="certificate-card" key={index}>
        <img src={certificate.image} alt={certificate.title} />
        <h4>{certificate.title}</h4>
        <p>{certificate.issuer}</p>
      </div>
    ))}
  </div>
</div>
  )
}

export default Certificate