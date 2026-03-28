import React, { useEffect } from "react";
import "./About.css";
import profileImage from "../../assets/profile-image.jpg";
import gsap from "gsap";

function About() {
  useEffect(() => {
    // GSAP animations
    gsap.from(".about-section", {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
    });
    gsap.from(".profile-img", {
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out",
    });
    gsap.from(".about-right > *", {
      opacity: 0,
      x: -50,
      stagger: 0.2,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });

    // Particle background
    const canvas = document.getElementById("bg-about");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.6)";
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="about-section">
      <canvas id="bg-about"></canvas>

      <div className="about-container">
        {/* Left Section */}
        <div className="about-left">
          <img src={profileImage} alt="Profile" className="profile-img" />
        </div>

        {/* Right Section */}
        <div className="about-right">
          <h2 className="section-title">About Me</h2>
          <p className="intro-text">
            Hi, I'm <span className="highlight">Anant</span>, a{" "}
            <strong>Full-Stack Developer</strong> who loves building
            user-friendly web applications. I enjoy crafting clean UIs,
            optimizing backend logic, and continuously exploring new
            technologies to stay ahead in the fast-moving tech world.
          </p>

          {/* Skills Section */}
          <h3 className="sub-title">Skills & Expertise</h3>
          <div className="skills-grid">
            <span className="skill-badge">React.js</span>
            <span className="skill-badge">Vite</span>
            <span className="skill-badge">GSAP</span>
            <span className="skill-badge">TailwindCSS</span>
            <span className="skill-badge">Node.js</span>
            <span className="skill-badge">Express.js</span>
            <span className="skill-badge">MongoDB</span>
            <span className="skill-badge">REST APIs</span>
            <span className="skill-badge">JWT Auth</span>
            <span className="skill-badge">Git & GitHub</span>
          </div>

          {/* Education Section */}
          <h3 className="sub-title">Education</h3>
          <div className="education-list">
            <div className="education-card">
              <h4>Galgotias University, Greater Noida</h4>
              <p className="degree">Master of Computer Applications (MCA)</p>
              <p className="grade">Score: <span className="highlight">75%</span></p>
              <p className="edu-duration">Aug 2023 - May 2025</p>
            </div>

            <div className="education-card">
              <h4>Institute of Information Management & Technology, Aligarh</h4>
              <p className="degree">Bachelor of Computer Applications (BCA)</p>
              <p className="grade">Score: <span className="highlight">76.7%</span></p>
              <p className="edu-duration">Sept 2020 - April 2023</p>
            </div>
          </div>

          {/* Hobbies Section */}
          <h3 className="sub-title">Hobbies & Interests</h3>
          <p className="intro-text">
            Outside of coding, I love exploring tech innovations, reading about
            AI/ML, and creating content to share knowledge with other aspiring
            developers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;