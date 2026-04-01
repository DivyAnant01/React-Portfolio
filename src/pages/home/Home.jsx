import React, { useEffect } from "react";
import Lenis from "lenis";
import Lottie from "lottie-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import devAnimation from "../../assets/dev.json";
import resume from "../../assets/divy_nCV.pdf"; // ✅ ADD THIS
import "./Home.css";

const Portfolio = () => {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Particle background
    const canvas = document.getElementById("bg");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2.5,
        dx: Math.random() - 0.3,
        dy: Math.random() - 0.3,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
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
    <main>
      <canvas id="bg"></canvas>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, My name is <div>Divy Anant Varshney</div></h1>
            <p>and I am a passionate</p>
            <h3 className="big-text glow-text">Full Stack Developer</h3>

            <div className="buttons">

              {/* ✅ DOWNLOAD BUTTON FIXED */}
              <a href={resume} download="Divy_Anant_Varshney_Resume.pdf">
                <button className="btn btn1">
                  <span>Download Resume</span>
                </button>
              </a>

              <button
                className="btn outline"
                onClick={() =>
                  window.open("https://github.com/DivyAnant01", "_blank")
                }
              >
                <span>Visit GitHub</span>
              </button>
            </div>
          </div>

          <div className="hero-lottie">
            <Lottie animationData={devAnimation} loop />
          </div>
        </div>
      </section>

      {/* PROJECT CARDS */}
      <section className="cards">
        <h2 className="section-title">Projects & Internships</h2>
        <div className="grid">
          <div className="card">
            <h3>MERN Stack Developer Intern</h3>
            <p>Completed full-stack internship using MongoDB, Express.js, React.js, Node.js.</p>
          </div>
          <div className="card">
            <h3>Wanderlust – Rental Web App</h3>
            <p>Full-stack rental platform with authentication and Cloudinary integration.</p>
          </div>
          <div className="card">
            <h3>Portfolio Website</h3>
            <p>Built using HTML, CSS, JS with GSAP animations.</p>
          </div>
          <div className="card">
            <h3>Android App Development</h3>
            <p>Completed training at IIIT Allahabad.</p>
          </div>
          <div className="card">
            <h3>Java Business App Training</h3>
            <p>Completed IIT Bombay SINE training with 85% score.</p>
          </div>
          <div className="card">
            <h3>AR/VR Development</h3>
            <p>Completed training at iHUB IIT Roorkee.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="social-icons">
          <a href="https://github.com/DivyAnant01" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaXTwitter /></a>
        </div>
        <p>© 2026 Divy Anant | All Rights Reserved</p>
      </footer>
    </main>
  );
};

export default Portfolio;