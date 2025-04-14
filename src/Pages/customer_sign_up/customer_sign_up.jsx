import React from "react";
import "./craftsmen_sign_up.css"; // Import the CSS file for styling
function customer_sign_up() {
  return (
    <>
      <div className="background-image"></div>

      <div className="form-wrapper">
        <div className="form-box">
          <h2>CRAFTS PORTAL</h2>
          <div className="toggle-buttons">
            <button className="active">Customer</button>
            <a href="craftsmen sign up.html">
              <button>Craftsman</button>
            </a>
          </div>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="password" placeholder="Password" required />
            <small>By signing up you agree to our terms and conditions</small>
            <br />
            <small>
              Already a member? <a href="log in.html">Log In</a>
            </small>
            <a href="verfication code.html">
              <button className="submit">Sign in</button>
            </a>
          </form>
        </div>
      </div>
    </>
  );
}

export default customer_sign_up;
