import React, { useState, useRef, useEffect } from "react";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaHandPointer, FaLaptopCode, FaCogs, FaChartLine, FaMobileAlt } from "react-icons/fa";

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

  return (
    <div className="container-main">
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
