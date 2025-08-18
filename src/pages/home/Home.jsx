import React, { useEffect } from "react";
import Typed from "typed.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import bg1 from "../../assets/bg1.png";
import gsap from "gsap";
import "./Home.css";

const Portfolio = () => {
  useEffect(() => {
    // Typed.js Animation
    const typed = new Typed("#element", {
      strings: ["Web Developer", "Graphic Designer", "Web Designer", "Video Editor", "Logo Designer."],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    // GSAP Animations for Footer
    gsap.from(".footer-content h2", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
    gsap.from(".knowledge p", { duration: 1, y: 30, opacity: 0, stagger: 0.3, ease: "power2.out" });
    gsap.from(".social-icons a", { duration: 1, scale: 0, opacity: 0, stagger: 0.2, ease: "back.out(1.7)" });

    // Set current year dynamically
    document.getElementById("currentYear").textContent = new Date().getFullYear();

    return () => typed.destroy();
  }, []);

  const downloadResume = () => {
    const fileId = "1rWp-DSjYF3Q6BWRumIgL5X9TcWs4pc0V";
    const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.download = "resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const openGithub = () => {
    window.open("https://github.com/DivyAnant01", "_blank");
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="firstsection">
        <div className="leftsection">
          Hi, My name is <span className="purple">Divy Anant</span>
          <div>and I am a passionate</div>
          <span id="element"></span>
          <div className="buttons">
            <button onClick={downloadResume} className="btn">Download Resume</button>
            <button onClick={openGithub} className="btn">Visit GitHub</button>
          </div>
        </div>
        <div className="rightsection">
          <img src={bg1} alt="Developer" />
        </div>
      </section>

      <hr />

      {/* Projects & Internships Section */}
      <section className="secondsection">
        <span className="text-grey">What I have done so far</span>
        <h1>Projects & Internships</h1>
        <div className="box">
          <div className="vertical">
            <div className="image-top"><i className="fas fa-laptop-code"></i></div>
            <div className="vertical-title">MERN Stack Developer Intern (May–June 2025)</div>
            <div className="vertical-desc">Completed full-stack internship at Codec Technologies. Built responsive web apps using MongoDB, Express.js, React.js, Node.js. Certified by AICTE.</div>
          </div>
          <div className="vertical">
            <div className="image-top"><i className="fas fa-home"></i></div>
            <div className="vertical-title">Wanderlust – Rental Web App (2025)</div>
            <div className="vertical-desc">Full-stack property rental platform with MERN and Cloudinary. Live: <a href="https://wanderlust-visit.onrender.com" target="_blank" rel="noreferrer" className="vertical-link">Visit</a>.</div>
          </div>
          <div className="vertical">
            <div className="image-top"><i className="fas fa-globe"></i></div>
            <div className="vertical-title">Portfolio Website (2025)</div>
            <div className="vertical-desc">Built with HTML, CSS, JS. GSAP animations for smooth and engaging UI.</div>
          </div>
          <div className="vertical">
            <div className="image-top"><i className="fas fa-mobile-alt"></i></div>
            <div className="vertical-title">Android App Dev (Winter 2024)</div>
            <div className="vertical-desc">Completed training with IIIT Allahabad. Gained practical mobile UI/UX experience.</div>
          </div>
          <div className="vertical">
            <div className="image-top"><i className="fas fa-briefcase"></i></div>
            <div className="vertical-title">Java Business App Training (June 2025)</div>
            <div className="vertical-desc">Scored 85% in IIT Bombay SINE training. Built Java-based business apps.</div>
          </div>
          <div className="vertical">
            <div className="image-top"><i className="fas fa-vr-cardboard"></i></div>
            <div className="vertical-title">AR/VR Dev Training (2023)</div>
            <div className="vertical-desc">Trained at iHUB IIT Roorkee. Developed immersive AR/VR applications.</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h2>Did You Know?</h2>
          <div className="knowledge">
            <p>Java is used by 3 billion devices worldwide!</p>
            <p>Flutter enables fast UI development across multiple platforms.</p>
            <p>GSAP optimizes animations for performance and engagement.</p>
          </div>
          <div className="social-icons">
            <FaGithub className="social-icon" />
            <FaLinkedin className="social-icon" />
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; <span id="currentYear"></span> Divy Anant. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Portfolio;
