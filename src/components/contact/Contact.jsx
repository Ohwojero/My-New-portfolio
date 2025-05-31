import React, { useState } from "react";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaMobileAlt,
  FaPhone,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import "./contact.css";

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name: ${fullname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    );
  };

  return (
    <div className="contact-wrapper">
      <h1 className="heading">Contact Me</h1>
      <p className="description">
        Are you ready to build your next big project? Do you need more hands and
        brains on your team? Are you looking for a Web developer tutor? You can
        contact me with the information below, or connect with me on my socials.
      </p>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/ohwojero-godstime-b35208176"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={34} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100087432254461"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare size={34} />
        </a>
        <a
          href="https://x.com/OhwojeroGT?t=mu3ayD6Jle9cLMj_KlIy-w&s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitterSquare size={34} />
        </a>
      </div>

      <div className="line-contact">
        <div className="line"></div>
        <h2>Contact Details</h2>
      </div>
      <p>
        Feel free to contact through any of the media below: I typically respond
        in 2 minutes.
      </p>

      <div className="info">
        <div className="info-block">
          <div className="line"></div>
          <FaMobileAlt  size={30}/>
          <div className="contact-line">
            <h3>Phone</h3>
            <p>+2349020266783</p>
          </div>
        </div>

        <div className="info-block">
          <div className="line"></div>
          <FiMail size={34}/>
          <div className="contact-line">
            <h3>Email</h3>
            <p>Ohwojerogodstime@gmail.com</p>
          </div>
        </div>

        <div className="info-block">
          <div className="line"></div>
          <HiLocationMarker size={34}/>
          <div className="contact-line">
            <h3>Location</h3>
            <p>Asaba, Nigeria</p>
          </div>
        </div>
      </div>

      <div className="section">
      <div className="line-contact">
        <div className="line"></div>
        <h2>What I Do</h2>
      </div>
        <p>
          Are you looking for a seasoned developer to work on your next project?
          Do you need more hands on your team to bring your ideas to life? Get
          in touch for exceptional web development or mobile development
          projects.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
