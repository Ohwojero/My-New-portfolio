import React from "react";
import { Link } from "react-router-dom";
import "./portfolio.css";
import { projectData } from "./data";

const PortfolioPage = () => {
  return (
    <div className="portfolio-container">
      <section className="port-wrapper">
        <h1>My Portfolio</h1>
        <p>
          Welcome to my portfolio! Dive in to explore some of my favorite
          projects and creative works. A full list of projects can be found on <a
            href="https://github.com/Ohwojero"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
             GitHub
          </a>
          .
        </p>
        <p>
          Are you looking for extra hands to join your team of developers? I am
          open to collaborate with you to bring your dreams to life. Give me a
          call and let's work together to take your business to the next level.
        </p>
        <a href="contact" className="contact">
          Contact Me
        </a>
      </section>

      <h2 className="projects-heading">My Projects</h2>

      <section className="projects-grid">
        {projectData.map((item, index) => (
          <div className="project-card" key={index}>
            <img
              src={item.image}
              alt={`Project ${index}`}
              className="project-image"
            />
            <a href={item.link || "/"} className="project-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PortfolioPage;
