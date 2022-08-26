import React from "react";
import "./index.css";
import ForgotPasswordForm from "../../forms/ForgotPasswordForm";

function ForgotPassword() {
  return (
    <div className="main-content login d-flex justify-content-center">
      <div className="login-container-details mt-5">
        <div className="login-container-header">
          <h1>
            Forgot password<span className="ds-pink">.</span>
          </h1>
          <small>Request a new password</small>
        </div>

        <div className="login-container-body mt-4">
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
