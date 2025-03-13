import React from "react";
import "./Categories.css";
const Categories = () => {
  const services = [
    { img: "./pic/carpenter.jpg", title: "Joiner" },
    { img: "./pic/painting.jpg", title: "Painting" },
    { img: "./pic/electrical.jpg", title: "Electrical" },
    { img: "./pic/plumber.jpg", title: "Plumber" },
  ];

  return (
    <section className="categories">
      <div className="services-section">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} />
            <p>{service.title}</p>
          </div>
        ))}
      </div>
      <button className="view-more-btn">View More →</button>
      <hr className="divider" />
    </section>
  );
};

export default Categories;
