import React from 'react';
import './EducationAndSkills.css';

const EducationAndSkills = () => {
  return (
    <div>
      {/* Education Section */}
      <div className="section">
        <h2 className="section-title" >
          Education
        </h2>
        <p className="item">
          HND, Computer Science: <span className="date">2015-2019</span>
        </p>
        <p className="item">
          NIIT software training: <span className="date">Nov 2023 - June 2024</span>
        </p>
      </div>

      {/* Additional Skills */}
      <div className="section">
        <h2 className="section-title" >
          Additional Skills
        </h2>
        <ul className="dot-list">
          <li>Strong problem-solving and debugging skills.</li>
          <li>Proficient in responsive design and mobile-first development.</li>
          <li>Experience with unit testing and performance optimization.</li>
          <li>Enthusiastic about integrating AI and automation into web applications.</li>
        </ul>
      </div>

      {/* Soft Skills */}
      <div className="section">
        <h2 className="section-title">
          Soft Skills
        </h2>
        <ul className="dot-list">
          <li>Strong communication skills.</li>
          <li>Ability to work with cross-functional teams whether remotely or on-site.</li>
          <li>Team player, ability to express thoughts clearly.</li>
          <li>
            Enthusiastic about knowledge acquisition. Reader, leader, listener, goal-oriented problem solver.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EducationAndSkills;
