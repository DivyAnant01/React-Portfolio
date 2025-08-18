import React, { useEffect } from "react";
import "./About.css";
import profileImage from "../../assets/profile-image.jpg";
import gsap from "gsap";

function About() {
  useEffect(() => {
    gsap.from(".about-section", {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
    });
    gsap.from(".about-left img", {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out",
    });
    gsap.from(".about-right h2, .about-right p, .about-right ul li", {
      opacity: 0,
      x: -50,
      stagger: 0.2,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-left">
          <img src={profileImage} alt="Profile" className="profile-img" />
        </div>
        <div className="about-right">
          <h2>About Me</h2>
          <p>
            Hi, I'm <span className="highlight">Anant</span>, a passionate{" "}
            <strong>Full-Stack Developer</strong> with experience in building
            modern web applications. I enjoy crafting clean UI, writing
            efficient backend code, and learning new technologies.
          </p>
          <p>
            My journey in coding started with curiosity, and over time it turned
            into my profession and passion. I believe in building projects that
            not only solve problems but also provide an engaging experience for
            users.
          </p>

          <h3>Skills & Expertise</h3>
          <ul>
            <li>Frontend: React.js, Vite, GSAP, TailwindCSS</li>
            <li>Backend: Node.js, Express.js, MongoDB</li>
            <li>Other: Git, GitHub, REST APIs, JWT Auth</li>
          </ul>

          <h3>Education</h3>
          <p>
            Bachelor’s in Computer Applications (BCA) — focusing on software
            development and modern web technologies.
          </p>

          <h3>Hobbies & Interests</h3>
          <p>
            When I'm not coding, I love exploring tech trends, reading about
            AI/ML, and sharing knowledge through tech content creation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
