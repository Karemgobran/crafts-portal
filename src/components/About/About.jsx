import React from "react";
import "./About.css";
const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h1 className="title">CRAFTS PORTAL</h1>
        <p className="subtitle">
          The Best Platform to Connect Customers with Skilled Craftsmen!
        </p>
        <p className="description">
          We provide you with an easy and fast way to find skilled craftsmen in
          various fields such as plumbing, electrical work, carpentry, and more.
        </p>
        <p className="highlight">
          Browse services, compare professionals, and book with ease!
        </p>
        <button className="btn">Discover More →</button>
      </div>
      <div className="about-image">
        <img src="./pic/1.jpg" alt="Carpenter" />
      </div>
    </section>
  );
};

export default About;
