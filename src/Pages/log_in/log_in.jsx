import React from "react";
import "./log_in.css"; // Import the CSS file for styling
function log_in() {
  return (
    <div>
      <div class="background-image"></div>
      <div class="wrapper">
        <div class="login-container">
          <h2>CRAFTS PORTAL</h2>
          <form>
            <div class="input-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div class="input-group">
              <input type="password" placeholder="Password" required />
              <a href="forget password.html" class="forgot-password">
                Forget password?
              </a>
            </div>
            <button type="submit">Log in</button>
          </form>
          <p class="signup-link">
            Not Yet a Member? <a href="craftsmen sign up.html">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default log_in;
