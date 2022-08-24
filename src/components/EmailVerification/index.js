import React from "react";
import EmailVerificationForm from "../../forms/EmailVerificationForm";
import "./index.css";

function EmailVerification() {
  return (
    <div className="main-content email-verification d-flex flex-column justify-content-center align-items-center">
      <div className="email-verificaton-container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="semibold-text">
            Verify your email<span className="ds-pink">.</span>
          </h2>
          <p>Thanks for registering🎊.</p>
        </div>

        <EmailVerificationForm />
      </div>
    </div>
  );
}

export default EmailVerification;
