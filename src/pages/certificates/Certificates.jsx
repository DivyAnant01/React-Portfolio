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
    gsap.from(".card", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".grid",
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    const wave = document.getElementById("wave");
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      if (wave) {
        wave.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.15), transparent 40%)`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="certificates-section">
      <h2 className="title">My Achievements & Certificates</h2>
      <div className="grid">
        {certificates.map((cert, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={cert.img} alt={cert.title} />
              </div>
              <div className="card-back">
                <p>{cert.title}</p>
                <button onClick={() => setModalImg(cert.img)}>View</button>
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

      <div className="wave-bg" id="wave"></div>
    </section>
  );
}

export default Certificates;
