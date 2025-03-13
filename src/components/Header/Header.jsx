import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">CRAFTS PORTAL</div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="auth-buttons">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
