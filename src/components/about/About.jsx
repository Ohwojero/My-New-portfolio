import React from "react";
import { stackData } from "./data";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <div className="about-content">
      <div className="intro-section">
        <h2>Hi, I'm</h2>
        <h1 className="name">Ohwojero Godstime</h1>
        <p className="roles">Web developer | Mobile Engineer</p>
        <p className="intro-text">
          I am a web developer specialized in building scalable and efficient
          platforms for businesses to thrive on the internet. Explore
        </p>
        <p className="links">
          My{" "}
          <Link to="/resume" className="link">
            Resume
          </Link>{" "}
          and{" "}
          <Link to="/portfolio" className="link">
            Portfolio
          </Link>
        </p>
      </div>

      <div className="work-experience">
        <div>
          <h2 className="number">3+</h2>
          <p className="text-title">Years experience</p>
        </div>
        <div>
          <h2 className="number">8+</h2>
          <p className="text-title">Completed projects</p>
        </div>
      </div>

      <div className="what-i-do-section">
        <div className="line-contact">
          <div className="line"></div>
          <h2>What I DO</h2>
        </div>
        <p className="work-details">
          As a web developer, I specialize in building scalable and maintainable
          web applications with modern user interfaces and functionalities. I
          build applications that stand the test of time by following universal
          industry standards. I build fullstack applications that are secure,
          fast, and robust to handle complex business logic allowing businesses
          to carry out their activities efficiently.
        </p>
      </div>

      <div className="stack-section">
        {stackData.map((item, index) => (
          <div
            data-aos="zoom-in"
            data-aos-once="true"
            className="stack-wrapper"
            key={index}
          >
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p className="wrapper-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
