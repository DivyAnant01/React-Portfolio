import React, { useState, useRef, useEffect } from "react";
import "./Contact.css";
import { 
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaHandPointer, 
  FaLaptopCode, FaCogs, FaChartLine, FaMobileAlt 
} from "react-icons/fa";

function Contact() {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);

  // Click outside to collapse
  useEffect(() => {
    function handleClickOutside(event) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cardRef]);

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    if (result.success) {
      alert("Message sent successfully!");
      e.target.reset();
      setExpanded(false);
    } else {
      alert("Something went wrong. Please try again!");
    }
  };

  // Particle background effect
  useEffect(() => {
    const canvas = document.getElementById("bg");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generate particles
    let particles = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      });
    }

    // Animate particles
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, index) => {
        // Move particle
        p.x += p.dx;
        p.y += p.dy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fill();

        // Draw lines between close particles
        for (let j = index + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255,255,255,${1 - dist / 100})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
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
    <div className="container-main">
      <canvas id="bg"></canvas>

      <div className="intro-text">
        <h2>Let’s Work Together</h2>
        <p>Tap the glowing card below to get in touch</p>
      </div>

      <div className="help-section">
        <h3>What I Can Help You With</h3>
        <div className="help-items">
          <div className="help-item"><FaLaptopCode /> Portfolio Development</div>
          <div className="help-item"><FaCogs /> Web App Projects</div>
          <div className="help-item"><FaChartLine /> SEO Optimization</div>
          <div className="help-item"><FaMobileAlt /> Responsive Design</div>
        </div>
      </div>

      <div
        ref={cardRef}
        className={`contact-card ${expanded ? "expanded" : "collapsed"} glowing-border`}
        onClick={() => setExpanded(true)}
      >
        {!expanded && (
          <div className="tap-icon">
            <FaHandPointer />
          </div>
        )}
        <div className="card-content">
          <div className="contact-info">
            <h1>Contact Me</h1>
            <p>I’m available for collaborations, freelance, and queries.</p>
            <div className="info-line"><FaEnvelope /> anantvar01@email.com</div>
            <div className="info-line"><FaPhoneAlt /> +91 8630856323</div>
            <div className="info-line"><FaMapMarkerAlt /> Greater Noida, India</div>
          </div>

          <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="3606039b-3f50-4f2f-9cb8-7b35b9cd85c1" />
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <input type="number" name="number" placeholder="Your Phone Number" required />
              <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;