import React, { useEffect, useState } from "react";
import "./Certificates.css";
import cert1 from "../../assets/certs/cert1.JPG";
import cert2 from "../../assets/certs/cert2.JPG";
import cert3 from "../../assets/certs/cert3.JPG";
import cert4 from "../../assets/certs/cert4.JPG";
import cert5 from "../../assets/certs/cert5.JPG";
import cert6 from "../../assets/certs/cert6.JPG";
import cert7 from "../../assets/certs/cert7.JPG";
import cert8 from "../../assets/certs/cert8.JPG";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Certificates() {
  const [modalImg, setModalImg] = useState(null);

  const certificates = [
    { img: cert1, title: "Android Application Development" },
    { img: cert2, title: "AR/VR Development" },
    { img: cert3, title: "Paloalto Internship" },
    { img: cert4, title: "Java Business" },
    { img: cert5, title: "1 Month Internship Completion Certificate" },
    { img: cert6, title: "Offer Letter" },
    { img: cert7, title: "Offer Letter" },
    { img: cert8, title: "Java Programmers" },
  ];

  useEffect(() => {
    // GSAP entrance animation
    gsap.from(".card", {
      opacity: 0,
      y: 50,
      scale: 0.8,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cards-container",
        start: "top 80%",
      },
    });

    // 3D hover effect
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const inner = card.querySelector(".card-inner");
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;
        inner.style.transform = `rotateY(${rotateY}deg) rotateX(${-rotateX}deg) scale(1.05)`;
      });
      card.addEventListener("mouseleave", () => {
        inner.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
      });
    });

    // Wave background mouse effect
    const wave = document.getElementById("wave");
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      if (wave) {
        wave.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.08), transparent 60%)`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    // Particle canvas
    const canvas = document.getElementById("particle-bg");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        dx: Math.random() - 0.3,
        dy: Math.random() - 0.3,
      });
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.fill();
      });

      requestAnimationFrame(animateParticles);
    }

    animateParticles();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="certificates-section">
      <h2 className="title">My Achievements & Certificates</h2>

      {/* Particle Canvas */}
      <canvas id="particle-bg" className="particle-canvas"></canvas>

      <div className="cards-container">
        {certificates.map((cert, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={cert.img} alt={cert.title} />
                <div className="overlay">
                  <button onClick={() => setModalImg(cert.img)}>View</button>
                </div>
              </div>
              <div className="card-back">
                <p>{cert.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImg && (
        <div className="modal" onClick={() => setModalImg(null)}>
          <span className="close">&times;</span>
          <img src={modalImg} alt="Full Certificate" />
        </div>
      )}

      {/* Wave background */}
      {/* <div className="wave-bg" id="wave"></div> */}
    </section>
  );
}

export default Certificates;