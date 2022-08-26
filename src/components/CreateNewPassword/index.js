import React from "react";
import CreateNewPasswordForm from "../../forms/CreateNewPasswordForm";
import "./index.css";

function CreateNewPassword() {
  return (
    <div className="main-content login d-flex justify-content-center">
      <div className="login-container-details mt-5">
        <div className="login-container-header">
          <h1>
            Create new password<span className="ds-pink">.</span>
          </h1>
          <small>Change password</small>
        </div>

        <div className="login-container-body mt-4">
          <CreateNewPasswordForm />
        </div>
      </div>
    </div>
  );
}

export default CreateNewPassword;
