import React, { useState } from 'react';

import MyntraEventPage from './assets/MyntraEventPage.jpg';
import BestLuxuryWatches from './assets/BestLuxuryWatches.jpg';
import SimpleCalculator from './assets/SimpleCalculator.jpg';
import Booksky from './assets/Booksky.jpg';
import BlackjackGame from './assets/BlackjackGame.jpg';
import MiniMart from './assets/MiniMart.jpg';
import InstagramClone from './assets/InstagramClone.jpg';
import PortfolioWebsite from './assets/PortfolioWebsite.jpg';
import Safegaurd from './assets/Safegaurd.jpg';
import SJIT from './assets/SJIT.jpg';
import StitchPro from './assets/StitchPro.jpg';
import Restaurant from './assets/Restaurant.jpg';

function Project() {
  const [projects] = useState([
    {
      title: "Myntra Event Page",
      description: "Myntra Event Page is a visually captivating front-end project that replicates the vibrant and engaging atmosphere of an e-commerce fashion event. Inspired by Myntra’s real-world festive campaigns, this project showcases my ability to craft responsive, stylish, and user-centric web designs. The goal was to recreate the excitement of a major online sale through compelling UI elements, dynamic banners, and intuitive layouts — all focused on enhancing user engagement and elevating the digital shopping experience",
      image: MyntraEventPage,
      demo: "https://avins-vr.github.io/Myntra-Upcoming-Event-Page/Upcoming%20Event.html",
      github: "https://github.com/Avins-VR/Myntra-Upcoming-Event-Page/blob/main/Upcoming%20Event.html"
    },
    {
      title: "Best Luxury Watches",
      description: "Best Luxury Watches is a sleek and elegant front-end project designed to showcase premium timepieces with a refined digital aesthetic. This project captures the essence of luxury through high-end visuals, minimalistic layout, and smooth user interaction. Inspired by modern watch brands, it emphasizes sophistication, brand storytelling, and premium presentation — delivering an immersive browsing experience that mirrors the exclusivity and craftsmanship of luxury watches",
      image: BestLuxuryWatches,
      demo: "https://avins-vr.github.io/Luxury-Watches/Luxury%20Watch/watches.html",
      github: "https://github.com/Avins-VR/Luxury-Watches/tree/main/Luxury%20Watch"
    },
    {
      title: "Simple Calculator",
      description: "Simple Calculator is a clean and functional project designed to perform basic arithmetic operations with ease and precision. With an intuitive interface and minimal design, this tool focuses on user-friendly interaction and efficient performance. The project emphasizes simplicity, responsiveness, and clarity — making it a practical and accessible utility for everyday calculations",
      image: SimpleCalculator,
      demo: "https://avins-vr.github.io/Simple-Calculator/Calculator/calculator.html",
      github: "https://github.com/Avins-VR/Simple-Calculator/blob/main/Calculator/calculator.html"
    },
    {
      title: "Booksky",
      description: "Booksky is a modern and user-friendly digital platform designed to explore, discover, and organize books across various genres. With a clean interface and a focus on seamless navigation, Booksky offers users an intuitive space to browse featured titles, view detailed book information, and stay inspired to read more. Whether you're a casual reader or a book enthusiast, this project aims to create an immersive literary experience tailored for the digital age",
      image: Booksky,
      demo: "https://avins-vr.github.io/Booksky/Booksky/book.html",
      github: "https://github.com/Avins-VR/Booksky/tree/main/Booksky"
    },
    {
      title: "Blackjack Game",
      description: "Blackjack Game is an interactive and engaging project that brings the classic casino card game to life with a sleek digital twist. Designed for intuitive play and smooth user experience, the game captures the thrill of Blackjack through dynamic card animations, real-time score tracking, and responsive gameplay logic. This project combines entertainment and logic, offering users a fun way to test their luck and strategy in a clean, visually appealing environment",
      image: BlackjackGame,
      demo: "https://avins-vr.github.io/Blackjack-game/Blackjack/Blackjack.html",
      github: "https://github.com/Avins-VR/Blackjack-game/tree/main/Blackjack"
    },
    {
      title: "Mini Mart",
      description: "Mini Mart is a modern and visually appealing online storefront designed to simulate a seamless grocery shopping experience. This project features a clean layout, interactive product displays, and a smooth user interface that mimics real-world mini supermarket functionality. With features like light/dark mode toggling, product modals, and intuitive navigation, Mini Mart offers users a simple yet immersive way to browse and explore everyday essentials in a digital environment",
      image: MiniMart,
      demo: "https://avins-vr.github.io/Mini-Mart/Mini%20Mart/Minimart.html",
      github: "https://github.com/Avins-VR/Mini-Mart/tree/main/Mini%20Mart"
    },
    {
      title: "Instagram Clone",
      description: "Instagram Clone is a visually rich and interactive project that recreates the core features and aesthetic of the popular social media platform. Designed with a focus on clean UI, smooth user interaction, and responsive layouts, this clone captures the essence of Instagram — from profile views and image feeds to like buttons and post layouts. It’s a showcase of modern design principles and an exploration of how user-centric platforms foster social connection and content sharing",
      image: InstagramClone,
      demo: "https://avins-vr.github.io/Insta-Clone//",
      github: "https://github.com/Avins-VR/Insta-Clone"
    },
    {
      title: "First Portfolio Website",
      description: "My First Portfolio is a personal milestone project that showcases my journey, skills, and projects in a clean and organized digital space. Crafted with a focus on simplicity and clarity, this portfolio reflects my passion for design, development, and continuous learning. It serves as a central hub to present who I am, what I do, and how I aspire to grow — marking the beginning of my professional identity in the digital world",
      image: PortfolioWebsite,
      demo: "https://avins-vr.github.io/First-Portfolio/My%20Portfolio/portfolio.html",
      github: "https://github.com/Avins-VR/First-Portfolio/tree/main/My%20Portfolio"
    },
    {
      title: "Safegaurd",
      description:  "Safegaurd is a purpose-driven safety application I’m currently working on, designed to empower users with real-time protection and smart emergency features. Built with a strong focus on user security and quick accessibility, Safeguard aims to provide functionalities like emergency alerts, location tracking, and instant communication with trusted contacts. Inspired by the mission to create safer communities, this ongoing project blends technology with responsibility — offering a reliable companion for users in times of need",
      image: Safegaurd,
      demo: "https://Avins-VR.github.io/Safegaurd/",
      github: "https://github.com/Avins-VR/Safegaurd"
    },
    {
      title: "SJIT Portal Clone Design",
      description: "SJIT Portal Clone Design is a modern UI/UX project that reimagines the student and faculty portal experience of St. Joseph's Institute of Technology. This design focuses on clean navigation, intuitive layout, and enhanced user flow to simplify access to academic records, announcements, and essential campus services. With a sleek interface and user-centered approach, the portal clone reflects a commitment to improving digital campus interactions through thoughtful and functional design",
      image: SJIT,
      demo: "https://www.figma.com/proto/eP6uqzzGI0IrLP1vviV5l6/SJIT-Web-Cloning?node-id=14-3&starting-point-node-id=14%3A3&scaling=scale-down-width&content-scaling=fixed",
      github: "https://github.com/Avins-VR/CLONE_SJIT_WEBSITE?tab=readme-ov-file"
    },
    {
      title: "StitchPro – Login Page",
      description: "StitchPro – Login Page is a modern UI/UX design crafted for a fashion or tailoring management system. This design emphasizes user-friendly navigation, visual balance, and brand alignment to ensure a seamless first impression. With a focus on clarity, responsiveness, and intuitive interaction, the StitchPro login interface reflects best practices in user experience — offering a welcoming and efficient gateway for users to access the platform",
      image: StitchPro,
      demo: "https://www.figma.com/proto/4VQ1Ht9OhQS836LOofKT5C/StritchPro-Login-Page?node-id=16-35&scaling=scale-down-width&content-scaling=fixed",
      github: "https://github.com/Avins-VR/StitchPro-Login-page"
    },
    {
      title: "Tasty Haven Family Restaurant",
      description: "Tasty Haven – Family Restaurant is a warm and inviting UI/UX design project created to enhance the digital dining experience for a family-friendly restaurant. The design blends mouth-watering visuals with smooth navigation, making it easy for users to explore the menu, book tables, and discover specials. With a focus on hospitality, responsiveness, and user comfort, Tasty Haven delivers a delightful interface that mirrors the cozy and welcoming atmosphere of the restaurant itself",
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
