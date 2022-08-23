import React from "react";
import "./index.css";
import UserLoginForm from "../../forms/UserLoginForm";

function UserLogin() {
  return (
    <div className="main-content login d-flex justify-content-center">
      <div className="login-container-details mt-5">
        <div className="login-container-header">
          <h1>
            Log in<span className="ds-pink">.</span>
          </h1>
          <small>Log in to your account</small>
        </div>

        <div className="login-container-body mt-4">
          <UserLoginForm />

          <small className="auth-question d-flex justify-content-center align-items-center">
            Don't have an account? &nbsp;
            <a href="/signup" className="ds-pink">
              Create an account
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
