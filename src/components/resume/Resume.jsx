import React from "react";
import { Link } from "react-router-dom";
import "./resume.css";
import { FaPhone, FaGithub, FaLocationDot } from "react-icons/fa6";
import { FiMail, FiDownload } from "react-icons/fi";
import "./resume.css";
const ResumePage = () => {
  const handleDownload = () => {
    window.open("/path-to-your-resume.pdf", "_blank");
  };

  return (
    <div className="resume-container">
      <section className="resume-header">
        <h1>Online Resume</h1>
        <button className="download-button" onClick={handleDownload}>
          <FiDownload /> Download Resume PDF
        </button>
      </section>

      <div className="container">
        <section className="personal-info">
          <div>
            <h2>Ohwojero Godstime</h2>
            <p>Next js & React Native</p>
          </div>
          <div>
            <div className="contact-item">
              <FaPhone className="icon" />
              <span>+2349020266783</span>
            </div>
            <div className="contact-item">
              <FiMail className="icon" />
              <span>Ohwojerogodstime@gmail.com</span>
            </div>
            <div className="contact-item">
              <a
                href="https://github.com/Ohwojero"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </a>
              <span>Github</span>
            </div>
            <div className="contact-item">
              <FaLocationDot className="icon" />
              <span>Asaba Delta State, Nigeria</span>
            </div>
          </div>
        </section>

        <section className="section-box">
          <h3>Professional Summary</h3>
          <p>
            Results-driven Frontend Engineer with over 3 years + of experience
            specializing in building high-performance, scalable, and secure web
            applications. Proficient in React.js, Nextjs, TypeScript, and state
            management solutions like Redux and ContextAPI. Experienced in
            developing intuitive and responsive UI components while ensuring
            optimal performance across various devices. Adept at collaborating
            with cross-functional teams to deliver innovative and reliable
            solutions.
          </p>
        </section>

        <div>
          <section className="skills">
            <h3>Technical Skills</h3>
            <ul>
              <li>
                <strong>Language:</strong> JavaScript (ES6+), TypeScript.
              </li>
              <li>
                <strong>Frontend Technologies:</strong> HTML5, CSS3, SCSS,
                Tailwind CSS, Bootstrap.
              </li>
              <li>
                <strong>React Native:</strong> For Mobile
              </li>
              <li>
                <strong>Frameworks/Libraries:</strong> React.js, Next.js
              </li>
              <li>
                <strong>State Management:</strong> Redux Toolkit, Axios, Context
                API
              </li>
              <li>
                <strong>Testing:</strong> Jest, React Testing Library
              </li>
              <li>
                <strong>Version Control:</strong> Git, GitHub, Git-based
                workflows
              </li>
              <li>
                <strong>API Integration:</strong> RESTful APIs, GraphQL
              </li>
              <li>
                <strong>Performance Optimization:</strong> Lighthouse, Webpack,
                PageSpeed Insights, Sentry
              </li>
              <li>
                <strong>Development Tools:</strong> VS Code, Postman, Firebase,
                Neon
              </li>
            </ul>
          </section>

          <div className="work">
            <section className="experience">
              <h3>Professional Experience</h3>

              <div className="experience-item">
                <h4>Frontend Developer (Remote Contract)</h4>
                <p>Tch Vult | Jan 2025 - March 2025</p>
                <ul>
                  <li>
                    Developed and optimized a company website for the startup,
                    using optimization techniques and React.js
                  </li>
                  <li>
                    Integrated RESTful APIs for real-time data updates using
                    Axios and React Query
                  </li>
                  <li>Built a responsive UI using React.js, and SCSS</li>
                  <li>
                    Implemented secure authentication and multi-role access
                    control
                  </li>
                  <li>
                    Enhanced application state management using Redux Toolkit
                    for scalability
                  </li>
                </ul>
                <a
                  href="https://tchvult.com/"
                  className="live-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>

              <div className="experience">
                <h4>Frontend Developer</h4>
                <p>UPUMI Website (Michigan US) | Feb 2025 – May 2025</p>
                <ul>
                  <li>Empowering lives, and transforming communities</li>
                  <li>
                    The application was dedicated to creating lasting change
                    through education, vocational training, healthcare, and
                    community development
                  </li>
                  <li>
                    Equipped individuals with the skills and resources to build
                    a brighter future
                  </li>
                  <li>Built a responsive UI using React.js and SCSS</li>
                </ul>
                <a
                  href="https://upumi-website.vercel.app/"
                  className="live-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>

              <div className="experience">
                <h4>Volunteer Frontend Developer</h4>
                <p>Quru Lab, HQ Agbor (Onsite) | July 2024 – Dec - 2024</p>
                <ul>
                  <li> Spearheaded the migration of a gym App using React. This was done in efforts, aimed at improving 
                  project workflow efficiency by 80%.</li>
                  <li>
                  Created interactive, landing page and overall workflow of the application
                  </li>
                  <li>
                  Developed reusable React components and optimized rendering performance. 
                  </li>
                  <li>Built a responsive UI using React.js and SCSS</li>
                </ul>
                <a
                  href="https://gym-website-dyhn.vercel.app/"
                  className="live-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>


              <div className="experience">
                <h4>Tch Vult Dashboard </h4>
                <p>Tch Vult | Jan 2025-March 2025</p>
                <ul>
                  <li>  Built a scalable admin dashboard for business activity monitoring</li>
                  <li>
                  Created interactive, landing page and overall workflow of the application
                  </li>
                  <li>
                  Implemented secure user authentication and multi-level form handling
                  </li>
                  <li>Built a responsive UI using React.js and SCSS</li>
                </ul>
                <a
                  href="https://tchvult.com/"
                  className="live-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
