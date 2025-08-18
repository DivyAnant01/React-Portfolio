import React, { useEffect } from "react";
import "./services.css";
import { FaLaptopCode, FaServer, FaDatabase, FaMobileAlt, FaCloud } from "react-icons/fa";

const Services = () => {
  useEffect(() => {
    const filterButtons = document.querySelectorAll(".filter button");
    const serviceCards = document.querySelectorAll(".service-card");

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        serviceCards.forEach((card) => {
          if (filter === "all" || card.dataset.category === filter) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });

    return () => {
      filterButtons.forEach((button) =>
        button.replaceWith(button.cloneNode(true))
      );
    };
  }, []);

  return (
    <main>
      <section className="service-section">
        <h1 className="title">Our Services</h1>

        <div className="filter">
          <button data-filter="all" className="active">All</button>
          <button data-filter="frontend">Frontend</button>
          <button data-filter="backend">Backend</button>
          <button data-filter="database">Database</button>
          <button data-filter="mobile">Mobile</button>
          <button data-filter="cloud">Cloud</button>
        </div>

        <div className="services">
          <div className="service-card frontend" data-category="frontend">
            <FaLaptopCode className="icon" />
            <h2>Frontend Development</h2>
            <p>Create visually stunning, responsive websites using HTML, CSS, JavaScript, and React.</p>
          </div>

          <div className="service-card backend" data-category="backend">
            <FaServer className="icon" />
            <h2>Backend Development</h2>
            <p>Build robust server-side applications with Node.js, Express, Python, and REST APIs.</p>
          </div>

          <div className="service-card database" data-category="database">
            <FaDatabase className="icon" />
            <h2>Database Management</h2>
            <p>Design, manage, and optimize databases using MySQL, MongoDB, and PostgreSQL.</p>
          </div>

          <div className="service-card mobile" data-category="mobile">
            <FaMobileAlt className="icon" />
            <h2>Mobile App Development</h2>
            <p>Develop modern, responsive mobile apps using Flutter and React Native.</p>
          </div>

          <div className="service-card cloud" data-category="cloud">
            <FaCloud className="icon" />
            <h2>Cloud Solutions</h2>
            <p>Deploy scalable and secure cloud applications using AWS, Azure, and Google Cloud.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
