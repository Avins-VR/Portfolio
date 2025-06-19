import React from 'react';

function Gettouch() {
  return (
    <div className="gettouch-container">
      <h2>Get in Touch</h2>
      <p>
        I'm always open to opportunities, collaborations, or just a friendly chat.
        Feel free to reach out — let’s connect and create something great!
      </p>

      <div className="gettouch-boxes">
        <div className="gettouch-card">
          <i className="bi bi-envelope-fill"></i>
          <p>
            <a
              href="mailto:avins2005@gmail.com"
              style={{ color: '#00cfff', textDecoration: 'none', fontWeight: 'bold' }}
            >
              avins2005@gmail.com
            </a>
          </p>
        </div>

        <div className="gettouch-card">
          <i className="bi bi-telephone-fill"></i>
          <p>
            <a
              href="tel:+919488715046"
              style={{ color: '#00cfff', textDecoration: 'none', fontWeight: 'bold' }}
            >
              +91 9488715046
            </a>
          </p>
        </div>

        <div className="gettouch-card">
          <i className="bi bi-linkedin"></i>
          <p>
            <a
              href="https://www.linkedin.com/in/avinsvr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#00cfff', textDecoration: 'none', fontWeight: 'bold' }}
            >
              Visit Profile
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Gettouch;
