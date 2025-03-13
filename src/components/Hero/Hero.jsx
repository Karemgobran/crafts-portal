import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Skilled Craftsmen Near You!</h1>
        <p>Easily connect with professionals for any craft you need!</p>
        <ul>
          <li>Verified Professionals</li>
          <li>Fast & Reliable</li>
          <li>Affordable Prices</li>
        </ul>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for electricians, plumbers, carpenters..."
          />
          <button>Find Now</button>
        </div>
        <p className="sub-text">
          Join 10,000+ customers finding skilled craftsmen daily!
        </p>
      </div>
      <div className="hero-images">
        <img src="./pic/11.jpg" alt="Construction Work" className="main-img" />
        <img src="./pic/signing.jpg" alt="Workshop" className="small-img" />
      </div>
    </section>
  );
};

export default Hero;
