import React, { useState } from 'react';

import HTML5Cert from './assets/HTML5certificate.jpg';
import CSS3Cert from './assets/CSS3certificate.jpg';
import JSCert from './assets/JScertificate.jpg';
import PythonCert from './assets/Datasciencenptl.jpg';
import LinguaskillCert from './assets/Linguaskill.jpg';
import MyGovCert from './assets/mygov.jpg';
import CiscoDSCert from './assets/ciscodatascience.jpg';
import CiscoNetworkingCert from './assets/cisconetworking.jpg';
import CybersecurityCert from './assets/cybersecurity.jpg';
import ReactCert from './assets/Reactcertificate.jpg';

function Certificate() {
  const [certificates] = useState([
    {
      title: "HTML5",
      issuer: "Infosys Springboard",
      image: HTML5Cert
    },
    {
      title: "CSS3",
      issuer: "Infosys Springboard",
      image: CSS3Cert
    },
    {
      title: "JavaScript",
      issuer: "Infosys Springboard",
      image: JSCert
    },
    {
      title: "Python For Data Science",
      issuer: "NPTEL",
      image: PythonCert
    },
    {
      title: "Linguaskill",
      issuer: "Cambridge University",
      image: LinguaskillCert
    },
    {
      title: "Campus Ambassador",
      issuer: "My Gov",
      image: MyGovCert
    },
    {
      title: "Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      image: CiscoDSCert
    },
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      image: CiscoNetworkingCert
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      image: CybersecurityCert
    },
    {
      title: "React JS",
      issuer: "Infosys Springboard",
      image: ReactCert
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
  );
}

export default Certificate;
