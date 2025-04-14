import React from "react";
import "./craftsmen_sign_up.css"; // Import the CSS file for styling
function craftsmen_sign_up() {
  return (
    <>
      <div className="background-image"></div>

      <div className="form-wrapper">
        <div className="form-box">
          <h2>CRAFTS PORTAL</h2>
          <div className="toggle-buttons">
            <a href="customer sign up.html">
              <button className="active">Customer</button>
            </a>
            <button>Craftsman</button>
          </div>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="text" placeholder="Your Profession" required />
            <input type="password" placeholder="Password" required />
            <small>By signing up you agree to our terms and conditions</small>
            <br />
            <small>
              Already a member? <a href="log in.html">Log In</a>
            </small>
            <button className="submit">Sign in</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default craftsmen_sign_up;
