import React from "react";
import "./index.css";
import UserSignupForm from "../../forms/UserSignUpForm";

function UserSignUp() {
  return (
    <div className="main-content login d-flex justify-content-center">
      <div className="login-container-details mt-5">
        <div className="login-container-header">
          <h1>
            Sign up<span className="ds-pink">.</span>
          </h1>
          <small>Sign up to create an account</small>
        </div>

        <div className="login-container-body mt-4">
          <UserSignupForm />
          <small className="auth-question d-flex justify-content-center align-items-center">
            Already have an account? &nbsp;
            <a href="/login" className="ds-pink">
              Log in
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}

export default UserSignUp;
