import React, { useState } from 'react';

// ✅ Import images
import MyntraEventPage from './src/assets/MyntraEventPage.jpg';
import BestLuxuryWatches from './src/assets/BestLuxuryWatches.jpg';
import SimpleCalculator from './src/assets/SimpleCalculator.jpg';
import Booksky from './src/assets/Booksky.jpg';
import BlackjackGame from './src/assets/BlackjackGame.jpg';
import MiniMart from './src/assets/MiniMart.jpg';
import InstagramClone from './src/assets/InstagramClone.jpg';
import PortfolioWebsite from './src/assets/PortfolioWebsite.jpg';
import Safegaurd from './src/assets/Safegaurd.jpg';
import SJIT from './src/assets/SJIT.jpg';
import StitchPro from './src/assets/StitchPro.jpg';
import Restaurant from './src/assets/Restaurant.jpg';

function Project() {
  const [projects] = useState([
    {
      title: "Myntra Event Page",
      description: "Myntra Event Page is a visually captivating front-end project...",
      image: MyntraEventPage,
      demo: "https://avins-vr.github.io/Myntra-Upcoming-Event-Page/Upcoming%20Event.html",
      github: "https://github.com/Avins-VR/Myntra-Upcoming-Event-Page/blob/main/Upcoming%20Event.html"
    },
    {
      title: "Best Luxury Watches",
      description: "Best Luxury Watches is a sleek and elegant front-end project...",
      image: BestLuxuryWatches,
      demo: "https://avins-vr.github.io/Luxury-Watches/Luxury%20Watch/watches.html",
      github: "https://github.com/Avins-VR/Luxury-Watches/tree/main/Luxury%20Watch"
    },
    {
      title: "Simple Calculator",
      description: "Simple Calculator is a clean and functional project...",
      image: SimpleCalculator,
      demo: "https://avins-vr.github.io/Simple-Calculator/Calculator/calculator.html",
      github: "https://github.com/Avins-VR/Simple-Calculator/blob/main/Calculator/calculator.html"
    },
    {
      title: "Booksky",
      description: "Booksky is a modern and user-friendly digital platform...",
      image: Booksky,
      demo: "https://avins-vr.github.io/Booksky/Booksky/book.html",
      github: "https://github.com/Avins-VR/Booksky/tree/main/Booksky"
    },
    {
      title: "Blackjack Game",
      description: "Blackjack Game is an interactive and engaging project...",
      image: BlackjackGame,
      demo: "https://avins-vr.github.io/Blackjack-game/Blackjack/Blackjack.html",
      github: "https://github.com/Avins-VR/Blackjack-game/tree/main/Blackjack"
    },
    {
      title: "Mini Mart",
      description: "Mini Mart is a modern and visually appealing online storefront...",
      image: MiniMart,
      demo: "https://avins-vr.github.io/Mini-Mart/Mini%20Mart/Minimart.html",
      github: "https://github.com/Avins-VR/Mini-Mart/tree/main/Mini%20Mart"
    },
    {
      title: "Instagram Clone",
      description: "Instagram Clone is a visually rich and interactive project...",
      image: InstagramClone,
      demo: "https://avins-vr.github.io/Instagram-Clone/Instagram%20Clone/InstagramClone.html",
      github: "https://github.com/Avins-VR/Instagram-Clone/tree/main/Instagram%20Clone"
    },
    {
      title: "First Portfolio Website",
      description: "My First Portfolio is a personal milestone project...",
      image: PortfolioWebsite,
      demo: "https://avins-vr.github.io/First-Portfolio/My%20Portfolio/portfolio.html",
      github: "https://github.com/Avins-VR/First-Portfolio/tree/main/My%20Portfolio"
    },
    {
      title: "Safegaurd",
      description: "Safeguard is a purpose-driven safety application...",
      image: Safegaurd,
      demo: "https://avins-vr.github.io/First-Portfolio/My%20Portfolio/portfolio.html",
      github: "https://github.com/Avins-VR/First-Portfolio/tree/main/My%20Portfolio"
    },
    {
      title: "SJIT Portal Clone Design",
      description: "SJIT Portal Clone Design is a modern UI/UX project...",
      image: SJIT,
      demo: "https://www.figma.com/proto/eP6uqzzGI0IrLP1vviV5l6/SJIT-Web-Cloning?node-id=14-3&starting-point-node-id=14%3A3&scaling=scale-down-width&content-scaling=fixed",
      github: "https://github.com/Avins-VR/CLONE_SJIT_WEBSITE?tab=readme-ov-file"
    },
    {
      title: "StitchPro – Login Page",
      description: "StitchPro – Login Page is a modern UI/UX design...",
      image: StitchPro,
      demo: "https://www.figma.com/proto/4VQ1Ht9OhQS836LOofKT5C/StritchPro-Login-Page?node-id=16-35&scaling=scale-down-width&content-scaling=fixed",
      github: "https://github.com/Avins-VR/StitchPro-Login-page"
    },
    {
      title: "Tasty Haven Family Restaurant",
      description: "Tasty Haven – Family Restaurant is a warm and inviting UI/UX design project...",
      image: Restaurant,
      demo: "https://www.figma.com/proto/b1MNJlzZVFsdarbiJCX6IV/TastyHaven-Restaurent?node-id=3-2&starting-point-node-id=3%3A2&scaling=scale-down-width&content-scaling=fixed",
      github: "https://github.com/Avins-VR/TASTY_HEAVAN?tab=readme-ov-file"
    }
  ]);

  return (
    <div className="project-section">
      <h2>My Projects</h2>
      <p>
        Explore some of the exciting projects I’ve worked on, combining creativity and technology.
      </p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
