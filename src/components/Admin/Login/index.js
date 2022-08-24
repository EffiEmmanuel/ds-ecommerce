import React from "react";
import "../../UserLogin/index.css";
import AdminLoginForm from "../../../forms/AdminLoginForm";

function AdminLogin() {
  return (
    <div className="main-content login d-flex justify-content-center">
      <div className="login-container-details mt-5">
        <div className="login-container-header">
          <h1>
            Admin Log in<span className="ds-pink">.</span>
          </h1>
          <small>Log in to your account</small>
        </div>

        <div className="login-container-body mt-4">
          <AdminLoginForm />
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
