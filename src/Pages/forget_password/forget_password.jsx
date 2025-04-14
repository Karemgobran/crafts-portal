import React from "react";
import "./forget_password.css"; // Import the CSS file for styling
function forget_password() {
  return (
    <div>
      <div className="background-image"></div>
      <div className="verify-form">
        <h2>CRAFTS PORTAL</h2>
        <p>
          We have sent you an SMS with a code
          <br />
          to the number
        </p>
        <h3>+20 15******88</h3>

        <div className="code-inputs">
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
        </div>

        <button className="submit">Verify</button>

        <div className="resend">
          <a href="#">Resend a new code</a>
          <p>Available in 10 seconds</p>
        </div>
      </div>
    </div>
  );
}

export default forget_password;
